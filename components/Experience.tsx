"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-yellow-500 mb-16">
          Ish tajribasi
        </h2>

        <div className="relative border-l-4 border-yellow-500 pl-10">

          <div className="absolute -left-[14px] top-0 w-6 h-6 bg-yellow-500 rounded-full shadow-[0_0_25px_rgba(234,179,8,0.8)]"></div>

          <div
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-8
              hover:border-yellow-500
              hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]
              transition-all
              duration-500
            "
          >
            <span className="text-yellow-500 font-semibold">
              2025 Avgust - Hozirgacha
            </span>

            <h3 className="text-3xl font-bold mt-3">
              4-darajali elektr chilangar
            </h3>

            <h4 className="text-xl text-gray-300 mt-2">
              Talimarjon IES AJ
            </h4>

            <p className="text-gray-400 mt-3">
              IAO sexi — Mexanik kattaliklar va himoya guruhi
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <div className="bg-black/40 p-4 rounded-xl">
                🌡️ Harorat datchiklari bilan ishlash
              </div>

              <div className="bg-black/40 p-4 rounded-xl">
                📊 Bosim datchiklarini sozlash
              </div>

              <div className="bg-black/40 p-4 rounded-xl">
                📈 Vibratsiya datchiklarini kalibrlash
              </div>

              <div className="bg-black/40 p-4 rounded-xl">
                🔧 Tamirlash va diagnostika
              </div>

              <div className="bg-black/40 p-4 rounded-xl">
                ⚙️ Texnik xizmat korsatish
              </div>

              <div className="bg-black/40 p-4 rounded-xl">
                🏭 Sanoat avtomatlashtirish tizimlari
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}