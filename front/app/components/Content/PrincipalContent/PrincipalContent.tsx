'use client'

import RepoCard from "./RepoCard";

export default function PrincipalContent({repos, loading = false} : {repos: Array<Repository>, loading: boolean}){
    
    const saveRepository = (id: number) => {
        //
    }

    return <div className="w-[85%] ml-16">
        <h2 className="font-bold text-2xl">Featured Repositories</h2>
        <p className="opacity-80">Explore the latest and most popular projects</p>

        <div className="cards mt-6 flex flex-wrap gap-3">
           {
                loading ? <span className="loading loading-spinner loading-lg m-auto mt-5 opacity-80"></span> 
                : repos && repos.length != 0 ?
                    repos.map((repo, index) => (
                        <RepoCard repository={repo} key={index} save={saveRepository}/> 
                    ))
                : <p className="w-full text-center opacity-80 text-sm mt-5">Select any language to see repos {':)'}</p>
            }
        </div>
    </div>
}