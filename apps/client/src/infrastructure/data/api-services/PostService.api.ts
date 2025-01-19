import { IPostRepository } from '../../../domain/abstractions/posts/IPostRepository';
import { Post } from '../../../domain/posts/Post';

export class PostService implements IPostRepository {
   getPostsAsync(): Promise<Post[]> {
      return fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((posts: any[]) =>
            posts.map((post) => new Post(post.id, post.title, post.body)),
         );
   }
}
