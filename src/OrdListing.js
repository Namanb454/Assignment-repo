import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OrdListing = () => {
    const [orddata, orddatachange] = useState(null);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/order/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3030/orders/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
                navigate('/admin')
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:3030/orders").then((res) => {
            return res.json();
        }).then((resp) => {
            orddatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="w-[80%] ml-auto">
            <div className="">
                <div className="">
                    <h2>Orders Listing</h2>
                </div>
                <div className="">
                    <div className="w-fit ml-auto my-3">
                        <Link to="/order/create" className="bg-green-700 text-white p-2 rounded-lg">Add New (+)</Link>
                    </div>
                    <table className="border-1 border-black rounded-full p-10">
                        <thead className="bg-black text-white mb-5">
                            <tr>
                                <td>ID</td>
                                <td>Customer Name</td>
                                <td>Customer Email</td>
                                <td>Product</td>
                                <td>Quantity</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {orddata &&
                                orddata.map(item => (
                                    <tr className="border-1 " key={item.id}>
                                        <div className="m-3">{item.id}</div>
                                        <td>{item.customer_name}</td>
                                        <td>{item.customer_email}</td>
                                        <td>{item.product}</td>
                                        <td>{item.quantity}</td>
                                        <td><button onClick={() => { LoadEdit(item.id) }} className="bg-green-900 text-white p-2 mx-2 rounded-lg">Edit</button>
                                            <button onClick={() => { Removefunction(item.id) }} className="bg-red-600 text-white p-2 mx-2 rounded-lg">Remove</button>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrdListing;