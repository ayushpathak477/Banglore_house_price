# Bangalore House Price Prediction

A machine learning web application that predicts house prices in Bangalore based on various features like location, square footage, number of bedrooms (BHK), and bathrooms.

## Features

- Real-time house price prediction
- Covers 240+ locations across Bangalore
- User-friendly web interface
- Instant price estimates in Lakhs (Indian currency)
- Responsive design for all devices

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Machine Learning**: scikit-learn, NumPy
- **Deployment**: AWS (planned)

## Project Structure

```
Bangalore_House_Prediction/
├── client/                 # Frontend files
│   ├── app.html           # Main application page
│   ├── app.css            # Styling
│   └── app.js             # Frontend logic
├── server/                # Backend files
│   ├── server.py          # Flask server
│   ├── util.py            # Utility functions
│   ├── requirements.txt   # Python dependencies
│   └── artifacts/         # ML model and data
│       ├── columns.json   # Location data
│       └── banglore_house_price.pickle  # Trained model
└── .venv/                 # Python virtual environment
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ayushpathak887/Bangalore_House_Prediction.git
cd Bangalore_House_Prediction
```

2. Create and activate virtual environment:
```bash
python -m venv .venv
# On Windows
.venv\Scripts\activate
# On Unix/MacOS
source .venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r server/requirements.txt
```

## Running the Application

1. Start the Flask server:
```bash
python server/server.py
```

2. Open your web browser and navigate to:
```
http://127.0.0.1:5000
```

## Usage

1. Select a location from the dropdown menu
2. Enter the total square footage
3. Select the number of BHK (bedrooms)
4. Select the number of bathrooms
5. Click "Estimate Price" to get the predicted price

## Model Details

The machine learning model is trained on historical housing data from Bangalore with the following features:
- Location
- Total square footage
- Number of BHK (bedrooms)
- Number of bathrooms

The model uses a linear regression algorithm to predict house prices in Lakhs (Indian currency).

## API Endpoints

- `GET /get_location_names`: Returns list of available locations
- `POST /predict_home_price`: Predicts house price based on input parameters
  - Parameters:
    - total_sqft: Total square footage
    - location: Selected location
    - bhk: Number of bedrooms
    - bath: Number of bathrooms

## Future Improvements

- [ ] Add user authentication
- [ ] Implement price history tracking
- [ ] Add more property features
- [ ] Include property images
- [ ] Add price trends visualization
- [ ] Implement email notifications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Ayush Pathak**
- GitHub: [@ayushpathak887](https://github.com/ayushpathak887)
- Project Link: [https://github.com/ayushpathak887/Bangalore_House_Prediction](https://github.com/ayushpathak887/Bangalore_House_Prediction)

