import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, Menu, About, Gallery, Blog, Contact } from "./components/pages";
import CartDrawer from "./components/CartDrawer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            // ... existing code ...
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
        <CartDrawer />
      </div>
    </Router>
  );
}

export default App;
