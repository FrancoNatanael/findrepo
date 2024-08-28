'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const router = useRouter()

    return <nav className="flex justify-between content-center py-6 w-[80%] m-auto">
        <Link href={'/'}>
            <p className="font-semibold italic">.findrepo</p>
        </Link>

        <ul className="flex justify-between gap-6">
            <Link href={'/'}>Explore</Link>
            <Link href={'/'}>My repos</Link>
            <Link href={'/'}>Bookmarks</Link>
        </ul>

        <Avatar onClick={() => router.push('/login')} className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" className=""/>
            <AvatarFallback>AV</AvatarFallback>
        </Avatar>

    </nav>
}