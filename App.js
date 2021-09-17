import './App.css';
import MyNav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
// import Home from "./components/Home";
// import Cart from "./components/Cart";



function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Switch>
          <Route path="/" exact component={ProductListing} />
            {/* <Home/> */}
          <Route path="/product/:productId" exact component={ProductDetail} />
          {/* <Route path="/cart" exact> */}
            {/* <Cart /></Route> */}
        </Switch>
      </Router>
        
      
      
      
      
      
      {/* <Header /> */}
      
      {/* <Router>
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div> */}
      {/* </Router>
      <ProductCard /> */}
      </>
    );
  }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
