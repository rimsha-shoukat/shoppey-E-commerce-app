export const getSimulatedStatus = (createdAt) => {
    const now = new Date();
    const placed = new Date(createdAt);
    const minutesElapsed = (now - placed) / (1000 * 60);

    if (minutesElapsed < 2)  return "confirmed";
    if (minutesElapsed < 5)  return "processing";
    if (minutesElapsed < 10) return "shipped";
    return "delivered";
};

// Returns how many ms until next status change (for auto-refresh)
export const msUntilNextStatus = (createdAt) => {
    const now = new Date();
    const placed = new Date(createdAt);
    const minutesElapsed = (now - placed) / (1000 * 60);

    if (minutesElapsed < 2)  return (2  - minutesElapsed) * 60 * 1000;
    if (minutesElapsed < 5)  return (5  - minutesElapsed) * 60 * 1000;
    if (minutesElapsed < 10) return (10 - minutesElapsed) * 60 * 1000;
    return null; 
};

export const STATUS_STEPS = ["confirmed", "processing", "shipped", "delivered"];

export const STATUS_LABELS = {
    confirmed:  "Order Confirmed",
    processing: "Processing",
    shipped:    "Shipped",
    delivered:  "Delivered",
};

export const STATUS_COLOR = {
    confirmed:  "bg-blue-100 text-blue-700",
    processing: "bg-yellow-100 text-yellow-700",
    shipped:    "bg-purple-100 text-purple-700",
    delivered:  "bg-green-100 text-green-700",
};