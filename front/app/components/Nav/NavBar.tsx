import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function NavBar(){
    return <nav className="flex justify-between content-center">
        <Link href={'/'}>
            <p className="font-semibold italic">.findrepo</p>
        </Link>

        <ul className="flex justify-between gap-6">
            <Link href={'/'}>Explore</Link>
            <Link href={'/'}>My repos</Link>
            <Link href={'/'}>Bookmarks</Link>
        </ul>

        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AVATAR</AvatarFallback>
        </Avatar>

    </nav>
}