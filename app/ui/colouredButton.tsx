'use client';
import { ComponentType, PropsWithChildren } from 'react';

type ColouredButtonProps = {
  colour: string;
  label?: string;
  Icon?: ComponentType;
  onClick?: Function;
  border?: boolean;
};

const ColouredButton = ({
  colour,
  label,
  onClick,
  border = false,
  children,
}: PropsWithChildren<ColouredButtonProps>) => {
  const backgroundColourVariants = {
    red: `hover:bg-red-500/[.125] ${border && 'hover:border-red-500'}`,
    gmail: `hover:bg-gmail/[.125] ${border && 'hover:border-gmail'}`,
    github: `hover:bg-github/[.125] ${border && 'hover:border-github'}`,
    linkedin: `hover:bg-linkedin/[.125] ${border && 'hover:border-linkedin'}`,
  };

  const textColourVariants = {
    red: `group-hover:text-red-500`,
    gmail: `group-hover:text-gmail`,
    github: `group-hover:text-github`,
    linkedin: `group-hover:text-linkedin`,
  };

  return (
    <div
      className={`group w-fit rounded-md p-1.5 ${
        backgroundColourVariants[colour]
      } transition-all ${border && 'border-[1px] border-darkgray'}`}
      onClick={() => onClick}
    >
      <div
        className={`flex flex-row gap-1 items-center ${textColourVariants[colour]} text-sm`}
      >
        {children}
        {label && <span className={`align-middle ${textColourVariants[colour]} font-medium`}>{label}</span>}
      </div>
    </div>
  );
};

export default ColouredButton;
