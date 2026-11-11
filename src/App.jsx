import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import { products, categories } from "./data/products";
import "./App.css";
 

// note storage_key is uesd to store massages in localStorage 

const STORAGE_KEY = "eva-messages";

// note json.parse() => convert data 
function loadMessages() {

  try {
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText === null) {
      return [];
    }
    const parsedData = JSON.parse(savedText);
    if (!Array.isArray(parsedData)) {
      return [];
    }
    return parsedData;
  } catch (error) {
    console.error("Unable to load messages:", error);
    return [];
  }
}

//  note Save the messages as JSON text

function saveMessages(messages) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(messages)
  );
}

function App() {
  // note  Read the saved messages when the app first starts
  const [messages, setMessages] = useState(
    () => loadMessages()
  );

  // note (Add a message update React state and save it in localStorage)
  function handleAddMessage(newMessage) {
    const updatedMessages = [
      ...messages,
      newMessage
    ];

    setMessages(updatedMessages);
    saveMessages(updatedMessages);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection products={products} categories={categories} />} 
          />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/contact" element={<Contact onAddMessage={handleAddMessage} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
