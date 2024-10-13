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