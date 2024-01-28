function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
;
function parosDarab(szamok) {
    var parosDb = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosDb++;
        }
    }
    return parosDb;
}
;
function fuggvenyhivasPalindrom(fv) {
    var vizsgalandoSzoveg = fv();
    vizsgalandoSzoveg = vizsgalandoSzoveg.replace(" ", "");
    var szovegHossz = vizsgalandoSzoveg.length;
    var eredmeny = true;
    for (var i = 0; i < szovegHossz; i++) {
        if (vizsgalandoSzoveg[i] != vizsgalandoSzoveg[szovegHossz - 1 - i]) {
            eredmeny = false;
            break;
        }
    }
    return eredmeny;
}
