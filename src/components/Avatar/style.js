import styled from 'styled-components';

const AvatarWrapper = styled.input`
    border: 1px solid deepskyblue;
    cursor: pointer;
    border-radius: 50%;
    padding: 2px;
	background: #C1C7D0;
	width:  ${props => {
		switch (props.size) {
			case 'big':
				return '80px';
			case 'regular':
				return '40px';
			default:  
				return '32px';
		}
    }};
    height:  ${props => {
		switch (props.size) {
			case 'big':
				return '80px';
			case 'regular':
				return '40px';
			default:  
				return '32px';
		}
	}};
	outline: none;
`;

export {AvatarWrapper};