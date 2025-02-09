from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.dependencies import get_db
from app.models.cold_store import ColdStore

router = APIRouter(prefix="/cold-stores", tags=["cold_stores"])

@router.get("/")
def get_cold_stores(db: Session = Depends(get_db)):
    return db.query(ColdStore).all() 