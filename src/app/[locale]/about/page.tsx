import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col items-center text-center mx-20 mb-48 ">
      <div className="mb-16 gap-6">
        <h1 className="text-5xl font-bold my-6">{t("title")}</h1>
        <span className=" text-lg">{t("titleDescription")}</span>
      </div>

      <div className="flex flex-col px-2 gap-6 text-start items-center">
        <p>{t("stepOne")}</p>
        <Image alt="1" src="/list1.png" width={392} height={297} />
        <p>
          {t("stepTwo.One")}
          <span className="font-bold">{`"` + t("stepTwo.Two") + `"`}</span>
          {t("stepTwo.Three")}
        </p>
        <Image alt="2" src="/list2.png" width={392} height={297} />
      </div>
    </div>
  );
};

export default AboutPage;
