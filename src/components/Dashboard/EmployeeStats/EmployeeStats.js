import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import Employee from "./Employee/Employee";

class EmployeeStats extends Component {
    state = {
        data: null,
        sortedData: null,
        isLoading: true
    };

    async componentWillMount() {
        const API_URL = process.env.REACT_APP_API_URL;
        const API = `${API_URL}/bookings`;

        const res = await fetch(API);
        const data = await res.json();

        this.setState({ data, isLoading: false });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data !== prevState.data) {
            this.filterByEmployee();
        }
    }

    filterByEmployee = () => {
        let clients = this.state.data;
        let res = [];
        
        for (let i = 0; i < clients.length; i++) {
            let client;

            clients = clients.filter(item => item.employee);
            client = clients.filter(item => item.employee.id === i);
            if (client.length > 0) {
                this.sumEmployeeSales(client, res);
            }
        }
        this.sortData(res);
    };

    sumEmployeeSales = (arr, res) => {
        let sum = [];
        let sumHours = [];
        let employeeInfo;
        let a;
        let b;
        arr.forEach(element => {
            a = element.checkInDate;
            b = element.checkOutDate;

            let date1 = moment(a, "DD-MM-YYYY");
            let date2 = moment(b, "DD-MM-YYYY");

            let duration = moment.duration(date2.diff(date1));
            duration = duration.asHours();

            function add(acc, a) {
                return acc + a;
            }
            sum.push(duration);
            sumHours = sum.reduce(add);
            employeeInfo = element.employee;
        });
        this.collectEmployeeInfo(sumHours, employeeInfo, res);
    };

    collectEmployeeInfo = (totalHours, employee, res) => {
        let employeeInfo = [];
        let avatar = employee.profileImageUrl;
        let fullName = `${employee.firstName} ${employee.lastName}`;
        let obj = {};

        employeeInfo.push(fullName, avatar);

        obj["totalHours"] = totalHours;
        obj["employeeInfo"] = employeeInfo;
        res.push(obj);

        return res;
    };

    sortData = (res) => {
        let sortedData = [];
        let amountOfEmployee = 3;

        sortedData = res.sort((a, b) => a.totalHours - b.totalHours);
        sortedData.splice(0, sortedData.length - amountOfEmployee);
        sortedData.reverse();
        this.setState({ sortedData });
    }

    render() {
        const {sortedData, isLoading} = this.state;

        if (isLoading === true) {
            return "Loading...";
        } else {
            if (sortedData === null) {
                return "Loading...";
            } else {
                return (
                    <MainBox>
                        <TitleBox>
                            <Title>Employee stats</Title>
                        </TitleBox>
                        <EmployeesBox>
                            {sortedData.map((item, i) => {
                                return <Employee key={i} data={item} />;
                            })}
                        </EmployeesBox>
                    </MainBox>
                );
            }
        }
    }
}
export default EmployeeStats;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 20rem;
    margin-top: 5rem;
    width: 25%;
    color: white;
`;
const TitleBox = styled.div`
    margin-bottom: 2rem;
`;
const Title = styled.h2`
    margin: 0;
    font-size: 2.2rem;
`;
const EmployeesBox = styled.div`
    margin-left: 3rem;
`;
