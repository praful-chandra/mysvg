const text = document.querySelectorAll('#text path');

text.forEach((e,i )=> {
    console.log(`element ${i} : ${e.getTotalLength()}`);
    
});
