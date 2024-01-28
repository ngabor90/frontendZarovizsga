function osszesOszto(szam:number):number[]{
    var osztok:number[] = [];

    for(var i:number = 1; i <= szam; i++){
        if(szam % i === 0){
            osztok.push(i);
        }
    }
    return osztok; 
};


function parosDarab(szamok:number[]):number{
    var parosDb:number = 0;

    for(var i:number = 0; i < szamok.length; i++){
        if(szamok[i] % 2 == 0){
            parosDb++
        }
    }
    return parosDb;
};

function fuggvenyhivasPalindrom(fv:() => string):boolean{
    var vizsgalandoSzoveg:string = fv();
    vizsgalandoSzoveg = vizsgalandoSzoveg.replace(" ", "");
    var szovegHossz:number = vizsgalandoSzoveg.length;

    var eredmeny:boolean = true;

    for(var i:number = 0; i < szovegHossz; i++){
        if(vizsgalandoSzoveg[i] != vizsgalandoSzoveg[szovegHossz - 1 - i]){
            eredmeny = false;
            break;
        }
    }

    return eredmeny;
}