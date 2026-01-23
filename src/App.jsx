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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 55,
        priceTag: "Rp 55K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
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
        price: 55,
        priceTag: "Rp 55K",
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        price: 55,
        priceTag: "Rp 55K",
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        price: 55,
        priceTag: "Rp 55K",
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
        price: 55,
        priceTag: "Rp 55K",
        imageToples: "/assets/toples-bulat.png",
      },
      {
        id: "tabung-800",
        label: "Toples Tabung 800ml",
        price: 60,
        priceTag: "Rp 60K",
        imageToples: "/assets/toples-tabung.png",
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
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
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
 // =========================
  // INCREASE QTY
  // =========================
  const increaseQty = (item) => {
    setCart((prev) =>
      prev.map((p) =>
        p.productId === item.productId &&
        p.variantId === item.variantId
          ? { ...p, qty: p.qty + 1 }
          : p
      )
    );
  };

  // =========================
  // DECREASE QTY
  // =========================
  const decreaseQty = (item) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.productId === item.productId &&
          p.variantId === item.variantId
            ? { ...p, qty: p.qty - 1 }
            : p
        )
        .filter((p) => p.qty > 0)
    );
  };

const totalPrice = cart.reduce(
  (sum, i) => sum + i.price * i.qty,
  0
);

const sendToWhatsApp = () => {
  if (!customerName.trim() || !customerAddress.trim()) {
    alert("Mohon isi Nama dan Alamat terlebih dahulu 🙏");
    return;
  }

  const phone = "62895343020317";

  const message = cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.name}
Kemasan: ${item.variantLabel}
Qty: ${item.qty}
Harga/Toples: ${item.priceTag}
Subtotal: Rp ${item.price * item.qty}K`
    )
    .join("\n\n");

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const finalMessage = `
Hallo THREE COOKIES 🍪

Nama: ${customerName}
Alamat: ${customerAddress}

Saya mau memesan kue berikut:

${message}

--------------------
Total kue: ${totalQty}
Total Harga: Rp ${totalPrice}K

Terimakasih 🙏
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
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
          Premium Homemade Cookies 🍪
          </p>
        </header>

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
                {/* FOOTER */}
                <footer className="bg-[#5a2b12] text-[#fff7e6] mt-10">
                  <div className="px-4 py-6 text-center space-y-3">
                    <h2 className="text-sm font-semibold tracking-wide">
                      THREE COOKIES
                    </h2>

                    <p className="text-xs opacity-90">
                      Premium Homemade Cookies 🍪
                    </p>

                    <div className="w-16 h-[1px] bg-[#fff7e6]/40 mx-auto my-2" />

                    <p className="text-xs opacity-80">
                      Menerima pesanan untuk:
                    </p>

                    <p className="text-xs font-medium">
                      🎉 Lebaran • 🎂 Ulang Tahun • 💍 Acara • 🎁 Hampers
                    </p>

                    {/* CONTACT */}
                    <div className="pt-2 space-y-1 text-xs">
                      <p className="opacity-80">
                        📸 Instagram:
                        <a
                          href="https://instagram.com/threecookies.bdg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 font-semibold underline underline-offset-2"
                        >
                          @threecookies.bdg
                        </a>
                      </p>

                      <p className="opacity-80">
                        💬 WhatsApp:
                        <a
                          href="https://wa.me/62895343020317"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 font-semibold underline underline-offset-2"
                        >
                          0895-3430-20317
                        </a>
                      </p>
                    </div>

                    <p className="text-[10px] opacity-60 mt-4">
                      © {new Date().getFullYear()} THREE COOKIES
                    </p>
                  </div>
                </footer>

      </div>
      {variantPopupOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="w-full max-w-md bg-[#fffaf0] rounded-t-3xl p-5">
            
            {/* HEADER */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold text-[#6b3a1e]">
                {selectedProduct.name}
              </h3>
              <button
                onClick={() => setVariantPopupOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center mt-2 mb-4">
              {/* Foto Toples */}
              {selectedVariant?.imageToples && (
                <img
                  src={selectedVariant.imageToples}
                  alt={selectedVariant.label}
                  className="w-30 h-30 object-contain drop-shadow-md mr-4 rounded-xl"
                />
              )}
            <span className="mt-2 inline-block bg-[#7a3e1d] text-[#fff7e6] text-2xl font-bold px-6 py-3 rounded-full w-fit">
              {selectedVariant?.priceTag}
            </span>
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
                  <img
                    src={v.imageToples}
                    alt={v.label}
                    className="w-12 h-12 object-contain rounded-md"
                  />
                  <span className="font-medium">{v.label}</span>
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
                  <h3 className="text-3xl font-bold text-[#6b3a1e]">
                    {selected.name}
                  </h3>
                  <div className="inline-block bg-[#7a3e1d] text-[#fff7e6] text-3xl font-bold px-8 py-3 rounded-full my-4 shadow-md">
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

      {/* VARIANT OPTIONS */}
      <div className="flex gap-3 pb-4">
        {selected.variants.map((v) => (
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
            <img
              src={v.imageToples}
              alt={v.label}
              className="w-12 h-12 object-contain rounded-md"
            />
            <span className="font-medium">{v.label}</span>
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
                  key={`${item.productId}-${item.variantId}`}
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
                     onClick={() => decreaseQty(item)}
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    >
                      −
                    </button>

                    <span>{item.qty}</span>

                    <button
                     onClick={() => increaseQty(item)}
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-medium text-[#6b3a1e]  border-t border-b py-2 px-4">
              <span>Total Harga</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
             {/* Nama */}
              <div className="px-4 pt-4">
                <label className="block text-sm font-medium text-[#6b3a1e] mb-1">
                  Nama Pemesan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rifki Rizkia"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e5d3c3] 
                  focus:outline-none focus:ring-2 focus:ring-[#7a3e1d] 
                  bg-white text-sm"
                />
              </div>

              {/* Alamat */}
              <div className="px-4 pb-4">
                <label className="block text-sm font-medium text-[#6b3a1e] mb-1">
                  Alamat Lengkap <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Jl. Melati No. 10, Bandung"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e5d3c3] 
                  focus:outline-none focus:ring-2 focus:ring-[#7a3e1d] 
                  bg-white text-sm resize-none"
                />
              </div>
            <div className="p-4 border-t">
              <button
                onClick={sendToWhatsApp}
                className={`
                w-full py-4 rounded-full font-semibold transition-all duration-300
                ${
                  customerName && customerAddress
                    ? "bg-green-600 text-white hover:bg-green-700 active:scale-95"
                    : "bg-green-600/40 text-white cursor-not-allowed"
                }
              `}
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
