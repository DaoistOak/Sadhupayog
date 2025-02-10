from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from app.schemas import BuyerCreateSchema, BuyerLoginSchema
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
def login(buyer_login: BuyerLoginSchema, db: Session = Depends(get_db)):
    buyer = db.query(Buyer).filter(Buyer.username == buyer_login.username).first()
    if not buyer or not verify_password(buyer_login.password, buyer.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid username or password")
    return {"message": "Login successful"}

@router.post("/register")
def register(buyer_create: BuyerCreateSchema, db: Session = Depends(get_db)):
    hashed_password = get_password_hash(buyer_create.password)
    new_buyer = Buyer(
        username=buyer_create.username, 
        hashed_password=hashed_password,
        business_name=buyer_create.business_name,
        email=buyer_create.email
    )
    db.add(new_buyer)
    db.commit()
    db.refresh(new_buyer)
    return {"message": "Buyer registered successfully"}

@router.get("/sellers")
def list_sellers(db: Session = Depends(get_db)):
    sellers = db.query(Seller).all()
    result = []
    for seller in sellers:
        seller_info = {
            "seller_id": seller.id,
            "seller_name": seller.name,
            "goods": [{"name": good.goods_name, "weight_kg": good.weight_kg} for good in seller.goods]
        }
        result.append(seller_info)
    return result 