import Header from "./pages/Header";
import "./dist/css/styles.css";
import Home from "./pages/Home";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <BackToTop/>
    </>
  );
}

export default App;
