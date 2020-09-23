import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/Checkout";
import ContactPage from "./pages/contact/Contact";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";
import { setCurrentUser } from "./redux/user/UserActions";
import { selectCurrentUser } from "./redux/user/UserSelector";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  //create an open messaging system between app and firebase
  //firebase notifies app that the auth state has changed(user updated)
  //sends the user and then it gets called
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  //closes subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
