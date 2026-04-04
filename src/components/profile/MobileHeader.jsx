import ProfileHeader from './ProfileHeader';
import QualificationsList from '../qualifications/QualificationList';

export default function MobileHeader() {
  return (
    <div className="flex flex-col gap-4 sticky top-0 ">
      {/* Hero */}
      <ProfileHeader compact />

      {/* Qualifications */}
      <div className="ml-4">
        <QualificationsList />
      </div>
    </div>
  );
}
