import { GraduationCap, BadgeCheck, BriefcaseBusiness } from "lucide-react";


export default function QualificationPill({ QualType, qualification, iconColor }) {

    const iconMap = {
    degree: GraduationCap,
    certificate: BadgeCheck,
    job: BriefcaseBusiness,
    };

    const Icon = iconMap[QualType];

    if (!Icon) return null;

    return (
        <div className="relative mt-4">

            <div className="space-y-2 text-sm text-gray-600 pl-0 flex flex-inline">
            <Icon
                className=" 
                mt-2 ml-2
                opacity-80
                "
                style={{ color: iconColor || "#f98555" }}
                size={36}
            />
            <div className="ml-4 w-full flex flex-col bg-taupe-200 rounded-full">
                <p className="px-6 mt-2 truncate">
                    {qualification.title}</p>
                <p className="px-6 mb-2 truncate">
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