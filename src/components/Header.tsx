import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <div className="flex justify-between items-center font-bold text-lg my-3 mx-6 mr-12">
      <div>LOGO</div>
      <div className="flex gap-9">
        <Link href={"/"} className=" hover:text-[#FEB6DB]">
          {t("home")}
        </Link>
        <Link href={"/en/about"} className=" hover:text-[#FEB6DB]">
          {t("about")}
        </Link>
      </div>
    </div>
  );
};

export default Header;
