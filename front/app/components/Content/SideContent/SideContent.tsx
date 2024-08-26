import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SideContent(){
    return <div className="w-fit flex flex-col">
        <h2 className="font-bold text-2xl">Explore</h2>
        <p className="opacity-80">Browse repositories by category</p>

        <div className="mt-5">

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="javascript">Javascript</SelectItem>
                    <SelectItem value="typescript">Typescript</SelectItem>
                    <SelectItem value="c#">C#</SelectItem>
                </SelectContent>
            </Select>
        </div>

    </div>
}