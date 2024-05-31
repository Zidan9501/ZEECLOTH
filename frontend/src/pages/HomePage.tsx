import { Row, Col } from "react-bootstrap";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";

export default function HomePage() {
  // / Använd useGetProductsQuery-hooket för att hämta produktdata
  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {getError(error as unknown as ApiError)}
    </MessageBox>
  ) : (
    <Row>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
          <ProductItem product={product}></ProductItem>
        </Col>
      ))}
    </Row>
  );
}
