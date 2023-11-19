function passAuth(){
    const existAccessToken = localStorage.getItem("accessToken")
    if(existAccessToken){
        location.assign("./folder.html")
    }
}

export default passAuth