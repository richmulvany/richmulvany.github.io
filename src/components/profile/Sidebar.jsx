import ProfileHeader from "./ProfileHeader";
import QualificationList from "../qualifications/QualificationList";

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