from sqlalchemy import Column, Integer, String, Float, Text
from app.db.base import Base

class ColdStore(Base):
    __tablename__ = "cold_stores"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(String)
    capacity = Column(Float)  # in cubic meters or square feet
    description = Column(Text, nullable=True)
    contact_info = Column(String) 