from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from .base import Base  # Import Base from base.py

class Seller(Base):
    __tablename__ = "sellers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    goods = relationship("SellerGoods", back_populates="seller")

class SellerGoods(Base):
    __tablename__ = "seller_goods"

    id = Column(Integer, primary_key=True, index=True)
    seller_id = Column(Integer, ForeignKey('sellers.id'))
    goods_name = Column(String, index=True)
    weight_kg = Column(Float)

    seller = relationship("Seller", back_populates="goods") 