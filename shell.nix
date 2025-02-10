# shell.nix:path/to/shell.nix
{ pkgs ? import <nixpkgs> {} }:

let
  # Define the Python environment with necessary packages
  pythonEnv = pkgs.python3.withPackages (ps: with ps; [
    fastapi
    uvicorn
    sqlalchemy
    psycopg2-binary
    alembic
    passlib[bcrypt]
    python-jose
    pydantic
    pytest
    pydantic-settings
    # Add any additional Python packages you need
  ]);
in
pkgs.mkShell {
  name = "dev-shell";

  buildInputs = [
    pythonEnv          # Python environment with specified packages
    pkgs.postgresql     # PostgreSQL database
    pkgs.nodejs      # Node.js (adjust the version as needed)
    pkgs.yarn           # Yarn package manager
    pkgs.pnpm           # PNPM package manager
    pkgs.esbuild        # JavaScript bundler
    pkgs.typescript     # TypeScript language
    pkgs.git            # Git version control
    pkgs.curl           # Command-line tool for transferring data
    pkgs.jq             # Command-line JSON processor
    pkgs.unzip          # Utility for unpacking zip archives
    pkgs.docker         # Docker containerization platform
    pkgs.docker-compose # Docker Compose for defining multi-container applications
  ];

  shellHook = ''
    export DATABASE_URL="postgresql://myappuser:password@localhost/sadhupayog"

    # Initialize PostgreSQL data directory if it doesn't exist
    if [ ! -d "$HOME/pgdata" ]; then
      echo "Initializing PostgreSQL database..."
      initdb -D $HOME/pgdata
    fi

    # Start PostgreSQL server if it's not running
    if ! pg_ctl -D $HOME/pgdata status > /dev/null 2>&1; then
      echo "Starting PostgreSQL..."
      pg_ctl -D $HOME/pgdata -l logfile start
    else
      echo "PostgreSQL is already running."
    fi

    echo "PostgreSQL is ready!"

    echo "Development environment activated!"
    source bvenv/bin/activate
    pip install --upgrade pip
    pip install -r backend/requirements.txt
    cd backend
    uvicorn app.main:app --reload
    echo "Python environment activated!"
  '';
}