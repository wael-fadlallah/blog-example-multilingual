import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import Card from "./components/Card/Index";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import userData from "./service/localStorage";
function App() {
  const { i18n } = useTranslation();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    i18n.changeLanguage(user.language);
    userData.save({ user });
  }, [user]);

  document.body.dir = i18n.dir();
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
