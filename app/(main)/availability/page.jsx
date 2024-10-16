import { getUserAvailibility } from '@/actions/availability'
import React from 'react'
import { defaultAvailability } from './data'
import AvailabilityForm from './_component/AvailabilityForm'


export default async function AvailibilityPage(){

  const availibility= await getUserAvailibility()
  return (
    <AvailabilityForm initialData={availibility || defaultAvailability}>

    </AvailabilityForm>
  )
}
