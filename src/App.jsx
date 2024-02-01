import React, { useState } from "react";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main">
      <button onClick={openModal} className="btn-modal">Modalni ochish</button>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h2>Modal sarlavhasi</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque illum ex, sequi cum laborum dolorum inventore eius at dolorem laboriosam adipisci, obcaecati ab, hic odio cumque expedita maxime amet!</p>
            <button onClick={closeModal}>Modalni yopish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
