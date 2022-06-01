import React from 'react';
import illustration from '../wfh_1.svg';

const Landing = () => {
  return (
    <div>
        <header className="">
            <div className="flex flex-col max-w-6xl px-6 py-10 mx-auto md:flex-row">
                <div className="flex flex-col justify-center pr-4 md:w-1/2">
                    <p className="text-2xl font-bold tracking-light text-indigo-500 lg:text-4xl">
                        Having trouble in managing your FSSAI Compliance? Introducing aahar.consulting!
                    </p>
                    <p className="mt-6 mb-12 text-lg text-indigo-700">
                        You can change this theme even by inspecting the code and applying the className{' '}
                    <code className="px-1 text-purple-500 bg-indigo-100 rounded">
                        theme-dark
                    </code>{' '}
                    around
                    </p>
                    <div>
                    <a
                        className="px-6 py-2 font-semibold text-orange-100 bg-orange-600 rounded-full"
                        href="#"
                    >
                        Read more
                    </a>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img className="w-full" src={illustration} alt="Woman working from home" />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Landing