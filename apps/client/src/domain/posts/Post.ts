import { IPost } from '../abstractions/posts/IPost';

export class Post implements IPost {
   id: number;
   title: string;
   body: string;

   constructor(id: number, title: string, body: string) {
      this.id = id;
      this.title = title;
      this.body = body;
   }
}
