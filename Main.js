function populate() {
    var mydata = JSON.parse(data);

    var s= document.getElementById("tab");
    s.innerHTML="";
    for (let index = 0; index < mydata.length; index++) {
        const element = mydata[index];
        s.innerHTML=s.innerHTML+("<tr><td>"+element.slno+"</td><td>"+element.name+"</td><td>"+element.unit+"</td><td>"+element.quantity+"</td><td>"+element.price+"</td></tr>");
        
    }
   
}