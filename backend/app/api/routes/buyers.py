from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from app.schemas import BuyerLoginSchema,UserLoginSchema,SellerLoginSchema, GoodDisplaySchema
from app.models.buyer import Buyer
from app.db.session import get_db
from app.core.security import verify_password, get_password_hash
from app.db.models import Seller, SellerGoods
from typing import List

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
@router.post("/login")
def login(user_login: UserLoginSchema, db: Session = Depends(get_db)):
    user = db.query(Buyer).filter(Buyer.username == user_login.username).first()
    if not user:
        user = db.query(Seller).filter(Seller.username == user_login.username).first()
    if not user or not verify_password(user_login.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid username or password")
    return {"message": "Login successful"}

@router.get("/goods", response_model=List[GoodDisplaySchema])
def get_all_goods(db: Session = Depends(get_db)):
    goods = db.query(SellerGoods).all()
    if not goods:
        raise HTTPException(status_code=404, detail="No goods found")
    return goods
