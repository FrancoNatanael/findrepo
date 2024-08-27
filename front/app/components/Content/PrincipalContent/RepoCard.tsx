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
import { Bookmark, Eye, Github, Star } from "lucide-react"
import Link from "next/link"

  
export default function RepoCard({repository, save} : {repository: Repository, save: (id: number) => void}){
    return <div className="w-[30%] min-w-[300px] flex flex-col">
        <Card className="flex flex-col flex-grow flex-shrink basis-auto">
        <CardHeader>
            <div className="flex relative">
                <Avatar>
                    <AvatarImage src={repository.owner.avatar_url} />
                    <AvatarFallback>AVATAR</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                    <CardTitle className="text-wrap">{repository.name}</CardTitle>
                    <CardDescription>by @{repository.owner.login}</CardDescription>
                </div>
                <div className="self-start absolute right-0">
                    <Bookmark width={20} strokeWidth={1.5}></Bookmark>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-wrap">{repository.description}</p>

            <div className="flex gap-5 mt-3">
                <div className="flex gap-1 opacity-80">
                    <Star width={20} strokeWidth={1.5}/><label>{repository.stargazers_count}</label>
                </div>
                <div className="flex gap-1 opacity-80">
                    <Eye width={20} strokeWidth={1.5}/><label>{repository.watchers_count}</label>
                </div>
            </div>
        </CardContent>

        <CardFooter className="mt-auto">
            <Link href={repository.html_url} target="_blank" className="w-full">
                <Button className="w-full"><Github/></Button>
            </Link>
        </CardFooter>
        </Card>
    </div>
}