var keyList = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp = '';

function generatePass(pwlength) {
    tmp = '';
    for (i = 0; i < pwlength; i++) {
        tmp += keyList.charAt(Math.floor(Math.random() * keyList.length));
    }
    return tmp;
}


function populateform(enterlength) {
    document.passGen.output.value = generatePass(enterlength); 
}