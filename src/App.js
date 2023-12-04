import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsItem from "./components/NewsItem";
import About from "./components/About";
import Home from "./components/Home";
import News from "./components/News";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>

          <Route path="news" element={<News link="https" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
