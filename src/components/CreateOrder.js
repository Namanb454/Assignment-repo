import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateOrder() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        id: '',
        fullname: '',
        email: '',
        product: '',
        quantity: ''
    })

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3030/orders', inputData)
            .then(res => {
                alert("Data Added Successfully!");
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <div class="text-gray-900 bg-gray-200">
                <div class="p-4 flex">
                    <h1 class="text-3xl">Orders</h1>
                </div>
                <div class="px-3 py-4 flex justify-center">
                    <table class="w-full text-md bg-white shadow-md rounded mb-4">
                        <div>
                            <tr class="border-b">
                                <th class="text-left py-3 px-20">ID</th>
                                <th class="text-left py-3 px-20">Customer Name</th>
                                <th class="text-left py-3 px-20">Customer Email</th>
                                <th class="text-left py-3 px-20">Product</th>
                                <th class="text-left py-3 px-20">Quantity</th>
                                <th></th>
                            </tr>
                            <div class="flex border-b hover:bg-orange-100">
                                <form className='flex' onSubmit={handleSubmit}>
                                    <div class="p-3 px-5">
                                        <input type="text" name='id' placeholder="id"
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setInputData({ ...inputData, id: e.target.value })}
                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="text" name='fullname' placeholder="customer_name"
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setInputData({ ...inputData, fullname: e.target.value })}
                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="email" name='email' placeholder="customer_email"
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setInputData({ ...inputData, email: e.target.value })}

                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="text" name='product' placeholder="product"
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setInputData({ ...inputData, product: e.target.value })}
                                        />
                                    </div>
                                    <div class="p-3 px-5">
                                        <input type="number" name='quantity' placeholder="quantity"
                                            class="bg-transparent border-b-2 border-gray-300 py-2"
                                            onChange={e => setInputData({ ...inputData, quantity: e.target.value })}
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

export default CreateOrder
