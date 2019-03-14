import React from "react";
import styled from 'styled-components';
import HotelReport from './HotelReport/HotelReport';
import EmployeeStats from './EmployeeStats/EmployeeStats';

const Dashboard = (props) => {
  return (
   <Main>
    <HotelReport />
    <EmployeeStats />
   </Main>
  );
}

export default Dashboard;


const Main = styled.main `
  display: flex;
  flex-direction: column;
`