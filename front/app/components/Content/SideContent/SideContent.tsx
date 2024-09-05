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
    const selectItems = [
        { value: 'javascript', label: 'Javascript' },
        { value: 'typescript', label: 'Typescript' },
        { value: 'csharp', label: 'C#' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'c++', label: 'C++' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'php', label: 'PHP' },
        { value: 'swift', label: 'Swift' },
        { value: 'go', label: 'Go' },
        { value: 'rust', label: 'Rust' },
        { value: 'kotlin', label: 'Kotlin' },
        { value: 'r', label: 'R' },
        { value: 'dart', label: 'Dart' },
        { value: 'objectivec', label: 'Objective-C' },
        { value: 'perl', label: 'Perl' },
        { value: 'scala', label: 'Scala' },
        { value: 'haskell', label: 'Haskell' },
      ];

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
                        {
                            selectItems.map((item: {value: string, label: string}) => (
                                <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>
                            ))
                        }
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