import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Switch, Route, Link, useHistory, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import React, { Fragment } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
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
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
// <App tab="home" />);

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/:id" component={TravelSearch} />
//     </Switch>
//   </main>
// );

// ReactDOM.
render(
  // <Provider stor={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <Router>
      <Fragment>
      <Navigation />
      <App>
      {/* <Switch> */}
      
        {/* <Routes>
          
            <Route exact path='/' component={App} />
            <Route exact path='/signup' component={<Signup />} />
            <Route exact path='/login' component={Login} /> 
            <Route exact path='/:id' component={TravelSearch} />
            
        
        </Routes> */}
        {/* </Switch> */}
        {/* <TravelSearch /> */}
        </App>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);