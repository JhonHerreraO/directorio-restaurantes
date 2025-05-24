import React, { useState } from 'react';
import restaurants from '../data/restaurants';

function Search() {
  const [query, setQuery] = useState('');

  const results = restaurants.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
        🔎 Buscar Restaurante
      </h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Escribe el nombre del restaurante..."
        className="w-full max-w-xl mx-auto p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(r => (
          <div key={r.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4">
            <img
              src={r.image}
              alt={r.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-blue-600 mt-4">{r.name}</h2>
            <p className="text-sm text-gray-600">{r.address}</p>
            <p className="mt-2 text-gray-700">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;