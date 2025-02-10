from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.cold_store import ColdStore

router = APIRouter(prefix="/cold-stores", tags=["Cold Stores"])

@router.get("/")
def get_cold_stores(db: Session = Depends(get_db)):
    """Get all cold stores"""
    return db.query(ColdStore).all()

@router.get("/{cold_store_id}")
def get_cold_store(cold_store_id: int, db: Session = Depends(get_db)):
    """Get a specific cold store by ID"""
    return db.query(ColdStore).filter(ColdStore.id == cold_store_id).first()