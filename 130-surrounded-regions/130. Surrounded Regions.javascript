/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 //using DFS
var solve = function(board) {
    const m = board.length;
    const n = board[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] == 'O' && (i==0 || i==m-1 || j==0 || j==n-1)){
                findNonIsland(i,j,board,m,n)
            }
        }
    }
    

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] == 'O'){
                board[i][j] = 'X';
            }
            else if(board[i][j] == 'V'){
                board[i][j] = 'O'
            }
        }
    }

    return board
};

const findNonIsland = (i,j,board,m,n) => {
    if(i<0 || j<0 || i>m-1 || j>n-1 || board[i][j]=='X' || board[i][j]=='V'){
        return
    }

    board[i][j] = 'V';
    findNonIsland(i+1,j,board,m,n);
    findNonIsland(i-1,j,board,m,n);
    findNonIsland(i,j+1,board,m,n);
    findNonIsland(i,j-1,board,m,n);
}