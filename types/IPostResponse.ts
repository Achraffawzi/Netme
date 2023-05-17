export interface IPostResponse {
  _id: string;
  title: string;
  content: string;
  thumbnail?: string;
  tags: string[];
  authorId?: {
    _id: string;
    username: string;
    picture: string;
  };
  readingSpan: number;
  createdAt: Date;
}
