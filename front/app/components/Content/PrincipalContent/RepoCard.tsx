import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Eye, Github, Star } from "lucide-react"
import Link from "next/link"

  
export default function RepoCard({repository} : {repository: Repository}){
    return <div className="w-[30%] min-w-[265px]">
        <Card>
        <CardHeader>
            <div className="flex">
                <Avatar>
                    <AvatarImage src={repository.owner.avatar_url} />
                    <AvatarFallback>AVATAR</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                    <CardTitle>{repository.name}</CardTitle>
                    <CardDescription>by {repository.owner.login}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p>{repository.description}</p>

            <div className="flex gap-5 mt-3">
                <div className="flex gap-1">
                    <Star width={20} strokeWidth={1.5}/><label>{repository.stargazers_count}</label>
                </div>
                <div className="flex gap-1">
                    <Eye width={20} strokeWidth={1.5}/><label>{repository.watchers_count}</label>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Link href={repository.html_url} target="_blank" className="w-full">
                <Button className="w-full"><Github/></Button>
            </Link>
        </CardFooter>
        </Card>
    </div>
}