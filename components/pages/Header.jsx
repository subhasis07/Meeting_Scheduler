import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { Button } from '../ui/button';
import { PenBox } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UserMenu from './User-Menu';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {

    await checkUser();
  return (
    <nav className='mx-auto py-3 px-5 flex justify-between shadow-md border-b-2'>   
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                width="180"
                height="70"
                alt="Schedulrr Logo"
                className="h-14 w-auto"
            />
        </Link>

        <div className='flex items-center gap-4'>
            <Link href="/events">
                <Button variant="default" className="flex items-center gap-2">
                    <PenBox size={18} />
                    <span>Create Event</span>
                </Button>
            </Link>

            <SignedOut>
                <SignInButton>
                    <Button variant="outline">Login</Button>
                </SignInButton>
            </SignedOut>
            
            <SignedIn>
                <UserMenu/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Header