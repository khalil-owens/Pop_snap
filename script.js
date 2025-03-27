function calculateNumber(){
    const xput = parseInt(document.getElementById("NumberInput").value);
    let number = "";
    if(xput % 4 ===0 && xput % 6 ===0){
        number = `PopSnap`;
    }else if(xput % 4 === 0){
        number = `Pop`;
    } else if(xput % 6 === 0){
        number = `Snap`;
    } else {
        number = xput;
    }
    document.getElementById("Answer").textContent = `${number}`
}