/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var counter = 0;
    const m = grid.length;
    const n = grid[0].length;
    for(i=0; i<m; i++){
        for(j=0; j<n; j++){
            if(grid[i][j] == '1'){
                counter+=1;
                markVisited(grid,i,j,m,n);
            }
        }
    }
    return counter;
};

function markVisited(grid,i,j,m,n){
    // return if indices go out of bounds or water is encountered
    if(i<0 || i>=m || j<0 || j>=n || grid[i][j] != '1'){
        return
    }
    
    grid[i][j] = 'x';
    
    markVisited(grid, i, j+1, m, n);
    markVisited(grid, i, j-1, m, n);
    markVisited(grid, i+1, j, m, n);
    markVisited(grid, i-1, j, m, n);
}