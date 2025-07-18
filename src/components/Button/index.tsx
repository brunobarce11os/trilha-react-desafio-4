import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const Button = ({ title, onClick, disabled = false }: IButtonProps) => (
  <ButtonContainer 
    onClick={onClick}
    disabled={disabled}> {title} </ButtonContainer>


)

export default Button;
