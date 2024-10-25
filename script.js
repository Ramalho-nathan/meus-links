const handleLink = () => {
    const url = "http://google.com";
    window.open (url, "_Blank")
};

const span = document.getElementById('dot');
let dotCount = 0;

setInterval(() =>{
    dotCount = (dotCount+1) % 6;
    span.textContent = '.'.repeat(dotCount);
},300)