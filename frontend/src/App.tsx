import { useContext, useEffect } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Store } from "./Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);
  // Hantera temaomkopplaren (ljus/mörk)
  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  const signoutHandler = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    // Omdirigera till hemsidan
    window.location.href = "/";
  };
  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar expand="lg">
          <Container>
            <a href="/">ZEECLOTH</a>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i
                className={
                  mode === "light"
                    ? "bi bi-brightness-low-fill"
                    : "bi bi-moon-fill"
                }></i>
            </Button>
            <Link to="/cart" className="nav-link">
              <i className="bi bi-cart-fill"></i>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdwon">
                <Link
                  className="dropdown-item"
                  to="#sigout"
                  onClick={signoutHandler}>
                  sign Out
                </Link>
                <NavDropdown.Item>
                  <Link to="/orderhistory">Order History</Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                sign In
              </Link>
            )}
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <p className="copyright">2024 - MangoDB - react Query
 - express - Node.js</p>
      </footer>
    </div>
  );
}

export default App;
