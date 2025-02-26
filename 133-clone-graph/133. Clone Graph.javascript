/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

//attempt using dfs with stack
var cloneGraph = function(node) {

    //return null if node is empty 
    if(!node){
        return null;
    }

    //callStack for keeping track of the next node to visit
    let callStack = [node];
    //visisted map to keep track of the nodes that have been visited, and their clone counterparts
    const visited = new Map();

    //the initial clone node containing the value of the original root node
    const newNode = new Node(node.val);

    visited.set(node, newNode);

    while(callStack.length){

        //currentNode is the node we're dealing with right now
        let currentNode = callStack.pop();

        //this is the clone of the current node, which we get from the visited map
        let cloneNode = visited.get(currentNode);

        //traverse through the neighbor list of the current node
        for(neighbor of currentNode.neighbors){
            if(!visited.has(neighbor)){
                //if the neighbor hasn't already been visited, create a clone of the neighbor
                let cloneNeighbor = new Node(neighbor.val)

                //set the neighbor as visted, along with its clone
                visited.set(neighbor, cloneNeighbor);

                //push neighbor to callStack
                callStack.push(neighbor);
            }

            //get the cloned neighbor and push it to the neighbors list of the cloned node
            cloneNode.neighbors.push(visited.get(neighbor))
        }
    }

    //return the root of the cloned node from the visited map (which is basically newNode)
    return visited.get(node);
};