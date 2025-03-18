'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubmitBtnProps = {
  label: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset"; // Ensure type can be set
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ label, className, onClick, type = "button", ...props }) => {
  return (
    <Button
      type={type} // Set default type to "button" to prevent form submission
      className={cn(
        "relative overflow-hidden text-white font-nunito text-lg",
        "bg-gradient-to-l from-theme_green-870 to-theme_green-500",
        "hover:from-theme_green-500 hover:to-theme_green-870",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
};

export default SubmitBtn;
