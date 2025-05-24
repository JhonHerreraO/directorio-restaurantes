import React from 'react';
import restaurants from '../data/restaurants';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100 p-6">
      <h1 className="text-3xl font-extrabold text-center text-green-700 mb-8">
        🍴 Directorio de Restaurantes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map(r => (
          <div key={r.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4">
            <img
              src={r.image}
              alt={r.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-pink-600 mt-4">{r.name}</h2>
            <p className="text-sm text-gray-600">{r.address}</p>
            <p className="mt-2 text-gray-700">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;