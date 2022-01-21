import React from 'react';

import { PageLayout } from '@/layouts';

import Header from '@/components/Header';
import SwitchTheme from '@/components/SwitchTheme';

import { Card, SettingWrapper } from './components';



export default () => {
    return (
        <PageLayout>
            <Card>
                <Header />
                <SettingWrapper>
                    <h1>Settings</h1>
                    <SwitchTheme></SwitchTheme>
                </SettingWrapper>
            </Card>
        </PageLayout>
    )
}
