import React from 'react';
import Card from '../common/Card';

const ClientDetailsComponent = ({ client }) => (
    <div>
        <h6 className="text-center">Kliento informacija</h6>
        <div className="row">
            <Card
                key={client.id}
                id={client.id}
                cardStyle="col my-3 bg-light p-0 rounded"
                title={client.firstName + " " + client.lastName}
                client={client}
                buttons={true}
            />
        </div>
    </div>
)

export default ClientDetailsComponent;