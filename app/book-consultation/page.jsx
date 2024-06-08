'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, Suspense } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/utils/firebase'
import Steps from '@/components/UI/Steps'

const SearchParamsComponent = ({ onParamsLoaded }) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('name')
    
    useEffect(() => {
        onParamsLoaded(search)
    }, [search, onParamsLoaded])
    
    return null
}

const BookConsultation = () => { 
    const router = useRouter()
    const [selectedService, setSelectedService] = useState('')
    const [description, setDescription] = useState('')

    const handleParamsLoaded = (search) => {
        setSelectedService(search)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'appointments'), {
                service: selectedService,
                description
            })
            alert('Appointment booked successfully!')
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

                    <Steps/>
                    <form onSubmit={handleSubmit} className='mt-12 text-secondary'>
                        <div className='mt-8'>
                            <label className="block text-sm font-semibold leading-6 text-secondary-dark">Select a service</label>
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
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
                                rows={8}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
