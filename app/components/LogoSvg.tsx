"use client";
import React, { ElementType } from "react";

type LogoProps = {
  Icon: ElementType;
  className?: string;
};

export default function LogoSvg({ Icon, className }: LogoProps) {
  return <Icon className={`w-10 h-10 ${className}`} />;
}
