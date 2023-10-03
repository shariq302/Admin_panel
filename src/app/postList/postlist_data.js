"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
//   {name: "name", uid: "title", sortable: true},
  {name: "TITLE", uid: "name", sortable: true},
  {name: "RECRUITER", uid: "recruiter", sortable: true},
  {name: "LOCATION", uid: "location", sortable: true},
  {name: "JOB TYPE", uid: "jobtype", sortable: true},
  {name: "POSTED DATE", uid: "postdate", sortable: true}, 
  {name: "SALARY RANGE", uid: "salary"},
  {name: "EXPERIENCE", uid: "experience"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    name: "Andy Reichert",
    recruiter: "Mr. Jack",
    location: "London",
    jobtype: "part time",
    postdate: "13-09-2023",
    salary: "100000-250000",
    experience: "5"
  },
  {
    id: 2,
    name: "Andy Reichert",
    recruiter: "Mr. Jack",
    location: "London",
    jobtype: "part time",
    postdate: "13-09-2023",
    salary: "100000-250000",
    experience: "5"
  },
  {
    id: 3,
    name: "Andy Reichert",
    recruiter: "Mr. Jack",
    location: "London",
    jobtype: "part time",
    postdate: "13-09-2023",
    salary: "100000-250000",
    experience: "5"
  },
  {
    id: 4,
    name: "Andy Reichert",
    recruiter: "Mr. Jack",
    location: "London",
    jobtype: "part time",
    postdate: "13-09-2023",
    salary: "100000-250000",
    experience: "5"
  },
  {
    id: 5,
    name: "Andy Reichert",
    recruiter: "Mr. Jack",
    location: "London",
    jobtype: "part time",
    postdate: "13-09-2023",
    salary: "100000-250000",
    experience: "5"
  },
  {
    id: 6,
    name: "Andy Reichert",
    recruiter: "Mr. Jack",
    location: "London",
    jobtype: "part time",
    postdate: "13-09-2023",
    salary: "100000-250000",
    experience: "5"
  },
];

export {columns, users, statusOptions};
