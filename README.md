# Supply Chain Exception Management System

This project is an automated Supply Chain Exception Management system that integrates logistics, manufacturing, and sales data monitoring with anomaly detection capabilities. It also includes integration with a CRM for effective case management.

## Features

- **Logistics Monitoring**: Tracks logistics data for late deliveries and stockouts.
- **Manufacturing Monitoring**: Monitors manufacturing data for defects and production delays.
- **Sales Monitoring**: Observes sales data for stockouts and cost spikes.
- **Anomaly Detection**: Utilizes predefined rules and AI-driven algorithms to identify anomalies across logistics, manufacturing, and sales data.
- **CRM Integration**: Manages cases related to supply chain exceptions through a seamless integration with a CRM system.

## Project Structure

```
supply-chain-exception-management
├── src
│   ├── index.js               # Entry point of the application
│   ├── config
│   │   └── crmIntegration.js   # Configuration for CRM integration
│   ├── modules
│   │   ├── logistics
│   │   │   └── monitor.js      # Logistics monitoring module
│   │   ├── manufacturing
│   │   │   └── monitor.js      # Manufacturing monitoring module
│   │   ├── sales
│   │   │   └── monitor.js      # Sales monitoring module
│   │   └── anomalyDetection
│   │       └── detect.js       # Anomaly detection module
│   ├── services
│   │   └── caseManagement.js    # Case management service
│   └── utils
│       └── helpers.js          # Utility functions
├── package.json                # NPM configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd supply-chain-exception-management
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Configure the CRM integration by editing the `src/config/crmIntegration.js` file with your CRM API credentials.

4. Start the application:
   ```
   npm start
   ```

## Usage

- The application will automatically monitor logistics, manufacturing, and sales data.
- Anomalies will be detected and logged based on the defined rules.
- Cases related to exceptions will be created and managed through the integrated CRM system.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.