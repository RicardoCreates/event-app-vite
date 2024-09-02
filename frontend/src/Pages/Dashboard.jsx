import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as events from "node:events";

export default function Dashboard() {
    return (
        <StyledContainer>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <p>This is an app where you can find and create new events</p>
            {events.length > 0 ? (
                <ul>
                    {events.map(event => (
                        <li key={event._id}>{event.name}</li> // Angenommen, jedes Event hat ein 'name' Feld
                    ))}
                </ul>
            ) : (
                <p>Keine Events verfügbar</p>
            )}
            <Link to="/Events">Events - Übersicht</Link>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    color: black;
`
