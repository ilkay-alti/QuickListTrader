import React, { Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import BinanceComp from "../Icon/Binance";
import Binance from "../Icon/Binance";

const card = cva([], {
  variants: {
    intent: {
      default: ["h-10 px-4 py-2  group/text flex items-center gap-2  "],
    },
  },

  defaultVariants: {
    intent: "default",
  },
});

interface CardrProps extends VariantProps<typeof card> {
  className?: string;
  data: dataProps;
}

interface dataProps {
  title: string;
  link: string;
}

export const Card: React.FC<CardrProps> = ({
  className,
  intent,
  data,

  ...props
}) => (
  <Link
    href={data.link}
    target="_blank"
    className={twMerge(card({ intent, className }))}
    {...props}
  >
    <Binance
      width={30}
      height={30}
      className="group-hover:fill-gray-500 group-hover/text:fill-[#F0B90B] "
    />
    <span className="group-hover/text:text-black group-hover:fill-gray-900 ">
      {data.title}
    </span>
  </Link>
);
