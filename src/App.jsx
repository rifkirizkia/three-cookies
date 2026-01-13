import { useState, useEffect } from "react";

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
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
    document.body.style.overflow =
      selected || cartOpen ? "hidden" : "auto";
  }, [selected, cartOpen]);

  const addToCart = (product) => {
  setCart((prev) => {
    const exist = prev.find((p) => p.id === product.id);
    if (exist) {
      return prev.map((p) =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
      );
    }
    return [...prev, { ...product, qty: 1 }];
  });
};
const sendToWhatsApp = () => {
  const phone = "6289668095182"; // GANTI NOMOR WA KAMU

  const message = cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.name}\n   Qty: ${item.qty}\n   Price: ${item.price}`
    )
    .join("\n\n");

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);

  const finalMessage = `
Hallo THREE COOKIES 🍪
Saya mau memesan kue berikut:

${message}

Total kue: ${totalQty}

Terimakasih banyak 🙏
  `;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    finalMessage
  )}`;

  window.open(url, "_blank");
};

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
      </div>

      {/* FLOATING CART ICON */}
      {cart.length > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#7a3e1d] w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        >
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {cart.reduce((sum, i) => sum + i.qty, 0)}
          </span>
        </button>
      )}

      {/* PRODUCT DETAIL MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelected(null)}
          />

          <div className="relative w-full max-w-[430px] h-[85vh] bg-[#fffaf0] rounded-t-3xl animate-slideUp overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-[#7a3e1d] text-white w-9 h-9 rounded-full"
            >
              ×
            </button>

            <div className="p-4 pt-12">
              <img
                src={selected.image}
                className="rounded-2xl mb-4 w-full object-cover"
              />

              <h3 className="text-lg font-semibold text-[#6b3a1e]">
                {selected.name}
              </h3>
              <p className="text-[#7a3e1d] font-semibold mb-4">
                {selected.price}
              </p>

              <button
                onClick={() => {
                  addToCart(selected);
                  setSelected(null);
                }}
                className="w-full bg-[#7a3e1d] text-white py-4 rounded-full font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART POPUP */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setCartOpen(false)}
          />

          <div className="relative w-full max-w-[430px] h-[80vh] bg-[#fffaf0] rounded-t-3xl animate-slideUp overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-[#6b3a1e]">
                Your Cart
              </h3>
              <button
                onClick={() => setCartOpen(false)}
                className="w-8 h-8 bg-[#7a3e1d] text-white rounded-full"
              >
                ×
              </button>
            </div>

            <div className="p-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-[#6b3a1e]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#8b5a3c]">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev
                            .map((p) =>
                              p.id === item.id
                                ? { ...p, qty: p.qty - 1 }
                                : p
                            )
                            .filter((p) => p.qty > 0)
                        )
                      }
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    >
                      −
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        setCart((prev) =>
                          prev.map((p) =>
                            p.id === item.id
                              ? { ...p, qty: p.qty + 1 }
                              : p
                          )
                        )
                      }
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-600 text-white py-4 rounded-full font-semibold"
              >
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
