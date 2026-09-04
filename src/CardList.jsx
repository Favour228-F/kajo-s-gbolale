import React from "react";

const cards = [
  {
    id: 1,
    title: "Card One",
    description: "This is the first card.",
  },
  {
    id: 2,
    title: "Card Two",
    description: "This is the second card.",
  },
  {
    id: 3,
    title: "Card Three",
    description: "This is the third card.",
  },
  {
    id: 4,
    title: "Card Four",
    description: "This is the fourth card.",
  },
];

function CardList() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
