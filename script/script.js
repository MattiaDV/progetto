let pallini = document.querySelectorAll('.pallino');
let margin = 0;
let direction = 1;

function animationLoad() {
    function step() {
        if (margin >= 100) direction = -1;
        if (margin <= 0) direction = 1;

        margin += direction;

        // Aggiungi un ritardo per ogni pallino
        pallini.forEach((p, index) => {
            setTimeout(() => {
                p.style.marginBottom = margin + "px";
            }, index * 1000); // Ritardo crescente per ogni pallino
        });

        setTimeout(step, 10); // Velocità dell'animazione
    }

    step();
}

animationLoad(); // Avvia l'animazione