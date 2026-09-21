from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ORCA – Marine Ecosystem Intelligence")

# Allow our React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "project": "ORCA",
        "status": "running",
        "message": "Marine Ecosystem Intelligence backend is online"
    }


@app.get("/api/region")
def get_region():
    return {
        "region": "Arabian Sea",
        "status": "ready",
        "message": "Marine data analysis can begin"
    }