from fastapi import APIRouter
from app.graph.workflow import run_orca

router = APIRouter(prefix="/api")

@router.get("/health")
def health():
    return {"status": "healthy"}

@router.post("/assess")
def assess(region: str = "Arabian Sea"):
    return run_orca(region)
