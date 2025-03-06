/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;

    let missing = 0;
    let repeated = 0;
    const freqSet = new Set();

    for(let i=1; i<=n*n; i++){
        freqSet.add(i);
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(freqSet.has(grid[i][j])){
                freqSet.delete(grid[i][j]);
            }
            else{
                repeated = grid[i][j];
            }
        }
    }
    
    missing = Array.from(freqSet)[0];

    return [repeated,missing]


};