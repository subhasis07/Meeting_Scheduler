import React, { Suspense } from 'react'

export default async function AvailabilityLayout({children}){
  return (
    <div className='mx-auto'>
        <Suspense fallback={<div>Loading Availibility...</div>}>
            {children}
        </Suspense>
    </div>
  )
}

