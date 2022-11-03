// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const myHeaders = new Headers()
myHeaders.set('Content-Type', 'application/json')

const firebaseConfig = {


    
    apiKey: "AIzaSyArcuZ1OzuHYEQykmY8RbMPNPUNARzxFZM",
    authDomain: "gdsc-project-d6275.firebaseapp.com",
    projectId: "gdsc-project-d6275",
    storageBucket: "gdsc-project-d6275.appspot.com",
    messagingSenderId: "897875320948",
    appId: "1:897875320948:web:85df83c2fb09799e907121",
    measurementId: "G-HCYT6XWVFD"
  };


  firebase.initializeApp(firebaseConfig)






var fileText = document.querySelector(".fileText")
var fileItem
var fileName

function getFile(e){

fileItem = e.target.files[0]
fileName = fileItem.name
fileText.innerHTML = fileName



}


function upload(){
    let storageRef = firebase.storage().ref("files/" + fileName )
    let uploadTask = storageRef.put(fileItem)



    uploadTask.on("state_changed", (snapshot) => {
        console.log(snapshot);
    })
}