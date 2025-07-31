import psycopg2

# Define your database connection parameters


password = ''

db_host = 'localhost'
db_port = 5437
db_username = 'joejunker'  # replace with your actual username
db_name = 'fitness_app'  # replace with your actual database name

try:
    # Connect to the database
    conn = psycopg2.connect(
        host=db_host,
        port=db_port,
        user=db_username,
        password=password,
        dbname=db_name,
        sslmode='disable'
    )
    print("Connected to the database successfully!")
except (psycopg2.OperationalError, psycopg2.Error) as e:
    print(f"Error connecting to the database: {e}")