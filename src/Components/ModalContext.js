import React, { createContext, useContext, useState  } from "react";


const ModalContext = createContext(); 
export const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(true); 

    const openModal =() => {
        var modal = document.querySelector('.modal--wrapper'); 

        modal.style.visibility = 'visible'; 
        modal.style.zIndex = 10000;
        console.log(modal.style);
        setIsModalOpen(true); 

    }; 

    const closeModal = () => {
        var modal = document.querySelector('.modal--wrapper'); 
        console.log('it was clicked')
        modal.style.zIndex = '0'; 
        modal.style.visibility = 'hidden'; 
        setIsModalOpen(false); 
       
    }; 
   

    return(
        <ModalContext.Provider value = {{isModalOpen, closeModal,openModal}}>
            {children}
        </ModalContext.Provider>

    ); 
}


export const useModal = () => useContext(ModalContext); 