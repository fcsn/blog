import React from 'react';
import cx from 'classnames';
import styles from './PostBody.scss';

class PostBody extends React.Component {
    render() {
        return (
            <div className={cx('post-body')}>
                <div className={cx('paper')}>
                    내용
                </div>
            </div>
        );
    }
}

export default PostBody;
