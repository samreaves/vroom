# Vroom
## Purpose
A Next app facilitating mastery of the ecosystem, providing a playground for experimentation

## How to run this project
1. Copy the .env.example file to an .env file with your own environment variables:
- HOSTNAME=0.0.0.0
- PORT=3000
- NODE_ENV=production
- POSTGRES_HOST=postgres
- POSTGRES_PORT=5432
- POSTGRES_DB=somename
- POSTGRES_USER=someuser
- POSTGRES_PASSWORD=somepassword
2. Run the app & Postgres DB ```docker compose up --build -d```
3. Visit http://${HOSTNAME}:${PORT} to access the app.