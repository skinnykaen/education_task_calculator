import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/ClassComponents/Header'
import Calculator from '@/components/ClassComponents/Calculator'

import { Card } from './components'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageLayout>
        <Card >
          <Header {...this.props} />
          <Calculator />
        </Card>
      </PageLayout>
    )
  }
}

export default Home


