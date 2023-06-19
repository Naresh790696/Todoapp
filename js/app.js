
const display_ref = document.getElementById("display");
const displayBtn_ref = document.getElementById("display_btn");
let userArray = [];
let Innerdata_ref = document.getElementById("containerdata");
let editid = null;

displayBtn_ref.onclick =()=>{
    let name = display_ref.value;
    if(editid != null){
        userArray.splice(editid,1,{"name":name})
    }
    else{
        userArray.push({"name":name});
    }
  
    saveinfo(userArray);
    window.location.reload();
    
}

let saveinfo =(userArray) =>{
    let setstr = JSON.stringify(userArray);
    localStorage.setItem("users",setstr)
}

let setobj = localStorage.getItem("users");
userArray = JSON.parse(setobj);

let displayinfo =()=>{
    let statement = " ";
    userArray.forEach((element,index)=>{
        statement += `
        <h4>${index}</h4>
        <h4>${element.name}</h4>
        <button onclick="deletebtn(${index})">❌</button>
        <button onclick="editbtn(${index})">➕</button>
        `
    })
    Innerdata_ref.innerHTML = statement;
}
displayinfo();

function deletebtn(id) {
    userArray.splice(id,1);
    saveinfo(userArray);
    displayinfo()
    
}

function editbtn(id){
    editid = id;
    display_ref.value = userArray[id].name;
    displayBtn_ref.innerText ="Saveinfo"
}




