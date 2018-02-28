import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button as BootstrapButton} from 'react-bootstrap';
import styled from 'styled-components';

class Checkbox extends Component {
  
  constructor(props) {
    super(props)
    this.state = { checked: props.checked }
    this.toggle = this.toggle.bind(this)
    }

  
    componentDidMount() {
        if (this.props.indeterminate) {
          this.inputWrapper.indeterminate = true
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (this.props.checked !== nextProps.checked) {
          this.setState({
            checked: nextProps.checked,
          })
        }
    
        if (this.props.indeterminate !== nextProps.indeterminate) {
          this.inputWrapper.indeterminate = nextProps.indeterminate
        }
      }
    
      toggle(e) {
        this.setState({ checked: e.target.checked })
        this.props.onToggle(e.target.checked)
    }


  render() {
    const { label } = this.props;
    const { checked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={this.state.checked}
            onChange={this.toggle}
            onClick={this.props.onClick}
                      />
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Checkbox;