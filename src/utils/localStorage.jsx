const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Complete Project Report",
          taskDescription: "Prepare and submit the final project report.",
          taskDate: "2025-03-28",
          category: "Documentation",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Client Meeting",
          taskDescription: "Discuss project milestones with the client.",
          taskDate: "2025-03-30",
          category: "Meeting",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review the latest pull requests.",
          taskDate: "2025-03-29",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design Wireframes",
          taskDescription: "Create initial wireframes for the mobile app.",
          taskDate: "2025-03-27",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix Bugs",
          taskDescription: "Resolve issues identified during testing.",
          taskDate: "2025-03-28",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Prepare Presentation",
          taskDescription: "Prepare slides for the upcoming demo.",
          taskDate: "2025-03-29",
          category: "Presentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Develop API Endpoints",
          taskDescription: "Build and test RESTful APIs for the project.",
          taskDate: "2025-03-28",
          category: "Backend",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Database Optimization",
          taskDescription: "Improve query performance in the database.",
          taskDate: "2025-03-30",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Unit Testing",
          taskDescription: "Write and execute unit tests for modules.",
          taskDate: "2025-03-31",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Create User Stories",
          taskDescription: "Define user stories for the next sprint.",
          taskDate: "2025-03-27",
          category: "Agile",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Test New Features",
          taskDescription: "Perform functional testing on new features.",
          taskDate: "2025-03-28",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Update Documentation",
          taskDescription: "Update API documentation for recent changes.",
          taskDate: "2025-03-29",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Plan Sprint Retrospective",
          taskDescription: "Prepare agenda and invite participants.",
          taskDate: "2025-03-28",
          category: "Agile",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Deploy Application",
          taskDescription: "Deploy the latest version to production.",
          taskDate: "2025-03-30",
          category: "DevOps",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Update UI Components",
          taskDescription: "Enhance and refactor frontend components.",
          taskDate: "2025-03-29",
          category: "UI/UX",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin);
    
  }
  