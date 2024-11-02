const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 2,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Complete Project A",
        description: "Finish the initial phase of Project A.",
        date: "2023-10-15",
        category: "Development",
        taskNumber: "active 1",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Update Documentation",
        description: "Revise project documentation for the new release.",
        date: "2023-10-20",
        category: "Documentation",
        taskNumber: "failed 2",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Test Feature X",
        description: "Perform tests on Feature X and log results.",
        date: "2023-10-22",
        category: "Testing",
        taskNumber: "active 3",
      },
    ],
  },
  {
    id: 2,
    firstName: "Suresh",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        failed: false,
        title: "Design Mockups",
        description: "Create mockups for the new mobile app UI.",
        date: "2023-10-18",
        category: "Design",
        taskNumber: "newTask 1",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Backend Integration",
        description: "Integrate backend API with frontend components.",
        date: "2023-10-19",
        category: "Development",
        taskNumber: "active 2",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Bug Fixes",
        description: "Resolve issues reported during testing.",
        date: "2023-10-25",
        category: "Maintenance",
        taskNumber: "failed 3",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Conduct Survey",
        description: "Send out and analyze the customer feedback survey.",
        date: "2023-10-21",
        category: "Research",
        taskNumber: "newTask 1",
      },
      {
        active: false,
        newTask: false,
        failed: false,
        title: "Write Report",
        description: "Compile results and insights into a final report.",
        date: "2023-10-23",
        category: "Reporting",
        taskNumber: "completed 2",
      },
    ],
  },
  {
    id: 4,
    firstName: "Anjali",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 2,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Update Database",
        description: "Perform data migrations and updates in the database.",
        date: "2023-10-26",
        category: "Database",
        taskNumber: "active 1",
      },
      {
        active: true,
        newTask: true,
        failed: false,
        title: "Security Audit",
        description: "Conduct a full security audit of the system.",
        date: "2023-10-28",
        category: "Security",
        taskNumber: "newTask 2",
      },
      {
        active: false,
        newTask: false,
        failed: true,
        title: "Optimize Code",
        description: "Improve performance in core application modules.",
        date: "2023-10-29",
        category: "Development",
        taskNumber: "failed 3",
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 2,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        failed: true,
        title: "Customer Support",
        description: "Respond to and resolve customer inquiries.",
        date: "2023-10-18",
        category: "Support",
        taskNumber: "failed 1",
      },
      {
        active: true,
        newTask: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Create slides for the upcoming client presentation.",
        date: "2023-10-20",
        category: "Sales",
        taskNumber: "active 2",
      },
    ],
  },
];

const admin = {
  id: 1,
  firstName: "Amit",
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("employees");
  // console.log(JSON.parse(data))

  return { employees, admin };
};
