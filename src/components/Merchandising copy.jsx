import { useEffect, useState } from "react";

export default function Merchandising() {
    const merchandising = [
        { id: 1, name: 'Varita Mágica de Luna', price: 50, image: "https://www.pijusmagnifikus.com/tenda/1550-large_default/harry-potter-varita-magica-pvc-luna-lovegood-30-cm.jpg"},
        { id: 2, name: 'Bufanda de Hogwarts Gryffindor', price: 25, image:"https://static1.funidelia.com/490882-f6_big2/bufanda-harry-potter-gryffindor.jpg" },
        { id: 3, name: 'Capa de Invisibilidad Mini', price: 100, image: "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDIwNjQyNHxpbWFnZS9qcGVnfGFHWXpMMmd5TUM4NE9UZzFORE0wTWpreU1qVTB8MTEyZDJkMjEwMjMxODczYjEyZmU0NThlYzZlNDBjZjNjMzQ0ZmVmMTAyMGFkMTg5MjhhYTE1NGY2NDc5ZmFlYw" },
        { id: 4, name: 'Mapa del Merodeador', price: 40, image: "https://fbi.cults3d.com/uploaders/25285711/illustration-file/14e44e6c-b983-4174-b228-1c41785c33ee/imagen_2025-06-06_082830355.png" },
        { id: 5, name: 'Sombrero Seleccionador de Peluche', price: 30, image: "https://www.1001hobbies.es/1655741-large_default/play-by-play-pbp760020781-harry-potter-sonido-peluche-sombrero-selecci.jpg" },
        { id: 6, name: 'Bufanda de Hogwarts Slytherin', price: 25, image:"https://static1.funidelia.com/490884-f6_big2/bufanda-slytherin-harry-potter.jpg" },
        { id: 7, name: 'Varita de Harry Potter con luz', price: 30, image: "https://static1.funidelia.com/492513-f6_big2/varita-de-harry-potter-con-luz.jpg" },
        { id: 8, name: 'Libro de Hechizos Antiguos', price: 35, image: "https://m.media-amazon.com/images/I/71eAsUED4jL._AC_UF1000,1000_QL80_.jpg" },        
        { id: 9, name: 'Bufanda de Hogwarts Hufflepuff', price: 25, image:"https://static1.funidelia.com/490885-f6_big2/bufanda-hufflepuff-harry-potter.jpg" },
        { id: 10, name: 'Poción de Amor (Mini Frasco)', price: 20, image: "https://www.pro-bems.com/IMAGES/images_1/FIGNN7599/m/FIGNN7599_1.png" },
        { id: 11, name: 'Botella de Felix Felicis', price: 60, image: "https://elenanofriki.com/2436-large_default/colgante-felix-felicis-con-expositor-harry-potter.jpg" },
        { id: 12, name: 'Réplica de la Snitch Dorada', price: 45, image: "https://distritozero.es/60207-large_default/harry-potter-replica-snitch-dorada.jpg" },
        { id: 13, name: 'Taza de Cerámica Expecto Patronum', price: 15, image: "https://www.getdigital.es/cdn/shop/files/productImage-18365-harry-potter-patronus-thermo-effekt-becher_1024x1024.jpg?v=1720653584" },
        { id: 14, name: 'Bufanda de Hogwarts Ravenclaw', price: 25, image:"https://static1.funidelia.com/498185-f6_big2/bufanda-ravenclaw-harry-potter.jpg" },
        { id: 15, name: 'Llavero Varita Mágica', price: 10, image: "https://www.toyplanet.com/cdn/shop/files/TPBIZ018100_1_a78ab9e7-4c5f-4845-b8ed-8dd0bf9652f4.png?v=1749076040" },
        { id: 16, name: 'Peluche Hedwig', price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Y5FR8l6JmZyFHcGtRPsfpttbB5r8vMrghw&s" },
        { id: 17, name: 'Poster de Hogwarts', price: 12, image: "https://media.posterstore.com/site_images/68631b037d2ae084e18280c8_1724649824_WB0008-8.jpg" },
        { id: 18, name: 'Collar de Reliquias de la Muerte Mini', price: 55, image: "https://www.artesanum.com/content/upi/5/17475/4/4c802ec07a0baad2.jpg?w=560" },
        { id: 19, name: 'Bolsa de Tela Hogwarts', price: 18, image: "https://m.media-amazon.com/images/I/71YSRj0+OXL._AC_UY1000_.jpg" },
        { id: 20, name: 'Réplica Piedra Filosofal', price: 40, image: "https://lafrikileria.com/50044/replica-piedra-filosofal-harry-potter-the-noble-collection.jpg" },
    ];

    // Estado de productos (solo lectura)
    const [products] = useState(merchandising);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    // Cargar carrito desde localStorage SOLO en el navegador
    useEffect(() => {
        const saved = window.localStorage.getItem("cart");
        if (saved) {
            setCart(JSON.parse(saved))
        }
    }, []);

    // Guardar carrito en localStorage cuando cambie
    useEffect(() => {
        const saved = JSON.stringify(cart);
        window.localStorage.setItem("cart", saved);
    }, [cart])
    
    // Añadir un producto al carrito
    const addToCart = (product) => {
        setCart(prev => {
            const exist = prev.find(item => item.id === product.id);
            if (exist) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, qty) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(qty, 1) } : item
            )
        );
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="bg-[#fff7d6]/10 min-h-screen flex flex-col">
            {/* Botón del carrito fijo */}
            <button
                onClick={() => setShowCart(true)}
                className="fixed top-4 right-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded shadow hover:bg-yellow-400 z-50"
            >
                🛒 <span className="font-bold">{totalItems}</span>
            </button>

            <main className="flex-1 container mx-auto px-8 py-12 flex flex-col lg:flex-row gap-6">
                {/* Productos a la izquierda */}
                <section className="flex-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="producto flex flex-col items-center bg-white p-4 rounded shadow">
                    <img className="w-full h-36 object-contain mb-2" src={product.image} alt={product.name}/>
                    <h3 className="text-lg font-bold text-yellow-600">{product.name}</h3>
                    <p className="text-yellow-500 font-semibold">€ {product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-auto bg-yellow-500 text-gray-900 px-3 py-1 rounded hover:bg-yellow-400 transition"
                    >
                        Añadir
                    </button>
                    </div>
                ))}
                </section>

                {/* Overlay oscuro */}
                <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${showCart ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setShowCart(false)}
                ></div>

                {/* Drawer del carrito */}
                <aside
                className={`fixed top-0 right-0 h-full w-80 bg-[#fff7d6] shadow-xl p-6 overflow-y-auto z-50 border-l border-yellow-400 rounded-l-xl transform transition-transform duration-300 ${showCart ? "translate-x-0" : "translate-x-full"}`}
                >
                <button
                    onClick={() => setShowCart(false)}
                    className="absolute top-4 right-4 text-yellow-700 font-bold"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-4 text-yellow-600 text-center">Carrito</h2>

                {cart.length === 0 ? (
                    <p className="text-yellow-500 text-center">Tu carrito está vacío</p>
                ) : (
                    <>
                    <ul className="space-y-2">
                        {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center py-4 border-b border-gray-200">
                            <img src={item.image} className="w-10 h-10 mr-3 object-contain rounded border border-gray-200"/>
                            <span>{item.name} x {item.quantity}</span>
                            <div className="flex gap-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400">+</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400">-</button>
                            <button onClick={() => removeFromCart(item.id)} className="px-2 bg-red-500 text-white rounded hover:bg-red-600">🗑️</button>
                            </div>
                        </li>
                        ))}
                    </ul>

                    <p className="mt-4 font-semibold text-center">Total: € {totalPrice.toFixed(2)}</p>

                    <button onClick={() => { alert("Compra realizada"); setCart([]); }} className="mt-2 w-full bg-gray-600 hover:bg-gray-700 text-gray-200 py-2 rounded">
                        Pagar
                    </button>
                    </>
                )}
                </aside>
            </main>
        </section>
    );
}