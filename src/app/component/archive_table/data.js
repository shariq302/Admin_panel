"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "REPORTED BY", uid: "reported", sortable: true},
  {name: "COMPLAINT REASON", uid: "complain", sortable: true},
  {name: "CREATED ON", uid: "created", sortable: true},
  {name: "EXPIRY STATUS", uid: "status"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Expired", uid: "expired"},
];

const users = [
  {
    id: 1,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 2,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 3,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "expired"
  },
  {
    id: 4,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 5,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 6,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 7,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 8,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 9,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 10,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  },
  {
    id: 11,
    title: "Tony Reichert",
    reported: "Katherine LongFord",
    complain: "I Think It's A Spam Or Scam",
    jobtype: "Part Time",
    created: "04-Sep-2022",
    salary: "250 - 300",
    experience: "5",
    status: "active"
  }
];

export {columns, users, statusOptions};
