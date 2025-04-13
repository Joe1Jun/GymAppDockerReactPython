# db.py
import psycopg2
from dotenv import load_dotenv
import os
load_dotenv()

DB_HOST = os.getenv("DATABASE_HOST")
DB_NAME =  os.getenv ( "DATABASE_NAME")
DB_USER =  os.getenv ( "DATABASE_USER" )
DB_PASSWORD =os.getenv( "DATABASE_PASSWORD")

def get_db_connection():


    return psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )

# Test the connection when running this file directly
if __name__ == "__main__":
    try:
        conn = get_db_connection()
        print("✅ Connection to the database was successful.")
        conn.close()
    except Exception as e:
        print("❌ Failed to connect to the database.")
        print("Error:", e)
