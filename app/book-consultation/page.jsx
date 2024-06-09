'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, Suspense, useCallback } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/utils/firebase'
import Steps from '@/components/UI/Steps'

const SearchParamsComponent = ({ onParamsLoaded }) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('name')

    useEffect(() => {
        if (search) {
            onParamsLoaded(search)
        }
    }, [search, onParamsLoaded])

    return null
}

const BookConsultation = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        selectedService: '',
        description: ''
    })

    const handleParamsLoaded = useCallback((search) => {
        setFormData((prevData) => ({ ...prevData, selectedService: search || '' }))
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'appointments'), formData)

        router.push('/success')

        } catch (error) {
            console.error('Error adding document: ', error)
            alert('Error booking appointment. Please try again.')
        }
    }

    return (
        <div className='min-h-screen py-24'>
            <div className='flex w-full h-full'>
                <div className='w-full md:w-1/2 h-full bg-white py-8 px-16'>
                    <h1 className='text-3xl text-secondary-dark'>Book Appointment</h1>

                    <Steps step={2} />
                    <form onSubmit={handleSubmit} className='mt-12 text-secondary'>
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-secondary-dark">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="first-name"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-secondary-dark">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="last-name"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-secondary-dark">
                                Company
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-secondary-dark">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className=''>
                            <label className="block text-sm font-semibold leading-6 text-secondary-dark">Select a service</label>
                            <select
                                name="selectedService"
                                value={formData.selectedService}
                                onChange={handleChange}
                                className="block mt-2 w-full rounded-md border-0 px-3.5 py-2 text-secondary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            >
                                <option value="web">Web Development</option>
                                <option value='automation'>Business Process Automation</option>
                                <option value='integration'>Software Integration</option>
                            </select>
                        </div>
                        <div className='mt-8'>
                            <label className="block text-sm font-semibold leading-6 text-secondary-dark">Description</label>
                            <textarea
                                name="description"
                                rows={8}
                                value={formData.description}
                                onChange={handleChange}
                                className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-secondary-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className='flex justify-between mt-16'>
                            <button
                                type='button'
                                onClick={() => router.back()}
                                className='bg-gray-200 px-6 py-2 rounded-2xl w-28'
                            >
                                Back
                            </button>
                            <button
                                type='submit'
                                className='bg-gray-800 px-6 py-2 rounded-2xl w-28 text-white'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className='hidden md:block md:w-1/2 relative'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Image src={'/consult.jpg'} fill alt='' className='object-cover rounded-l-2xl' />
                        <SearchParamsComponent onParamsLoaded={handleParamsLoaded} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default BookConsultation
