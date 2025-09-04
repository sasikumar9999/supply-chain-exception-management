export function formatData(data) {
    // Format data for consistency
    return data.map(item => ({
        ...item,
        timestamp: new Date(item.timestamp).toISOString(),
    }));
}

export function logError(error) {
    // Log error details for debugging
    console.error('Error:', error.message);
    console.error('Stack Trace:', error.stack);
}