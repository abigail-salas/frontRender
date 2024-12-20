import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import AddTrip from "./views/AddTrip";
import EditTrip from "./views/EditTrip";
import DeleteTrip from "./views/DeleteTrip";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTrip />} />
          <Route path="/edit/:id" element={<EditTrip />} />
          <Route path="/delete/:id" element={<DeleteTrip />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
