import React from "react";
import Header from "./components/header";
import {Route,BrowserRouter, Switch} from "react-router-dom";
import Posts from "./components/posts"
import Topic from "./components/topic"
import LandingPage from "./components/LandingPage";
import AddPost from "./components/AddPost";
import { Provider } from "react-redux";
import store from "./redux/store"
import ContactUs from "./components/ContactUs";
import Login from "./components/Login"
import Footer from "./components/footer";
import Reviews from "./components/Reviews";
import EditPost from "./components/EditPost";

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path ="/Blog" exact  component={Posts}/>
        <Route path="/reviews" component={Reviews}/>
        <Route path="/blog/post/:id" component={Topic}/>
        <Route path="/addpost" component={AddPost}/>
        <Route path="/editpost" component={EditPost}/>
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
