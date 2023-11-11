import React, {useEffect, useState} from "react";
import Modal from '../Components/Modal';
import Trash from '../Assests/clear.svg';



const Gallery = () => {
    const [savedCanvas, setSavedCanvas] = useState([]); 
    
    useEffect(() => {
        const savedCanvasData = localStorage.getItem('savedCanvas'); 

        if(savedCanvasData) {
            
            setSavedCanvas(JSON.parse(savedCanvasData)); 
        }

    },[])

    const clearGallery = () => {
        localStorage.removeItem('savedCanvas'); 
        setSavedCanvas([]);
    }

    const deleteItem = (index) => {
        const updatedCanvas = [...savedCanvas];
        updatedCanvas.splice(index, 1);
        localStorage.setItem('savedCanvas', JSON.stringify(updatedCanvas));
        setSavedCanvas(updatedCanvas);
        console.log(index); 
    };

    return(
        <div className="gallery--wrapper">
            <div className='pop-up' >
                <Modal 
                    // isModalOpen = {isModalOpen}
                    // onModalChange = {setIsModalOpen}
                />
            </div>
            <div className="gallery-content">
                <div className="gallery-title">
                    MY ART:
                </div>
                <div className="gallery-btn">
                    {savedCanvas.length === 0 ? (<div>
                        You currently have 0 saved art pieces.
                    </div>) : (<div> You currently have {savedCanvas.length} art piece(s)</div>)} 
                    <button className="clear-btn" onClick={clearGallery}>CLEAR</button>

                </div>
                <div className="gallery-grid">
                    {savedCanvas.map((canvasData, index)=>(
                            <div key={index} className="gallery-item">
                                <img src={canvasData.dataURL} alt={`Saved Canvas ${index + 1}`} />
                                <div className="gallery-des">
                                    <div className="pic-title">{canvasData.title}</div>
                                    <button className="deleteBtn" onClick={() => deleteItem(index)}>
                                        delete
                                    </button>
                                </div>
                            </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery; 