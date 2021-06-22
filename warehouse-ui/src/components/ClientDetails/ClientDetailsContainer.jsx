import React, { Component } from "react";
import axios from "axios";
import baseUrl from "../../AppConfig";
import ClientDetailsComponent from "./ClientDetailsComponent";
import LoadingComponent from "../LoadingComponent";
import ItemComponent from "../ItemComponent";

class ClientDetailsContainer extends Component {
    constructor() {
        super();
        this.state = {
            client: {},
            items: [],
            clientId: ""
        }
    }

    componentDidMount() {
        axios.get(`${baseUrl}/api/clients/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ client: res.data });
                this.setState({ clientId: res.data.id })
            })
            .catch(err => console.log(err))
        axios.get(`${baseUrl}/api/items`)
            .then(res => this.setState({ items: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div className="page">
                {this.state.client ?
                    <div className="container pt-3">
                        <div className="row">
                            <div className="col-4">
                                <ClientDetailsComponent
                                    client={this.state.client}
                                />
                            </div>
                            {this.state.items.length > 0 &&
                                <div className="col-8 px-5">
                                    <ItemComponent
                                        items={this.state.items}
                                        clientId={this.state.clientId}
                                    />
                                </div>}
                        </div>
                    </div>
                    :
                    <LoadingComponent />}
            </div>)
    }
}

export default ClientDetailsContainer;