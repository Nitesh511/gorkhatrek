import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/routes/route";
import TopNav from "./components/topnav/topnav";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <TopNav/>
      <Navbar/>
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
