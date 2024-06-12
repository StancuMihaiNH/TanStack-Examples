import React from 'react';
import { usePosts } from '../../Hooks/hooks';
import { useQueryClient } from '@tanstack/react-query';

export function Posts({ setPostId }) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
        <div>
            <h1>Posts</h1>
            {status === 'pending'
                ? 'Loading...'
                : status === 'error'
                    ? <span>Error: {error.message}</span>
                    : <>
                        {data.map((post) => (
                            <p key={post.id}>
                                <a onClick={() => {
                                    setPostId(post.id);
                                    console.log(queryClient.getQueryData(['post', post.id]));
                                    console.log(queryClient.getQueryData(['posts']));
                                }}
                                    href="#"
                                    style={
                                        // We can access the query data here to show bold links for
                                        // ones that are cached
                                        queryClient.getQueryData(['post', post.id])
                                            ? {
                                                fontWeight: 'bold',
                                                color: 'green'
                                            }
                                            : {}
                                    } >
                                    {post.title}
                                </a>
                            </p>
                        ))}
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>
            }
        </div>
    )
};