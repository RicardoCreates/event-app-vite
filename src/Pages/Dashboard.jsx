import styled from "@emotion/styled";

export default function Dashboard() {
    return (
        <StyledContainer>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <a>This is a App where you can find and create new Events</a>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
color: black;
`

