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
  color?: string;
}

interface dataProps {
  title: string;
  link: string;
}

export const Card: React.FC<CardrProps> = ({
  className,
  intent,
  data,
  color,

  ...props
}) => (
  console.log("data", color),
  (
    <Link
      href={data.link}
      target="_blank"
      className={twMerge(card({ intent, className }))}
      {...props}
    >
      <Binance
        width={30}
        height={30}
        style={{ color: color }}
        className={` group-hover/text:fill-current group-hover:fill-gray-500`}
      />
      <span className="group-hover/text:text-black  ">{data.title}</span>
    </Link>
  )
);
