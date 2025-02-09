from pydantic import BaseModel, EmailStr

class SellerBase(BaseModel):
    username: str
    email: EmailStr

class SellerCreate(SellerBase):
    password: str

class SellerResponse(SellerBase):
    id: int

    class Config:
        from_attributes = True 