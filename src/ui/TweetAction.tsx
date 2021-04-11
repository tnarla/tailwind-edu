import { ComponentProps, ComponentType } from "react";
import clsx from "clsx";

interface Props {
  icon: ComponentType<ComponentProps<"svg">>;
  count?: number;
  color?: "blue" | "red" | "green";
}

export function TweetAction({ icon: Icon, count, color = "blue" }: Props) {
  return (
    <div
      className={clsx("flex items-center space-x-2 text-gray-500 group", {
        "hover:text-blue-400": color === "blue",
        "hover:text-red-400": color === "red",
        "hover:text-green-400": color === "green",
      })}
    >
      <Icon
        className={clsx("h-6 w-6 p-1 rounded-full group-hover:bg-opacity-20", {
          "group-hover:bg-blue-500": color === "blue",
          "group-hover:bg-red-500": color === "red",
          "group-hover:bg-green-500": color === "green",
        })}
      />
      {count && <span>{count}</span>}
    </div>
  );
}
