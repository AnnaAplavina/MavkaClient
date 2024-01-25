"use client";

import { CategoryContent } from "@/db_interfaces/interfaces";
import { FcBiohazard, FcEngineering, FcFilmReel, FcMultipleDevices, FcMusic, FcOldTimeCamera, FcReddit, FcSalesPerformance, FcSportsMode, FcSteam } from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: CategoryContent[];
}

const iconMap: Record<CategoryContent["name"], IconType> = {
  "Юмор": FcReddit,
  "Игры": FcSteam,
  "Еда": FcBiohazard,
  "Музыка": FcMusic,
  "Фотография": FcOldTimeCamera,
  "Спорт": FcSportsMode,
  "Финансы": FcSalesPerformance,
  "Информационные технологии": FcMultipleDevices,
  "Кино": FcFilmReel,
  "Наука": FcEngineering,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}