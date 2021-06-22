import React, { Component } from "react";
import axios from "axios";
import baseUrl from "../../AppConfig";
import ClientListComponent from "./ClientListComponent";

class ClientListContainer extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            items: []
        }
    }

    componentDidMount() {
        axios.get(baseUrl + "/api/clients")
            .then((res) => {
                this.setState({ clients: res.data })
            })
        axios.get(baseUrl + "/api/items")
            .then((res) => {
                this.setState({ items: res.data })
            })
    }

    render() {
        return (
            <div className="page">
                <div className="container">
                    <h2 className="text-center py-3">Klientai</h2>
                    <ClientListComponent
                        clients={this.state.clients}
                        items={this.state.items}
                    />
                </div>
            </div>
        )
    }
}

export default ClientListContainer;