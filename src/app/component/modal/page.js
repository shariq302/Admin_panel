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
} from "@nextui-org/react";

export default function page(props) {
  const [selected, setSelected] = useState("Term and Condition");

  const handleChange = (selectedOption) => {
    setSelected(selectedOption.target.value);
    console.log(`Option selected:`, selectedOption.target);
  };

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
                Edit Question
              </ModalHeader>
              <ModalBody>
                <p className="text-xs color-black font-semibold -mb-3">Type</p>
                <Select
                  placeholder="Privacy Policy"
                  className="max-w-full mb-3 mt-1 pl-3 rounded-sm  bg-white text-slate-950"
                  radius="none"
                  aria-label="Select Content Type"
                  variant="underlined"
                  onChange={handleChange}
                >
                  <SelectItem
                    key="1"
                    name="Term and Condition"
                    value="Term_and_Condition"
                  >
                    Term and Condition
                  </SelectItem>
                  <SelectItem
                    key="2"
                    name="Privacy Policy"
                    value="Privacy_Policy"
                    Select
                  >
                    Privacy Policy
                  </SelectItem>
                </Select>

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
