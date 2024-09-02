import styled from "@emotion/styled";

export default function Footer() {
    return (
        <StyledFooter>Copyright</StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`

