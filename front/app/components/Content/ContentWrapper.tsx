'use client'

import { useEffect, useState } from "react";
import PrincipalContent from "./PrincipalContent/PrincipalContent";
import SideContent from "./SideContent/SideContent";
import useFetch from "@/hooks/useFetch";

export default function ContentWrapper(){
    const [repos, setRepos] = useState<Array<Repository>>([])
    const [language, setLanguage] = useState("")
    const {data, error, loading} = useFetch(`https://api.github.com/search/repositories?q=""+language:${language}`)

    useEffect(() => {
        if(data) setRepos(data!.items as Array<Repository>)
    }, [data])

    return <div className="flex justify-between">
        <SideContent setLanguage={setLanguage}/>
        <PrincipalContent repos={repos} loading={loading}/>
    </div>
}