import { useNavigate } from "react-router-dom";
import { useGetOrderHistoryQuery } from "../hooks/orderHooks";
import LoadingBox from "../components/LoadingBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import MessageBox from "../components/MessageBox";
import { Button } from "react-bootstrap";

export default function OrderHistoryPage() {
  const navigate = useNavigate();
  // Hook för att hämta orderhistorik
  const { data: orders, isLoading, error } = useGetOrderHistoryQuery();

  return (
    <div>
      <title>Order History</title>

      <h1>Order History</h1>
      {isLoading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{getError(error as unknown as ApiError)}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders!.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "No"}
                </td>
                <td>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => {
                      navigate(`/order/${order._id}`);
                    }}>
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
