setInterval(function(){
    document.getElementById('datetime').innerText=new Date().toLocaleString();
},1000);

document.getElementById('myForm').onsubmit = function(event) {
    if (!confirm('Are you sure you want to submit the form?')) {
        event.preventDefault();
    }
};
