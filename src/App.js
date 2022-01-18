//simport logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={ProductListing} />
      <Route exact path="/product/:productId" component={ProductDetail} />
      <Route>404 Not found</Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
