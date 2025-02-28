/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    const sLength = s.length;
    let sArray = s.split('');
    let index = 0;

    while(index < sLength){
        switch(sArray[index]){
            case 'I':
                if(sArray[index+1] == 'V'){
                    total+=4;
                    index+=2;
                }
                else if(sArray[index+1] == 'X'){
                    total+=9;
                    index+=2;
                }
                else{
                    total+=1;
                    index+=1;
                }
                break;
            case 'V':
                total+=5;
                index+=1;
                break;
            case 'X':
                if(sArray[index+1] == 'L'){
                    total+=40;
                    index+=2;
                }
                else if(sArray[index+1] == 'C'){
                    total+=90;
                    index+=2;
                }
                else{
                    total+=10;
                    index+=1;
                }
                break;
            case 'L':
                total+=50;
                index+=1;
                break;
            case 'C':
                if(sArray[index+1] == 'D'){
                    total+=400;
                    index+=2;
                }
                else if(sArray[index+1] == 'M'){
                    total+=900;
                    index+=2;
                }
                else{
                    total+=100;
                    index+=1;
                }
                break;
            case 'D':
                total+=500;
                index+=1;
                break;
            case 'M':
                total+=1000;
                index+=1;
                break;
            default:
                total+=0;
        }
    }
    return total;
};