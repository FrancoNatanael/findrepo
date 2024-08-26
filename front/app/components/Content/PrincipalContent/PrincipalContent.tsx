'use client'

import { useState } from "react";
import RepoCard from "./RepoCard";

export default function PrincipalContent(){
    //search repositories by language and generate array
    const [repositories, setRepositories] = useState<Array<Repository>>([])

    return <div className="w-[85%] ml-16">
        <h2 className="font-bold text-2xl">Featured Repositories</h2>
        <p className="opacity-80">Explore the latest and most popular projects</p>

        <div className="cards mt-6 flex flex-wrap gap-3">
           {
                repositories.length != 0 ?
                    repositories.map((repo) => (
                        <RepoCard repository={repo}/> 
                    ))
                : <p className="w-full text-center opacity-80 text-sm mt-5">Select any language to see repos {':)'}</p>
            }
        </div>
    </div>
}