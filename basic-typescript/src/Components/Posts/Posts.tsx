import { usePosts } from '../../Hooks/usePosts';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { IPostsProps } from './Posts.types';

export const Posts = (props: IPostsProps): JSX.Element => {
    const queryClient: QueryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === 'pending'
                    ? 'Loading...'
                    : error instanceof Error
                        ? <span>Error: {error.message}</span>
                        : <>
                            <div>
                                {data?.map((post) => (
                                    <p key={post.id}>
                                        <a onClick={(): void => props.setPostId(post.id)}
                                            href="#"
                                            style={
                                                queryClient.getQueryData(['post', post.id])
                                                    ? {
                                                        fontWeight: 'bold',
                                                        color: 'green',
                                                    }
                                                    : {}
                                            } >
                                            {post.title}
                                        </a>
                                    </p>
                                ))}
                            </div>
                            <div>{isFetching ? 'Background Updating...' : ' '}</div>
                        </>
                }
            </div>
        </div>
    );
}