import React from 'react';
import cx from 'classnames';
import styles from './PostInfo.scss';



class PostInfo extends React.Component {
    render() {
        return (
            <div className={cx('post-info')}>
                <div className={cx('info')}>
                    <h1>타이틀</h1>
                    <div className={cx('tags')}>
                        <a>#태그</a> <a>#태그</a> <a>#태그</a>
                    </div>
                    <div className={cx('date')}>Oct 29, 2017</div>
                </div>
            </div>
        );
    }
}

export default PostInfo;
