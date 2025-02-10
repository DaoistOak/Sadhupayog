from passlib.context import CryptContext

# Create a password context with bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    """Return plain password (INSECURE - DO NOT USE IN PRODUCTION)."""
    return password

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify plain password (INSECURE - DO NOT USE IN PRODUCTION)."""
    return plain_password == hashed_password 