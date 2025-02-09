
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import auth, buyers, sellers, cold_stores
from app.db import models
from app.db.session import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:2998"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(auth.router)
app.include_router(buyers.router)
app.include_router(sellers.router)
app.include_router(cold_stores.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Buyer-Cold Store-Seller Platform"} 