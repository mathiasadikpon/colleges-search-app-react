import React from 'react'
import { Container } from 'reactstrap'
import SubHeader from '../components/SubHeader'
import CollegeDetail from '../colleges/CollegeDetail'

const CollegeDetailPage = () => {
  return (
    <Container>
        <SubHeader current="College Details"/>
        <CollegeDetail />      
    </Container>
  )
}

export default CollegeDetailPage
