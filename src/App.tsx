import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import Card from "./components/Card/Index";

function App() {
  return (
    <>
      <div className="content">
        <Navbar />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;
