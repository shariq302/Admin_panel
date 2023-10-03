"use client"    
import React from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Button} from "@nextui-org/react";
import {Input,Textarea} from "@nextui-org/react";



export default function page({card_head}) {
  return (
    <Card className="rounded-xl border shadow-md " >
      <CardHeader className="flex gap-3 text-slate-50 bg-[#212529] font-inherit text-md">
      {card_head==="1"?'Term and Condition':'Privacy Policy'}
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
        <Textarea
            label="Description"
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
