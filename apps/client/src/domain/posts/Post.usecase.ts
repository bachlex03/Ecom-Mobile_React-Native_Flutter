import { IPostRepository } from '../abstractions/posts/IPostRepository';
import { IPostUseCase } from '../abstractions/posts/IPostUseCase';
import { Post } from './Post';

export class PostUseCase implements IPostUseCase {
   private readonly _postRepository: IPostRepository;

   constructor(postRepository: IPostRepository) {
      this._postRepository = postRepository;
   }

   async renderPostsAsync(): Promise<Post[]> {
      var posts = await this._postRepository.getPostsAsync();

      return posts;
   }
}
