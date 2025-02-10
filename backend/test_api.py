from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.main import app  # Import your FastAPI app
from app.db.base import Base
from app.db.session import get_db
from app.models.cold_store import ColdStore

# Setup test database and override get_db dependency
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

def test_create_cold_store():
    response = client.post("/cold_stores/", json={"name": "Test Store", "location": "Test Location", "capacity": 1000})
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Store"
    assert data["location"] == "Test Location"
    assert data["capacity"] == 1000

def test_read_cold_store():
    response = client.get("/cold_stores/")
    assert response.status_code == 200
    assert len(response.json()) > 0