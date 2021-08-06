if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(regitration =>{
        console.log("Service worker registered")
        console.log(regitration);
    }).catch(error=>{
        console.log("Service worker error")
        console.log(error)
    })
}
else{
    alert("Service workeris notworking")
}