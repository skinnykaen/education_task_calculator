import React from 'react';
import { connect } from 'react-redux';

import { PageLayout } from '@/layouts';

import Header from '@/components/Header'
import Calculator from '@/components/Calculator';

import { Card } from './components';

import { swithThemeAction, getTheme } from "@/reducers/switchTheme";

export default (props) => {
  return (
    <PageLayout>
      <Card {...props}>
        <Header {...props} />
        <Calculator {...props} />
      </Card>
    </PageLayout>
  )
}