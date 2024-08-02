import styled from "@emotion/styled"
import { ReactNode } from "react"

interface StyledButtonProps{
  children: ReactNote
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid primary`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: 'primary',
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
        backgroundColor: "secondary"
    }
}))

  return(
    <>
    <StyledButton>
      {children}
    </StyledButton>
    </>
  )}
  export default StyledButton