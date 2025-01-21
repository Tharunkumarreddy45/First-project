setInterval(()=>{
    current=new Date();
    hr=current.getHours();
    min=current.getMinutes();
    sec=current.getSeconds();
    
    hrrotate=30*hr+min/2;
    minrotate=6*min;
    secrotate=6*sec;
    
    hour.style.transform=`rotate(${hrrotate}deg)`;
    minute.style.transform=`rotate(${minrotate}deg)`;
    second.style.transform=`rotate(${secrotate}deg)`;
}, 1000);