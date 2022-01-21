import { func } from "prop-types";
import React from "react";

import { Link } from "react-router-dom";
import { Flex } from "../Flex/components";

import { Header, Title, NavBar } from "./components";

function isCurrent() {
    return !!window.location.href.slice(20)
}

export default (props) => {
    return (
        <Header {...props}>
            <Flex justify='space-between' align='flex-start'>
                <Title> Calculator App</Title>
                <NavBar current={isCurrent()}>
                    <Flex justify='space-between'>
                        <Link to="/">Home</Link>
                        <Link to="/settings">Settings</Link>
                    </Flex>
                </NavBar>
            </Flex>
        </Header>

    )
}