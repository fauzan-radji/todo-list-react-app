import Navbar from "./components/Navbar";
import { Home, Settings, Lists } from "./views/Views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <header>
          <Navbar />
        </header>

        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/lists" exact element={<Lists />} />
            <Route path="/settings" exact element={<Settings />} />
          </Routes>
        </main>

        <footer className="container mx-auto p-4 text-center">
          &copy; Copyright 2023
        </footer>
      </div>
    </Router>
  );
}

export default App;
