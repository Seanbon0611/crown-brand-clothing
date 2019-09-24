import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import { setCurrentUser } from './redux/user/UserActions'
import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  //create an open messaging system between app and firebase
  //firebase notifies app that the auth state has changed(user updated)
  //sends the user and then it gets called
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
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
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
