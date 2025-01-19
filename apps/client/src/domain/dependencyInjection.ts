import { Container } from 'inversify';
import { IPostRepository } from './abstractions/posts/IPostRepository';
import { PostService } from '../infrastructure/data/api-services/PostService.api';
import { IPostUseCase } from './abstractions/posts/IPostUseCase';
import { PostUseCase } from './posts/Post.usecase';

const container = new Container();

container
   .bind<IPostRepository>('IPostRepository')
   .toConstantValue(new PostService());

container
   .bind<IPostUseCase>('IPostUseCase')
   .toDynamicValue(
      () => new PostUseCase(container.get<PostService>('IPostRepository')),
   );

export default container;
