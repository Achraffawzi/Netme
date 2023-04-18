export interface IPostResponse {
  _id: string;
  title: string;
  content: string;
  thumbnail?: string;
  tags: string[];
  authorId?: any;
  readingSpan: number;
  createdAt: Date;
}
