import { GraduationCap, BadgeCheck } from "lucide-react";


export default function QualifcationPill({ QualType, qualification, iconColor }) {

    let Icon;

    if (QualType === "degree") {
        Icon = GraduationCap;
    } else if (QualType === "certificate") {
        Icon = BadgeCheck;
    }  

    return (
        <div className="relative mt-4">

            <div className="space-y-2 text-sm text-gray-600 pl-0 flex flex-inline">
            <Icon
                className=" 
                mt-1 ml-2
                opacity-80
                "
                style={{ color: iconColor || "#f98555" }}
                size={36}
            />
            <div className="ml-4 w-full flex flex-col bg-taupe-200 rounded-full">
                <p className="ml-6 mt-2">
                    {qualification.title}</p>
                <p className="ml-6 mb-2">
                    {qualification.description}</p>
            </div>
            <Icon
                className=" 
                mt-1 ml-2
                text-orange-600 
                opacity-0
                "
                size={36}
            />
            </div>
        </div>
    )
}