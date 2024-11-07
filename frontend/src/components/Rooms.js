import React, { useState } from 'react';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const rooms = ["Aula 101", "Aula 102", "Laboratorio de Computación", "Sala de Reuniones"];

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    alert(`Has asignado el salón: ${room}`);
  };

  return (
    <div>
      <h2>Módulo de Asignación de Salones</h2>
      <p>Selecciona un salón para asignar:</p>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <button onClick={() => handleRoomSelect(room)}>
              {room}
            </button>
          </li>
        ))}
      </ul>
      {selectedRoom && <p>Salón asignado: {selectedRoom}</p>}
    </div>
  );
};

export default Rooms;
