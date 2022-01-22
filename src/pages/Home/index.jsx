import React from 'react';
import { connect } from 'react-redux';

import { PageLayout } from '@/layouts';

import Header from '@/components/Header'
import Calculator from '@/components/Calculator';

import { Card } from './components';

import { swithThemeAction, getTheme } from "@/reducers/switchTheme";

const Wrapper = (props) => {
  return (
    <PageLayout>
      <Card {...props}>
        <Header {...props} />
        <Calculator {...props} />
      </Card>
    </PageLayout>
  )
}

let mapStateToProps = (state) => ({
  currentTheme: getTheme(state.switchTheme),
});

export default connect(mapStateToProps, { swithThemeAction })(Wrapper)