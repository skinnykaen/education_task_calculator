import React from 'react';

import { PageLayout } from '@/layouts';
import Header from '@/components/FunctionalComponents/Header';
import SwitchTheme from '@/components/FunctionalComponents/SwitchTheme';
import ControlPanel from "@/components/FunctionalComponents/ControlPanel";

import { Card, SettingWrapper } from './components';



export default (props) => {
    return (
        <PageLayout>
            <Card>
                <Header {...props} />
                <SettingWrapper >
                    <h1>Settings</h1>
                    <SwitchTheme />
                    <ControlPanel />
                </SettingWrapper>
            </Card>
        </PageLayout>
    )
}
