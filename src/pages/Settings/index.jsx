import React from 'react';
import { connect } from "react-redux"

import { PageLayout } from '@/layouts';

import Header from '@/components/Header';
import SwitchTheme from '@/components/SwitchTheme';
import { swithThemeAction, getTheme } from "@/reducers/switchTheme";

import { Card, SettingWrapper } from './components';



export default (props) => {
    return (
        <PageLayout>
            <Card {...props}>
                <Header {...props} />
                <SettingWrapper {...props}>
                    <h1>Settings</h1>
                    <SwitchTheme {...props}></SwitchTheme>
                </SettingWrapper>
            </Card>
        </PageLayout>
    )
}
