import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";


const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Effortlessly create and customize different event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Easily set your availability and let Appointrr handle the scheduling of your meetings",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Generate personalized scheduling links to share with clients, making booking seamless.",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "create your free Appointrr account and get started in minutes." },
  {
    step: "Set Availability",
    description: "Customize your availability to make scheduling with you straightforward and hassle-free.",
  },
  {
    step: "Share Your Link",
    description: "Send your unique Appointrr scheduling link to clients or colleagues to streamline appointments.",
  },
  {
    step: "Get Booked",
    description: "Automatically receive confirmations for new appointments, all managed through Appointrr.",
  },
];


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            Simplify Your Appointments
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Appointrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        {/* <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div> */}
      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <CardTitle className="text-center text-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

            {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Appointments?
          </h2>
          
          <Link href={"/dashboard"}>
            <Button size="lg" variant="secondary" className="text-blue-600">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
  );
}
