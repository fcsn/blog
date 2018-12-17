import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';
import Prism from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
    state = {
        html: ''
}

renderMarkdown = () => {
    const { markdown } = this.props;
    // 마크다운이 존재하지 않는다면 공백 처리
    if(!markdown) {
        this.setState({ html : '' });
        return;
    }
    this.setState({
        html: marked(markdown, {
            breaks: true,
            sanitize: true
        })
    });
}

constructor(props) {
    super(props);
    const { markdown } = props;
    this.state = {
        html: markdown ? marked(props.markdown, { breaks: true, sanitize: true }) : ''
}
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.markdown !== this.props.markdown) {
        this.renderMarkdown();
    }
    if (prevState.html !== this.state.html) {
        Prism.highlightAll();
    }
}

render () {
    const { html } = this.state;

    // React에서 html을 렌더링하려면 객체를 만들어 내부에
    // _ _html 값을 설정해야 합니다.
    const markup = {
        __html: html
};

    // 그리고 dangerouslySetInnerHTML 값에 해당 객체를 넣어 주면 됩니다.
    return (
        <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}/>
    );
}
}

export default MarkdownRender;
