import styled from 'styled-components';

interface IButtonProps {
    disabled?: boolean;
}


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: ${({disabled}) => (disabled ? '#A0AEC0' : '#81259D')};
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
    }
`