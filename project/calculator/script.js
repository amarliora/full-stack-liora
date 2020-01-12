const text1 = document.querySelector ('#text1')
const text2 = document.querySelector ('#text2')
const text3 = document.querySelector ('#text3')


function calcPluse(){

    let a = parseInt(text1.value);
    let b = parseInt(text2.value);

    text3.value=a+b;
}

