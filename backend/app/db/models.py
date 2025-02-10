from sqlalchemy import Column, Integer, String, ForeignKey, Float, Table
from app.db.base import Base
from app.utils import get_password_hash
from sqlalchemy.orm import relationship
from app.models.cold_store import ColdStore
from app.models.seller import Seller
from app.models.seller_goods import SellerGoods

# Check if the table 'sellers' already exists in the metadata
if 'sellers' not in Base.metadata.tables:
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
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    seller_id = Column(Integer, ForeignKey('sellers.id'))
    goods_name = Column(String, index=True)
    weight_kg = Column(Float)
