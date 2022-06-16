import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';

const Employer = () => {
    const [employers, setEmployers] = useState([])
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmployers(data)
                setSearchData(data)
            })
    }, [])

    const onChange = e => {
        const change = e.target.value;
        console.log(change);
        const match = employers.filter(search => search.first_name.includes(change) || search.last_name.includes(change) || search.city.includes(change) || search.company_name.includes(change))

        setSearchData(match)

    }
    return (
        <div>


            <div className="overflow-x-auto">
                <input type="text" placeholder="Search" class="input input-bordered input-accent w-full max-w-xs my-5" onChange={onChange} /><table class="table w-full">
                    {searchData.length === 0 ? (
                        <p className="mt-3 text-xl text-center text-red-500 mb-4">
                            No matching records found
                        </p>
                    ) : (
                        ""
                    )}
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchData.map(employer => <Table
                                key={employer.id}
                                employer={employer}
                            ></Table>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employer;