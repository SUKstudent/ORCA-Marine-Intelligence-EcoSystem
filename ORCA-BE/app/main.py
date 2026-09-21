from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="ORCA - Marine Ecosystem Intelligence",
    version="1.0.0"
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "project": "ORCA - Marine Ecosystem Intelligence",
        "status": "running",
        "agents": 6
    }
