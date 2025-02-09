from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.dependencies import get_db
from app.models.buyer import Buyer

router = APIRouter(prefix="/buyers", tags=["buyers"])

@router.get("/")
def get_buyers(db: Session = Depends(get_db)):
    return db.query(Buyer).all() 