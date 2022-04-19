import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 h-[50px] text-white flex justify-center items-center">
      <p>{t("Copyright (c) 2022")}</p>
    </footer>
  );
}

export default Footer;
