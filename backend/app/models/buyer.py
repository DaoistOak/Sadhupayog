from app.db.base import Base
from sqlalchemy import Column, Integer, String
from app.utils import get_password_hash

class Buyer(Base):
    __tablename__ = "buyers"
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    organization_name = Column(String)
    email = Column(String, unique=True, index=True)

    def set_password(self, password):
        self.hashed_password = password # Store plain password - INSECURE
