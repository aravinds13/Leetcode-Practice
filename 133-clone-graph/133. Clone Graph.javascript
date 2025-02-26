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
    if(!node){
        return null;
    }

    let callStack = [node];
    const visited = new Map();
    const newNode = new Node(node.val);

    visited.set(node, newNode);

    while(callStack.length){
        let currentNode = callStack.pop();
        let cloneNode = visited.get(currentNode);

        for(neighbor of currentNode.neighbors){
            if(!visited.has(neighbor)){
                let cloneNeighbor = new Node(neighbor.val)
                visited.set(neighbor, cloneNeighbor);
                callStack.push(neighbor);
            }
            cloneNode.neighbors.push(visited.get(neighbor))
        }
    }
    return visited.get(node);
};