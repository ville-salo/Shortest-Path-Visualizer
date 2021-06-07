// Function to find the minimum weight Hamiltonian Cycle
function calculateTSP(graph, arraySize){

    // create an infinite value variable and create a boolean array to check visits
    var pathValue = Number.MAX_SAFE_INTEGER
    var v = Array(arraySize).fill(false)
    v[0] = true;

	// Run the recursive algorithm and log the minimum weight cycle
    let shortestPath = tsp(graph, 0, arraySize, 1, 0, pathValue, v)
    console.log(shortestPath)
}

function tsp(graph, currPos, n, count, cost, pathValue, v)
{
	// If last node is reached and it has a link
	// to the starting node i.e the source then
	// keep the minimum value out of the total cost
	// of traversal and "ans"
	// Finally return to check for more possible values
	if (count == n && graph.matrix[currPos][0] > 0) {
		pathValue = Math.min(pathValue, cost + graph.matrix[currPos][0]);
		return pathValue;
	}
	// BACKTRACKING STEP
	// Loop to traverse the adjacency list
	// of currPos node and increasing the count
	// by 1 and cost by graph[currPos][i] value
	for (var i = 0; i < n; i++) {
		if (!v[i] && graph.matrix[currPos][i] > 0) {
			// Mark as visited
			v[i] = true;
			pathValue = tsp(graph, i, n, count + 1,	cost + graph.matrix[currPos][i], pathValue, v);
			// Mark ith node as unvisited
			v[i] = false;
		}
	}
    // return the minimum weight Hamiltonian Cycle
    return pathValue;
}

export default calculateTSP;