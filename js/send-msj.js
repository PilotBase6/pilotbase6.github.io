

(function () {
    emailjs.init("q_2oA3HBSY88c1xZ4");
  })();
  


export function sendEmail(){
    let info ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };


    const serviceId="service_pgs77yh",
    templateId="template_l3m3b3a";
    

    emailjs.send(serviceId,templateId,info).then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("asdasd")
        

    })
    .catch(err=>console.log(err));
}
