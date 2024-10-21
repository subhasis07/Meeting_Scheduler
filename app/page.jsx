import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, LinkIcon } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Quickly set up and customize your events.",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Easily adjust your availability and let Appointrr handle your bookings.",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share personalized links to simplify scheduling.",
  },
];

const steps = [
  { step: "Sign Up", description: "Create your free Appointrr account in minutes." },
  { step: "Set Availability", description: "Define your available time slots effortlessly." },
  { step: "Share Your Link", description: "Share your scheduling link with ease." },
  { step: "Get Booked", description: "Receive instant appointment confirmations." },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 text-gray-900">Organize Your Time with Ease</h1>
        <p className="text-lg text-gray-600 mb-8">Appointrr makes scheduling simple and stress-free. Create events, manage availability, and let others book with ease.</p>
        <Link href="/dashboard">
          <Button size="lg" className="text-lg bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
        </Link>
      </div>

      {/* Key Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Why Appointrr?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg border border-gray-200">
              <CardHeader className="flex justify-center">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              </CardHeader>
              <CardTitle className="text-center text-lg font-semibold">{feature.title}</CardTitle>
              <CardContent className="text-center text-gray-600">{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center max-w-xs p-4 bg-gray-100 rounded-lg shadow">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-medium text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white text-center rounded-lg py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Ready to Streamline Your Scheduling?</h2>
        <Link href="/dashboard">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">Get Started Free</Button>
        </Link>
      </div>
    </main>
  );
}
