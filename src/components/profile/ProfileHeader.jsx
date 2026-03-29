import SocialsBar from "./SocialsBar";
import ProfilePic from "../../assets/profile_pic.png";

export default function ProfileHeader({ compact = false }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={ProfilePic}
        className={`rounded-2xl object-cover ${
          compact ? "w-20 h-20" : "w-full max-w-xs"
        }`}
      />

      <h1 className="text-2xl mt-4">
        Richard Mulvany
      </h1>

      <p className="text-gray-500 text-sm">
        Data Governance Engineer | MSc Data Science
      </p>

      <p className="text-[#f98555] text-sm mb-2">
        Grayce Group Ltd for TotalEnergies SE
      </p>

      <SocialsBar
        iconColor="#666"
        hoverColor="#f98555"
        iconSize="24px"
      />
    </div>
  );
}