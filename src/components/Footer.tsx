import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="flex items-center justify-center h-24 w-full bg-[#2C363F] text-white gap-2 items-center">
      <span>{t("madeBy")}</span>
      <Link
        href={"https://github.com/ilkay-alti"}
        target="_blank"
        className="font-bold"
      >
        İlkayus
      </Link>
      <span>- © 2024</span>
    </div>
  );
};

export default Footer;
