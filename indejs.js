function openPanel() {
    document.getElementById("sidePanel").style.left = "0";
}

function togglePanel() {
    var panel = document.getElementById("sidePanel");
    var currentLeft = panel.style.left;
    if (currentLeft === "0px") 
    {   panel.style.left = "-250px";  // Cierra el panel
    } else 
        {   panel.style.left = "0";  // Abre el panel
        }
}

function closePanel() {
    document.getElementById("sidePanel").style.left = "-250px";
}
