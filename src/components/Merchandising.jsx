import { useEffect, useState } from "react";

export default function Merchandising() {
    const merchandising = [
        { id: "poster-queen-575238", name: "Poster Queen", price: 8.37, image: "https://www.merchandisingplaza.es/575238/2/Posteres-Queen-Poster-Queen-l.jpg"},
        { id: "gorra-queen-573784", name: "Gorra Queen", price: 20.25, image: "https://www.merchandisingplaza.es/573784/2/Gorras-Queen-Gorra-Queen-573784-l.jpg"},
        { id: "llavero-queen-573978", name: "Llavero Queen", price: 10.50, image: "https://www.merchandisingplaza.es/573978/2/Llaveros-Queen-Llavero-Queen-573978-l.jpg"},
        { id: "calcetines-queen-573092", name: "Calcetines Queen", price: 18.51, image: "https://www.merchandisingplaza.es/573092/4/Calcetines-Queen-Calcetines-Queen-l.jpg"},
        { id: "sudadera-queen-unisex", name: "Sudadera Queen Unisex", price: 49.55, image: "https://www.merchandisingplaza.es/572291/2/Sudaderas-Queen-Sudadera-Queen-unisex---Design--Logo---Crest-Outline-l.jpg"},
        { id: "camiseta-queen-571896", name: "Camiseta Queen Gris", price: 23.99, image: "https://www.merchandisingplaza.es/571896/2/Camisetas-Queen-Camiseta-Queen-571896-l.jpg"},
        { id: "camiseta-queen-571898", name: "Camiseta Queen Negra", price: 23.99, image: "https://www.merchandisingplaza.es/571898/2/Camisetas-Queen-Camiseta-Queen-571898-l.jpg"},
        { id: "camiseta-queen-571918", name: "Camiseta Queen", price: 23.99, image: "https://www.merchandisingplaza.es/571918/2/Camisetas-Queen-Camiseta-Queen-571918-l.jpg"},
        { id: "vinilo-queen-571990", name: "Vinilo Queen - London Christmas Concert 1975", price: 23.25, image: "https://www.merchandisingplaza.es/571990/2/Discos-de-vinilo-Queen-Vinilo-Queen---London-Christmas-Concert-1975-l.jpg"},
        { id: "mochila-queen-572255", name: "Mochila Queen", price: 42.99, image: "https://www.merchandisingplaza.es/572255/2/Mochilas-Queen-Mochila-Queen-572255-l.jpg"},
        { id: "cartera-queen-569724", name: "Cartera Queen", price: 25.59, image: "https://www.merchandisingplaza.es/569724/2/Carteras-Queen-Cartera-Queen-569724-l.jpg"},
        { id: "funko-pop-queen-556999", name: "Funko-Pop-Queen", price: 58.25, image: "https://www.merchandisingplaza.es/556999/2/Funko-Pop-Queen-Funko-Pop-Queen-556999-l.jpg"},
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
                className="fixed top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded shadow"
            >
                🛒 <span className="font-bold">{totalItems}</span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-2">
                {products.map(product => (
                    <section key={product.id} className="flex-2 grid gap-4 grid-cols-[auto-fit_minmax(200px, 1fr)] border border-gray-300 rounded-sm">
                        <img className="w-full h-full object-contain mb-2 bg-transparent" src={product.image} alt={product.name}/>
                        <h3 className="my-2 text-center font-semibold">{product.name}</h3>
                        <p className="font-bold text-red-600 text-center">€ {product.price}</p>
                        <button onClick={() => addToCart(product)} data-id="${product.id}" className="mt-auto bg-[#007bff] border-none text-white
                        py-2 px-4 cursor-pointer rounded-sm transition-colors duration-300 ease-in-out hover:bg-blue-700">Agregar al carrito</button>
                    </section>
                ))}

                {/* Panel carrito */}
                {showCart && (
                    <aside className="fixed top-18 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
                        <h2 className="text-xl font-bold mb-4 text-center">Carrito</h2>
                    
                        {cart.length === 0 ? (
                            <p className="text-center">Tu carrito está vacío</p> 
                        ) : (
                            <>
                            <ul className="space-y-2">
                                {cart.map(item => (
                                    <li key={item.id} className="flex justify-between items-center py-4 border-b border-gray-200">
                                        <img src={item.image} className="w-6 h-6 mr-3" />

                                        <span>{item.name} x {item.quantity}</span>

                                        <div className="flex gap-2">
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
                                            <button onClick={() => removeFromCart(item.id)} className="px-2 bg-red-500 text-white rounded">🗑️</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-4 font-semibold text-center">Total: € {totalPrice.toFixed(2)}</p>

                            <button onClick={() => { alert("Compra realizada"); setCart([]); }}
                                className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
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