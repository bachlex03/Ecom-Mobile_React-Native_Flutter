import { Post } from '../../posts/Post';

export interface IPostRepository {
   getPostsAsync(): Promise<Post[]>;
}
