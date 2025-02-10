from sqlalchemy import Column, Integer, String, ForeignKey, Float
from app.db.base import Base
from app.utils import get_password_hash
from sqlalchemy.orm import relationship
from app.models.cold_store import ColdStore

class Seller(Base):
    __tablename__ = "sellers"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    organization_name = Column(String)
    email = Column(String, unique=True)
    location = Column(String)
    goods = relationship("SellerGoods", back_populates="seller")

    def set_password(self, password):
        self.hashed_password = get_password_hash(password)

class SellerGoods(Base):
    __tablename__ = "seller_goods"

    id = Column(Integer, primary_key=True, index=True)
    seller_id = Column(Integer, ForeignKey('sellers.id'))
    goods_name = Column(String, index=True)
    weight_kg = Column(Float)

    seller = relationship("Seller", back_populates="goods")
