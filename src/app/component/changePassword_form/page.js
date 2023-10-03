"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { FaEye, FaEyeSlash, FaFontAwesome } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function page({ card_head }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);

  const [old_pass, set_old_pass] = useState("");
  const [new_pass, set_new_pass] = useState("");
  const [confirm_pass, set_confirm_pass] = useState("");
  const [submit_btn, set_submit_btn] = useState(true);

  useEffect(() => {
    if (old_pass && new_pass && confirm_pass !== "") {
      set_submit_btn(false);
    }
  }, [old_pass, new_pass, confirm_pass]);

  const submitForm = (e) => {
    e.preventDefault();
    if (old_pass && new_pass && confirm_pass !== "") {
      if (new_pass === confirm_pass) {
        console.log("old_pass , new_pass , confirm_pass", old_pass, new_pass, confirm_pass);
        toast.success("Password Change");
      } else {
        console.log("pass not match ");
        toast.error("Password not match");
      }
    }
  };

  const isPasswordMatch = confirm_pass !== "" && new_pass !== "" && new_pass === confirm_pass;

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Card className="rounded-md border shadow-md ">
        <CardHeader className="flex gap-5 text-slate-50 bg-[#212529] ">{card_head}</CardHeader>
        <Divider />
        <CardBody>
          <Input
            label="Old Password"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your password"
            required
            onChange={(e) => set_old_pass(e.target.value)}
            endContent={
              <button className="outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <FaEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-full rounded-0"
          />
          <Input
            label="New Password"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your password"
            required
            onChange={(e) => set_new_pass(e.target.value)}
            endContent={
              <button className="outline-none" type="button" onClick={toggleVisibility1}>
                {isVisible1 ? (
                  <FaEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible1 ? "text" : "password"}
            className="max-w-full rounded-0 mt-5"
          />
          <Input
            label="Confirm Password"
            variant="bordered"
            placeholder="Enter your password"
            required
            labelPlacement="outside"
            onChange={(e) => set_confirm_pass(e.target.value)}
            endContent={
              <button className="outline-none" type="button" onClick={toggleVisibility2}>
                {isVisible2 ? (
                  <FaEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible2 ? "text" : "password"}
            className="max-w-full rounded-0 mt-5"
          />
          {isPasswordMatch ? null : confirm_pass !== "" ? (
            <label className="text-xs text-red-500 pl-3 pt-3">Password doesn't match</label>
          ) : null}
        </CardBody>
        <div className="flex w-full p-5">
          {!submit_btn ? (
            <Button className="bg-slate-950 w-full text-slate-50 rounded-sm" type="submit">
              Change Password
            </Button>
          ) : (
            <Button className="bg-[#6e7174] w-full text-slate-50 rounded-sm" disabled type="submit">
              Change Password
            </Button>
          )}
        </div>
      </Card>
    </form>
  );
}
