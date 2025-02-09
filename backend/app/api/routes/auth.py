from fastapi import APIRouter, Depends, HTTPException
from app.api.schemas import UserCreate, UserLogin
from app.services.auth_service import register_user, authenticate_user

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=UserCreate)
def register(user: UserCreate):
    return register_user(user)

@router.post("/login")
def login(user: UserLogin):
    token = authenticate_user(user)
    if not token:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"access_token": token, "token_type": "bearer"}
