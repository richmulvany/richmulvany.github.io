import ProfileHeader from './ProfileHeader';
import QualificationList from '../qualifications/QualificationList';

/**
 * Sidebar component (desktop).
 * Displays profile information and qualifications.
 */
export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <ProfileHeader />
        <QualificationList />
      </div>
    </div>
  );
}