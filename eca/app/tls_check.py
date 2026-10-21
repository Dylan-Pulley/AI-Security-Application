import socket
import ssl
from datetime import datetime


def check(url):
    # "https://clark.edu/about" -> "clark.edu"
    host = url.replace("https://", "").replace("http://", "").split("/")[0]

    try:
        raw = socket.create_connection((host, 443), timeout=5)
        tls = ssl.create_default_context().wrap_socket(raw, server_hostname=host)
    except ssl.SSLCertVerificationError as e:
        return {"host": host, "ok": False, "problem": e.verify_message}
    except OSError as e:
        return {"host": host, "ok": False, "problem": str(e)}

    cert = tls.getpeercert()
    expires = datetime.strptime(cert["notAfter"], "%b %d %H:%M:%S %Y %Z")
    days_left = (expires - datetime.utcnow()).days

    return {
        "host": host,
        "ok": True,
        "protocol": tls.version(),
        "cipher": tls.cipher()[0],
        "expires": expires.date().isoformat(),
        "days_left": days_left,
    }
