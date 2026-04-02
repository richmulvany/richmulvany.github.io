import ProfileHeader from "./ProfileHeader";
import QualificationsList from "./QualificationList";

export default function MobileHeader() {


  return (
    <div className="flex flex-col gap-4 sticky top-0 ">

        {/* Hero */}
        <ProfileHeader compact />

        {/* Toggle */}
        <QualificationsList />


    </div>
  );
}