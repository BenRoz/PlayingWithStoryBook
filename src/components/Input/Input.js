import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PlainInput} from './style';
const log = console.log;
class Input extends React.Component {
    
    render() {
        const {hover, text, size} = this.props;
        log({hover});
        log({size});
        log({text})
        return <PlainInput type='text' hover={hover} placeholder={text} size={size} ></PlainInput>
        
    }
}


Input.propTypes = {
    size: PropTypes.string.isRequired,
    hover: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Input;