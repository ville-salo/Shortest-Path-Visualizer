import React, { useState, useEffect, useRef } from 'react';
// TODO add window rescale-support
export const canvasWidth = window.innerWidth*0.9
export const canvasHeight = window.innerHeight*0.9

// Function for drawing the vertices (markers) on canvas
export function drawMarker(ctx, location){
  ctx.fillStyle = 'black';
  ctx.shadowColor = 'grey';
  ctx.shadowBlur = 5;
  ctx.strokeStyle = 'black'
  ctx.save();
  ctx.beginPath();
  ctx.translate(location.x-95, location.y-50);
  ctx.arc(95, 50, 15, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore(); 
};

// Function for drawing the edges (lines) on canvas
export function drawEdge(ctx, coordinates){
  ctx.strokeStyle = 'black'
  ctx.fillStyle = 'black'
  ctx.lineWidth = 4
  ctx.save()
  if(coordinates.length > 1){
    for(var i=0; i < coordinates.length-1; i++){
      ctx.beginPath()
      ctx.moveTo(coordinates[i]['x'],coordinates[i]['y'])
      for(var j=0; j < coordinates.length-1; j++){
        ctx.lineTo(coordinates[j+1]['x'],coordinates[j+1]['y'])
        ctx.closePath()
        ctx.stroke()
        ctx.moveTo(coordinates[i]['x'],coordinates[i]['y'])
      }
    }
  }
  ctx.restore()
}

// Function for rendering changes to canvas
export function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );
        // draw all vertices and edges
        coordinates.forEach((coordinate)=>{drawMarker(ctx, coordinate)});
        drawEdge(ctx, coordinates);
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}

