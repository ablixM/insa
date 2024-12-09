export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: number;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  description: string;
  tags?: string[];
  likesCount: number;
  commentsCount: number;
  imageUrl?: string;
  categories: string;
}
