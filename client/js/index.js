const list = require("../../server/data");

let btnOne = document.querySelector("#btn1");
let btnTwo = document.querySelector("#btn2");

btnOne.addEventListener('click', () => {
   var searchText = document.querySelector(".searchBar").value;
      for(let index = 0; index < list.length;index++){
        if (list[index]['search'].indexOf(searchText) >= 0){
            function getList(e) {
                e.preventDefault()
                fetch('http://localhost:3000/'+searchText)
                .then(resp => resp.json)
                .then(document.getElementById('searchBar').textContent = list)
                .catch(console.warn)
         }
        }

//     // switch(searchText){
//     //     case result[0]:
//     //         alert("Facebook");
//     //         break;
//     //     case result[1]:
//     //         alert("Instagram");
//     //         break;
        
//     //     default:
//     //         alert("Result Not Found: Here is what you can search!");
//     // }
    
// });

btnTwo.addEventListener('click', () => {
    alert("Hi");
});
