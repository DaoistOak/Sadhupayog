from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import auth, buyers, sellers, cold_stores
from app.db.base import Base
from app.db.session import engine
from app.db.models import User, Buyer, Seller, ColdStore

# Create all tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Buyer-Cold Store-Seller Platform API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(auth, prefix="/auth", tags=["Authentication"])
app.include_router(buyers, prefix="/buyers", tags=["Buyers"])
app.include_router(sellers, prefix="/sellers", tags=["Sellers"])
app.include_router(cold_stores, prefix="/cold-stores", tags=["Cold Stores"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Buyer-Cold Store-Seller Platform API"} 