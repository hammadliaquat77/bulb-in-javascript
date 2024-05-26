
// First method

// function ON (on){
//     var on =document.getElementById('image')
//     on.style.width = '200px'; // Reset width
//     on.style.height = '260px';
    

// on.src='image/2.png'     
// }

// function OFF (off){
//     var off =document.getElementById('image')
//     off.style.width = '200px'; // Reset width
//     off.style.height = '250px';
    
// off.src='image/1.png'    
// }




// 2nd method


// var img = document.getElementById('img')

// function on(){
//     img.src= 'image/2.png'
// }
// function off(){
//     img.src= 'image/1.png'
// }





// // 3rd Method


var img = document.getElementById('img')
var btn = document.getElementById('btn')

var flag = 'off'


btn.addEventListener('click', function changeImg(){
    console.log('hjg');
if(flag == 'off'){
    img.src = 'image/2.png'
    btn.innerText= 'OFF'
    flag = 'on'
}
else{
    img.src = 'image/1.png'
    btn.innerText= 'ON'
    flag = 'off'
}

})






