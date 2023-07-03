import { NavBar } from "./components/navBar/NavBar.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { AppRoutes } from "./appRoutes/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./context/FavoritesContext.jsx";
import './styles/styles.scss'

function App() {
  return (
    <div className="App">
      <FavoritesContextProvider>
        <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
          <Footer/>
        </BrowserRouter>
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
