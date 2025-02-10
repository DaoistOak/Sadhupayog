from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

from marshmallow import ValidationError

from app.api.routes import buyers, cold_stores, sellers
from app.db.base import Base
from app.db.session import engine, get_db
from app.schemas import BuyerCreateSchema, SellerCreateSchema, ColdStoreCreateSchema, UserLoginSchema  # Updated import

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Buyer-Cold Store-Seller Platform API")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# Register API routers
app.include_router(sellers.router)
app.include_router(buyers.router)
app.include_router(cold_stores.router)

router = APIRouter()

@router.post("/register/{user_type}")
async def register_user(request: Request, user_type: str):
    data = await request.json()
    if user_type == "buyer":
        schema = BuyerCreateSchema
    elif user_type == "seller":
        schema = SellerCreateSchema
    elif user_type == "cold_store":
        schema = ColdStoreCreateSchema
    else:
        raise HTTPException(status_code=400, detail="Invalid user type specified")

    try:
        validated_data = schema.load(data)
    except ValidationError as err:
        raise HTTPException(status_code=400, detail=err.messages)
    
    return {"message": f"{user_type.capitalize()} registered successfully"}

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Buyer-Cold Store-Seller Platform API"}

@app.post("/cold_stores/")
async def create_cold_store(cold_store: ColdStoreCreateSchema):
    # Implementation to create a cold store
    return {"message": "Cold store created"}

@app.get("/cold_stores/")
async def read_cold_stores():
    # Implementation to read cold stores
    return [{"name": "Test Store", "location": "Test Location", "capacity": 1000}]
