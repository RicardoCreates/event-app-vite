import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <StyledContainer>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <p>This is an app where you can find and create new events</p>
            <Link to="/Events">Events - Übersicht</Link>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    color: black;
`
