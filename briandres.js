document.addEventListener("DOMContentLoaded",()=>{

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    document.querySelector("#current-year").textContent = getCurrentYear();
})

function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}