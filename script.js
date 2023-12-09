const styleSheetLink = document.getElementById("stylesheet");
const btnStylPodst = document.getElementById("btnStylPodst");
const btnStylAlt = document.getElementById("btnStylAlt");

btnStylPodst.addEventListener('click', function() {
    styleSheetLink.href = 'styles.css' ;
});

btnStylAlt.addEventListener('click', function() {
    styleSheetLink.href = 'alternative_styles.css' ;
});