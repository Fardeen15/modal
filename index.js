
var arr = ["images/tshirt6.jpg", "images/tshirt4.jpg", "images/tshirt5.jpg"];

var img = document.getElementById("mainDiv");
for (var i = 0; i < arr.length; i++) {
    img.innerHTML += `
   <div class = "img">
   <img src="${arr[i]}" height = "200" width = "200" onclick = "modal1(${i})" id ="${i}">
   </div>`;
}

var modal = document.getElementById("myModal");
var image = document.getElementById("img01");

function modal1(i) {
    modal.innerHTML +=`
    <img src="${arr[i]}" height = "500" width = "500" id ="image${i}" class = "id">
    <i class="fas fa-times-circle icon" id = "icon" onclick = "modalClose(${i})"></i>`;
    modal.style.display = "inline-block";
    setTimeout(function(){
        document.getElementById(`image${i}`).className = "addImage"
        setTimeout(function(){
            document.getElementById("icon").className = "fas fa-times-circle showIcon"
        },600)
    }, 300)

}


function modalClose(i){
    console.log("abc")
    document.getElementById(`image${i}`).className = "id"
    setTimeout(function(){
        modal.style.display = "none";
        modal.innerHTML = "";
    }, 600)

}
