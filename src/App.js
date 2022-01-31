import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [cartIsEmpty] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        {/* new switch is now replaced with Routes */}
        <Routes>
          {/* no longer need to specify exact as this is now
            defult behaviour of routes */}
          <Route path="/" element={<Home />} />
          {/* specify the jsx in the element rather than wrapping it in a route */}
          {/* to add other routes after the parent path use the '*' to speify that other routes are allowed */}
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/test"
            element={
              <div>
                <h2>Test Page</h2>
                <p>Hello</p>
              </div>
            }
          />
          {/* Navigate replaces Redirect */}
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="checkout"
            element={
              cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
