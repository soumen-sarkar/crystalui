import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Firebase setup start
import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import store from "./store";
// Firebase setup end
import "./App.scss";
import canvas from "../src/externalJs/canvas";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Index from "./components/index";
import Testimonials from "./components/testimonials/testimonials";
import Portfolio from "./components/portfolio/portfolio";
import PortfolioDetails from "./components/portfolio/portfolioDetails";
import About from "./components/aboutMe/about";
import NotFound from "./components/share/notFound";

class App extends Component {
  componentDidMount() {
    canvas();
  }

  render() {

    const rrfConfig = {
      userProfile: "users",
      useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    };

    const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    };

    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <canvas id="galaxy"></canvas>
          <Header />
          <div id="body">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/about" component={About} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/:id" component={PortfolioDetails} />
            <Route component={NotFound} />
          </Switch>
          </div>
        </Router>
        <Footer />
      </div>
      </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
