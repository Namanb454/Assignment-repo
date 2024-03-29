import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import OrdListing from '../OrdListing';

function Admin() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear()
        navigate('/');
        alert('Logout Successfully');
    }
    return (
        <div>
            <body class="">
                <div id="application-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-6">
                        <span class="cursor-default flex-none text-xl font-semibold dark:text-white" aria-label="Brand">Admin</span>
                    </div>

                    <div class="rounded-t-lg h-32 overflow-hidden">
                        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                    </div>
                    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    </div>
                    <div class="text-center mt-2">
                        <h2 class="font-semibold text-gray-600">Admin's Name</h2>
                        <p class="text-gray-400">Founder</p>
                    </div>

                    <button onClick={logout} className='px-3 py-1 bg-gray-800 text-white rounded-full'>Logout</button>

                </div>

                <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                    <header>
                        {/* <Orders /> */}
                        <OrdListing />

                    </header>
                </div>
            </body>
        </div>
    )
}

export default Admin
