
import { useState, useEffect} from 'react';
import useOnDraw from './Hooks'; 



const Canvas = ({activeTool, activeColor, isModalOpen}) => {
    
    console.log(isModalOpen, 'modal');

    const setCanvasRef = useOnDraw(onDraw);
    // const colorArray = []; 
    const [colorArray, setcolorArray] = useState([]); 
    const [arrayInitialized, setArrayInitialized] = useState(false); 
   

    
    useEffect(()=>{
        if(!arrayInitialized){
            const currentWidth = 800; 
            const squareWidth = 40; 
            
            const initialArray = []; 
            for(var y = 0; y < currentWidth; y = y + squareWidth){
                for(var x = 0; x < currentWidth; x = x + squareWidth){
                    initialArray.push({x: x, y: y, currentColor : 'white' }); 
                }
            }; 
            
            setcolorArray((prevColorArray)=>{
                console.log('this is initial array', initialArray)
                return initialArray
            }); 
         
            setArrayInitialized(true); 
        }
    },[arrayInitialized])

    useEffect(()=>{
        if (activeTool.id === 3){
            console.log('clear canvas called in canvas');
            console.log(colorArray);
        
            setcolorArray(prevColorArray => {
                prevColorArray = [];
                setArrayInitialized(false);
                return prevColorArray;
            });
        }
       
        

    },[activeTool.id]); 


    
    
    
    
   console.log(activeTool); 



    function onDraw(ctx,point){


        if(isModalOpen){
            return null; 
        }
        
        var currentWidth = ctx.canvas.width; 
        var currentHeight = ctx.canvas.height; 
        var squareWidth = Math.floor(currentWidth / 20)
        var squareHeight = Math.floor((currentHeight) / 20 )
        var xLocation = Math.floor((point.x / squareWidth)) * squareWidth;
        var yLocation = Math.floor((point.y/squareHeight)) * squareHeight;
        const pencolor = activeColor.name; 

        

        


        if(xLocation <= currentWidth && xLocation>=0 && yLocation>= 0 && yLocation <=currentHeight){
        
            console.log("this is the ctx", ctx)
            console.log("ctx currentwidth", ctx.canvas.width);
            console.log("ctx currentheight", ctx.canvas.height);
            console.log("mouse coordinate: ", point);
            console.log("THE ACTIVE TOOL", activeTool)
            //color of the pen
            
            // var xLocation = Math.floor((point.x / squareWidth)) * squareWidth;
            // var yLocation = Math.floor((point.y/squareHeight)) * squareHeight;
            
            if(activeTool.id === 0){
                console.log("canvas.js inside if statement for pen:",ctx.fillStyle)
                if(xLocation < currentWidth && xLocation>=0 && yLocation>= 0 && yLocation <currentHeight){
                    draw(xLocation,yLocation,pencolor)
                }
            } else if(activeTool.id === 1){
                console.log("canvas.js inside if statement for eraser:",ctx.fillStyle)
                if(xLocation <currentWidth && xLocation>=0 && yLocation>= 0 && yLocation <currentHeight){
                    draw(xLocation,yLocation, '#ffffff00')
                }
            } 
            else if(activeTool.id ===2){
                if(xLocation < currentWidth && xLocation>=0 && yLocation>= 0 && yLocation <currentHeight){
                    var oldColorIndex = colorArray.findIndex(
                        (point) => point.x === xLocation && point.y === yLocation
                    ); 

                    const oldColor = colorArray[oldColorIndex].currentColor; 
                    fill(xLocation, yLocation, pencolor, oldColor); 
                }
            }
            
            
            //draw tool bruh 
            function draw(x,y,color) {
                ctx.fillStyle = color; 
                ctx.beginPath(); 
                
                console.log('this is the square dim', squareWidth, squareHeight);
                console.log('this is point.x', point.x)
                console.log('the active tool',activeTool);
                console.log('the active color',activeColor.name);


                if(activeTool.id === 1){
                    ctx.clearRect(x,y, squareWidth, squareHeight); 
                }
                
                ctx.fillRect(x, y, squareWidth, squareHeight); 

                var pointInfo = {
                    x:x,
                    y:y, 
                    currentColor : color
                }

                

                var pointExits = false; 
                if(colorArray.length === 0){
                    setcolorArray([pointInfo])
                    console.log(colorArray);
                }else{
                    const index = colorArray.findIndex(
                        (point) => point.x === x && point.y === y
                    ); 


                    console.log()

                    if(index !== -1){
                        if(colorArray[index].currentColor !== color){
                            colorArray[index].currentColor = color; 
                        }
                        
                    }

                    else{
                        setcolorArray([...colorArray, pointInfo]); 
                    }
                }
                // ctx.fill();

            
                console.log(colorArray)
                
            }


            function fill(x, y, color, oldColor){
                const edgex = 800; 
                const edgey = 800; 

                const stack = [{x, y}]; 

                const visited=[]; 

                while(stack.length > 0){

                    const {x,y} = stack.pop(); 


                    if( x< 0 ||  x > edgex || y<0 || y> edgey ){
                        continue; 
                    } 
                    
                    const pointIndex = colorArray.findIndex(
                        (point)=> point.x === x && point.y === y && point.currentColor === oldColor
                    ); 

                    const visitedIndex = visited.some((point) => point.x === x && point.y === y); 
                    
                    if(pointIndex !== -1 && !visitedIndex){
                        draw(x, y, color); 
                        visited.push({x,y}); 

    
                        stack.push({x: x+squareWidth,  y}); 
                        stack.push({x, y: y+ squareHeight}); 
                        stack.push({x: x-squareHeight, y}); 
                        stack.push({x, y: y-squareHeight}); 
                    }
                }



                
    

            





        


            }


        }
    



    }
    
    const canvasWidth = 800; 
    
    return(
            <canvas 
                id='canvas'
                width={canvasWidth} 
                height={canvasWidth}
                style={canvasStyle}
                ref = {setCanvasRef}
            />
    ); 
}

export default Canvas; 

const canvasStyle = {
    width: '60vw',
    height:'60vw',
    maxWidth:'35rem',
    maxHeight:'35rem',
 
}