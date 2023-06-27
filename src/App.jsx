import { NavBar } from "./components/navBar/NavBar.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { AppRoutes } from "./appRoutes/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import './styles/styles.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
