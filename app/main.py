from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from app.tls_check import check

app = FastAPI()


class Scan(BaseModel):
    url: str


@app.get("/api/health")
def health():
    return {"ok": True}


@app.post("/api/scan")
def scan(body: Scan):
    return check(body.url)


# anything else: serve the html in static/
app.mount("/", StaticFiles(directory=Path(__file__).parent.parent / "static", html=True))
