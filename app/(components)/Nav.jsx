import React from "react";

import { MdHomeFilled } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";

import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-between bg-nav p-4">
            <div className=" flex items-center space-x-4">
                <Link href="/">
                    <MdHomeFilled className="icon" />
                </Link>
                <Link href="/TicketPage/new">
                    <FaTicketAlt className="icon" />
                </Link>
            </div>
            <div>
                <p className="text-white">email@gmail.com</p>
            </div>
        </nav>
    );
}
