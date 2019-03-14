import React from "react";
import styled from "styled-components";
import {steelGrey} from '../../../../styles/constants';

const Employee = (props) => {
    const {totalHours, employeeInfo} = props.data;
    const [name, avatar] = employeeInfo; 
 
    return (
        <MainBox>
            <AvatarBox>
                <Avatar
                    src={avatar}
                    alt="avatar"
                />
            </AvatarBox>
            <FullName>{name}</FullName>
            <Hours>{totalHours} hours</Hours>
        </MainBox>
    );
};

export default Employee;

const MainBox = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AvatarBox = styled.div`
    flex-basis: 20%;
`;
const Avatar = styled.img`
    width: 3.3rem;
    height: 3.3rem;
    object-fit: contain;
    border-radius: 50%;
`;
const FullName = styled.div`
    flex-basis: 50%;
    text-align: center;
`;

const Hours = styled(FullName)`
    flex-basis: 30%;
    color: ${steelGrey};
`;
