import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Card() {
  const { t, i18n } = useTranslation();

  return (
    <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
      <img
        className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
        // src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg"
        alt={t("bag")}
      />
      <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div className="flex items-center">
          <h2 className="text-xl text-gray-800 font-medium mr-auto">
            {t("Your Travel Buddy")}
          </h2>
          <p className="text-gray-800 font-semibold tracking-tighter">48$</p>
        </div>
        <p className="text-sm text-gray-700 mt-4">{t("lorem")}</p>
        <div className="flex items-center justify-end mt-4 top-auto">
          <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">
            {t("delete")}
          </button>
          <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
            {t("edit")}
          </button>
          <button className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">
            {t("publish")}
          </button>
        </div>
      </div>
    </div>
  );
}
