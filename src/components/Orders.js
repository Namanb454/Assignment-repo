import axios from 'axios'
import React, { useState, useEffect } from 'react'
function Orders() {
    const [orders, setOrders] = useState([]);

    //getall Orders
    const getAllOrders = async () => {
        try {
            const { data } = await axios.get("http://localhost:3030/orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    // Delete Order
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3030/orders/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        getAllOrders();
    }, []);
    return (
        <div className='' id='#orders'>
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <a href='/create-order' class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Create</a>
                    </tr>
                </thead>
                {orders.map((o) => {
                    return (
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-0 py-4 whitespace-nowrap">{o.id}</td>
                                <td class="px-0 py-4 whitespace-nowrap">{o.customer_name}</td>
                                <td class="px-0 py-4 whitespace-nowrap">{o.customer_email}</td>
                                <td class="px-0 py-4 whitespace-nowrap">{o.product}</td>
                                <td class="px-0 py-4 whitespace-nowrap">{o.quantity}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <a href={`/update/${o.id}`} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</a>
                                    <button onClick={() => { Removefunction(o.id) }} href='/delete' class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
            {/* </div>
            </div> */}

        </div>
    )
}

export default Orders
