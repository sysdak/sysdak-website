"""
Gunicorn Configuration for Production Deployment
"""

import multiprocessing
import os

# Server socket
bind = f"{os.getenv('GUNICORN_HOST', '0.0.0.0')}:{os.getenv('GUNICORN_PORT', '5000')}"
backlog = 2048

# Worker processes
workers = int(os.getenv('GUNICORN_WORKERS', multiprocessing.cpu_count() * 2 + 1))
worker_class = 'sync'  # Use 'gevent' or 'eventlet' for async
worker_connections = 1000
max_requests = 1000  # Restart worker after processing this many requests
max_requests_jitter = 50  # Add randomness to max_requests to avoid thundering herd
timeout = 30
graceful_timeout = 30
keepalive = 2

# Process naming
proc_name = 'sysdak-api'

# Logging
accesslog = os.getenv('GUNICORN_ACCESS_LOG', '-')  # '-' means stdout
errorlog = os.getenv('GUNICORN_ERROR_LOG', '-')    # '-' means stderr
loglevel = os.getenv('GUNICORN_LOG_LEVEL', 'info')

# Access log format
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %(D)s'

# Server mechanics
daemon = False  # Don't daemonize (systemd/Docker will manage the process)
pidfile = None
umask = 0
user = None
group = None
tmp_upload_dir = None

# SSL (if needed)
# keyfile = '/path/to/keyfile'
# certfile = '/path/to/certfile'

# Server hooks
def on_starting(server):
    """Called just before the master process is initialized."""
    server.log.info("=" * 60)
    server.log.info("🚀 SysDak API Server Starting")
    server.log.info(f"Workers: {workers}")
    server.log.info(f"Bind: {bind}")
    server.log.info(f"Worker Class: {worker_class}")
    server.log.info("=" * 60)

def on_reload(server):
    """Called to recycle workers during a reload."""
    server.log.info("🔄 Reloading workers...")

def when_ready(server):
    """Called just after the server is started."""
    server.log.info("✅ Server is ready. Accepting connections.")

def pre_fork(server, worker):
    """Called just before a worker is forked."""
    pass

def post_fork(server, worker):
    """Called just after a worker has been forked."""
    server.log.info(f"Worker spawned (pid: {worker.pid})")

def pre_exec(server):
    """Called just before a new master process is forked."""
    server.log.info("Forked child, re-executing.")

def when_ready(server):
    """Called just after the server is started."""
    server.log.info("✅ Server is ready. Accepting connections.")

def worker_int(worker):
    """Called just after a worker exited on SIGINT or SIGQUIT."""
    worker.log.info(f"Worker received INT or QUIT signal (pid: {worker.pid})")

def worker_abort(worker):
    """Called when a worker received the SIGABRT signal."""
    worker.log.info(f"Worker received SIGABRT signal (pid: {worker.pid})")

def pre_request(worker, req):
    """Called just before a worker processes the request."""
    worker.log.debug(f"{req.method} {req.path}")

def post_request(worker, req, environ, resp):
    """Called after a worker processes the request."""
    pass

def child_exit(server, worker):
    """Called just after a worker has been exited."""
    server.log.info(f"Worker exited (pid: {worker.pid})")

def worker_exit(server, worker):
    """Called just after a worker has been exited."""
    pass

def nworkers_changed(server, new_value, old_value):
    """Called just after num_workers has been changed."""
    server.log.info(f"Worker count changed from {old_value} to {new_value}")

def on_exit(server):
    """Called just before exiting Gunicorn."""
    server.log.info("👋 Shutting down SysDak API Server")
