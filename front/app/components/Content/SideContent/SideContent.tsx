'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction } from "react"

export default function SideContent({setLanguage} : {setLanguage: Dispatch<SetStateAction<string>>}){
    return <div className="w-fit flex flex-col">
        <h2 className="font-bold text-2xl">Explore</h2>
        <p className="opacity-80">Browse repositories by category</p>

        <div className="mt-5">
            <Select onValueChange={(language) => setLanguage(language)} defaultValue="javascript">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="javascript">Javascript</SelectItem>
                    <SelectItem value="typescript">Typescript</SelectItem>
                    <SelectItem value="c#">C#</SelectItem>
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

    </div>
}