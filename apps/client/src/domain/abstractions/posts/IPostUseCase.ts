import { Post } from '../../posts/Post';

export interface IPostUseCase {
   renderPostsAsync(): Promise<Post[]>;
}
