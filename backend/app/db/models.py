from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # e.g., buyer, seller, cold_store

    buyer = relationship("Buyer", back_populates="user", uselist=False)
    seller = relationship("Seller", back_populates="user", uselist=False)
    cold_store = relationship("ColdStore", back_populates="user", uselist=False)

class Buyer(Base):
    __tablename__ = "buyers"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    inventory = Column(String)  # JSON or serialized data

    user = relationship("User", back_populates="buyer")

class Seller(Base):
    __tablename__ = "sellers"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    products = Column(String)  # JSON or serialized data

    user = relationship("User", back_populates="seller")

class ColdStore(Base):
    __tablename__ = "cold_stores"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    mobile_verified = Column(Boolean, default=False)

    user = relationship("User", back_populates="cold_store") 