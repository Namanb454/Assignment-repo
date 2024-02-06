import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const { id } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3030/orders/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setUpdateId(resp.updateid);
            setFullname(resp.fullname);
            setEmail(resp.email);
            setProduct(resp.product);
            setQuantity(resp.quantity);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [updateid, setUpdateId] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { updateid, fullname, email, product, quantity };


        fetch("http://localhost:3030/orders/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>
            <div class="text-gray-900 bg-gray-200">
                <div class="p-4 flex">
                    <h1 class="text-3xl">Users</h1>
                </div>
                <div class="px-3 py-4 flex justify-center">
                    <table class="w-full text-md bg-white shadow-md rounded mb-4">
                        <div>
                            <tr class="border-b">
                                <th class="text-left p-3 px-5">ID</th>
                                <th class="text-left p-3 px-5">Customer Name</th>
                                <th class="text-left p-3 px-5">Customer Email</th>
                                <th class="text-left p-3 px-5">Product</th>
                                <th class="text-left p-3 px-5">Quantity</th>
                                <th></th>
                            </tr>
                            <div class="flex border-b hover:bg-orange-100">
                                <form className='flex' onSubmit={handlesubmit}>
                                    <div class="p-3 px-5">
                                        <input type="text" name='id' value={id}
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="text" name='fullname' value={fullname}
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onMouseDown={e => valchange(true)} onChange={e => setFullname(e.target.value)}
                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="email" name='email' value={email}
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setEmail(e.target.value)}

                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="text" name='product' placeholder="product" value={product}
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setProduct(e.target.value)}
                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="number" name='quantity' placeholder="quantity" value={quantity}
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setQuantity(e.target.value)}
                                        />
                                    </div>

                                    <div class="p-3 px-5 flex justify-end">
                                        <button type="submit"
                                            class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Update
