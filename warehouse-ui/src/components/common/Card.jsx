import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/card.css';

const Card = ({ title, url, cardStyle, description, id, buttons, onClick, isSelected, client }) => (
    < div className={`${cardStyle}`} id={id} onClick={onClick} >
        <div className={`card ${isSelected && "selectedBorder"}`} >
            <div className="card-body  bg-light">
                {title && <h5 className="card-title">{title}</h5>}
                {description && <p className="card-text">{description}</p>}
                {client
                    && <div>
                        <p>Gimimo data: {client.birthDay}</p>
                        <p>Telefono numeris: {client.phoneNo}</p>
                        <p>Kliento tipas: {client.clientType}</p>
                    </div>}
                <Link to={`/clients/${id}/items/new`} className="btn btn-primary">Pridėti naują prekę</Link>
            </div>
        </div>

    </div >
);

export default Card;
