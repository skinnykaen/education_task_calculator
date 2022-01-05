import React from "react";

import { Header, Title, NavBar } from "./components";

export default () => {
    return (
        <Header>
            <Title> Calculator App</Title>
            <NavBar>
                <a href="#">Home</a>
                <a href="#">Setting</a>
            </NavBar>
        </Header>
    )
}