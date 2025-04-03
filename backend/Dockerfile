FROM python:3.9-slim

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code
COPY . .

# Expose the port
EXPOSE 5000

# Run with hot-reloading for development
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]
