import React from "react";
import { Link } from "react-router-dom";

import Flex from "@/components/Flex";

import { Header, Title, NavBar } from "./components";

function isSetting(props) {
    return !!props.location.pathname.slice(1)
}

export default (props) => {
    return (
        <Header >
            <Flex justify='space-between' align='flex-start'>
                <Title> Calculator App</Title>
                <NavBar isSetting={isSetting(props)}>
                    <Flex justify='space-between'>
                        <Link to='/'>Home</Link>
                        <Link to='/settings'>Settings</Link>
                    </Flex>
                </NavBar>
            </Flex>
        </Header >

    )
}