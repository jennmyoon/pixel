import React, {useState} from 'react'; 

const Color = ({colors, onColorChange}) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0)

    const handleColorChange = (id) =>{
        onColorChange(colors()[id]); 
        setSelectedColorIndex(id); 
    }

    const colorStyle = (id) => {
        return{
            backgroundColor: colors()[id].name,
            border : selectedColorIndex === id ? "solid 2px red" : "none"
        }
    }


    return(
        <div className="palette">
            <button className= "color"  style={colorStyle(0)} onClick={()=>handleColorChange(0)}></button>
            <button className= "color"  style={colorStyle(1)} onClick={()=>handleColorChange(1)}></button>   
            <button className= "color"  style={colorStyle(2)} onClick={()=>handleColorChange(2)}></button>
            <button className= "color"  style={colorStyle(3)} onClick={()=>handleColorChange(3)}></button>  
            <button className= "color"  style={colorStyle(4)} onClick={()=>handleColorChange(4)}></button>  
            <button className= "color"  style={colorStyle(5)} onClick={()=>handleColorChange(5)}></button>  
            <button className= "color"  style={colorStyle(6)} onClick={()=>handleColorChange(6)}></button>  
            <button className= "color"  style={colorStyle(7)} onClick={()=>handleColorChange(7)}></button>  
            <button className= "color"  style={colorStyle(8)} onClick={()=>handleColorChange(8)}></button>  
            <button className= "color"  style={colorStyle(9)} onClick={()=>handleColorChange(9)}></button> 
            <button className= "color"  style={colorStyle(10)} onClick={()=>handleColorChange(10)}></button>   
            <button className= "color"  style={colorStyle(11)} onClick={()=>handleColorChange(11)}></button>   
            <button className= "color"  style={colorStyle(12)} onClick={()=>handleColorChange(12)}></button>   
            <button className= "color"  style={colorStyle(13)} onClick={()=>handleColorChange(13)}></button>   
            <button className= "color"  style={colorStyle(14)} onClick={()=>handleColorChange(14)}></button>
            <button className= "color"  style={colorStyle(15)} onClick={()=>handleColorChange(15)}></button> 
            <button className= "color"  style={colorStyle(16)} onClick={()=>handleColorChange(16)}></button>   
            <button className= "color"  style={colorStyle(17)} onClick={()=>handleColorChange(17)}></button>
            <button className= "color"  style={colorStyle(18)} onClick={()=>handleColorChange(18)}></button> 
            <button className= "color"  style={colorStyle(19)} onClick={()=>handleColorChange(19)}></button>  
            <button className= "color"  style={colorStyle(20)} onClick={()=>handleColorChange(20)}></button>
            <button className= "color"  style={colorStyle(21)} onClick={()=>handleColorChange(21)}></button> 
            <button className= "color"  style={colorStyle(22)}onClick={()=>handleColorChange(22)}></button>  
            <button className= "color"  style={colorStyle(23)} onClick={()=>handleColorChange(23)}></button>
            <button className= "color"  style={colorStyle(24)} onClick={()=>handleColorChange(24)}></button> 
        </div>
    );
} 
export default Color; 