from pydantic import BaseModel, EmailStr, Field

class BuyerCreateSchema(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)
    business_name: str = Field(..., min_length=1)
    email: EmailStr

class BuyerLoginSchema(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)

class SellerCreateSchema(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)
    organization_name: str = Field(..., min_length=1)
    email: EmailStr
    location: str = Field(..., min_length=1)

class SellerLoginSchema(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)

class ColdStoreCreateSchema(BaseModel):
    location: str = Field(..., min_length=1)
    capacity: float
    active_time: str = Field(..., min_length=1)

class ColdStoreLoginSchema(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)

class UserLoginSchema(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)

class SellerGoodsCreateSchema(BaseModel):
    goods_name: str = Field(..., min_length=1, description="Name of the good")
    weight_kg: float = Field(..., gt=0, description="Weight of the good in kilograms")
