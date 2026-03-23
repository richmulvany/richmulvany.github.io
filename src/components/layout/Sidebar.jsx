
import { degrees } from "../../data/degrees";
import { certificates } from "../../data/certificates";
import QualificationPill from '../sections/QualificationPill';
import SocialsBar from "../sections/SocialsBar";
import ProfilePic from "../../assets/profile_pic.jpg";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-4xl font-semibold mb-4">Richard Mulvany</h1>

        <p className="text-gray-500 mb-1">
            Data Governence Engineer | MSc Data Science
        </p>

        <p className="text-[#f98555] mb-6">
            Grayce Group Ltd for TotalEnergies SE
        </p>
        <img 
            src={ProfilePic}
            alt="Profile Picture"
            className="flex max-w-full rounded-3xl">
        </img>
        <div className="mt-8">
            <SocialsBar
            iconColor="#d8d2d0"
            iconSize="32px"
            hoverColor="#f98555"
            />
        </div>
        {/* DEGREE PILLS */}
        <div className="relative mt-8">
        {degrees.map((degree) => {
        return (
            <div
                key={degree.title}
            >
                <QualificationPill
                QualType="degree"
                qualification={degree}
                iconColor="#f98555"
                />
            </div>
            );
        })}
        </div>

        {/* CERT PILLS */}
        <div className="relative mt-4">
        {certificates.map((certificate) => {
        return (
            <div
                key={certificate.title}
            >
                <QualificationPill
                QualType="certificate"
                qualification={certificate}
                iconColor="#f98555"
                />
            </div>
            );
        })}
        </div>
      </div>
    </div>
  );
}