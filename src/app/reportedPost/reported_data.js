"use client";
import React from "react";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  //   {name: "name", uid: "title", sortable: true},
  { name: "TITLE", uid: "name", sortable: true },
  { name: "REPORTED BY", uid: "reported", sortable: true },
  { name: "COMPAINTS REASON", uid: "complain", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "CREATED ON", uid: "created", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Deactive", uid: "deactive" },
];

const users = [
  {
    id: 1,
    name: "Andy Reichert",
    reported: "Reported",
    complain: "Abd",
    status: "active",
    created: "13-09-2023",
    action: "active",
  },
  {
    id: 2,
    name: "Andy Reichert",
    reported: "Reported",
    complain: "Abd",
    status: "active",
    created: "13-09-2023",
    action: "active",
  },
  {
    id: 3,
    name: "Andy Reichert",
    reported: "Reported",
    complain: "Abd",
    status: "active",
    created: "13-09-2023",
    action: "active",
  },
  {
    id: 4,
    name: "Andy Reichert",
    reported: "Reported",
    complain: "Abd",
    status: "active",
    created: "13-09-2023",
    action: "active",
  },
  {
    id: 5,
    name: "Andy Reichert",
    reported: "Reported",
    complain: "Abd",
    status: "active",
    created: "13-09-2023",
    action: "active",
  },
  {
    id: 6,
    name: "Andy Reichert",
    reported: "Reported",
    complain: "Abd",
    status: "active",
    created: "13-09-2023",
    action: "active",
  },
];

export { columns, users, statusOptions };
