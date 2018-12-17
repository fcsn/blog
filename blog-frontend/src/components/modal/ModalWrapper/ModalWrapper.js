import React, { Component } from 'react';
import styles from './ModalWrapper.scss';
import cx from 'classnames';

class ModalWrapper extends Component {
    render() {
        const { children, visible } = this.props;
        if (!visible) return null;
        return (
            <div>
                <div className={cx('gray-background')}>
                    <div className={cx('modal-wrapper')}>
                        <div className={cx('modal')}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWrapper;
