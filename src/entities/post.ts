import { Catagory } from "./catagory";

export interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number; 
    authorName: string; 
    createdAt: string;  
    updatedAt: string; 
    published: boolean; 
    tags?: string[]; 
    likesCount: number; 
    commentsCount: number; 
    imageUrl?: string; 
    catagory: Catagory[]
}
