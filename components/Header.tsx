"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="border-b border-zinc-200 dark:border-zinc-800">
            <div className="main-container inner flex items-center justify-between py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg" // make sure this exists in /public
                        alt="Coinpulse logo"
                        width={132}
                        height={40}
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6">

                    <Link
                        href="/"
                        className={cn(
                            "nav-link text-sm font-medium transition-colors",
                            pathname === "/"
                                ? "text-black dark:text-white is-active"
                                : "text-zinc-500 hover:text-black dark:hover:text-white"
                        )}
                    >
                        Home
                    </Link>

                    <Link
                        href="/coins"
                        className={cn(
                            "nav-link text-sm font-medium transition-colors",
                            pathname === "/coins"
                                ? "text-black dark:text-white is-active"
                                : "text-zinc-500 hover:text-black dark:hover:text-white"
                        )}
                    >
                        All Coins
                    </Link>

                    {/* Placeholder for search */}
                    <div className="text-sm text-zinc-400">
                        Search Modal
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;