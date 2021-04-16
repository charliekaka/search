// för google knapp
function Submit(){
    var i = document.getElementById('search').value;
    const search = "https://www.google.com/search?q="
    console.log(i)
    window.open(search + i)
}

var isDark = false;
// för slider
function Darkmode(){
    const root = document.querySelector(':root');
    if(isDark == false){
        console.log("white to black")
        //ändrar css variable
        root.style.setProperty('--white', '#333333');
        root.style.setProperty('--whitedim', '#1f1f1f');
        root.style.setProperty('--black_text', 'white');
        // Ändrar bild
        document.getElementById("light_logo").style.display = "none"
        document.getElementById("dark_logo").style.display = "block"
        isDark = true;
    }
    else if(isDark == true){
        console.log("black to white")
        //ändrar css variable
        root.style.setProperty('--white', 'lightgray');
        root.style.setProperty('--whitedim', 'white');
        root.style.setProperty('--black_text', 'black');
        // Ändrar bild
        document.getElementById("light_logo").style.display = "block"
        document.getElementById("dark_logo").style.display = "none"
        isDark = false;
    }
}
