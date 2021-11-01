import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Header from "./Header/Header";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import ManageServices from "./Pages/ManageServices/ManageServices";
import MyOrders from "./Pages/MyOrders/MyOrders";

import NotFound from "./Pages/NotFound/NotFound";

import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

import ServiceDetails from "./Pages/Services/ServiceDetails";
import WhyChooseUs from "./Pages/WhyChooseUs/WhyChooseUs";

function App() {
  const [handleConfirm, setHandleConfirm] = useState({});
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute exact path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </PrivateRoute>

            <Route exact path="/whyChooseUs">
              <WhyChooseUs></WhyChooseUs>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs></ContactUs>
            </Route>

            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute exact path="/myOrders">
              <MyOrders handleConfirm={handleConfirm}></MyOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/manageOrders">
              <ManageOrders setHandleConfirm={setHandleConfirm}></ManageOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
