"use server"

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server"

export async function updateUsername(username){
    const {userId} =  auth();

    if(!userId){
        throw new Error("Unauthorized");
    }

    //check username already taken or not

    const existingUserName= await db.user.findUnique({
        where: {username},
    })

    if(existingUserName && existingUserName.id!== userId){
        throw new Error("username already taken");
    }

    //updating-logic

    //in DB
    await db.user.update({
        where: {clerkUserId: userId},
        data:{username}
    })

    //in clerkClient
    await clerkClient.users.updateUser(userId,{
        username,
    })

    return {
        success: true
    }
}

export async function getUserByUsername(username){
    const user=await db.user.findUnique({
        where: {username},
        select:{
            id: true,
            name: true,
            email:true,
            imageUrl:true,
            events:{
                where:{
                    isPrivate: false,
                },
                orderBy:{
                    createdAt: "desc",
                },
                select:{
                    id: true,
                    title:true,
                    description: true,
                    isPrivate: true,
                    _count:{
                        select: {
                            bookings: true,
                        }
                    }
                }
            }
        }
    });

    return user;
}