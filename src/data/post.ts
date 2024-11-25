import { FetchResponse } from '../services/api-client';
import { Post } from '../entities/post';
import categories from './catagory';

const postData: FetchResponse<Post> = {
    results: [
        {
            id: 1,
            title: "Understanding TypeScript Interfaces",
            content: "This post explains how to define and use TypeScript interfaces effectively.",
            authorId: 101,
            authorName: "John Doe",
            createdAt: "2024-11-15T09:00:00Z",
            updatedAt: "2024-11-16T12:00:00Z",
            published: true,
            tags: ["typescript", "interfaces", "programming"],
            likesCount: 120,
            commentsCount: 15,
            imageUrl: "https://example.com/image1.jpg",
            catagory: [categories.results.find((catagory) => catagory.id === 1)!]
        },
        {
            id: 2,
            title: "Exploring React Hooks",
            content: "An in-depth guide to understanding and using React hooks in modern applications.",
            authorId: 102,
            authorName: "Jane Smith",
            createdAt: "2024-11-14T10:30:00Z",
            updatedAt: "2024-11-15T11:45:00Z",
            published: true,
            tags: ["react", "hooks", "javascript"],
            likesCount: 250,
            commentsCount: 32,
            imageUrl: "https://example.com/image2.jpg",
            catagory: [categories.results.find((catagory) => catagory.id === 2)!]
        },
        {
            id: 3,
            title: "Introduction to Zustand for State Management",
            content: "Learn how Zustand can simplify state management in React projects.",
            authorId: 103,
            authorName: "Mike Johnson",
            createdAt: "2024-11-12T08:00:00Z",
            updatedAt: "2024-11-12T10:00:00Z",
            published: true,
            tags: ["zustand", "state management", "react"],
            likesCount: 180,
            commentsCount: 20,
            imageUrl: "https://example.com/image3.jpg",
            catagory: [categories.results.find((catagory) => catagory.id === 1)!]
        },
        {
            id: 4,
            title: "Why TypeScript is Essential for Large Projects",
            content: "Exploring the benefits of TypeScript in maintaining large-scale codebases.",
            authorId: 104,
            authorName: "Sara Lee",
            createdAt: "2024-11-10T13:20:00Z",
            updatedAt: "2024-11-11T09:50:00Z",
            published: true,
            tags: ["typescript", "large projects", "best practices"],
            likesCount: 300,
            commentsCount: 40,
            imageUrl: "https://example.com/image4.jpg",
            catagory: [categories.results.find((catagory) => catagory.id === 1)!]
        },
        {
            id: 5,
            title: "A Beginner's Guide to Chakra UI",
            content: "Learn the basics of designing responsive UIs with Chakra UI.",
            authorId: 105,
            authorName: "Alex Brown",
            createdAt: "2024-11-08T07:45:00Z",
            updatedAt: "2024-11-09T08:20:00Z",
            published: true,
            tags: ["chakra ui", "ui design", "react"],
            likesCount: 150,
            commentsCount: 25,
            imageUrl: "https://example.com/image5.jpg",
            catagory: [categories.results.find((catagory) => catagory.id === 1)!]
        }
    

    ]

}

     

export default postData;
