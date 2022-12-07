function GetVersionNumber(){
    return Math.floor(Math.random() * 10) + 1;
}


function CheckValidVersion(version){
    let validVersion = GetVersionNumber();
    console.log(`a valid version is : ${{validVersion}}`);
    
}