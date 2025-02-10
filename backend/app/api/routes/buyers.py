from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from app.schemas import BuyerCreateSchema, BuyerLoginSchema
from app.models.buyer import Buyer
from app.db.session import get_db
from app.core.security import verify_password, get_password_hash
from app.db.models import Seller, SellerGoods
from app.schemas import UserLoginSchema
from typing import List

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
@router.post("/login")
def login(buyer_login: BuyerLoginSchema, db: Session = Depends(get_db)):
    buyer = db.query(Buyer).filter(Buyer.username == buyer_login.username).first()
    if not buyer or buyer.hashed_password != buyer_login.password:
        raise HTTPException(status_code=400, detail="Invalid username or password")
    return {"message": "Login successful"}
