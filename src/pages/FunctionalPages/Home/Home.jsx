import React from 'react';
import { connect } from 'react-redux';

import { PageLayout } from '@/layouts';

import Header from '@/components/FunctionalComponents/Header'
import Calculator from '@/components/FunctionalComponents/Calculator';

import { Card } from './components';

export default (props) => {
  return (
    <PageLayout>
      <Card >
        <Header {...props} />
        <Calculator />
      </Card>
    </PageLayout>
  )
}