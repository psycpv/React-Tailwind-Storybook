import React from "react";
import * as Icons from "@heroicons/react/24/solid"

export default function APPIconButton({ iconName, iconClassName, bgClassName }) {
  const iconColor = iconClassName ? iconClassName : "text-gray-900  dark:text-white";
  const bgColor = bgClassName ? bgClassName : "bg-gray-50 opacity-50 hover:opacity-100 hover:bg-gray-200 focus:opacity-100 focus:ring-2 ring-gray-800 dark:bg-gray-800 dark:opacity-50 dark:hover:opacity-100 dark:focus:opacity-100 dark:ring-gray-50";
  const DynamicHeroIcon = ({ name }) => {
    const IconComponent = Icons[name];
  
    if (!IconComponent) { // Return a default one
      return <Icons.PlusIcon className={`h-2.5 w-2.5 ${iconColor}`} />;
    }
  
    return <IconComponent className={`h-2.5 w-2.5 ${iconColor}`} />;
  };
  return (
    <button
      className={`flex justify-center items-center p-2 rounded w-fit ${bgColor} ${iconColor}`}
    >
      <DynamicHeroIcon name={iconName} />
    </button>
  );
}
