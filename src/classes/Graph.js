// A program for creating custom Graph class

class Graph {
    constructor(size) {
        this.size = size;
        this.matrix = [];
        for (let i = 0; i < size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }
    // Calculate the distance of pixels between two positions
    calculateEdge(x1,y1,x2,y2){
        return Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
    } 
    // Add the calculated edge value as a weight into an adjacency matrix
    addEdge(vertex1, vertex2, weight) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.matrix[vertex1][vertex2] = weight;
            this.matrix[vertex2][vertex1] = weight;
        }
    }
    
    removeEdge(vertex1, vertex2){
    //TODO
    }
    
    addVertex(){
    //TODO
    }
    
    removeVertex(vertex){
    //TODO
    }
    
    showMatrix(){
    //TODO
    }
}

export default Graph;