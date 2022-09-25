import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Switch, Route, Link, useHistory, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import promise from "redux-promise";
import './index.css';
import App from './App';
import reducers from "./reducers";
import TravelSearch from "./components/travelsearch";
import Navigation from "./components/navigation";
import Signup from './components/signup';
import Login from './components/login';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/:id" component={TravelSearch} />
//     </Switch>
//   </main>
// );

ReactDOM.render(
  // <Provider stor={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <Router>
      <Fragment>
      <Navigation />
      <App />
        <Routes>
          
            <Route exact path="/" element={App} />
            <Route exact path="/:id" element={TravelSearch} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Login} />
        
        </Routes>
        {/* <TravelSearch /> */}
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);