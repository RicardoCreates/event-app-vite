import styled from "@emotion/styled";

export default function Header() {
    return (
        <StyledHeader>
            <h1>Event App</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #fdfefe;
    color: black;
    padding: 0.2rem;
    text-align: center;
    width: 100%;
    position:absolute;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 2px 5px 30px lightgrey;
    margin: 0; 
`