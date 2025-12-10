import { useState } from "react";

export default function EventsTickets() {
    const initialTickets = [
        { id: "vip", name: "VIP Pass", price: 120, stock: 10 },
        { id: "general", name: "General Access", price: 60, stock: 50 },
        { id: "early", name: "Early Bird", price: 40, stock: 0 }
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
        <main className="flex-1 container mx-auto px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-2">
                {tickets.map(ticket => (
                    <div key={ticket.id} className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs rounded-md">
                        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{ticket.name}</h5>
                        <p class="text-body mb-6">Precio: {ticket.price}€</p>
                        <p className="mt-2 mb-2"><em>Stock: {ticket.stock}</em></p>

                        <button
                        onClick={() => handleBuy(ticket.id)}
                        disabled={ticket.stock === 0}
                        className={`inline-flex items-center box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-md
                            ${ticket.stock === 0 
                                ? "bg-gray-400 text-gray-700 cursor-not-allowed opacity-60" 
                                : "text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-brand-medium"
                            }
                        `}
                        >
                        {ticket.stock > 0 ? "Comprar" : "Agotado"}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}