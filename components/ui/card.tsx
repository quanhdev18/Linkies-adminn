import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-gray-200 shadow p-4 bg-white">{children}</div>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`text-sm text-gray-800 ${className}`}>{children}</div>;
}
