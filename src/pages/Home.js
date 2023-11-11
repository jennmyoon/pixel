import React, {useState , useCallback} from 'react'; 
import Canvas from "../Components/canvas";
import Toolbar from "../Components/tool";
import Color from '../Components/color';
import Modal from '../Components/Modal';
import { useModal } from '../Components/ModalContext';


const Home = () =>{

    const {isModalOpen} = useModal(); 


    const tools = () => [
        {id: 0, name: "pen" },
        {id: 1, name:"eraser"}, 
        {id:2, name:"fill"},
        {id:3, name:"clear"}
    ] 

    const colors = () => [
        {id: 0, name:"#FFFFFF"}, //white
        {id: 1, name: "#000000"}, // black
        {id: 2, name: "#303030"}, // dark grey
        {id: 3, name: "#595959"}, // grey
        {id: 4, name:"#c30010"}, //red 
        {id: 5, name:"#de0a26"}, // pink ish red
        {id: 6, name:"#f94449"}, // pink
        {id: 7, name:"#ee6b6e"}, //pink
        {id: 8, name:"#f69697"}, //pink
        {id: 9, name:"#ec9006"}, //orange
        {id: 10, name:"#f1b04c"}, //orange
        {id: 11, name:"#f8eebe"}, //yellow
        {id: 12, name:"#fcf0cf"}, //yellow
        {id: 13, name:"#014421"}, //green
        {id: 14, name:"#355e3b"}, //green
        {id: 15, name:"#8A9A5B"}, //green
        {id: 16, name:"#82ac85"}, //green
        {id: 17, name:"#033047"}, //blue
        {id: 18, name:"#304C62"}, //blue
        {id: 19, name:"#5C677D"}, //blue
        {id: 20, name:"#CADEED"}, //blue
        {id: 21, name:"#DBECF4"}, //blue
        {id: 22, name:"#897098"}, //purple
        {id: 23, name:"#aa98b5"}, //purple
        {id: 24, name:"#371c4b"}, //purple
        
    ]

    const [activeTool, setActiveTool] = useState(tools()[0]);
    const [activeColor, setActiveColor] = useState(colors()[0]);
    // const [isModalOpen, setIsModalOpen] = useState(true); 


    const clearCanvas = useCallback(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 800, 800);
        console.log('clear canvas called'); 

    }, []);

    const saveCanvas = () => {

        var title = window.prompt('Title your art!'); 
        window.alert('Your drawing was saved to your gallery!');


        const canvas = document.getElementById('canvas'); 
        const dataURL = canvas.toDataURL(); 

        const savedCanvasData = localStorage.getItem('savedCanvas') || '[]'; 
        const canvasArray = JSON.parse(savedCanvasData)
        
        const canvasObject = {
            title: title, 
            dataURL: dataURL, 
        }
        
        canvasArray.push(canvasObject); 

        localStorage.setItem('savedCanvas', JSON.stringify(canvasArray));
        console.log('SAVED'); 
    }

    console.log('the active tool on home is', activeTool)
    


    return(
       <div id="home-wrapper">
            <div className='pop-up' >
                <Modal 
                    // isModalOpen = {isModalOpen}
                    // onModalChange = {setIsModalOpen}
                />
            </div>
            <div className="home-content">
                <div className="toolbar">
                    <Toolbar 
                        tools = {tools}
                        activeTool = {activeTool}
                        onToolChange = {setActiveTool}
                        onClearCanvas = {clearCanvas}
                    />
                    <button className="savebtn" onClick={saveCanvas}>SAVE</button>
                </div>
                <div className="middle">
                    <Canvas 
                        activeTool = {activeTool}
                        activeColor = {activeColor}
                        width = {90}
                        height = {100}
                        isModalOpen = {isModalOpen}
                    />
                </div>
                <div className="colors">
                    <Color 
                        colors = {colors}
                        activeColor = {activeColor}
                        onColorChange = {setActiveColor}
                    />

                </div>
            </div>
       </div>
   
    )
}

export default Home; 