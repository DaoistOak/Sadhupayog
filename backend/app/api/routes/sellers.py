from sqlalchemy import Column, Integer, String
from app.db.base import Base
from fastapi import APIRouter, HTTPException, Depends, status
from typing import List
from sqlalchemy.orm import Session
from app.models.seller import Seller
from app.db.session import get_db
from app.api.schemas.seller import SellerCreate, SellerResponse

class Seller(Base):
    __tablename__ = "sellers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    contact = Column(String)

router = APIRouter(
    prefix="/sellers",
    tags=["Sellers"]
)

@router.get("/", response_model=List[SellerResponse])
def read_sellers(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """
    Retrieve a list of sellers.

    - **skip**: Number of records to skip for pagination.
    - **limit**: Maximum number of records to return.
    """
    sellers = db.query(Seller).offset(skip).limit(limit).all()
    return sellers

@router.post("/", response_model=SellerResponse, status_code=status.HTTP_201_CREATED)
def create_seller(seller: SellerCreate, db: Session = Depends(get_db)):
    """
    Create a new seller.

    - **seller**: Seller information to be created.
    """
    db_seller = db.query(Seller).filter(Seller.email == seller.email).first()
    if db_seller:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_seller = Seller(
        username=seller.username,
        email=seller.email,
        hashed_password=seller.hashed_password  # Ensure password is hashed before passing
    )
    db.add(new_seller)
    db.commit()
    db.refresh(new_seller)
    return new_seller

@router.get("/{seller_id}", response_model=SellerResponse)
def read_seller(seller_id: int, db: Session = Depends(get_db)):
    """
    Retrieve a seller by their ID.

    - **seller_id**: ID of the seller to retrieve.
    """
    seller = db.query(Seller).filter(Seller.id == seller_id).first()
    if not seller:
        raise HTTPException(status_code=404, detail="Seller not found")
    return seller

@router.put("/{seller_id}", response_model=SellerResponse)
def update_seller(seller_id: int, seller_update: SellerCreate, db: Session = Depends(get_db)):
    """
    Update an existing seller's information.

    - **seller_id**: ID of the seller to update.
    - **seller_update**: Updated seller information.
    """
    seller = db.query(Seller).filter(Seller.id == seller_id).first()
    if not seller:
        raise HTTPException(status_code=404, detail="Seller not found")

    seller.username = seller_update.username
    seller.email = seller_update.email
    seller.hashed_password = seller_update.hashed_password  # Ensure password is hashed

    db.commit()
    db.refresh(seller)
    return seller

@router.delete("/{seller_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_seller(seller_id: int, db: Session = Depends(get_db)):
    """
    Delete a seller by their ID.

    - **seller_id**: ID of the seller to delete.
    """
    seller = db.query(Seller).filter(Seller.id == seller_id).first()
    if not seller:
        raise HTTPException(status_code=404, detail="Seller not found")

    db.delete(seller)
    db.commit()
    return

# Add more endpoints as needed 