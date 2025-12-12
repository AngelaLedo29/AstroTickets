import { useState } from "react";

export default function EventsTickets() {
    const initialTickets = [
        { id: 1, name: 'Concierto en el Gran Salón VIP', price: 180, stock: 15 },
        { id: 2, name: 'Concierto en el Gran Salón General', price: 90, stock: 40 },
        { id: 3, name: 'Concierto en el Gran Salón Early Bird', price: 60, stock: 25 },
        { id: 4, name: 'Torneo de Quidditch VIP', price: 220, stock: 8 },
        { id: 5, name: 'Torneo de Quidditch General', price: 130, stock: 35 },
        { id: 6, name: 'Torneo de Quidditch Early Bird', price: 75, stock: 20 },
        { id: 7, name: 'Clase de Pociones Prohibidas VIP', price: 120, stock: 10 },
        { id: 8, name: 'Clase de Pociones Prohibidas General', price: 70, stock: 30 },
        { id: 9, name: 'Clase de Defensa Contra las Artes Oscuras VIP', price: 150, stock: 5 },
        { id: 10, name: 'Clase de Defensa Contra las Artes Oscuras General', price: 85, stock: 25 },
        { id: 11, name: 'Cena Mágica en el Gran Comedor VIP', price: 260, stock: 5 },
        { id: 12, name: 'Cena Mágica en el Gran Comedor General', price: 130, stock: 30 },
        { id: 13, name: 'Festival de Fuegos Artificiales Mágicos', price: 50, stock: 40 },
        { id: 14, name: 'Escape Room en Hogwarts', price: 80, stock: 20 },
        { id: 15, name: 'Taller de Varitas Mágicas', price: 60, stock: 15 },
        { id: 16, name: 'Clase de Defensa Contra las Artes Oscuras', price: 40, stock: 0 }
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
                    <div key={ticket.id} className="bg-purple-800/70 p-6 rounded-xl shadow-lg border border-yellow-400 flex flex-col justify-between">
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