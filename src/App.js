import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Intro from './comps/Intro';
import UploadForm from './comps/UploadForm';
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Intro/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
