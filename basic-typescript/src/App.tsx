import * as React from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Posts } from './Components/Posts/Posts';
import { persister, queryClient } from '.';
import { Post } from './Components/Post/Post';

export const App = (): JSX.Element => {
    const [postId, setPostId] = React.useState<number>(-1);

    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
            <p>
                As you visit the posts below, you will notice them in a loading state the first time you
                load them. However, after you return to this list and click on any posts you have already
                visited again, you will see them load instantly and background refresh right before your
                eyes!{' '}
                <strong>
                    (You may need to throttle your network speed to simulate longer loading sequences)
                </strong>
            </p>
            {postId != -1
                ? <Post postId={postId} setPostId={setPostId} />
                : <Posts setPostId={setPostId} />
            }
            <ReactQueryDevtools initialIsOpen />
        </PersistQueryClientProvider>
    );
};