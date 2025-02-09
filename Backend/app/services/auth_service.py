from app.api.schemas import UserCreate, UserLogin
from jose import jwt

SECRET_KEY = "your-secret-key"  # Move to environment variables in production
ALGORITHM = "HS256"

def register_user(user: UserCreate):
    # Add user registration logic here
    return user

def authenticate_user(user: UserLogin):
    # Add authentication logic here
    # For now, return a simple JWT token
    token = jwt.encode({"sub": user.email}, SECRET_KEY, algorithm=ALGORITHM)
    return token 