import React from 'react';
import { useCanvas } from './hooks/useCanvas';
import Graph from './classes/Graph';
import calculateTSP from './algorithms/tsp'
import './App.css';
//===
function App() {
  
  const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();

  // Function for handling clicks on canvas
  const handleCanvasClick=(event)=>{
    // Get cursor location on click and add location to state array
    const currentCoord = { x: event.clientX, y: event.clientY };
    setCoordinates([...coordinates, currentCoord]);
  };

  // Function for handling the creation of adjacency matrices
  const handleMatrixCreation=(event)=>{
    // Create a new matrix
    var adjacencyMatrix = new Graph(coordinates.length)

    // Deconstruct coordinates to an array
    var edgeMatrix = coordinates.map(({x, y}) => ([x, y]))
    
    // Calculate and add the weights to the adjacency Matrix, O(n^2)
    for(var i = 0; i < edgeMatrix.length; i++){
      for(var j = 0; j < edgeMatrix.length; j++){
        let weight = adjacencyMatrix.calculateEdge(edgeMatrix[i][0],edgeMatrix[i][1],edgeMatrix[j][0],edgeMatrix[j][1])
        adjacencyMatrix.addEdge(i, j, weight)
      }
    }
    // Calculate the Minimum hamiltonian cycle to solve TSP
    calculateTSP(adjacencyMatrix,adjacencyMatrix.size)
  };

  return (
    <main className="App-main" >
      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick} />
      <div className="button" >
        <button onClick={handleMatrixCreation} > Solve TSP </button>
      </div>
    </main>
  );
};

export default App;
