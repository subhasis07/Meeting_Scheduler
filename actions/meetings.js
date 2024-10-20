"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

export async function getUserMeetings(type="upcoming"){
    const {userId} = auth();

    if(!userId){
        throw new Error("Unauthorized");
    }

    const user= await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    })

    if(!user){
        throw new Error("User is not found");
    }

    const currDate = new Date();

    const meetings= await db.booking.findMany({
        where:{
            userId:user.id,
            startTime: type === "upcoming" ? {gte: currDate} : {lt: currDate},
        },
        include:{
            event:{
                include:{
                    user:{
                        select:{
                            name: true,
                            email: true,
                        },
                    },
                },
            },
        },
        orderBy:{
            startTime: type ===" upcoming" ? "asc" : "desc",
        },
    });

    return meetings;
}