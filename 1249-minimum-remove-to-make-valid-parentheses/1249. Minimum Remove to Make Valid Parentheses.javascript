/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    if(s.length == 0){
        return '';
    }
    let stack = [] //to store index of every '('

    let newString = ''

    s.split('').map((item,i) => {
        if(item == '(')
        {
            stack.push(i);
            newString+=item;
        }
        else if(item == ')'){
            if(stack.length>0){
                stack.pop();
                newString+=item;
            }
            else{
                newString+=' ';
            }
        }
        else{
            newString+=item;
        }
    })
    let arr = newString.split('');
    while(stack.length>0){
        arr[stack.pop()]=' '
    }
    return arr.join('').replaceAll(' ', '');
};