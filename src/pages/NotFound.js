import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {

    let navigate = useNavigate();
    return (
        <div className="">
            <div className="flex flex-col justify-center max-w-6xl px-6 py-16 mx-auto md:flex-row">
            <div className="flex flex-col">
                {/* <div>
                <a
                    className="inline-flex items-center pl-1 pr-2 mb-3 bg-indigo-100 rounded-full dark:bg-gray-800"
                    href="#"
                >
                    <span className="px-2 py-px mr-2 text-xs font-bold text-indigo-100 uppercase bg-indigo-700 rounded-full">
                    New
                    </span>
                    <span className="text-sm leading-loose text-indigo-800 dark:text-gray-300">
                    Visit our new products page →
                    </span>
                </a>
                </div> */}
                <h1 className="text-5xl font-bold leading-none tracking-tight text-gray-800 lg:text-6xl dark:text-gray-400">
                    Oops! Looks like you have landed on a wrong page.
                </h1>
                {/* <p className="mt-6 mb-12 text-lg text-gray-700 dark:text-gray-400">
                You can change this theme even by inspecting the code and applying the className{' '}
                <code className="px-1 text-purple-500 bg-gray-100 rounded dark:text-purple-200 dark:bg-gray-800">
                    theme-dark
                </code>{' '}
                around
                </p> */}
                <div className='mt-10 mb-12'>
                <Link
                    className="px-6 py-4 font-semibold text-orange-200 bg-orange-600 rounded-full"
                    to='/'
                >
                    Take me Back
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NotFound;