alert("El precio de la primer foto es de $1500 y a cada foto adicional y cada foto adicional es un 2,5% más barata que la anterior");
let precio=1500;
let num=parseInt(prompt("ingrese la cantidad de fotos que quiere comprar"));

let parcial=1500;
let total=1500;
function calculo(total, parcial){
    for (let i=2;i<=num;i++){
        total=total+parcial*(1-0.025);
        parcial= Math.round(parcial*(1-0.025));
    }
    
    return Math.round(total);
}
function mensajes(num, total, parcial){
    console.log("El precio total de las "+num+" fotos que se desean comprar es de: " +calculo(total, parcial));
    console.log("Usted está pagando un promedio de $"+calculo(total,parcial)/num+" cada foto");
}
if (num>=1 && num<=20){
    mensajes(num, total, parcial);
}else{
    console.log("el rango de fotos a comprar tiene que estar comprendido entre 1 y 20 unidades");
}

