"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BsPersonCircle } from "react-icons/bs";
import { TbUserCircle, TbLogout2, TbEyeBolt } from "react-icons/tb";
import Link from "next/link";

const user_dropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <span>
          <BsPersonCircle className="cursor-pointer text-3xl text-gray-500 mr-5" />
          </span>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="admin"
          startContent={<TbUserCircle className="text-2xl text-gray-500" />}
        >
          Admin
        </DropdownItem>
        <DropdownItem
          key="changepass"
          startContent={<TbEyeBolt className="text-2xl text-gray-500" />}
        >
         <Link href='/changePassword'>Change Password</Link> 
        </DropdownItem>
        <DropdownItem
          className="text-red-500 font-bold"
          color="danger"
          key="new"
          startContent={<TbLogout2 className="text-2xl text-red-500" />}
        >
          <Link className="font-semibold" href='/'>Sign Out</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default user_dropdown;
