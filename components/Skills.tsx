"use client";

import {
  FaBolt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaFingerprint,
  FaPrint,
} from "react-icons/fa";

import {
  SiMysql,
  SiAutodesk,
} from "react-icons/si";

import { MdSensors } from "react-icons/md";

const skills = [
  {
    name: "PLC Siemens",
    icon: "⚙️",
    level: 90,
  },
  {
    name: "SCADA",
    icon: <FaBolt size={35} />,
    level: 85,
  },
  {
    name: "HMI",
    icon: <FaBolt size={35} />,
    level: 80,
  },
  {
    name: "Elektr avtomatlashtirish",
    icon: <FaBolt size={35} />,
    level: 92,
  },
  {
    name: "3ds Max",
    icon: <SiAutodesk size={35} />,
    level: 90,
  },
  {
    name: "Kompas 3D",
    icon: "📐",
    level: 85,
  },
  {
    name: "3D Printing",
    icon: <FaPrint size={35} />,
    level: 85,
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={35} />,
    level: 75,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={35} />,
    level: 70,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={35} />,
    level: 75,
  },
  {
    name: "Microsoft Office",
    icon: <FaDatabase size={35} />,
    level: 95,
  },
  {
    name: "RFID Systems",
    icon: <MdSensors size={35} />,
    level: 88,
  },
  {
    name: "Fingerprint Systems",
    icon: <FaFingerprint size={35} />,
    level: 90,
  },
  {
    name: "Industrial Sensors",
    icon: <MdSensors size={35} />,
    level: 85,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-yellow-500 mb-12">
        Konikmalar
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-6
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-500
                hover:shadow-[0_0_35px_rgba(234,179,8,0.25)]
              "
            >
              <div className="flex items-center gap-4 mb-5">

                <div
                  className="
                    text-yellow-500
                    transition-all
                    duration-500
                    group-hover:scale-125
                  "
                >
                  {skill.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    {skill.name}
                  </h3>
                </div>

                <div className="text-yellow-500 font-bold">
                  {skill.level}%
                </div>

              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

                <div
                  className="
                    h-full
                    bg-yellow-500
                    rounded-full
                    transition-all
                    duration-1000
                    group-hover:bg-yellow-400
                  "
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}