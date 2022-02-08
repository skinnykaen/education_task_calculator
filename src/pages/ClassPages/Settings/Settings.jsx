import React from 'react';

import { PageLayout } from '@/layouts';
import Header from '@/components/FunctionalComponents/Header/Header';
import SwitchTheme from '@/components/FunctionalComponents/SwitchTheme/SwitchTheme';
import ControlPanel from "@/components/FunctionalComponents/ControlPanel/ControlPanel";

import { Card, SettingWrapper } from './components';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <PageLayout>
                <Card>
                    <Header {...this.props} />
                    <SettingWrapper >
                        <h1>Settings</h1>
                        <SwitchTheme />
                        <ControlPanel />
                    </SettingWrapper>
                </Card>
            </PageLayout>
        )
    }
}

export default Home


