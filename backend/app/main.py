from fastapi import FastAPI, APIRouter, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from marshmallow import ValidationError
from sqlalchemy.exc import IntegrityError
from sqlalchemy import inspect

from app.api.routes import buyers, cold_stores, sellers
from app.db.base import Base
from app.db.session import engine, get_db
from app.schemas import BuyerCreateSchema, SellerCreateSchema, ColdStoreCreateSchema, UserLoginSchema  # Updated import
from app.models.cold_store import ColdStore
from app.models.buyer import Buyer
from app.models.seller import Seller
from app.utils import get_password_hash

# Explicitly clear SQLAlchemy registry at startup
insp = inspect(engine)
if insp.has_table("seller_goods"): # Check if table exists before clearing metadata
    Base.metadata.clear()
    print("SQLAlchemy registry cleared.") # Confirmation message

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
    db = get_db()
    try:
        db_session = next(db)
    except Exception as e:
        print(f"Database Session Error: {e}")
        raise HTTPException(status_code=500, detail="Database connection error") from e

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
        validated_data = schema.parse_obj(data)
        print("Validated Data:", validated_data)
    except ValidationError as err:
        raise HTTPException(status_code=400, detail=err.errors())

    try:
        if user_type == "buyer":
            hashed_password = get_password_hash(validated_data.password)
            new_buyer = Buyer(
                username=validated_data.username,
                hashed_password=hashed_password,
                organization_name=validated_data.organization_name,
                email=validated_data.email,
            )
            db_session.add(new_buyer)
            db_session.commit()
            db_session.refresh(new_buyer)
            print("Buyer data saved to database")
        elif user_type == "seller":
            hashed_password = get_password_hash(validated_data.password)
            new_seller = Seller(
                username=validated_data.username,
                hashed_password=hashed_password,
                organization_name=validated_data.organization_name,
                email=validated_data.email,
                location=validated_data.location
            )
            db_session.add(new_seller)
            db_session.commit()
            db_session.refresh(new_seller)
            print("Seller data saved to database")
        elif user_type == "cold_store":
            hashed_password = get_password_hash(validated_data.password)
            new_cold_store = ColdStore(
                username=validated_data.username,
                hashed_password=hashed_password,
                name=validated_data.name,
                location=validated_data.location,
                capacity=validated_data.capacity,
                description=validated_data.description
            )
            db_session.add(new_cold_store)
            db_session.commit()
            db_session.refresh(new_cold_store)
            print("Cold store data saved to database")
        else:
            raise HTTPException(status_code=400, detail="Invalid user type specified")

        return {"message": f"{user_type.capitalize()} registered successfully"}
    except IntegrityError as e:
        db_session.rollback()
        print(f"Database Integrity Error: {e}")
        raise HTTPException(status_code=400, detail="Username or email already exists")
    except Exception as e:
        db_session.rollback()
        print(f"Database Error: {e}")
        raise HTTPException(status_code=500, detail="Database error during registration") from e
    finally:
        db_session.close()

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Buyer-Cold Store-Seller Platform API"}

@app.post("/cold_stores")
async def create_cold_store(cold_store: ColdStoreCreateSchema, db: Session = Depends(get_db)):
    # Implementation to create a cold store
    return {"message": "Cold store created"}
@app.get("/cold_stores")
async def read_cold_stores(db: Session = Depends(get_db)):
    # Query all cold store records from the PostgreSQL database
    cold_stores = db.query(ColdStore).all()
    # Convert cold store objects to a serializable list of dicts
    return [{"name": cs.name, "location": cs.location, "capacity": cs.capacity} for cs in cold_stores]
