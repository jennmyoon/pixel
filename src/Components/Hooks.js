import { useEffect, useRef } from "react";

function useOnDraw(onDraw){

    const canvasRef = useRef(null);
    const isMouseDownRef = useRef(false);
    const hasMouseListenerRef = useRef(false); 

    function setCanvasRef(ref){
        if(!ref) return; 

        if (hasMouseListenerRef.current) {
            hasMouseListenerRef.current = false;
        }
        canvasRef.current = ref; 
        if (!hasMouseListenerRef.current) {
            console.log('Adding event listeners');
            initMouseListener();
            hasMouseListenerRef.current = true;
        }
    }
    
    const mouseMoveListener = (e) => {
        if(isMouseDownRef.current){
            const point = computeCanvasPoint(e.clientX, e.clientY); 
            const ctx = canvasRef.current.getContext('2d'); 
            if(onDraw) onDraw(ctx, point)
            console.log("clientY:", e.clientY);
            console.log("canvasRect.top:", canvasRef.current.getBoundingClientRect().top);
            console.log("Adjusted Y:", point.y);
            console.log("point",point);
            console.log("clientWidth",canvasRef.current.clientWidth);
            console.log("Width",canvasRef.current.width);
            console.log("client Height", canvasRef.current.clientHeight)
            console.log("Height", canvasRef.current.height)

        }

    }; 

    const mouseDownListener = (e) => {
        isMouseDownRef.current = true;
        const point = computeCanvasPoint(e.clientX, e.clientY); 
        const ctx = canvasRef.current.getContext('2d'); 
        if(onDraw) onDraw(ctx, point)
        console.log("clientWidth",canvasRef.current.clientWidth);
        console.log("Width",canvasRef.current.width);
        console.log("client Height", canvasRef.current.clientHeight)
        console.log("Height", canvasRef.current.height)

        console.log('down')
    };
    const mouseUpListener = () => {
        isMouseDownRef.current = false; 
        console.log('up')
    };


    function initMouseListener(){
    
        window.addEventListener("mousemove", mouseMoveListener )
        window.addEventListener("mousedown", mouseDownListener); 
        window.addEventListener("mouseup", mouseUpListener); 

        return() => {
            window.removeEventListener("mousemove", mouseMoveListener);
            window.removeEventListener("mousedown", mouseDownListener);
            window.removeEventListener("mouseup", mouseUpListener);
        }; 

        
    }

function computeCanvasPoint(clientX, clientY){
    const canvas = canvasRef.current; 
    if(canvas){
        const canvasRect = canvasRef.current.getBoundingClientRect(); 
        const scaleX = canvas.width / canvas.clientWidth; 
        const scaleY = canvas.height /canvas.clientHeight; 

        
        var x = Math.floor((clientX - canvasRect.left) * scaleX); 
        var y = Math.floor((clientY - canvasRect.top) * scaleY); 
        
        return{
                x: x, 
                y: y
            }
        } else return null; 
    }

    useEffect(() =>{
        return() => {
            window.removeEventListener("mousemove", mouseMoveListener);
            window.removeEventListener("mousedown", mouseDownListener);
            window.removeEventListener("mouseup", mouseUpListener);
            hasMouseListenerRef.current = false;

        }; 
    }, [initMouseListener])

    return setCanvasRef; 


};

export default useOnDraw; 


