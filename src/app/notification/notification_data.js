"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
//   {name: "name", uid: "title", sortable: true},
  {name: "TITLE", uid: "name", sortable: true},
  {name: "NOTIFICATION", uid: "notification", sortable: true},
//   {name: "CREATED ON", uid: "created", sortable: true},
//   {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    name: "Andy Reichert",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 2,
    name: "Abd Lang",
    // status: "deactive",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 3,
    name: "Abd Lang",
    // status: "deactive",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    name: "Abd Lang",
    // status: "deactive",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 5,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 6,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 7,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 8,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 9,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 10,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 11,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 12,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 13,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 14,
    name: "Abd Lang",
    // status: "active",
    // created: "13-09-2023",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  }
];

export {columns, users, statusOptions};
