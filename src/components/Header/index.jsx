import React from "react";

import { Link } from "react-router-dom";

import { Header, Title, NavBar } from "./components";

export default () => {
    return (
        <Header>
            <Title> Calculator App</Title>
            <NavBar>
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
            </NavBar>
        </Header>
    )
}