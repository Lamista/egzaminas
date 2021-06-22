import React from 'react';

const ItemComponent = ({ items, clientId }) => {
    return (
        <div className="row">
            <h6 className="text-center mb-4">Inventorius</h6>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pavadinimas</th>
                        <th>Svoris, kg.</th>
                        <th>Sektorius</th>
                        <th>Patalpinimo data</th>
                    </tr>
                </thead>
                <tbody>
                    {items
                        .filter(item => item.clientId === clientId)
                        .map(({ id, title, weight, placementDate, sectorNo }, index) => (
                            <tr key={id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{title}</td>
                                <td>{weight}</td>
                                <td>{sectorNo}</td>
                                <td>{placementDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default ItemComponent;