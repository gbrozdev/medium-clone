import React from 'react'
import { Link } from 'react-router-dom'

function Bigcard() {
    return (
            <Link to="/" rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
                <img src="https://source.unsplash.com/random" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-100" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="mb-2 text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">7 Things I Hope You Know About Love</h3>
                    <span className="mb-2 text-xs text-gray-600">February 19, 2021</span>
                    <p>7 Things I Hope You Know About Love 7 Things I Hope You Know About Love 7 Things I Hope You Know About Love 7 Things I Hope You Know About Love 7 Things I Hope You Know About Love</p>
                </div>
            </Link>
    )
}

export default Bigcard