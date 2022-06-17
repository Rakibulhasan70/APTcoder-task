import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import { HiSortAscending } from "react-icons/hi";
import { HiSortDescending } from "react-icons/hi";

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

                <div className='flex justify-center items-center'>
                    <p className='text-xl'>Search Name   </p>
                    <input type="text" placeholder="Search" class="input input-bordered input-accent w-full mx-2 max-w-xs my-5" onChange={onChange} />
                </div>

                <table class="table w-full">

                    {searchData.length === 0 ? (
                        <p className="mt-3 text-xl text-center text-red-500 mb-4">
                            No matching records found
                        </p>
                    ) : (
                        ""
                    )}

                    <thead>
                        <tr>
                            <th>Fast Name</th>
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