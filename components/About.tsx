export default function About() {
    return (
      <section
        id="about"
        className="min-h-screen bg-zinc-950 text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-yellow-500 mb-10">
            Men haqimda
          </h2>
  
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Saidov Abduqodir
              </h3>
  
              <p className="text-gray-300 leading-8">
                Talimarjon IES AJ IAO' sexida Mehanik kattaliklar
                va himoya guruhida 4-darajali elektr chilangar
                lavozimida faoliyat yuritaman.
              </p>
            </div>
  
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">
                Maqsad
              </h3>
  
              <p className="text-gray-300 leading-8">
                Energetika, IT va 3D texnologiyalarni birlashtirib
                amaliy sanoat yechimlarini yaratish.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }