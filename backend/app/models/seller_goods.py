from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.db.base import Base

class SellerGoods(Base):
    __tablename__ = "seller_goods"

    id = Column(Integer, primary_key=True, index=True)
    seller_id = Column(Integer, ForeignKey('sellers.id'))
    goods_name = Column(String, index=True)
    weight_kg = Column(Float)
    seller = relationship("app.models.seller.Seller", back_populates="goods")
