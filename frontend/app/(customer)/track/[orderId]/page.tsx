// Order tracking page — status steps for Dine In / Takeaway / Delivery
// Phase 3: real-time via WebSocket  |  Phase 5: live map for delivery
export default function TrackOrderPage({ params }: { params: { orderId: string } }) {
  return <div className="page-header"><h1>Tracking #{params.orderId}</h1></div>;
}
