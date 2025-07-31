FROM python:3.9-slim

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port 5000 for Flask application access
EXPOSE 5000

# Copy the backend code to be included in layer cache
COPY . .

# Run with hot-reloading for development using CMD
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]

# Optional: Set entry point for better container management when running with docker run -p 5000:5000 myapp
ENTRYPOINT ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]