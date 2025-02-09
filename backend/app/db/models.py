# backend/app/db/models.py

from sqlalchemy import Column, Integer, String
from app.db.base import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

class Buyer(Base):
    __tablename__ = 'buyers'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    contact = Column(String)

class Seller(Base):
    __tablename__ = 'sellers'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    contact = Column(String)

class ColdStore(Base):
    __tablename__ = 'cold_stores'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)



    