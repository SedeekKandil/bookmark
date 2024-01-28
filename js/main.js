var siteName = document.getElementById("siName")
var siteUrl = document.getElementById("siUrl")


var siteList = []
siteList = JSON.parse(localStorage.getItem("sites"))
view()

function submit(){

add()
view()
clear()

}

function add(){
    var bookmark ={
        name: siteName.value,
        url: siteUrl.value,
    }
    
    siteList.push(bookmark);

    localStorage.setItem("sites",JSON.stringify(siteList))
}


function view(){
    var views =``

    for (i=0;i<siteList.length;i++){
        views += `
        <tr>
                                <td>${i}</td>
                                <td>${siteList[i].name}</td></td>
                                <td><button class="btn btn-success">
                                    <i class="fa-regular fa-eye"></i>
                                    Visit
                                </button></td>
                                <td><button onclick="deleteItem(${i})" class="btn btn-danger">
                                    <i class="fa-solid fa-trash-can"></i>
                                    Delete
                                </button></td>
                            </tr>
        `
        document.getElementById("tbody").innerHTML = views;
    }
}


function clear(){
    siteName.value = '';
    siteUrl.value = '';
}


function deleteItem(index){
siteList.splice(index,1)
localStorage.setItem("sites",JSON.stringify(siteList))
view()
}


// function vis(){
//     window.open("https://www.facebook.com/?locale=ar_AR")
// }