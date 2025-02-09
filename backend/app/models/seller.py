from sqlalchemy import Column, Integer, String
from app.db.base import Base

class Seller(Base):
    __tablename__ = "sellers"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    def __repr__(self):
        return f"<Seller(id={self.id}, username='{self.username}', email='{self.email}')>"