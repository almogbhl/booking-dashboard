import React from "react";
import styled from 'styled-components';
import {white} from '../../../../styles/constants';
import {Col} from 'react-bootstrap';
  

const Report = (props) => {
    const dataResult = props.data[0];
    const description = props.data[1];

  return (
     <StyledCol>
        <DataResult>{dataResult}</DataResult>
        <Description>{description}</Description>
     </StyledCol>
  );
}

export default Report;

const StyledCol = styled(Col) `
    flex-basis: 100%;
    display: flex;
    margin-bottom: 5rem;
    flex-direction: column;
`

const DataResult = styled.h2 `
    color: ${white};
`

const Description = styled.span `
`