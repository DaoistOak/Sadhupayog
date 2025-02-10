from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from app.schemas import BuyerCreateSchema, BuyerLoginSchema, SellerGoodsCreateSchema, SellerLoginSchema
from app.models.buyer import Buyer
from app.db.session import get_db
from app.core.security import verify_password, get_password_hash
from app.db.models import Seller, SellerGoods
from typing import List
router = APIRouter()

@router.post("/sellers/{seller_id}/goods")
def add_goods(seller_id: int, goods: List[SellerGoodsCreateSchema], db: Session = Depends(get_db)):
    seller = db.query(Seller).filter(Seller.id == seller_id).first()
    if not seller:
        raise HTTPException(status_code=404, detail="Seller not found")

    for good_data in goods:
        new_good = SellerGoods(
            goods_name=good_data.goods_name,
            weight_kg=good_data.weight_kg,
            seller_id=seller_id
        )
        db.add(new_good)
    db.commit()
    return {"message": "Goods added successfully"}

def login(seller_login: SellerLoginSchema, db: Session = Depends(get_db)):
    seller = db.query(Seller).filter(Seller.username == seller_login.username).first()
    if not seller or seller.hashed_password != seller_login.password:
        raise HTTPException(status_code=400, detail="Invalid username or password")
    return {"message": "Login successful"}
