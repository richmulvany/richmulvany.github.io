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
    <div className="mt-4">
      <div className="flex items-center space-x-4 text-gray-600">
        
        {/* Icon */}
        <Icon
          className="opacity-80 flex-shrink-0"
          style={{ color: iconColor || "#f98555" }}
          size={36}
        />

        {/* Pill */}
        <div className="flex flex-col justify-center bg-taupe-200 rounded-full px-6 py-2 w-full mr-[36px] min-h-[56px]">
          
          <h1 className="truncate leading-tight">
            {qualification.title}
          </h1>

          {qualification.description && (
            <h1 className="truncate text-sm opacity-80 leading-tight">
              {qualification.description}
            </h1>
          )}

        </div>
      </div>
    </div>
  );
}