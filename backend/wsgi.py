"""
WSGI Entry Point for Production Deployment

This module serves as the entry point for WSGI servers (Gunicorn, uWSGI, etc.)
"""

import os
import sys
import logging
from pathlib import Path

# Add the backend directory to the Python path
backend_dir = Path(__file__).parent
sys.path.insert(0, str(backend_dir))

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

# Configure production logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

# Import the Flask application
from app import app as application

# Log startup information
logger = logging.getLogger(__name__)
logger.info("=" * 60)
logger.info("SysDak API starting in production mode")
logger.info(f"Python version: {sys.version}")
logger.info(f"Environment: {os.getenv('FLASK_ENV', 'production')}")
logger.info(f"Debug mode: {os.getenv('FLASK_DEBUG', 'False')}")
logger.info("=" * 60)

# Verify critical environment variables
required_env_vars = [
    'EMAIL_USERNAME',
    'EMAIL_PASSWORD',
    'EMAIL_FROM',
    'EMAIL_TO',
    'ALLOWED_ORIGINS'
]

missing_vars = [var for var in required_env_vars if not os.getenv(var)]
if missing_vars:
    logger.warning(f"Missing environment variables: {', '.join(missing_vars)}")
    logger.warning("Some features may not work correctly!")

# Expose the application for WSGI servers
# Gunicorn will look for 'application' by default
if __name__ == "__main__":
    # This block is for development/testing only
    # In production, use: gunicorn -c gunicorn.conf.py wsgi:application
    logger.warning("Running Flask development server. Use Gunicorn for production!")
    application.run(
        host=os.getenv('FLASK_HOST', '127.0.0.1'),
        port=int(os.getenv('FLASK_PORT', '5000')),
        debug=False
    )
