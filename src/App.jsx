import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Coklat Stick",
    price: "Rp 55K",
    image:
      "/assets/coklat-stik.jpeg",
    desc: "Classic homemade cookies loaded with premium chocolate chips",
  },
  {
    id: 2,
    name: "Kastengel",
    price: "Rp 55K",
    image:
      "/assets/kastengel.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 3,
    name: "Putri Salju",
    price: "Rp 50K",
    image:
      "/assets/putri-salju.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 4,
    name: "Nastar",
    price: "Rp 55K",
    image:
      "/assets/nastar-klasik.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 5,
    name: "Sultan Cookies",
    price: "Rp 55K",
    image:
      "/assets/sultan-cookies.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 6,
    name: "Sagu Keju",
    price: "Rp 55K",
    image:
      "/assets/sagu-keju.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 7,
    name: "Semprit",
    price: "Rp 50K",
    image:
      "/assets/semprit.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 8,
    name: "Lidah Kucing",
    price: "Rp 40K",
    image:
      "/assets/lidah-kucing.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 9,
    name: "Kurma Coklat",
    price: "Rp 50K",
    image:
      "/assets/kurma-coklat.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 10,
    name: "Coklat Mede",
    price: "Rp 55K",
    image:
      "/assets/coklat-mede.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 11,
    name: "Corn Flakes Cookies",
    price: "Rp 50K",
    image:
      "/assets/coklat-mede.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 12,
    name: "Crekers Cookies",
    price: "Rp 50K",
    image:
      "/assets/crekers-cookies.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  },
  {
    id: 13,
    name: "Coklat Kacang",
    price: "Rp 50K",
    image:
      "/assets/coklat-kacang.jpeg",
    desc: "Rich buttery cookies with crunchy almond pieces",
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);
  return (
    /* BACKGROUND FULL */
    <div className="w-full min-h-screen flex justify-center bg-[#fff7e6]">
      {/* MOBILE CONTAINER */}
      <div className="w-full max-w-[430px] bg-[#fff7e6]">
        {/* HEADER */}
        <header className="bg-gradient-to-b from-[#7a3e1d] to-[#5a2b12] text-white text-center py-6">
          <div className="w-14 h-14 bg-black rounded-full mx-auto mb-2 flex items-center justify-center text-xs">
             <img
                  src={"/assets/cookie-logo.png"}
                  className="object-cover"
                />
          </div>
          <h1 className="text-xl font-semibold tracking-wide">
            THREE COOKIES
          </h1>
          <p className="text-sm opacity-90">
            Handcrafted with Love
          </p>
        </header>

        {/* HERO IMAGE */}
        {/* <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1590080877777-7b2bdf0aefb1"
            alt="Cookies"
            className="w-full h-[260px] object-cover"
          />
        </div> */}

        {/* TITLE */}
        <section className="px-4 pt-6">
          <h2 className="text-lg font-semibold text-[#6b3a1e]">
            Our Delicious Cookies
          </h2>
          <p className="text-sm text-[#8b5a3c] mt-1">
            Freshly baked every day with premium ingredients
          </p>
        </section>

        {/* GRID PRODUK (2 KOLOM MAX) */}
        <section className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-[#fffaf0] rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={p.image}
                  className="w-full h-32 object-cover"
                />

                <div className="p-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-[#6b3a1e] leading-tight">
                      {p.name}
                    </h3>
                    <span className="text-sm font-semibold text-[#6b3a1e]">
                      {p.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#8b5a3c] mt-1">
                    {p.desc}
                  </p>

                 <button
                    onClick={() => setSelected(p)}
                    className="mt-3 w-full bg-[#7a3e1d] text-white text-xs py-2 rounded-full"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSelected(null)}
            />

            {/* BOTTOM SHEET */}
            <div className="relative w-full max-w-[430px] h-[90vh] bg-[#fffaf0] rounded-t-3xl animate-slideUp overflow-y-auto">
              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-[#7a3e1d] text-white w-9 h-9 rounded-full"
              >
                ×
              </button>

              {/* CONTENT */}
              <div className="p-4 pt-12">
                <img
                  src={selected.image}
                  className="rounded-2xl mb-4 w-full object-cover"
                />

                <h3 className="text-lg font-semibold text-[#6b3a1e]">
                  {selected.name}
                </h3>
                <p className="text-[#7a3e1d] font-semibold mb-3">
                  {selected.price}
                </p>

                <h4 className="font-semibold text-[#6b3a1e] mb-1">
                  Description
                </h4>
                <p className="text-sm text-[#8b5a3c] leading-relaxed">
                  Our signature cookies are made with premium ingredients and baked fresh daily.
                </p>

                <h4 className="font-semibold text-[#6b3a1e] mt-4 mb-2">
                  Ingredients
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Premium flour",
                    "Belgian chocolate chips",
                    "Fresh butter",
                    "Brown sugar",
                    "Free-range eggs",
                    "Pure vanilla extract",
                  ].map((i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-100 px-3 py-1 rounded-full text-[#6b3a1e]"
                    >
                      {i}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/6289668095182?text=Saya Pesan ${selected.name}`}
                  className="block mt-6 bg-[#7a3e1d] text-white text-center py-4 rounded-full font-medium"
                >
                  Add to Cart
                </a>

                {/* DRAG INDICATOR */}
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-1 bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
