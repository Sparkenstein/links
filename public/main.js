const input = document.getElementById("searchbar");
input.addEventListener('input', function(e){
    console.log("Changed", e.target.value);
})