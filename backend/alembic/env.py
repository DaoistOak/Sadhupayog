from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# this is the Alembic Config object
config = context.config

# Override sqlalchemy.url with environment variable
config.set_main_option("sqlalchemy.url", os.getenv("DATABASE_URL"))

# ... rest of existing env.py content ...

# Import all your models here so Alembic can detect them
from app.db.base import Base
from app.api.routes.buyers import Buyer
from backend.app.api.routes.buyers import Seller
from app.api.routes.cold_stores import ColdStore

target_metadata = Base.metadata

# ... rest of existing env.py content ... 