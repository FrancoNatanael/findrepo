'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import RepoCard from "./RepoCard";
import { Dispatch, SetStateAction, useState } from "react";

export default function PrincipalContent({repos, loading = false, setItemsPerPage} : 
    {repos: Array<Repository>, loading: boolean, setItemsPerPage: Dispatch<SetStateAction<string>>}
){

    const saveRepository = (id: number) => {
        //
    }

    return <div className="w-[85%] ml-16">
        <div className="flex justify-between">
            <div>
                <h2 className="font-bold text-2xl">Featured Repositories</h2>
                <p className="opacity-80">Explore the latest and most popular projects</p>
            </div>

            <div className="mr-6">
                <Select onValueChange={(itemsPerPage) => setItemsPerPage(itemsPerPage)} defaultValue="10">
                    <SelectTrigger className="w-fit">
                        <SelectValue placeholder="Items" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

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