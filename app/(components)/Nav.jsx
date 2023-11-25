import React from "react";
import Image from "next/image";

import { MdHomeFilled } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import Link from "next/link";
import imageasset from "../images/pic.png";

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
            <div className="flex items-center space-x-2">
                <p className="text-black">email@gmail.com</p>
                <Image
                    src={imageasset}
                    alt="logo1"
                    width={0}
                    height={40}
                    className="avatar-image rounded-full"
                />
            </div>
        </nav>
    );
}
