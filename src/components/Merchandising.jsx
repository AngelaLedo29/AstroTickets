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





//        { id: "poster-queen-575238", name: "Poster Queen", price: 8.37, image: "https://www.merchandisingplaza.es/575238/2/Posteres-Queen-Poster-Queen-l.jpg"},
//        { id: "gorra-queen-573784", name: "Gorra Queen", price: 20.25, image: "https://www.merchandisingplaza.es/573784/2/Gorras-Queen-Gorra-Queen-573784-l.jpg"},
//        { id: "llavero-queen-573978", name: "Llavero Queen", price: 10.50, image: "https://www.merchandisingplaza.es/573978/2/Llaveros-Queen-Llavero-Queen-573978-l.jpg"},
//        { id: "calcetines-queen-573092", name: "Calcetines Queen", price: 18.51, image: "https://www.merchandisingplaza.es/573092/4/Calcetines-Queen-Calcetines-Queen-l.jpg"},
//        { id: "sudadera-queen-unisex", name: "Sudadera Queen Unisex", price: 49.55, image: "https://www.merchandisingplaza.es/572291/2/Sudaderas-Queen-Sudadera-Queen-unisex---Design--Logo---Crest-Outline-l.jpg"},
//        { id: "camiseta-queen-571896", name: "Camiseta Queen Gris", price: 23.99, image: "https://www.merchandisingplaza.es/571896/2/Camisetas-Queen-Camiseta-Queen-571896-l.jpg"},
//        { id: "camiseta-queen-571898", name: "Camiseta Queen Negra", price: 23.99, image: "https://www.merchandisingplaza.es/571898/2/Camisetas-Queen-Camiseta-Queen-571898-l.jpg"},
//        { id: "camiseta-queen-571918", name: "Camiseta Queen", price: 23.99, image: "https://www.merchandisingplaza.es/571918/2/Camisetas-Queen-Camiseta-Queen-571918-l.jpg"},
//        { id: "vinilo-queen-571990", name: "Vinilo Queen - London Christmas Concert 1975", price: 23.25, image: "https://www.merchandisingplaza.es/571990/2/Discos-de-vinilo-Queen-Vinilo-Queen---London-Christmas-Concert-1975-l.jpg"},
//        { id: "mochila-queen-572255", name: "Mochila Queen", price: 42.99, image: "https://www.merchandisingplaza.es/572255/2/Mochilas-Queen-Mochila-Queen-572255-l.jpg"},
//        { id: "cartera-queen-569724", name: "Cartera Queen", price: 25.59, image: "https://www.merchandisingplaza.es/569724/2/Carteras-Queen-Cartera-Queen-569724-l.jpg"},
//        { id: "funko-pop-queen-556999", name: "Funko-Pop-Queen", price: 58.25, image: "https://www.merchandisingplaza.es/556999/2/Funko-Pop-Queen-Funko-Pop-Queen-556999-l.jpg"},
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

//    useEffect(() => {
//        if (typeof window !== "undefined") {
//            const saved = localStorage.getItem("cart");
//            if (saved) {
//                try {
//                   setCart(JSON.parse(saved));
//                } catch {
//                  setCart([]);
//                }
//            }
//        }
//    }, []);

    // Guardar carrito en localStorage cuando cambie
    useEffect(() => {
        const saved = JSON.stringify(cart);
        window.localStorage.setItem("cart", saved);
    }, [cart])


//    useEffect(() => {
//        localStorage.setItem("cart", JSON.stringify(cart));
//    }, [cart]);


    //useEffect(() => {
    //    if (typeof window !== "undefined") {
    //        localStorage.setItem("cart", JSON.stringify(cart));
    //    }
    //}, [cart]);
    
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
        <main className="flex-1 container mx-auto px-8 py-12">
            <button
                onClick={() => setShowCart(!showCart)}
                className="fixed top-4 right-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded shadow hover:bg-yellow-300 transition"
            >
                🛒 <span className="font-bold">{totalItems}</span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} 
                    className="flex flex-col items-center bg-purple-800/70 p-6 rounded-xl shadow-lg border border-yellow-400 h-full">
                        <img className="w-full h-48 object-cover mb-4 rounded border border-yellow-400 bg-purple-900/30" src={product.image} alt={product.name}/>
                        <h3 className="text-xl font-bold text-yellow-400 text-center mb-2">{product.name}</h3>
                        <p className="text-yellow-200 font-semibold mb-4 text-center">€ {product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            class="mt-auto bg-yellow-400 text-purple-900 py-2 px-4 rounded shadow hover:bg-yellow-300 transition"
                            >
                            Añadir al carrito
                        </button>
                    </div>
                ))}

                {/* Panel carrito */}
                {showCart && (
                    <aside className="fixed top-18 right-0 w-80 h-full bg-purple-800/95 shadow-xl p-6 overflow-y-auto z-50 border border-yellow-400 rounded-l-xl">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Carrito</h2>
                    
                        {cart.length === 0 ? (
                            <p className="text-yellow-200 text-center">Tu carrito está vacío</p> 
                        ) : (
                            <>
                            <ul className="space-y-2">
                                {cart.map(item => (
                                    <li key={item.id} className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <img src={item.image} className="w-10 h-10 mr-3 object-contain mb-2 rounded border border-yellow-400 bg-purple-900/30" />

                                        <span>{item.name} x {item.quantity}</span>

                                        <div className="flex gap-2">
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                                            className="px-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300">+</button>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                            className="px-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300">-</button>
                                            <button onClick={() => removeFromCart(item.id)} 
                                            className="px-2 bg-red-500 text-white rounded hover:bg-red-600">🗑️</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 font-semibold text-center">Total: € {totalPrice.toFixed(2)}</p>

                            <button onClick={() => { alert("Compra realizada"); setCart([]); }}
                                className="mt-2 w-full bg-gray-600 hover:bg-gray-700 text-gray-200 py-2 rounded">
                                Pagar
                            </button>
                            </>
                        )}
                    </aside>
                )}  
            </div>
        </main>
    );
}