from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class Seller(Base):
    __tablename__ = "sellers"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    organization_name = Column(String)
    email = Column(String, unique=True)
    location = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    company_name = Column(String)
    contact_number = Column(String) 