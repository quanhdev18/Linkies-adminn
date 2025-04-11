import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive";
}

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-xl font-semibold ";
  const styles =
    variant === "destructive"
      ? "bg-red-500 text-white hover:bg-red-600"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button
      className={`${base}${styles} ${className}`}
      {...props}
    />
  );
}