
import { jobs } from "../../data/jobs";
import { degrees } from "../../data/degrees";
import { certificates } from "../../data/certificates";
import QualificationPill from '../sections/QualificationPill';
import SocialsBar from "../sections/SocialsBar";
import ProfilePic from "../../assets/profile_pic.png";

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
            {/* PIC */}
            <div className="relative">
                <img 
                    src={ProfilePic}
                    alt="Profile Picture"
                    className="flex max-w-0 lg:max-w-full rounded-3xl">
                </img>
                {/* SOCIALS */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 h-1/6 w-1/2 rounded-full">
                    <div className="relative bottom-3/4 translate-y-3/4">
                        <SocialsBar
                        iconColor="#d8d2d0"
                        iconSize="32px"
                        hoverColor="#f98555"
                        />
                </div>
            </div>
        </div>
        {/* JOB PILL */}
        <div className="relative mt-8">
        {jobs.map((job) => {
        return (
            <div
                key={job.title}
            >
                <QualificationPill
                QualType="job"
                qualification={job}
                iconColor="#f98555"
                />
            </div>
            );
        })}
        </div>
        {/* DEGREE PILLS */}
        <div className="relative mt-4">
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