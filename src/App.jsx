import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Coklat Stick",
    // priceTag: "Rp 55K",
    // price: 55,
    image:
      "/assets/coklat-stik.jpeg",
    desc: "Kue kering renyah dengan topping stik coklat.",
    badges: [
      "/assets/best-seller.png",
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 55,
        priceTag: "Rp 55K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
      },
    ],
  },
  {
    id: 2,
    name: "Kastengel",
    // priceTag: "Rp 55K",
    // price: 55,
    image:
      "/assets/kastengel.jpeg",
    desc: "Kue kering keju dengan tekstur renyah dan rasa keju yang gurih.",
    badges: [
      "/assets/best-seller.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 55,
        priceTag: "Rp 55K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
      },
    ],
  },
  {
    id: 3,
    name: "Putri Salju",
    // priceTag: "Rp 50K",
    // price: 50,
    image:
      "/assets/putri-salju.jpeg",
    desc: "Kue lembut berbentuk bulat yang dilapisi gula halus dengan rasa manis seimbang.",
    badges: [
      "/assets/best-seller.png",
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 50,
        priceTag: "Rp 50K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
      },
    ],
  },
  {
    id: 4,
    name: "Nastar",
    // priceTag: "Rp 55K",
    // price: 55,
    image:
      "/assets/nastar-klasik.jpeg",
    desc: "Kue lembut dengan isian selai nanas homemade dari buah nanas asli.",
    badges: [
      "/assets/best-seller.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 55,
        priceTag: "Rp 55K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
      },
    ],
  },
  {
    id: 5,
    name: "Sultan Cookies",
    // priceTag: "Rp 55K",
    // price: 55,
    image:
      "/assets/sultan-cookies.png",
    desc: "Kue kering berlapis dengan isian selai kurma dan tekstur lembut.",
    badges: [
      "/assets/best-product.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 55,
        priceTag: "Rp 55K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
      },
    ],
  },
  {
    id: 6,
    name: "Sagu Keju",
    // priceTag: "Rp 55K",
    // price: 55,
    image:
      "/assets/sagu-keju.jpeg",
    desc: "Kue sagu dengan tekstur ringan dan rasa keju yang gurih.",
    badges: [
      "/assets/best-seller.png",
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 55,
        priceTag: "Rp 55K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
      },
    ],
  },
  {
    id: 7,
    name: "Semprit",
    // priceTag: "Rp 50K",
    // price: 50,
    image:
      "/assets/semprit.jpg",
    desc: "Kue kering klasik dengan tekstur renyah dan rasa manis ringan.",
    badges: [
      "/assets/best-product.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 50,
        priceTag: "Rp 50K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
      },
    ],
  },
  {
    id: 8,
    name: "Lidah Kucing",
    // priceTag: "Rp 40K",
    // price: 40,
    image:
      "/assets/lidah-kucing.png",
    desc: "Kue tipis dengan tekstur renyah dan rasa butter yang ringan.",
    badges: [
      "/assets/best-product.png",
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 40,
        priceTag: "Rp 40K",
      },
    ],
  },
  {
    id: 9,
    name: "Kurma Coklat",
    // priceTag: "Rp 50K",
    // price: 50,
    image:
      "/assets/kurma-coklat.jpeg",
    desc: "Kurma yang dilapisi coklat dengan rasa manis alami.",
    badges: [
      "/assets/best-product.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 50,
        priceTag: "Rp 50K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
      },
    ],
  },
  {
    id: 10,
    name: "Coklat Mede",
    // priceTag: "Rp 55K",
    // price: 55,
    image:
      "/assets/coklat-mede.jpeg",
    desc: "Kue kering coklat dengan topping kacang mede yang memberikan tekstur renyah.",
    badges: [
      "/assets/best-product.png",
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 55,
        priceTag: "Rp 55K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
      },
    ],
  },
  {
    id: 11,
    name: "Corn Flakes Cookies",
    // priceTag: "Rp 50K",
    // price: 50,
    image:
      "/assets/cornflesks-cookies.png",
    desc: "Kue kering dengan campuran corn flakes yang renyah.",
    badges: [
      "/assets/best-product.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 50,
        priceTag: "Rp 50K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
      },
    ],
  },
  {
    id: 12,
    name: "Crekers Cookies",
    // priceTag: "Rp 50K",
    // price: 50,
    image:
      "/assets/crekers-cookies.jpeg",
    desc: "Kue kering dengan tekstur renyah dan rasa gurih.",
    badges: [
      "/assets/best-product.png",
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 50,
        priceTag: "Rp 50K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
      },
    ],
  },
  {
    id: 13,
    name: "Coklat Kacang",
    // priceTag: "Rp 50K",
    // price: 50,
    image:
      "/assets/coklat-kacang.jpeg",
    desc: "Coklat dengan campuran kacang yang memberikan rasa gurih dan tekstur renyah.",
    badges: [
      "/assets/best-product.png"
    ],
     variants: [
      {
        id: "bulat-500",
        label: "Toples Bulat 500g",
        price: 50,
        priceTag: "Rp 50K",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
      },
    ],
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [variantPopupOpen, setVariantPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const formatRupiah = (number) =>
  `Rp ${number.toLocaleString("id-ID")}K`;
    useEffect(() => {
    document.body.style.overflow =
      selected || cartOpen ? "hidden" : "auto";
  }, [selected, cartOpen]);

const addToCart = (product, variant) => {
  setCart((prev) => {
    const exist = prev.find(
      (i) =>
        i.productId === product.id &&
        i.variantId === variant.id
    );

    if (exist) {
      return prev.map((i) =>
        i.productId === product.id &&
        i.variantId === variant.id
          ? { ...i, qty: i.qty + 1 }
          : i
      );
    }

    return [
      ...prev,
      {
        productId: product.id,
        name: product.name,
        variantId: variant.id,
        variantLabel: variant.label,
        price: variant.price,
        priceTag: variant.priceTag,
        qty: 1,
      },
    ];
  });
};

const totalPrice = cart.reduce(
  (sum, i) => sum + i.price * i.qty,
  0
);

const sendToWhatsApp = () => {
  const phone = "6289668095182"; // GANTI NOMOR WA KAMU

  const message = cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.name}\n Kemasan: ${item.variantLabel}\n  Qty: ${item.qty}\n   Harga/Toples: ${item.priceTag}\n  Subtotal: Rp ${item.price * item.qty}K`
    )
    .join("\n\n");

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const finalMessage = `
Hallo THREE COOKIES 🍪
Saya mau memesan kue berikut:

${message}

--------------------
Total kue: ${totalQty}
Total Harga: Rp ${totalPrice}K
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
          Cookies Made with Love
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
        <h2 className="text-lg center font-bold text-[#6b3a1e]">
          Kue Favorit yang Dipercaya Ribuan Pelanggan
        </h2>
        <div className="relative grid grid-cols-2 gap-3 mt-4">
    <img
      src="/assets/bukti-order-1.jpeg"
      className="rounded-2xl shadow-md"
    />
    <img
      src="/assets/bukti-order-2.jpeg"
      className="rounded-2xl shadow-md"
    />

  </div>
        <p className="text-md text-center text-[#8b5a3c] mt-1 leading-relaxed">
        Sejak 2017, lebih dari 10.000+ kue kami telah menemani momen manis lebaran ribuan pelanggan.
        </p>
      </section>


          <div>
            <p className="text-lg flex justify-center font-bold text-[#6b3a1e] leading-relaxed mt-4">
              Etalase Kue Kering
            </p>
          </div>
        {/* GRID PRODUK (2 KOLOM MAX) */}
        <section className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {products.map((p) => (
              <div
              key={p.id}
              className="bg-[#fffaf0] rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-32 object-cover"
              />
            
              {/* CONTENT */}
              <div className="p-3 flex flex-col flex-1">
              
            {/* HEADER AREA */}
          <div className="flex items-center">
            {/* Expanded (Flutter) */}
            <div className=" flex-col w-6xl">
              <h3 className="text-sm font-semibold text-[#6b3a1e] leading-snug line-clamp-2">
                {p.name}
              </h3>

              <span className="mt-2 inline-block bg-[#7a3e1d] text-[#fff7e6] text-xs font-bold px-3 py-1 rounded-full w-fit">
                {p.variants[0].priceTag}
              </span>
            </div>

            {/* Image.asset (Flutter) */}
            {p.badges?.map((badge, i) => (
                            <img
                              key={i}
                              src={badge}
                              alt="badge"
                              className="w-18 h-18 object-contain"
                            />
                          ))}
          </div>
          
                {/* DESCRIPTION */}
                <p className="text-xs text-[#8b5a3c] mt-2 line-clamp-2">
                  {p.desc}
                </p>
            
                {/* ACTIONS */}
                <div className="mt-auto pt-3 flex gap-2">
                  <button
                    onClick={() => {
                      setSelected(p);
                      setSelectedVariant(p.variants[0]); // default varian pertama
                    }}
                    className="flex-1 bg-[#7a3e1d] text-white text-xs py-2 rounded-full"
                  >
                    Lihat Detail
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setSelectedVariant(p.variants[0]); // default
                      setVariantPopupOpen(true);
                    }}
                    className="w-10 bg-[#7a3e1d] text-white rounded-full flex items-center justify-center"
                  >
                    🛒
                  </button>
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </section>
      </div>
      {variantPopupOpen && selectedProduct && (
  <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
    <div className="w-full max-w-md bg-[#fffaf0] rounded-t-3xl p-5">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-[#6b3a1e]">
          {selectedProduct.name}
        </h3>
        <button
          onClick={() => setVariantPopupOpen(false)}
          className="text-xl"
        >
          ✕
        </button>
      </div>

      <p className="text-sm text-[#8b5a3c] mb-4">
        {selectedProduct.desc}
      </p>

      {/* VARIANT OPTIONS */}
      <div className="flex gap-3">
        {selectedProduct.variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setSelectedVariant(v)}
            className={`flex-1 px-3 py-3 rounded-xl border text-sm flex justify-between items-center
              ${
                selectedVariant?.id === v.id
                  ? "border-[#7a3e1d] bg-[#fff2e0]"
                  : "border-gray-200 bg-white"
              }`}
          >
            <span className="font-medium">{v.label}</span>
            <span className="font-bold text-[#7a3e1d] whitespace-nowrap">
              {v.priceTag}
            </span>
          </button>
        ))}
      </div>

      {/* ACTION */}
      <button
        onClick={() => {
          addToCart(selectedProduct, selectedVariant);
          setVariantPopupOpen(false);
        }}
        className="w-full mt-5 bg-[#7a3e1d] text-white py-4 rounded-full font-semibold"
      >
        Tambah ke Keranjang
      </button>
    </div>
  </div>
)}

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

          <div className="relative w-full max-w-[430px] h-[85vh] bg-[#FFFBED] rounded-t-3xl animate-slideUp overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-[#7a3e1d] text-white w-9 h-9 rounded-full"
            >
              ×
            </button>

            <div className="p-4 pt-12">
              <img
                src={selected.image}
                className="rounded-2xl mb-4 w-full h-96 object-cover"
              />
              <div className="flex items-center justify-center">
                <div className="flex-col w-6xl items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#6b3a1e]">
                    {selected.name}
                  </h3>
                  <div className="inline-block bg-[#7a3e1d] text-[#fff7e6] text-3xl font-bold px-8 py-3 rounded-full mt-2 mb-4 shadow-md">
                    {selectedVariant?.priceTag}
                  </div>
                </div>
                {selected.badges?.map((badge, i) => (
                            <img
                              key={i}
                              src={badge}
                              alt="badge"
                              className="w-40 h-40 object-contain ml-4"
                            />
                          ))}
              </div>
              
              <p className="text-[#7a3e1d] font-normal">
                {selected.desc}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-[#6b3a1e] mb-2">
                  Pilih Kemasan
                </p>

              <div className="flex gap-2 mb-4">
                {selected.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`flex-1 rounded-xl border px-3 py-3 text-sm
                      ${
                        selectedVariant?.id === v.id
                          ? "border-[#7a3e1d] bg-[#fff2e0]"
                          : "border-gray-200 bg-white"
                      }`}
                  >
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <span className="font-medium text-[#6b3a1e] leading-tight">
                        {v.label}
                      </span>

                      <span className="font-bold text-[#7a3e1d] whitespace-nowrap">
                        {v.priceTag}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              </div>


              <button
                onClick={() => {
                  addToCart(selected, selectedVariant);
                  setSelected(null);
                }}
                className="w-full bg-[#7a3e1d] text-white py-4 rounded-full font-medium"
              >
                Tambah ke keranjang
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
                Keranjang
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
                      {item.priceTag}
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
            <div className="flex justify-between text-sm font-medium text-[#6b3a1e]  border-t py-2 px-4">
              <span>Total Harga</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
            <div className="p-4 border-t">
              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-600 text-white py-4 rounded-full font-semibold"
              >
                Pesan via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
