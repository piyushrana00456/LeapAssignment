import React from "react";
import { Menu } from "lucide-react";
export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-4 py-3 shadow-md bg-white">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                    <img src="./Vector.png" alt="" />
                </div>
                <span className="text-lg font-semibold">
                    <span className="text-blue-600">LEAP</span>
                    <span className="text-orange-500">SCHOLAR</span>
                </span>
            </div>

            {/* Right: Hamburger Icon */}
            <button className="md:hidden">
                <Menu className="w-6 h-6 text-black" />
            </button>
        </header>
    );
}