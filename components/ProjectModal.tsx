"use client";

import Image from "next/image";
import ProjectTheme from "./ProjectTheme";

type MediaItem = {
  type: string;
  src: string;
};

type ProjectType = {
  title: string;
  description: string;
  media: MediaItem[];
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType | null;
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-zinc-900 border border-zinc-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <ProjectTheme title={project.title} />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">
              {project.title}
            </h2>

            <button
              onClick={onClose}
              className="text-white text-3xl hover:text-yellow-500 transition"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-300 mb-8 text-lg">
            {project.description}
          </p>

          {project.media.map((item, index) => (
            <div key={index} className="mb-10">
              {item.type === "image" ? (
                <div className="relative w-full h-[550px] rounded-3xl overflow-hidden border border-zinc-700 hover:border-yellow-500 transition">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-contain hover:scale-105 transition-all duration-500"
                  />
                </div>
              ) : (
                <video
                  controls
                  className="w-full rounded-3xl border border-zinc-700 hover:border-yellow-500 transition"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}