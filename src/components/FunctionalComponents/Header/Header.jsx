import React from "react";
import { Link } from "react-router-dom";

import Flex from "@/components/FunctionalComponents/Flex";

import { Header, NavBar } from "./components";

function isSetting(location) {
    return !!location.pathname.slice(1)
}

export default ({ location }) => {
    return (
        <Header >
            <Flex justify='space-between' align='flex-start'>
                <h3>Calculator App</h3>
                <NavBar isSetting={isSetting(location)}>
                    <Flex justify='space-between'>
                        <Link to='/'>Home</Link>
                        <Link to='/settings'>Settings</Link>
                    </Flex>
                </NavBar>
            </Flex>
        </Header >

    )
}