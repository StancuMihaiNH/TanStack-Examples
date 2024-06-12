import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from '../Models/Post';

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async (): Promise<Array<Post>> => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return data;
        },
    });
};