const handleLink = () => {
    window.location.href = 'notFound.html'
};

const span = document.getElementById('dot');
let dotCount = 0;

setInterval(() =>{
    dotCount = (dotCount+1) % 6;
    span.textContent = '.'.repeat(dotCount);
},300)

const handleBack = () => {
    window.location.href ='index.html'
}