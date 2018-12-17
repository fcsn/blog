import React from 'react';
import cx from 'classnames';
import styles from './PostBody.scss';
import MarkdownRender from "components/common/MarkdownRender";

const PostBody = ({ body }) => (
            <div className={cx('post-body')}>
                <div className={cx('paper')}>
                    <MarkdownRender markdown={body}/>
                </div>
            </div>
);

export default PostBody;
