import { GraduationCap, BadgeCheck, BriefcaseBusiness } from 'lucide-react';

/**
 * Individual qualification pill.
 */
export default function QualificationPill({
  QualType,
  qualification,
  iconColor,
}) {
  const iconMap = {
    degree: GraduationCap,
    certificate: BadgeCheck,
    job: BriefcaseBusiness,
  };

  const Icon = iconMap[QualType];
  if (!Icon) return null;

  return (
    <div className="mt-4">
      <div className="flex items-center space-x-6 md:space-x-4 text-gray-600">
        <Icon
          className="opacity-80 flex-shrink-0"
          style={{ color: iconColor || '#f98555' }}
          size={36}
        />

        <div className="flex flex-col justify-center bg-taupe-300/40 md:bg-taupe-200 rounded-full px-6 py-2 w-full mr-4 md:mr-12 min-h-[56px] truncate">
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