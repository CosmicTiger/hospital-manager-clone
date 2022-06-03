import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../data/data'

import Table from '../../Table'

const DiseasesList = () => {
    const [diseases, setDiseases] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`${API_URL}/disease/getAll`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(res => {
                setDiseases(res)
            })
            .catch(error => setError(error))
    }, [])

    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Cases',
            selector: 'cases',
            sortable: true,
        },
        {
            name: 'Is inherited?',
            selector: 'inherited',
            sortable: true,
        },
        // {
        //     name: 'Actions',
        //     cell: row => (
        //         <Link to={`/diseases/${row.id}`}>
        //             <button className="btn btn-primary">
        //                 <i className="fas fa-edit"></i>
        //             </button>
        //         </Link>
        //     ),
        // },
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Diseases</h1>
                    <hr />
                    {diseases === 'Failed to fetch disease' ?
                        <div className="alert alert-danger">
                            {diseases}
                        </div>
                        :
                        <Table
                            loading={loading}
                            columns={columns}
                            items={diseases}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default DiseasesList
