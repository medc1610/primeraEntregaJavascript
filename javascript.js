let alumnos = prompt('Ingresa cantidad de alumnos');
let sumaNotas = 0;
let promedio = 0;

for (let i = 0; i < alumnos; i++) {
    let nombre = prompt('Ingresa nombre');
    let nota = prompt('Ingresa nota');

    while (nota < 1 || nota > 7) {
        nota = prompt('Valor incorreto / Ingresa nota nuevamente');
    }     
    
    nota = parseInt(nota);
    
    sumaNotas += nota;
   
    if (nota >= 4) {
        console.log(nombre + ' aprobó con nota ' + nota);
    } else {
        console.log(nombre + ' reprobó con nota ' + nota);
    }    
    
}
promedio = parseInt(sumaNotas) / parseInt(alumnos);
console.log('el promedio del curso es: ' + promedio);
