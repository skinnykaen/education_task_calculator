import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Flex from "@/components/ClassComponents/Flex";

import { Header, NavBar } from "./components";


class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    isSetting(location) {
        return !!location.pathname.slice(1)
    }
    render() {
        return (
            <Header >
                <Flex justify='space-between' align='flex-start'>
                    <h3>Calculator App</h3>
                    <NavBar isSetting={this.isSetting(this.props.location)}>
                        <Flex justify='space-between'>
                            <Link to='/'>Home</Link>
                            <Link to='/settings'>Settings</Link>
                        </Flex>
                    </NavBar>
                </Flex>
            </Header >
        )
    }
}
export default connect(state => ({}), {})(HeaderWrapper)