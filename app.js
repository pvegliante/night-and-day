var button = document.getElementById('button');
var body = document.getElementById('body');
var orb = document.getElementById('orb');
var smile = document.getElementById('smile');
var skull = document.getElementById('skull');

button.addEventListener('click', function() {
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');
        skull.classList.add('hidden');
        smile.classList.remove('hidden');

        orb.classList.remove('moon');
        orb.classList.add('sun');

    } else {
        body.classList.add('night');
        body.classList.remove('day');
        orb.classList.remove('sun');
        orb.classList.add('moon');
        smile.classList.add('hidden');
        skull.classList.remove('hidden');

    }
    //  body.classList.toggle('night');
    //  body.classList.toggle('day');
});
