import React from 'react';

const Table = ({ employer }) => {
    const { first_name, last_name, city, age, company_name } = employer
    return (
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{city}</td>
            <td>{age}</td>
            <td>{company_name}</td>
        </tr>
    );
};

export default Table;