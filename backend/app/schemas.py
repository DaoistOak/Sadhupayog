from pydantic import BaseModel
from typing import Optional

class BuyerCreateSchema(BaseModel):
    username: str
    password: str
    organization_name: str
    email: str

class BuyerLoginSchema(BaseModel):
    username: str
    password: str

class SellerCreateSchema(BaseModel):
    username: str
    password: str
    organization_name: str
    email: str
    location: str

class SellerLoginSchema(BaseModel):
    username: str
    password: str

class ColdStoreCreateSchema(BaseModel):
    name: str
    location: str
    capacity: float
    description: Optional[str] = None

class ColdStoreLoginSchema(BaseModel):
    username: str
    password: str

class UserLoginSchema(BaseModel):
    username: str
    password: str

class SellerGoodsCreateSchema(BaseModel):
    goods_name: str
    weight_kg: float

class GoodDisplaySchema(BaseModel):
    goods_name: str
    weight_kg: float

    class Config:
        orm_mode = True
