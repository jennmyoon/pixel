import React, {useEffect, useState} from "react";
import {useModal} from './ModalContext'; 
import pen from '../Assests/pen.svg';
import eraser from '../Assests/eraser.svg'; 
import fill from '../Assests/fill.svg'; 
import clear from '../Assests/clear.svg';



const Modal = () => {
    
    const [step, setStep] = useState(0); 
    // const [isModalOpen, setIsModalOpen] = useState(true); 
    
    const {isModalOpen, closeModal, openModal} = useModal(); 


   
    useEffect(() => {
        var modalbg = document.querySelector('.pop-up'); 
        if(isModalOpen){
            modalbg.style.backgroundColor = 'rgba(202, 149, 149, 0.246)';
            modalbg.style.backdropFilter = 'blur(4px)'; 
            modalbg.style.zIndex = 100000; 
        } else if(!isModalOpen){
            modalbg.style.backgroundColor = 'rgba(255, 0, 0, 0)';
            modalbg.style.backdropFilter = 'blur(0)'; 
            modalbg.style.zIndex = -100; 
        }

    }, [isModalOpen]);


    const steps = [
        <div className="modal-intro">
            <div className="modal-title">
                WELCOME TO <span className="modal-logo"> P!XL</span>
            </div>
            <div className="content">
                Learn how to use P!XL to create the best artwork!
            </div>
        </div>, 
        <div className="modal-page">
            <div className="modal-subtitle">
                TOOLS TO KNOW: 
            </div>
            <div className="modal-tool">
                <div className="tool-des">
                    <img src={pen}></img>
                    <div className="des">
                        Pen: Draw out your creation!
                    </div>
                </div>
                <div className="tool-des">
                    <img src={eraser}></img>
                    <div className="des">
                        Eraser: Mistake? No Problem.
                    </div>
                </div>
                <div className="tool-des">
                    <img src={fill}></img>
                    <div className="des">
                        Fill: Color a whole space in one click. 
                    </div>
                </div>
                <div className="tool-des">
                    <img src={clear}></img>
                    <div className="des">
                        Clear: Hate your drawing?? Start over!
                    </div>
                </div>

            </div>
        </div>,
        <div className="modal-page">
            <div className="modal-subtitle">
                KEEP YOUR ART!
            </div>
            <div className="content pageThree">
                <b>Step 1:</b> <span>When you are satisfied with your art, click the bolded SAVE button </span>
                <b>Step 2:</b> <span>Switch to the Gallery Page and view all your saved artwork!</span>
            </div>
        </div>
    ]

    const nextSlide = () => {
        setStep(step+1); 
    }
    const previousSlide = () => {
        setStep(step-1);
    }

    const closeOnHome = () => {
        // var modal = document.querySelector('.modal--wrapper'); 
        // console.log('it was clicked')
        // setStep(0);
        // modal.style.zIndex = '0'; 
        // modal.style.visibility = 'hidden';
        setStep(0); 
        closeModal(); 

        localStorage.setItem('modalClosed', true); 
    }

    useEffect(() => {
        // Check local storage for modal state
        const modalClosed = localStorage.getItem('modalClosed');
        if (modalClosed === true) {
            closeModal(); 
        }
    }, []);






    return(
        <div className="modal--wrapper">
            <span className="close-btn"  onClick={closeModal}>&times;</span>
            <div className="modal-content">{steps[step]}</div>
            <div className="modal-btn">
                {step === 0 && <button className="forward-btn" onClick={nextSlide}> Learn More</button>}
                {step!== 0 && <button onClick={previousSlide} className="pages-btn"> back </button>}
                {step < steps.length - 1 && step!== 0 && <button className="forward-btn pages-btn" onClick={nextSlide}> next </button>}
                {step === steps.length - 1 &&  <button className="forward-btn pages-btn" onClick={closeOnHome}>Get Started</button>}
            </div>
        </div>
    )
} 

export default Modal; 