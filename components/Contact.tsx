"use client";

import {
  FaPhone,
  FaEnvelope,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-yellow-500 mb-4">
          Aloqa
        </h2>

        <p className="text-gray-400 mb-12">
          Hamkorlik, loyiha yoki ish takliflari uchun bog‘lanishingiz mumkin.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <a
            href="tel:+99888039052"
            className="
              group
              bg-zinc-900
              rounded-3xl
              p-8
              border border-zinc-800
              hover:border-yellow-500
              hover:-translate-y-3
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]
            "
          >
            <FaPhone
              size={40}
              className="text-yellow-500 mb-6 group-hover:scale-125 transition"
            />

            <h3 className="text-xl font-bold mb-2">
              Telefon
            </h3>

            <p className="text-gray-400">
              +998 88 039 00 52
            </p>
          </a>

          <a
            href="mailto:saidovabduqodir7766@gmail.com"
            className="
              group
              bg-zinc-900
              rounded-3xl
              p-8
              border border-zinc-800
              hover:border-yellow-500
              hover:-translate-y-3
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]
            "
          >
            <FaEnvelope
              size={40}
              className="text-yellow-500 mb-6 group-hover:scale-125 transition"
            />

            <h3 className="text-xl font-bold mb-2">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              saidovabduqodir7766@gmail.com
            </p>
          </a>

          <a
            href="https://t.me/Abduqodir_909"
            target="_blank"
            className="
              group
              bg-zinc-900
              rounded-3xl
              p-8
              border border-zinc-800
              hover:border-yellow-500
              hover:-translate-y-3
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]
            "
          >
            <FaTelegram
              size={40}
              className="text-yellow-500 mb-6 group-hover:scale-125 transition"
            />

            <h3 className="text-xl font-bold mb-2">
              Telegram
            </h3>

            <p className="text-gray-400">
              @Abduqodir_909
            </p>
          </a>

          <a
            href="https://github.com/o00605200-ui"
            target="_blank"
            className="
              group
              bg-zinc-900
              rounded-3xl
              p-8
              border border-zinc-800
              hover:border-yellow-500
              hover:-translate-y-3
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]
            "
          >
            <FaGithub
              size={40}
              className="text-yellow-500 mb-6 group-hover:scale-125 transition"
            />

            <h3 className="text-xl font-bold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400">
              Portfolio Source
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}