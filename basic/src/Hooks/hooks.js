import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getPostById = async (id) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};

export function usePost(postId) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId
  })
};

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return data;
    }
  })
};