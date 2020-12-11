import React from "react";
import Header from "./components/header";
import {Route,BrowserRouter, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AddPost from "./components/AddPost";
import { Provider } from "react-redux";
import store from "./redux/store"
import ContactUs from "./components/ContactUs";
import Login from "./components/Login"
import Footer from "./components/footer";
import Reviews from "./components/Reviews";
import ShowNewsPost from "./components/ShowNewsPost";
import ShowReviewPost from"./components/ShowReviewPost.js";
import News from "./components/News";

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/news" exact  component={News}/>
        <Route path="/reviews" component={Reviews}/>
        <Route path="/news/:id" component={ShowNewsPost}/>
        <Route path="/review/:id" component={ShowReviewPost}/>
        <Route path="/addpost" component={AddPost}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/login" component={Login}/>
        </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
    </Provider>
  );
};

export default App;
