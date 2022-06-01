import React from "react"

const Landing = () => {
    
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <p className="block">Having trouble in managing your FSSAI Compliance? </p>{' '}
                                <p className="block text-indigo-600">Introducing aahar.consulting!</p>
                            </div>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Now hire an FSSAI expert to apply/renew/modify your FSSAI Licenses!
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 hover:bg-indigo-700 focus:outline-none"
                                    >
                                        Get started
                                    </button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 focus:outline-none"
                                    >
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt=""
                />
            </div> */}
        </div>
    )
}

export default Landing  