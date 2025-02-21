/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    if(s.length == 0){
        return '';
    }
    let stack = []

    let newString = ''

    s.split('').map((item,i) => {
        if(item == '(')
        {
            stack.push([item,i]);
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
        let val = stack.pop()
        arr[val[1]]=' '
    }
    return arr.join('').replaceAll(' ', '');
};