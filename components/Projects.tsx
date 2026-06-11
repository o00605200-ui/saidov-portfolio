"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      icon: "🔒",
      title: "Sanoat QR xavfsizlik tizimi",
      description:
        "Sanoat obyektlarida xavfsizlik nazorati va xodimlarni identifikatsiya qilish tizimi.",
      media: [
        { type: "image", src: "/images/sanoat-qr.jpg" },
        { type: "image", src: "/images/sanoat-qr1.jpg" },
        { type: "image", src: "/images/sanoat-qr2.jpg" },
        { type: "image", src: "/images/sanoat-qr3.jpg" },
        { type: "image", src: "/images/sanoat-qr4.jpg" },
        { type: "image", src: "/images/sanoat-qr5.jpg" },
      ],
    },

    {
      icon: "🏥",
      title: "Tibbiy QR loyiha",
      description:
        "Tibbiy ma'lumotlarni QR kod orqali tezkor ko'rish va boshqarish tizimi.",
      media: [
        { type: "image", src: "/images/tibbiy-qr3.jpg" },
        { type: "image", src: "/images/tibbiy-qr2.jpg" },
        { type: "image", src: "/images/tibbiy-qr1.jpg" },
        { type: "image", src: "/images/tibbiy-qr.jpg" },  
      ],
    },

    {
      icon: "🌫️",
      title: "Chiqindi gazlarni monitoring qilish",
      description:
        "Atmosferaga chiqarilayotgan gazlarni masofadan kuzatish va tahlil qilish.",
      media: [{ type: "image", src: "/images/SCADA.jpg" }],
    },

    {
      icon: "🚗",
      title: "Avtomobilni barmoq izi bilan boshqarish",
      description:
        "Avtomobilni barmoq izi orqali ishga tushirish va xavfsizlikni oshirish loyihasi.",
      media: [{ type: "video", src: "/images/fingerprint-car.mp4" }],
    },

    {
      icon: "📡",
      title: "RFID eshik boshqaruvi",
      description:
        "RFID kartalar orqali eshiklarni ochish va yopish tizimi.",
      media: [{ type: "video", src: "/images/rfid-car.mp4" }],
    },

    {
      icon: "🖨️",
      title: "3D modellashtirish va 3D bosib chiqarish",
      description:
        "3D modellar yaratish va ularni 3D printer orqali ishlab chiqarish.",
      media: [
        { type: "image", src: "/images/klapn.png" },
        { type: "image", src: "/images/uzuk.png" },
        { type: "image", src: "/images/uzuk-1.png" },
        { type: "image", src: "/images/hospital-1.jpg" },
        { type: "image", src: "/images/hospital-2.jpg" },
        { type: "image", src: "/images/bino.png" },
        { type: "image", src: "/images/holder.png" },
        { type: "video", src: "/images/bino1.mp4" },
        { type: "video", src: "/images/pech.mp4" },
      ],
    },

    {
      icon: "📐",
      title: "Sanoat avtomatlashtirish sxemalari",
      description:
        "PLC, KIP va avtomatlashtirish tizimlari uchun ishlab chiqilgan texnik sxemalar va muhandislik chizmalari.",
      media: [
        { type: "image", src: "/images/chertioj-1.jpg" },
        { type: "image", src: "/images/chertioj-2.jpg" },
        { type: "image", src: "/images/chertioj-3.jpg" },
        { type: "image", src: "/images/chertioj-4.jpg" },
        { type: "image", src: "/images/chertioj-5.jpg" },
      ],
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-black text-white py-32"
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-yellow-500 mb-12">
            Loyihalar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-zinc-900
                  rounded-3xl
                  p-8
                  cursor-pointer
                  border border-zinc-800
                  transition-all
                  duration-500
                  hover:-translate-y-4
                  hover:border-yellow-500
                  hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
                "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>

                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    relative z-10
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                    mt-6
                    text-yellow-500
                    font-semibold
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-700
                    relative z-10
                  "
                >
                  Batafsil →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}