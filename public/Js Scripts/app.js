//SIGNUP FORM JACVASCRIPT
function emptyFieldCheck() {
    let a=document.getElementById('firstName').value;
    let b=document.getElementById('lastName').value;
    let c=document.getElementById('email').value;
    let d=document.getElementById('num').value;
    let e=document.getElementById('address').value;

    if(a==''||b==''||c==''||d==''||e==''){
        alert(`Please Fill All The Required Field`);
    }
    else{
        alert('SignUp Successfull');
    }
}

function passwordCheck() {
    let a=document.getElementById('pass').value;
    let b=document.getElementById('ConPass').value;
    if(a!==b){
      alert('Please Input the Same Password')
    }
}


//SIGNIN FORM JACVASCRIPT
function FieldCheck() {
    let a=document.getElementById('user-email').value;
    let b=document.getElementById('user-pass').value;

    if(a=='' && b==''){
        let c=document.getElementById('spanOne').innerHTML="PLease Fill Out This Field"
        let d=document.getElementById('spanTwo').innerHTML="PLease Fill Out This Field"
    }
    else if(a==''){
        let d=document.getElementById('spanOne').innerHTML="PLease Fill Out This Field"
    }
    else if(b==''){
        let d=document.getElementById('spanTwo').innerHTML="PLease Fill Out This Field"
    }
    else{
        alert('Login Successfull')
    }
}

// CONTACT FORM DATABASE


function SaveData() {
    let name=document.getElementById("clientName")
    let email = document.getElementById("clientEmail")
    let message= document.getElementById("clientMessage")
    if(name.value=='' && email.value=="" && message.value ==""){
        console.log("Please Fill All the Fields")
        alert("Please Fill All the Fields")
    }
    else{
        let key = firebase.database().ref().push().key
        let Data={
            Name : name.value,
            Email : email.value,
            Message : message.value,
            Key : key
        }
        name.value=''
        email.value=''
        message.value=''
        
        firebase.database().ref("Client /" + key).set(Data)
        // console.log(Data);
    }
}


// .........FIREBASE GET DATA METHOD......
// function getData() {
//     firebase.database().ref().on("value",function(data) {
//         console.log(data.val());
//     })
// }

// getData();
