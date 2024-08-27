'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function SideContent({setFilterObject} : {setFilterObject: Dispatch<SetStateAction<{language: string, keyword: string}>>}){
    const [filters, setFilters] = useState({
        language: "javascript",
        keyword: ""
    })

    const updateFilters = (value: string, key: string) => {
        const newFilters = {...filters, [key]: value}
        setFilters(newFilters) 
    }

    return <div className="w-fit flex flex-col">
        <h2 className="font-bold text-2xl">Explore</h2>
        <p className="opacity-80">Browse repositories by category</p>

        <div className="mt-5">
            <div>
                <Label htmlFor="language" className="opacity-90">Language</Label>
                <Select onValueChange={(language) => updateFilters(language, "language")} defaultValue="javascript">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="javascript">Javascript</SelectItem>
                        <SelectItem value="typescript">Typescript</SelectItem>
                        <SelectItem value="csharp">C#</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="c++">C++</SelectItem>
                        <SelectItem value="ruby">Ruby</SelectItem>
                        <SelectItem value="php">PHP</SelectItem>
                        <SelectItem value="swift">Swift</SelectItem>
                        <SelectItem value="go">Go</SelectItem>
                        <SelectItem value="rust">Rust</SelectItem>
                        <SelectItem value="kotlin">Kotlin</SelectItem>
                        <SelectItem value="r">R</SelectItem>
                        <SelectItem value="dart">Dart</SelectItem>
                        <SelectItem value="objectivec">Objective-C</SelectItem>
                        <SelectItem value="perl">Perl</SelectItem>
                        <SelectItem value="scala">Scala</SelectItem>
                        <SelectItem value="haskell">Haskell</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-4">
                <Label htmlFor="keyword" className="opacity-90">Keyword</Label>
                <Input placeholder="login, game, etc..." className="w-full" onChange={({target}) => updateFilters(target.value, "keyword")}/>
            </div>

            <Button className="w-full mt-4" onClick={() => setFilterObject(filters)}>Search</Button>
        </div>

    </div>
}