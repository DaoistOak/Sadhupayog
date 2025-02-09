from sqlalchemy import Column, Integer, String, Float
from app.db.base import Base

class ColdStore(Base):
    __tablename__ = "cold_stores"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    location = Column(String)
    capacity = Column(Float) 