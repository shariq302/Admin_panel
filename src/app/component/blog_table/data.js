"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "IMAGE", uid: "image", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  {name: "CREATED ON", uid: "created", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    title: "Tony Reichert",
    image: "https://dev1.cryscampus.com//media/blog_images/317/202309131122236363.png",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 2,
    title: "Zoey Lang",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 3,
    title: "Jane Fisher",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    title: "William Howard",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    created: "13-09-2023",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  }
];

export {columns, users, statusOptions};
