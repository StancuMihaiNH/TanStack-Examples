import { useQuery, skipToken } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from '../Models/Post';

const getPostById = async (id: number): Promise<Post> => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};

export function usePost(postId: number) {
    return useQuery({
        queryKey: ['post', postId],
        queryFn: postId ? () => getPostById(postId) : skipToken,
    });
};