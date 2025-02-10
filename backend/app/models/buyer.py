from sqlalchemy import Column, Integer, String
from app.db.base import Base
from app.utils import get_password_hash

class Buyer(Base):
    __tablename__ = "buyers"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    business_name = Column(String)
    email = Column(String, unique=True)

    def set_password(self, password):
        self.hashed_password = get_password_hash(password)
