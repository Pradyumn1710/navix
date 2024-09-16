from flask import Flask, request, jsonify
from flask_cors import CORS
import searoute as sr
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/get_route', methods=['POST'])
def get_route():
    data = request.json
    start_longitude = data.get('start_longitude')
    start_latitude = data.get('start_latitude')
    end_longitude = data.get('end_longitude')
    end_latitude = data.get('end_latitude')

    if not start_longitude or not start_latitude or not end_longitude or not end_latitude:
        return jsonify({"error": "All coordinates (start_longitude, start_latitude, end_longitude, end_latitude) are required"}), 400

    try:
        start = (start_longitude, start_latitude)  # (longitude, latitude)
        end = (end_longitude, end_latitude)  # (longitude, latitude)
        route = sr.searoute(start, end, include_ports=True)

        coordinates = route.geometry.coordinates
        duration_hours = route.properties['duration_hours']
        length_km = route.properties['length']
        port_origin = route.properties['port_origin']
        port_dest = route.properties['port_dest']

        return jsonify({
            "route": coordinates,
            "duration_hours": duration_hours,
            "length_km": length_km,
            "port_origin": port_origin,
            "port_dest": port_dest
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=int(os.getenv('PORT', 5000)))
