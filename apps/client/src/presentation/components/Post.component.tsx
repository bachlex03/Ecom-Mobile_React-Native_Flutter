import React from 'react';
import { Text, View, Button } from 'react-native';
import { IPost } from '../../domain/abstractions/posts/IPost';

const PostComp = ({ post }: { post: IPost[] }) => {
   console.warn(post[0]);

   return (
      <View>
         {post.map((p, i) => (
            <View key={i}>
               <Text>{p.title}</Text>
               <Text>{p.body}</Text>
               <Button
                  title="Press me"
                  onPress={() => console.warn('Pressed')}
               />
            </View>
         ))}
      </View>
   );
};

export default PostComp;
