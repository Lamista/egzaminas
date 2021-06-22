import React from 'react';
import { Link } from 'react-router-dom';

const ClientListComponent = ({ clients, items }) => (
    <div>
        <Link to={`/clients/new`} className="btn btn-primary mb-2">
            Pridėti naują klientą</Link>
        <table className="table table-secondary">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Klientas</th>
                    <th>Inventorius, vnt.</th>
                    <th>Informacija</th>
                </tr>
            </thead>
            <tbody>
                {clients.map(({ id, firstName, lastName }, index) =>
                    <tr key={id}>
                        <th scope='row'>{index + 1}</th>
                        <td>{firstName + " " + lastName}</td>
                        <td>{items ? items.filter(item => item.clientId === id).length : 0}</td>
                        <td>
                            <Link to={`/clients/${id}`} className="mr-2">
                                Peržiūrėti</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default ClientListComponent;