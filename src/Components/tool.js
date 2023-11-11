import pen from '../Assests/pen.svg';
import eraser from '../Assests/eraser.svg';
import fill from '../Assests/fill.svg';
import clear from '../Assests/clear.svg';
import { useEffect, useState } from 'react';


const Toolbar = ({tools,onToolChange, onClearCanvas}) => {

    const [activeToolId, setActiveToolId] = useState(0); 
    
    function handleToolChange(onid){
        onToolChange(tools()[onid]); 
        if(onid === 3){
            onClearCanvas();
        }

        console.log('the active tool id', activeToolId); 

        setActiveToolId(onid); 


    }


        const getToolStyle = (onid) => {
            console.log('clicked id', onid)
            return {
                backgroundColor: activeToolId === onid ? 'pink' : "#00000000", 
            }
        }



    return(
        <div className="tool-list">
            <button style={getToolStyle(0)} onClick={()=> handleToolChange(0)}><img className= "tool-btn"   alt="pen-tool" src={pen}/></button>
            <button style={getToolStyle(1)} onClick={()=> handleToolChange(1)}><img className='tool-btn'    alt="eraser-tool" src={eraser}/></button>
            <button style={getToolStyle(2)} onClick={()=> handleToolChange(2)}><img className='tool-btn'  alt="fill-tool" src={fill}/></button>
            <button style={getToolStyle(3)} onClick={()=> handleToolChange(3)}><img className='tool-btn'    alt="clear-tool" src={clear}/></button>
        </div>
    )
} 

export default Toolbar ;