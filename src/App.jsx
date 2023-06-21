import { NavBar } from "./components/navBar/NavBar.jsx"
import { Footer } from "./components/footer/Footer.jsx"
import { MediaListContainer } from "./components/mediaListContainer/MediaListContainer.jsx"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MediaListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
