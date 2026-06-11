"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Chap qism */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-yellow-500 text-xl mb-4">
            Assalomu alaykum
            </p>

            <h1 className="text-7xl font-extrabold leading-none">
              Saidov
            </h1>

            <h1 className="text-7xl font-extrabold text-yellow-500 mt-2">
              Abduqodir
            </h1>

            <div className="mt-8 text-2xl text-gray-300 font-semibold">
  <span className="text-yellow-500">
    Industrial Automation
  </span>
  {" | "}
  PLC
  {" | "}
  SCADA
  {" | "}
  RFID
  {" | "}
  3D Design
</div>

<p className="mt-6 text-gray-400 max-w-xl leading-8">
  Sanoat avtomatlashtirish, PLC, SCADA, RFID,
  biometrik xavfsizlik tizimlari, 3D modellashtirish,
  sanoat sxemalarini loyihalash va dasturiy yechimlar
  yaratish bilan shug‘ullanaman.
</p>

            <div className="flex gap-4 mt-10">

              <a
                href="#projects"
                className="px-8 py-4 bg-yellow-500 text-black rounded-xl font-bold hover:scale-105 transition"
              >
                Loyihalar
              </a>

              <button
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 border border-yellow-500 text-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-black transition"
              >
                Video Resume 🎬
              </button>

            </div>
          </motion.div>

          {/* O'ng qism */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-yellow-500 blur-[120px] opacity-30 rounded-full"></div>

              <div className="relative w-96 h-96 rounded-full border-4 border-yellow-500 overflow-hidden hover:scale-105 transition duration-500">
                <img
                  src="/avatar.png"
                  alt="Abduqodir"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Video Resume Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="bg-zinc-900 border border-yellow-500 rounded-3xl p-6 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-yellow-500">
                Video Resume
              </h2>

              <button
                onClick={() => setShowVideo(false)}
                className="text-white text-3xl"
              >
                ✕
              </button>
            </div>

            <video
              controls
              autoPlay
              className="w-full rounded-2xl"
            >
              <source
                src="/images/video-resume.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </>
  );
}