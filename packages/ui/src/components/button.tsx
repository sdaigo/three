"use client";

import { styled } from "@/styled-system/jsx";
import { button } from "@/styled-system/recipes";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

const StyledButton = styled("button", button);

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </StyledButton>
  );
};
