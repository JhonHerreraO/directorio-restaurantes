import React, { useState } from 'react';

function NewRestaurant() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    image: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Nuevo restaurante:", formData);
    alert("¡Restaurante agregado (simulado)!");
    setFormData({ name: '', address: '', description: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-yellow-200 to-green-300 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-pink-700 mb-6">
          Agregar Nuevo Restaurante 🍽️
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="URL de imagen"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-400 hover:to-green-400 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            🎉 Agregar Restaurante
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewRestaurant;