import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import Card from "./components/Card/Index";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const { t, i18n } = useTranslation();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    i18n.changeLanguage(user.language);
  }, [user]);
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
