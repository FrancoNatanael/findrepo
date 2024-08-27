'use client'

import { useEffect, useState } from "react";
import PrincipalContent from "./PrincipalContent/PrincipalContent";
import SideContent from "./SideContent/SideContent";
import useFetch from "@/hooks/useFetch";

export default function ContentWrapper(){
    const [repos, setRepos] = useState<Array<Repository>>([])
    const [filterObject, setFilterObject] = useState({
        language: "javascript",
        keyword: ""
    })
    const [itemsPerPage, setItemsPerPage] = useState("10")
    const {data, error, loading} = useFetch(`https://api.github.com/search/repositories?q=+language:${filterObject.language}+${filterObject.keyword}+in:description&per_page=${itemsPerPage}&page=1`)

    useEffect(() => {
        if(data) setRepos(data!.items as Array<Repository>)
    }, [data])

    return <div className="flex justify-between">
        <SideContent setFilterObject={setFilterObject}/>
        <PrincipalContent repos={repos} loading={loading} setItemsPerPage={setItemsPerPage}/>
    </div>
}