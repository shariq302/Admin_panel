"use client"

import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Input,
  Textarea,
  Avatar,
} from "@nextui-org/react";

export default function page(props) {
  const [selected, setSelected] = useState("Term and Condition");

  const handleChange = (selectedOption) => {
    setSelected(selectedOption.target.value);
    console.log(`Option selected:`, selectedOption.target);
  };

  const HandleImage_Selector = (event) => {
    console.log('Upload Image ----- ', event.target.files[0])
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        isDismissable={false}
        size="4xl"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Blog
              </ModalHeader>
              <ModalBody>
            
                <Input
                  key={"outside"}
                  type="email"
                  label="Title"
                  labelPlacement={"outside"}
                  placeholder="Title here"
                />

                <Textarea
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  minRows={8}
                  className=" mt-5 rounded-sm "
                />

                <p className="text-xs color-black font-semibold -mb-3">Type</p>
                
                
                <input
                className="mt-5"
                variant="none"
                type="file"
                name="file"
                accept="image/*"
                onChange={HandleImage_Selector}
                />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
