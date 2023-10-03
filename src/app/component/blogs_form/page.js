"use client"  

import React from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Button} from "@nextui-org/react";
import {Input,Textarea} from "@nextui-org/react";



export default function page({card_head}) {
  return (
    <Card className="rounded-md border shadow-md " >
      <CardHeader className="flex gap-3 text-slate-50 bg-[#212529] ">
      {card_head}
      </CardHeader>
      <Divider/>
      <CardBody>
        <Input
          type="text"
          labelPlacement="outside"
          label="Title"
          placeholder="Enter your Title"
          className="rounded-sm "
        />
         <span className="mt-5 mb-1">Add Image</span>
         <input type="file" className="block w-full text-sm text-slate-700 border-r-1 bg-[#f4f4f5d6] py-2
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-slate-800
            hover:file:bg-violet-100
            "/>
        <Textarea
            label="Add Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            minRows={8}
            className=" mt-5 rounded-sm "
            />
      </CardBody>
      <div className="flex justify-end p-5">
        <Button className='bg-slate-500 text-slate-50 rounded-sm' size="md">
            Save
        </Button>  
      </div>
      
    </Card>
  );
}
