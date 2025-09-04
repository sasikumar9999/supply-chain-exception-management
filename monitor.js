class SalesMonitor {
    constructor() {
        this.salesData = [];
    }

    startMonitoring() {
        console.log("Sales monitoring started.");
        // Logic to start monitoring sales data
    }

    handleSalesData(data) {
        this.salesData.push(data);
        console.log("Sales data received:", data);
        this.detectStockouts(data);
        this.detectCostSpikes(data);
    }

    detectStockouts(data) {
        // Logic to detect stockouts in sales data
        if (data.stock < data.threshold) {
            console.warn("Stockout detected for product:", data.productId);
        }
    }

    detectCostSpikes(data) {
        // Logic to detect cost spikes in sales data
        if (data.cost > data.previousCost * 1.2) {
            console.warn("Cost spike detected for product:", data.productId);
        }
    }
}

export default SalesMonitor;