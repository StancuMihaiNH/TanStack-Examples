import React from 'react';
import { usePost } from '../../Hooks/hooks';

export function Post({ postId, setPostId }) {
    const { status, data, error, isFetching } = usePost(postId);

    return (
        <>
            <a onClick={() => setPostId(-1)} href="#">
                Back
            </a>
            {!postId || status === 'pending'
                ? 'Loading...'
                : status === 'error'
                    ? <span>Error: {error.message}</span>
                    : <>
                        <h1>{data.title}</h1>
                        <div>
                            <p>{data.body}</p>
                        </div>
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>
            }
        </>
    )
}