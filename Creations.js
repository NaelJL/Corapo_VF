
/* _____________________________________________________________________________________________ Menu Extraits */

const menu_extraits = document.getElementById('menu_extraits');

menu_extraits.addEventListener('click', () => {
    if (document.getElementById('extraits').style.display === 'none') {
        document.getElementById('extraits').style.display = 'block';
    } else {
        document.getElementById('extraits').style.display = 'none';
    }
})


/* _________________________________________________________________________________________ Menu Tout par delà */

const menu_tpd = document.getElementById('menu_tout_par_dela');

menu_tpd.addEventListener('click', () => {
    if (document.getElementById('tout_par_dela').style.display === 'none') {
        document.getElementById('tout_par_dela').style.display = 'block';
    } else {
        document.getElementById('tout_par_dela').style.display = 'none';
    }
})


/* _________________________________________________________________________________________ Menu J'invente le monde */

const menu_monde = document.getElementById('menu_j_invente_le_monde');

menu_monde.addEventListener('click', () => {
    if (document.getElementById('j_invente_le_monde').style.display === 'none') {
        document.getElementById('j_invente_le_monde').style.display = 'block';
    } else {
        document.getElementById('j_invente_le_monde').style.display = 'none';
    }
})