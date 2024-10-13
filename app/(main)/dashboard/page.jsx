"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod"
import usernameSchema from '@/app/lib/validators';
import useFetch from '@/hooks/useFetch';
import { updateUsername } from '@/actions/users';
import { BarLoader } from 'react-spinners';


const Dashboard = () => {

  const {isLoaded , user} = useUser();

  const{
    register , 
    handleSubmit, 
    setValue, 
    formState:{errors}}=useForm({
    resolver: zodResolver(usernameSchema),
  })

  useEffect(()=>{
    setValue("username", user?.username)
  },[isLoaded])

  const{
    loading, error, func :funcUpdateUserName
  }= useFetch(updateUsername)

  const onSubmit= async(data)=>{
    funcUpdateUserName(data.username)
  };


  return (
    <div className="space-y-5">

    {/* userName & their link  */}
      <Card>

        <CardHeader>
          <CardTitle>
            Welcome {user?.firstName}
          </CardTitle>
        </CardHeader>

        <CardContent>
            {/* User-Updates  */}
        </CardContent>
        
      </Card>
      
    {/* user unique link & code for updating UserName  */}
      <Card>
        <CardHeader>
          <CardTitle>
              Your Unique Link: 
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <div className='flex items-center gap-3'>
                <span>{window?.location.origin}</span>
                <Input {...register("username")} placeholder="username"></Input>
              </div>

              {/* showing error if username is not fulfilling the conditions */}
              {/* error for hook-form */}
              {errors.username && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.username.message}
                </p>
              )}

              {/* error for api */}
              {error && (
                <p className='text-red-500 text-sm mt-1'>
                  {error?.message}
                </p>
              )}
            </div>

            {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#fff" />
            )}

            <Button type="submit" >
                update Username
            </Button>
          </form>

        </CardContent>
        
      </Card>
    </div>
  )
}

export default Dashboard