from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Buyer(Base):
    __tablename__ = "buyers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    contact = Column(String) 