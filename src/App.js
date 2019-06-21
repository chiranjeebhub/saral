import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./css/index.css";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import BookAppointment from "./pages/BookAppointment";
import SinglePackage from "./pages/SinglePackage";
import About from "./pages/About";
import Career from "./pages/Career";
import Centers from "./pages/Centers";
import Gallery from "./pages/Gallery";
import Experts from "./pages/Experts";
import TestCategory from "./pages/TestCategory";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Cart from "./pages/Cart";
import Download from "./pages/Download";
import PackageAll from "./pages/PackageAll";
import RiskPage from "./pages/RiskPage";
import ScrolltoTop from "./components/ScrolltoTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import firebase from "./firebase";
import Axios from "axios";
import MessengerCustomerChat from "react-messenger-customer-chat";

import { SaralContext } from "./Context";
import Dashboard from "./pages/Dashboard";

function App() {
  const [pkg, setPkg] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [totalPage, setTotalPage] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  const [totalItem, setTotalItem] = useState("");
  const [query, setQuery] = useState("");
  const [filteredTest, setFilteredTest] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [location, setLocation] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [isloggedin, setIsloggedin] = useState("");

  useEffect(() => {
    fetchAllPkg();
    fetchAllProduct();
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user.uid);
    });
    console.log(currentUser);
    //app.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  // }, [totalPage, currentPage]);

  const fetchAllPkg = () => {
    Axios.get(
      `https://saraldiagnostics.com/wp-json/wc/v1/products?category=35&page=${currentPage}&per_page=9&consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
    ).then(res => {
      setPkg(res.data);
      setTotalPage(res.headers["x-wp-totalpages"]);
      setTotalItem(res.headers["x-wp-total"]);
      console.log(totalPage);
    });
  };

  const fetchAllProduct = () => {
    // for (let page = 1; page <= totalPage; page += 1) {
    //   Axios.get(
    //     `https://saraldiagnostics.com/wp-json/wc/v2/products?&page=${page}&consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
    //   ).then(res => {
    //     setAllProduct(...allProduct, res.data);
    //   });
    // }
    // console.log(allProduct);
    let Product = [];
    for (let page = 1; page <= 107; page++) {
      Axios.get(
        `https://saraldiagnostics.com/wp-json/wc/v2/products?page=${page}&consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
      ).then(res => {
        //setAllProduct([...allProduct, ...res.data]);
        // Product = [...Product, ...res.data];
        Product.push.apply(Product, res.data);
      });
    }
    setAllProduct(Product);
    // console.log(Product);
  };
  // const ninePerSlot = () => {};

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((currentPage = currentPage + 1));
      console.log(currentPage);
      fetchAllPkg();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage = currentPage - 1));
      console.log(currentPage);
    }
    // if (this.state.movieList && this.state.currentpage !== 1) {
    //   this.setState(
    //     {
    //       currentpage: (this.state.currentpage -= 1)
    //     },
    //     () => console.log(this.state.currentpage)
    //   );
    fetchAllPkg();
    // this.getCurrentMovies();
  };

  const addtoCart = cartItem => {
    let filteredCart = cart.filter(food => {
      return food.name.indexOf(cartItem.name) !== -1;
    });
    if (filteredCart == false) {
      setCart([...cart, cartItem]);
      setCartCount(cartCount + 1);
      setTotal(total + parseInt(cartItem.price));
      console.log(cart);
      console.log(total);
    } else {
      console.log("already exists");
    }
  };
  const removeFromCart = cartItem1 => {
    const newcart = cart.filter(item => {
      return item !== cartItem1;
    });
    setCart([...newcart]);
    setCartCount(cartCount - 1);
    setTotal(total - parseInt(cartItem1.price));
    //console.log("remove " + cartItem1);
  };

  const value = {
    pkg,
    setPkg,
    totalPage,
    nextPage,
    prevPage,
    currentPage,
    query,
    setQuery,
    allProduct,
    setAllProduct,
    filteredTest,
    setFilteredTest,
    cart,
    setCart,
    cartCount,
    setCartCount,
    addtoCart,
    removeFromCart,
    total,
    setTotal,
    location,
    setLocation,
    currentUser,
    isloggedin,
    setIsloggedin
  };

  return (
    <SaralContext.Provider value={value}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/packages" component={PackageAll} />
          <Route path="/SearchResult" component={SearchResult} />
          <Route path="/Appointment" component={BookAppointment} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/centers" component={Centers} />
          <Route path="/experts" component={Experts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/cart" component={Cart} />
          <Route path="/download" component={Download} />
          <Route path="/category" component={TestCategory} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/risk/:risk_id" component={RiskPage} />
          <Route path="/:id" component={SinglePackage} />
        </Switch>
      </BrowserRouter>
      {/* <MessengerCustomerChat
        pageId="147194405781651"
        appId="226885974036684"
        htmlRef="<REF_STRING>"
      /> */}
      <div
        class="fb-customerchat"
        page_id="226885974036684"
        theme_color="#459645"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="GoodBye!... Hope to see you soon."
        minimized="false"
      />
    </SaralContext.Provider>
  );
}

export default App;
