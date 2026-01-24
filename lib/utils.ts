import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const colors = [
    "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
    "hover:bg-[#FF6F61]",
    "hover:bg-[#6F2C91]",
    "hover:bg-blue-100",
    "hover:bg-pink-100",
    "hover:bg-green-100",
    "hover:bg-yellow-100",
    "hover:bg-purple-100",
];
