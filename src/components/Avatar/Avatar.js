import React, {Component} from 'react';
import {AvatarWrapper} from './style';

class Avatar extends React.Component {
    
    render() {
        return <AvatarWrapper size={this.props.size} ></AvatarWrapper>
        
    }
}
// Input.propTypes = {};

export default Avatar;