from sqlalchemy.ext.declarative import declarative_base
from app.db.session import engine

Base = declarative_base()

def create_all_tables():
    Base.metadata.create_all(bind=engine)

create_all_tables()