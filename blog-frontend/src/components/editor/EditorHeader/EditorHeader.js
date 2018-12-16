import React from 'react';
import Button from 'components/common/Button';
import styles from './EditorHeader.scss';
import cx from 'classnames';

const EditorHeader = ({onGoBack, onSubmit}) => {
    return (
        <div className={cx('editor-header')}>
            <div className={cx('back')}>
                <Button onClick={onGoBack} theme='outline'>뒤로가기</Button>
            </div>
            <div className={cx('submit')}>
                <Button onClick={onSubmit} theme='outline'>작성하기</Button>
            </div>
        </div>
);
};

export default EditorHeader;
