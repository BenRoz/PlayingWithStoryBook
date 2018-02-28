import styled from 'styled-components';

const PlainInput = styled.input`
	border: 1px solid deepskyblue;
	border-radius: 60px;
	background: ghostwhite;
	width:  ${props => {
		switch (props.size) {
			case 'big':
				return '300px';
			case 'regular':
				return '200px';
			default:  
				return '100px';
		}
	}};
	height: 30px;
	outline: none;
	font-size: 1.1em;
	${(props) => props.hover && '&:hover {background: yellow; transform: scale(1.1); box-shadow: 0 0 1px transparent;};'}

`;

// &:hover{ ${(props) => {if(props.hover){
		
// 	return 'transform: perspective(1px) translateZ(0); box-shadow: 0 0 1px transparent;'
// };	
// }}};


export {PlainInput};