
import { jobs } from "../../data/jobs";
import { degrees } from "../../data/degrees";
import { certificates } from "../../data/certificates";
import QualificationPill from './QualificationPill';
import SocialsBar from "./SocialsBar";
import ProfilePic from "../../assets/profile_pic.png";

export default function Sidebar() {
  return (
    <div 
    className="flex flex-col justify-between h-full">
      <div>
        <div className="ml-0">
            <p 
            className="text-5xl mb-2">Richard Mulvany
            </p>

            <h1 className="ml-[0.1rem] text-gray-500 text-lg mb-0">
                Data Governance Engineer | MSc Data Science
            </h1>

            <h1 className="ml-[0.1rem] text-[#f98555] text-lg mb-6">
                Grayce Group Ltd for TotalEnergies SE
            </h1>
        </div>
            {/* PIC */}
            <div className="relative">
                <img 
                    src={ProfilePic}
                    alt="Profile Picture"
                    className="flex max-w-0 lg:max-w-full rounded-2xl">
                </img>
                {/* SOCIALS */}
                <div className="font-sans absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 h-1/6 w-1/2 rounded-full">
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
        <div className="font-sans relative mt-8">
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
        <div className="font-sans relative mt-4">
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
        <div className="font-sans relative mt-4">
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