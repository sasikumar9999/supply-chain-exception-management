const { analyzeLogisticsData, analyzeManufacturingData, analyzeSalesData } = require('../services/dataAnalysis');

function detectAnomalies(logisticsData, manufacturingData, salesData) {
    const anomalies = [];

    const logisticsAnomalies = analyzeLogisticsData(logisticsData);
    const manufacturingAnomalies = analyzeManufacturingData(manufacturingData);
    const salesAnomalies = analyzeSalesData(salesData);

    if (logisticsAnomalies.length > 0) {
        anomalies.push(...logisticsAnomalies);
    }

    if (manufacturingAnomalies.length > 0) {
        anomalies.push(...manufacturingAnomalies);
    }

    if (salesAnomalies.length > 0) {
        anomalies.push(...salesAnomalies);
    }

    return anomalies;
}

module.exports = { detectAnomalies };