import { useState } from "react";

export default function EventsTickets() {
    const initialTickets = [
        { id: 1, name: 'VIP', price: 150, stock: 5 },
        { id: 2, name: 'General', price: 80, stock: 20 },
        { id: 3, name: 'Early Bird', price: 50, stock: 10 },
    ];

    const [tickets, setTickets] = useState(initialTickets);

    const handleBuy = (id) => {
        setTickets(prev =>
            prev.map(ticket =>
                ticket.id === id && ticket.stock > 0
                    ? { ...ticket, stock: ticket.stock - 1 }
                    : ticket
            )
        );
    };

    return (
        <main className="flex-1 container mx-auto px-8 py-12 font-magic max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-2">
                {tickets.map(ticket => (
                    <div key={ticket.id} className="bg-purple-400 p-6 rounded-xl shadow-lg border border-yellow-400 flex flex-col justify-between">
                        <h5 class="mb-3 text-2xl font-bold text-yellow-400 leading-8">{ticket.name}</h5>
                        <p class="text-yellow-200 mb-2">Precio: {ticket.price}€</p>
                        <p className="text-yellow-300 mt-2 mb-2"><em>Stock: {ticket.stock}</em></p>

                        <div className="flex items-center justify-between">
                            <button
                            onClick={() => handleBuy(ticket.id)}
                            disabled={ticket.stock === 0}
                            className={`px-4 py-2 rounded-md font-bold text-sm focus:outline-none transition-colors
                                ${ticket.stock === 0 
                                    ? "bg-gray-400 text-gray-700 cursor-not-allowed opacity-60" 
                                    : "bg-yellow-400 text-purple-900 hover:bg-yellow-300"
                                }
                            `}
                            >
                            {ticket.stock > 0 ? "Comprar" : "Agotado"}
                            </button>

                            <span className="text-yellow-200 font-semibold">
                                {ticket.stock === 0 ? "Sin stock" : ""}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}