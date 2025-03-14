import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payments from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectRout from "./Components/ProtectRoute/ProtectRout";

const stripePromise = loadStripe(
  "pk_test_51R1HW4GdUC9aRQnCHnsQHg6f1oK4m2XXuLGiOOzgfjUV59BYXhEHTjl4gg5u48tWf10kgR0c23i5QjFvMygexANE000jD1AoOM"
);

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectRout msg={"You must Login to Pay"} redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payments />
              </Elements>
            </ProtectRout>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectRout
              msg={"You must Login to see Your Orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectRout>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default Routing;
