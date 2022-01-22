import React from 'react';
import { connect } from "react-redux"

import { PageLayout } from '@/layouts';

import Header from '@/components/Header';
import SwitchTheme from '@/components/SwitchTheme';
import { swithThemeAction, getTheme } from "@/reducers/switchTheme";

import { Card, SettingWrapper } from './components';



const Wrapper = (props) => {
    return (
        <PageLayout>
            <Card {...props}>
                <Header {...props} />
                <SettingWrapper>
                    <h1>Settings</h1>
                    <SwitchTheme {...props}></SwitchTheme>
                </SettingWrapper>
            </Card>
        </PageLayout>
    )
}

let mapStateToProps = (state) => ({
    currentTheme: getTheme(state.switchTheme),
});

export default connect(mapStateToProps, { swithThemeAction })(Wrapper)
