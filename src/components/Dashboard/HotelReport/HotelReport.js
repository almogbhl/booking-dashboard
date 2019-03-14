import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { steelGrey } from "../../../styles/constants";
import Report from "./Report/Report";

class HotelReport extends Component {
    state = {
        data: null,
        isLoading: true
    };

    async componentWillMount() {
        const API_URL = process.env.REACT_APP_API_URL;
        const API = `${API_URL}/booking-snapshot`;

        const res = await fetch(API);
        const data = await res.json();

        this.setState({ data, isLoading: false });
    }

    availableRooms = () => {
        let availability = [];
        const description = "Rooms available";
        const dataResult = this.state.data.availableRooms;

        availability.push(dataResult, description);
        return availability;
    };

    reservedRooms = () => {
        let reserved = [];
        const description = "Reserved rooms";
        const dataResult = this.state.data.reservedRooms;

        reserved.push(dataResult, description);
        return reserved;
    };

    checkedIn = () => {
        let checkedIn = [];
        const description = "Checked in";
        const dataResult = this.state.data.checkedIn;

        checkedIn.push(dataResult, description);
        return checkedIn;
    };

    render() {
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return "Loading...";
        } else {
            return (
                <StyledContainer>
                    <StyledRow>
                        <Report data={this.availableRooms()} />
                        <Report data={this.reservedRooms()} />
                        <Report data={this.checkedIn()} />
                    </StyledRow>
                </StyledContainer>
            );
        }
    }
}

export default HotelReport;

const StyledContainer = styled(Container)`
    width: 100%;
`;

const StyledRow = styled(Row)`
    display: flex;
    height: 10rem;
    border-bottom: 1px solid ${steelGrey};
`;
