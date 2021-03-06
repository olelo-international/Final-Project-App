import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListPostAdmin from '../pages/ListPostAdmin';
import ListRequestAdmin from '../pages/ListRequestAdmin';
import AddPost from '../pages/AddPost';
import AddRequest from '../pages/AddRequest';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import HomePage from '../pages/HomePage';
import Forums from '../pages/Forums';
import JapaneseForum from '../pages/JapaneseForum';
import CambodianForum from '../pages/CambodianForum';
import TagalogForum from '../pages/TagalogForum';
import FrenchForum from '../pages/FrenchForum';
import GermanForum from '../pages/GermanForum';
import GreekForum from '../pages/GreekForum';
import HawaiianForum from '../pages/HawaiianForum';
import HindiForum from '../pages/HindiForum';
import IlokanoForum from '../pages/IlokanoForum';
import IndonesianForum from '../pages/IndonesianForum';
import KoreanForum from '../pages/KoreanForum';
import LatinForum from '../pages/LatinForum';
import MaoriForum from '../pages/MaoriForum';
import RussianForum from '../pages/RussianForum';
import SamoanForum from '../pages/SamoanForum';
import SpanishForum from '../pages/SpanishForum';
import ThaiForum from '../pages/ThaiForum';
import ArabicForum from '../pages/ArabicForum';
import userProfile from '../pages/userProfile';
import userProfileUpdateForm from '../pages/userProfileUpdateForm';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/homepage" component={HomePage}/>
              <ProtectedRoute path="/forums" component={Forums}/>
                <ProtectedRoute path="/arabicforum" component={ArabicForum}/>
                <ProtectedRoute path="/thaiforum" component={ThaiForum}/>
                <ProtectedRoute path="/spanishforum" component={SpanishForum}/>
                <ProtectedRoute path="/samoanforum" component={SamoanForum}/>
                <ProtectedRoute path="/russianforum" component={RussianForum}/>
                <ProtectedRoute path="/maoriforum" component={MaoriForum}/>
                <ProtectedRoute path="/latinforum" component={LatinForum}/>
                <ProtectedRoute path="/koreanforum" component={KoreanForum}/>
                <ProtectedRoute path="/indonesianforum" component={IndonesianForum}/>
                <ProtectedRoute path="/ilokanoforum" component={IlokanoForum}/>
                <ProtectedRoute path="/hindiforum" component={HindiForum}/>
                <ProtectedRoute path="/hawaiianforum" component={HawaiianForum}/>
                <ProtectedRoute path="/greekforum" component={GreekForum}/>
                <ProtectedRoute path="/germanforum" component={GermanForum}/>
                <ProtectedRoute path="/frenchforum" component={FrenchForum}/>
                <ProtectedRoute path="/tagalogforum" component={TagalogForum}/>
                <ProtectedRoute path="/cambodianforum" component={CambodianForum}/>
                <ProtectedRoute path="/japaneseforum" component={JapaneseForum}/>
                <ProtectedRoute path="/userprofile" component={userProfile}/>
                <ProtectedRoute path="/userprofileupdateform" component={userProfileUpdateForm}/>
              <ProtectedRoute path="/addpost" component={AddPost}/>
               <ProtectedRoute path="/addrequest" component={AddRequest}/>
                <AdminProtectedRoute path="/adminrequest" component={ListRequestAdmin}/>
                <AdminProtectedRoute path="/adminpost" component={ListPostAdmin}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
