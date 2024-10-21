import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns';
import { Calendar, Clock, Video } from 'lucide-react';
import React from 'react'
import CancelMeetingButton from './CancelMeetings';



const MeetingList = ({meetings, type}) => {
    if (meetings.length === 0) {
        return <p>No {type} meetings found.</p>;
      }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {meetings.map((meeting)=>{
            return(
                <Card key={meeting.id} className="flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle>{meeting.event.title}</CardTitle>
                        <CardDescription>{meeting.name}</CardDescription>
                        <CardDescription>&quot;{meeting.additionalInfo}&quot;</CardDescription>
                    </CardHeader>
                    <CardContent>

                        {/* booking date */}
                            <div className="flex items-center mb-2">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>{format(new Date(meeting.startTime), "MMMM d, yyyy")}</span>
                            </div>

                            {/* meeting start & end time  */}

                            <div className="flex items-center mb-2">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>
                                    {format(new Date(meeting.startTime), "h:mm a")} -{" "}
                                    {format(new Date(meeting.endTime), "h:mm a")}
                                </span>
                            </div>

                            {/* meeting link */}

                            {meeting.meetLink && (
                                <div className="flex items-center">
                                    <Video className="mr-2 h-4 w-4" />
                                    <a
                                    href={meeting.meetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                    >
                                    Join Meeting
                                    </a>
                                </div>
                            )}
                    </CardContent>
                    <CardFooter>
                    {type === "upcoming" && (
                        <CardFooter className="flex justify-between">
                            <CancelMeetingButton meetingId={meeting.id} />
                        </CardFooter>
                    )}
                    </CardFooter>
                </Card>
            )
          
        })}
    </div>
  )
}

export default MeetingList