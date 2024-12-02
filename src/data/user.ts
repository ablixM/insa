// // user.ts

// import User from "../entities/user";
// import { FetchResponse } from "../services/api-client";
// import roles from "./roles";

// const userData: FetchResponse<User> = {
//   results: [
//     {
//       id: 1,
//       email: "john.doe@example.com",
//       firstName: "John",
//       lastName: "Doe",
//       name: "John Doe",
//       username: "john_doe",
//       role: Admi
//       password: "Password@123",
//     },
//     {
//       id: 2,
//       email: "jane.smith@example.com",
//       firstName: "Jane",
//       lastName: "Smith",
//       name: "Jane Smith",
//       username: "jane_smith",
//       roleId: 2,
//       role: [roles.results.find((role) => role.id === 2)!],
//       password: "secure456",
//     },
//     {
//       id: 3,
//       email: "mike.johnson@example.com",
//       firstName: "Mike",
//       lastName: "Johnson",
//       name: "Mike Johnson",
//       username: "mike_johnson",
//       roleId: 3, // Matches the role id for Author
//       role: [roles.results.find((role) => role.id === 3)!],
//       password: "Abermac@1995",
//     },
//     {
//       id: 4,
//       email: "sara.lee@example.com",
//       name: "Sara Lee",
//       firstName: "Sara",
//       lastName: "Lee",
//       username: "sara_lee",
//       roleId: 4,
//       role: [roles.results.find((role) => role.id === 4)!],
//       password: "Abermac@1995",
//     },
//     {
//       id: 5,
//       email: "alex.brown@example.com",
//       firstName: "Alex",
//       lastName: "Brown",
//       name: "Alex Brown",
//       username: "alex_brown",
//       roleId: 5,
//       role: [roles.results.find((role) => role.id === 5)!],
//       password: "Abermac@1995",
//     },
//   ],
// };

// export default userData;
