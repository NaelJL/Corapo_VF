/* ______________________________________________________________Bouton menu déroulant Tatiana */

const menuT = document.getElementById('menuT');

menuT.addEventListener('click', () => {
    if (document.getElementById('block_menuT').style.display === 'none' ) {
        document.getElementById('block_menuT').style.display = 'block';
    } else {
        document.getElementById('block_menuT').style.display = 'none';
    }
})


/* ______________________________________________________________Bouton menu déroulant Morgan */

const menuM = document.getElementById('menuM');

menuM.addEventListener('click', () => {
    if (document.getElementById('block_menuM').style.display === 'none' ) {
        document.getElementById('block_menuM').style.display = 'block';
    } else {
        document.getElementById('block_menuM').style.display = 'none';
    }
})