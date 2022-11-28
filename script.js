var res=[];
var heading=["Firstname","Lastname","Email","Address","Gender","Food","Pincode","State","Country"];


    var row= document.getElementById("thead-row");
    heading.forEach(ele=>{
        var thead=document.createElement("th");
        thead.innerHTML=ele;
        row.append(thead);
        
    });
    
let fav=[];

function handleInput(id){
    let val=document.getElementById(id).value;
    fav.push(val);
}
function handleSubmit(event){
   let element= document.getElementById("main");
    let tbody=document.getElementById("tbody");
    let tbodyRow=document.createElement("tr");
    // let newRow=tbodyRow.insertRow(n);
    event.preventDefault();
    let firstname= document.getElementById("firstName").value;
    let lastname= document.getElementById("lastName").value;
    let email= document.getElementById("email").value;
    let address= document.getElementById("address").value;
    let gender= document.getElementById("gender").value;
    let pincode= document.getElementById("pincode").value;
    let state= document.getElementById("state").value;
    let country=document.getElementById("country").value;

    res.push(firstname,lastname,email,address,gender,fav,pincode,state,country);
    tbody.append(tbodyRow);
    console.log(tbody);
    res.forEach((val)=> {
      let data= document.createElement("td");
      data.innerHTML=val;
      tbodyRow.appendChild(data);
    })
    console.log(res);
   element.reset();
}

handleSubmit();
reset();