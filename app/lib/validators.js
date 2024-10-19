import { z } from 'zod';

export const usernameSchema=z.object({
  username:z
              .string()
              .min(3)
              .max(18)
              .regex(
                /^[a-zA-Z0-9_]+$/,
                "userName can only contains letters, numbers & underscrores"
              )
})

export const eventSchema=z.object({
  title: z
          .string()
          .min(1, "Title is Required")
          .max(50,"Title must be 50 chars or less"),
  description: z
                .string()
                .min(1, "Description is Required")
                .max(500,"Description must be 500 chars or less"),
  duration: z
              .number()
              .int()
              .positive("Duration must be a positive value"),
  isPrivate: z.boolean()
})

 export const daySchema = z.object({
  isAvailable:z.boolean(),
  startTime:z.string().optional(),
  endTime:z.string().optional(),
 }).refine((data)=>{
  if(data.isAvailable){
    return data.endTime>data.startTime;
  }
  return true;
 },{
  message:"End time must be more than start time",
  path:["endTime"],

  // if (data.isAvailable && data.startTime && data.endTime) {
  //   // Convert time strings to minutes for easy comparison
  //   const [startHour, startMinute] = data.startTime.split(':').map(Number);
  //   const [endHour, endMinute] = data.endTime.split(':').map(Number);

  //   const startTotalMinutes = startHour * 60 + startMinute;
  //   const endTotalMinutes = endHour * 60 + endMinute;

  //   // Check that end time is greater than start time
  //   return endTotalMinutes > startTotalMinutes;
  // }
  // return true;
  // },
  // {
  // message: 'End time must be later than start time',
  // path: ['endTime'],

 })


 export const availabilitySchema =z.object({
  monday:daySchema,
  tuesday:daySchema,
  wednesday:daySchema,
  thursday:daySchema,
  friday:daySchema,
  saturday:daySchema,
  sunday:daySchema,
  timeGap: z.number().min(0 ,"Time gap must be 0 sec").int()

 })

 export const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  additionalInfo: z.string().optional(),
});