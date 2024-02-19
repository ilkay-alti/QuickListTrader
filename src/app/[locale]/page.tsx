import React from "react";
import { useTranslations } from "next-intl";
import { CardTable } from "@/components/Cards/CardTable";
import { mockData } from "@/mock";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className=" mb-48 ">
      <div className="container px-20 mb-20 gap-6 items-center text-center">
        <h1 className="text-5xl font-bold my-6">{t("title")}</h1>
        <span className=" text-lg">{t("titleDescription")}</span>
      </div>
      <CardTable data={mockData} />
    </div>
  );
};

export default HomePage;
