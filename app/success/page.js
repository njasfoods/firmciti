'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import Steps from '@/components/UI/Steps'

const SuccessPage = () => {
    const router = useRouter()

    const handleBackToHome = () => {
        router.push('/') // Redirect to the home page or any other page
    }

    return (
        <div className='min-h-screen py-24'>
            <div className='flex justify-center text-center w-full h-full'>
                <div className='w-full h-full bg-white py-8 px-16'>
                    <h1 className='text-3xl text-secondary-dark'>Appointment Confirmed</h1>

                    <Steps step={3} />
                    <div className='mt-12 text-secondary'>
                        <p className='text-lg'>
                            Thank you for booking an appointment with us. Your appointment has been successfully scheduled.
                        </p>
                        <div className='flex justify-center mt-16'>
                            <button
                                type='button'
                                onClick={handleBackToHome}
                                className='bg-gray-800 px-6 py-2 rounded-2xl w-28 text-white'
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage
