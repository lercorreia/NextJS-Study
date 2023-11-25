import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Deleteblock() {
    return (
        <div>
            <FaTrash className="icon bg-destructive hover:cursor-pointer" />
        </div>
    );
}
