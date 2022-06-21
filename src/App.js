import logo from './logo.svg';
import './App.css';
import Header from "./pages/header";
import Hero from "./pages/hero";
import Products from "./pages/products";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Products />
    </div>
  );
}

export default App;
