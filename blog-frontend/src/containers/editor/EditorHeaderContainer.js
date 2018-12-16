// EditorHeader 컴포넌트에 리덕스 상태와 액션 생성 함수를 붙여 줍시다.
// 왼쪽 뒤로가기 버튼과 오른쪽 글쓰기 버튼에 기능을 붙이겠습니다.
//
// 왼쪽 버튼을 눌렀을 때는 리액트 라우터에서 뒤로가기를 하는
// history 객체의 goBack 함수를 호출하겠습니다.
// 이 과정에서 withRouter를 불러와 컴포넌트를 내보낼 때 감싸 줍니다.
// 해당 컴포넌트에서 리액트 라우터가 전달해 주는 props 값을 받아 오기 위해서입니다.
// 현재 컴포넌트는 리덕스와 상태를 연결하려고 connect 함수로 감싸여 있는데,
// connect와 withRouter가 중첩되어도 무방합니다.
//
// 오른쪽 버튼을 눌렀을 때는 글쓰기 액션을 발생시킨 후,
// postId 값을 받아 와 포스트 주소로 이동합니다.
//
// 그리고 componentDidMount가 발생할 때 INITIALIZE 액션을 실행시켜
// 에디터 상태를 초기화하세요. 초기화하지 않으면 이전에 작성한 상태가 남아 있습니다.

import React, { Component } from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {
    componentDidMount() {
        const { EditorActions } = this.props;
        EditorActions.initialize();
    }

    handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    handleSubmit = async () => {
        const { title, markdown, tags, EditorActions, history } = this.props;
        const post = {
            title,
            body: markdown,
            tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
        };
        try {
            await EditorActions.writePost(post);
            history.push(`/post/${this.props.postId}`);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { handleGoBack, handleSubmit } = this;
        return (
            <EditorHeader
                onGoBack={handleGoBack}
                onSubmit={handleSubmit}
            />
        );
    }
}

export default connect(
    state => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags'),
        postId: state.editor.get('postId')
    }),
    dispatch => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(withRouter(EditorHeaderContainer))
