import requests
import random
import time

# ThingsBoard device credentials
ACCESS_TOKEN = 'xzWSpDbZajW2Xsyubkjn'  # Replace with your actual access token
# ThingsBoard API endpoint
url = f'http://thingsboard.cloud/api/v1/{ACCESS_TOKEN}/telemetry'

def generate_random_temperature():
    """Generate a random temperature between 20 and 30 degrees."""
    return round(random.uniform(20, 30), 2)

while True:
    temperature = generate_random_temperature()
    
    # Data to send
    payload = {"temperature": temperature}
    
    # Send POST request to ThingsBoard REST API
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        print(f"Successfully sent temperature: {temperature}")
    else:
        print(f"Failed to send data, status code: {response.status_code}")
    
    # Wait 5 second before sending the next reading
    time.sleep(5)
