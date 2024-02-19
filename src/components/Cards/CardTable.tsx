import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";

const cardTable = cva([], {
  variants: {
    intent: {
      default: ["flex flex-col gap-12"],
    },
  },

  defaultVariants: {
    intent: "default",
  },
});

interface CardTableProps extends VariantProps<typeof cardTable> {
  className?: string;
  data: dataProps[];
}

type dataProps = {
  title: string;
  items: {
    title: string;
    link: string;
  }[];
};

export const CardTable: React.FC<CardTableProps> = ({
  className,
  intent,
  data,
  ...props
}) => (
  <div className={twMerge(cardTable({ intent, className }))} {...props}>
    {data.map((item) => (
      <div key={item.title}>
        <h2 className="font-bold mb-3">{item.title}</h2>
        <div className="grid grid-cols-4 gap-4  group">
          {item.items.map((subItem) => (
            <Card
              key={subItem.title}
              data={subItem}
              className="group-hover:text-gray-400 group-hover:fill-gray-400"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);
