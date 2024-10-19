import { getUserByUsername } from "@/actions/users";
import EventCard from "@/components/pages/EventCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";

export async function generateMeradata({params}){
  const user = await generateMeradata(params.username);

  if (!user) {
    notFound();
  }

  return{
    title: `${user.name}'s Profile | Appointrr`,
    description: `Book an Event with ${user.name}.`
  }
}

export default async function UserProfilePage({ params }) {
    const user = await getUserByUsername(params.username);
  
    if (!user) {
      notFound();
    }
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={user.imageUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-600 text-center">
            Welcome to my scheduling page. Please select an event below to book a
            call with me.
          </p>
        </div>
  
        {user.events.length === 0 ? (
          <p className="text-center text-gray-600">No public events available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {user.events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                username={params.username}
                isPublic
              />
            ))}
          </div>
        )}
      </div>
    );
  }