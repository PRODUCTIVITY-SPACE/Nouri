// Order tracking page — status steps for Dine In / Takeaway / Delivery
// Phase 3: real-time via WebSocket  |  Phase 5: live map for delivery
export default async function TrackOrderPage({
  params
}: {
  params: Promise<{ orderId: string }>
}) {
  const { orderId } = await params;

  return <div className="page-header"><h1>Tracking #{orderId}</h1></div>;
}