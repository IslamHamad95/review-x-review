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
        <Route path="/blog/post/:id" component={Topic}/>
        <Route path="/addpost" component={AddPost}/>
        <Route path="/contactus" component={ContactUs}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
    </Provider>
  );
};

export default App;
