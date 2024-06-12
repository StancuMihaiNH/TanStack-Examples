import { usePost } from '../../Hooks/usePost';
import { IPostProps } from './Post.types';

export const Post = (props: IPostProps): JSX.Element => {
    const { status, data, error, isFetching } = usePost(props.postId);

    return (
        <div>
            <div>
                <a onClick={(): void => props.setPostId(-1)} href="#">
                    Back
                </a>
            </div>
            {!props.postId || status === 'pending'
                ? 'Loading...'
                : error instanceof Error
                    ? <span>Error: {error.message}</span>
                    : <>
                        <h1>{data?.title}</h1>
                        <div>
                            <p>{data?.body}</p>
                        </div>
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>
            }
        </div>
    );
};