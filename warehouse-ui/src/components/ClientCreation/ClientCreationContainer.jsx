import React, { Component } from "react";
import axios from "axios";
import baseUrl from "../../AppConfig";
import ClientCreationComponent from "./ClientCreationComponent";
import { constants } from "../../utils/constants";

class ClientCreationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            client: {
                firstName: "",
                lastName: "",
                birthDay: "",
                phoneNo: "",
                clientType: ""
            },
            errors: {
                firstName: "",
                lastName: "",
                birthDay: "",
                phoneNo: "",
                clientType: ""
            },
            message: "",
            messageStyle: ""
        }
    }

    componentDidMount() {
        if (window.location.pathname !== `/${constants.APP_NAME}/clients/new`) {
            axios.get(`${baseUrl}/api/clients/${this.props.match.params.id}`)
                .then(res => this.setState({ client: res.data }))
                .catch(err => console.log(err))
        }
        axios.get(baseUrl + "/api/clients/types")
            .then((res) => {
                this.setState({ types: res.data })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { client } = this.state;

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors && Object.keys(errors).length > 0) {
            this.setState({ message: "Nepavyko sukurti kliento. Pasitikrinkite duomenis." })
            this.setState({ messageStyle: "alert alert-danger" })
            return;
        }

        if (window.location.pathname === `/${constants.APP_NAME}/clients/new`) {
            axios
                .post(`${baseUrl}/api/clients`, {
                    firstName: client.firstName,
                    lastName: client.lastName,
                    birthDay: client.birthDay,
                    phoneNo: client.phoneNo,
                    clientType: client.clientType
                })
                .then(() => {
                    this.setState({
                        types: [],
                        client: {
                            firstName: "",
                            lastName: "",
                            birthDay: "",
                            phoneNo: "",
                            clientType: ""
                        },
                        errors: {
                            firstName: "",
                            lastName: "",
                            birthDay: "",
                            phoneNo: "",
                            clientType: ""
                        }
                    });
                    this.props.history.push("/");
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .put(`${baseUrl}/api/clients/${client.id}`, {
                    id: client.id,
                    firstName: client.firstName,
                    lastName: client.lastName,
                    birthDay: client.birthDay,
                    phoneNo: client.phoneNo,
                    clientType: client.clientType
                })
                .then(() => {
                    this.setState({
                        types: [],
                        client: {
                            firstName: "",
                            lastName: "",
                            birthDay: "",
                            phoneNo: "",
                            clientType: ""
                        },
                        errors: {
                            firstName: "",
                            lastName: "",
                            birthDay: "",
                            phoneNo: "",
                            clientType: ""
                        }
                    });
                    this.props.history.push("/");
                })
                .catch((err) => console.log(err));
        }
    }

    handleChange = ({ target: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const client = { ...this.state.client };
        client[input.name] = input.value;
        this.setState({ client, errors });

        this.setState({ message: "", messageStyle: "" });
    }

    validateProperty = ({ name, value }) => {
        if (name === "firstName") {
            let textWords = value.trim().split(" ");
            if (textWords.length < 3)
                return "is-invalid";
        }
        if (name === "lastName") {
            let textWords = value.trim().split(" ");
            if (textWords.length < 3)
                return "is-invalid";
        }
        if (name === "birthDay") {
            if (value.trim().length === 0)
                return "is-invalid";
        }
        if (name === "phoneNo") {
            if (value.trim().length === 0)
                return "is-invalid";
        }
        if (name === "clientType") {
            if (value === "Pasirinkite tipą" || value === "")
                return "is-invalid";
        }
    }

    validate = () => {
        const errors = {};
        const { client } = this.state;
        if (client.phoneNo.trim() === '')
            errors.phoneNo = "is-invalid"
        if (client.birthDay.trim() === '')
            errors.birthDay = "is-invalid"
        if (client.firstName.trim() === '')
            errors.firstName = "is-invalid"
        if (client.lastName.trim() === '')
            errors.firstName = "is-invalid"

        if (client.clientType === '' || client.clientType === 'Pasirinkite tipą')
            errors.clientType = "is-invalid"

        return errors;
    }

    render() {
        return (
            <ClientCreationComponent
                types={this.state.types}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                client={this.state.client}
                errors={this.state.errors}
                message={this.state.message}
                messageStyle={this.state.messageStyle}
            />
        );
    }
}

export default ClientCreationContainer;