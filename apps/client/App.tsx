import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import container from './src/domain/dependencyInjection';
import { IPostUseCase } from './src/domain/abstractions/posts/IPostUseCase';
import { Post } from './src/domain/posts/Post';
import PostComp from './src/presentation/components/Post.component';

export default function App(): React.JSX.Element {
   const [posts, setPosts] = useState([] as Post[]);

   useEffect(() => {
      const getPostsAsync = async () => {
         const postService = container.get<IPostUseCase>('IPostUseCase');

         const post = await postService.renderPostsAsync();

         setPosts(post);
      };

      getPostsAsync();
   }, []);

   return (
      <View style={styles.container}>
         <Text>Open up App.js to start working on your app!!!!</Text>
         <StatusBar style="auto" />
         <PostComp post={posts} />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
