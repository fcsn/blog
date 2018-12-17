import React from 'react';
import Header from 'components/common/Header';
import { withRouter } from "react-router-dom";

class HeaderContainer extends React.Component {
    handleRemove = () => {
    }

    render() {
        const { handleRemove } = this;
        const { match } = this.props;
        const { id } = match.params;
        return (
            <Header
                postId={id}
                onRemove={handleRemove}
            />
        );
    }
}

export default withRouter(HeaderContainer);
