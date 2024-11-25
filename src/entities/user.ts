import Role from "./role";

export default interface User {
    id: number;
    email: string;
    name: string;
    username: string;
    roleId: number;
    role: Role[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
} 