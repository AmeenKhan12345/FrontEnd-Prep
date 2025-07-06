const students = [
    { name: "Riya", marks: 85 },
    { name: "Aman", marks: 72 },
    { name: "Neha", marks: 91 },
    { name: "Ravi", marks: 60 }
  ];
  
  const greeting = students.map(student => `Hello ${student.name}, your marks are ${student.marks}`)
  console.log(greeting)
  
  const topper = students.filter(student => student.marks >= 80).map(student => student.name)
  console.log(topper)
  
  const total = students.reduce((sum, student) => sum + student.marks, 0)
  console.log(total)