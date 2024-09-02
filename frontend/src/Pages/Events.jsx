import styled from 'styled-components';
import {Link} from "react-router-dom";

export default function Events() {
    return (
        <StyledContainer>
            <h1>Events</h1>
            <Link to="/public">Go Back</Link>
        </StyledContainer>

    )
}

const StyledContainer = styled.div`
    color: black;
`