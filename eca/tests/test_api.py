from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    assert client.get("/api/health").json() == {"ok": True}


def test_scan_returns_host():
    r = client.post("/api/scan", json={"url": "https://clark.edu/x"})
    assert r.json()["host"] == "clark.edu"
