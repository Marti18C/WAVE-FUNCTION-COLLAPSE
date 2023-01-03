const celdas = []; // 4x4
const RETICULA = 4; 
let ancho; //ancho de celda
let alto; //alto de celda

const azulejos = [];
const NA = 11; // numero de azulejos

const reglas = [
  //reglas de los bordes de cada azulejo
{
  // tile 0
  UP: 0,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
},
{
  // tile 1
  UP: 1,
  RIGHT: 1,
  DOWN: 1,
  LEFT: 0,
},
{
  // tile 2
  UP: 0,
  RIGHT: 1,
  DOWN: 1,
  LEFT: 1,
},
{
  // tile 3
  UP: 1,
  RIGHT: 1,
  DOWN: 0,
  LEFT: 1,
},
{
  // tile 4
  UP: 1,
  RIGHT: 0,
  DOWN: 1,
  LEFT: 1,
},
{
  // tile 5
  UP: 1,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 1,
},
{
  // tile 6
  UP: 1,
  RIGHT: 1,
  DOWN: 0,
  LEFT: 0,
},
{
  // tile 7
  UP: 0,
  RIGHT: 1,
  DOWN: 1,
  LEFT: 0,
},
{
  // tile 8
  UP: 0,
  RIGHT: 0,
  DOWN: 1,
  LEFT: 1,
},
{
  // tile 9
  UP: 1,
  RIGHT: 1,
  DOWN: 1,
  LEFT: 1,
},
{
  // tile 10
  UP: 0,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
},


];

function preload(){
  for(let i = 0; i < NA; i++){
  azulejos [i] = loadImage (`IMG/TILE${i}.png`);
  }
}


function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI = [];
  for (let i = 0; 1 < azulejos.length; i ++){
    opcionesI.push (i);
  }

  for(let i = 0; i < RETICULA * RETICULA; i++){
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
}
//celdas [8].colapsada = true;
//celdas [3].colapsada = true;

//celdas [12].opciones = [5,6,8];
//celdas [4].opciones = [4,7,12];
//celdas [6].opciones = [9,7,12];
//celdas [1].opciones = [6,4,8,10];
//celdas [5].opciones = [11,6,4,8,10];

}

function draw() {
  background(111);

const celdasDisponibles = celdas.filter ((celda) => {return celda.colapsada == false;
});

if (celdasDisponibles.length > 0 ){
  celdasDisponibles.sort ((a,b) => {
  return a.opciones.lenght - b.opciones.lenght;
});

const celdasPorColapsar = celdasDisponibles.filter((celda)=>{
  return celda.opciones.lenght == celdasDisponibles[0].opciones.lenght
});

const celdaSeleccionada = random(celdasPorColapsar);
celdaSeleccionada.colapsada = true //;

const opcionSeleccionada = random (celdaSeleccionada.opciones);
celdaSeleccionada.opciones = [opcionSeleccionada];



print (celdaSeleccionada);



for (let x = 0; x < RETICULA; x++ ){
  for (let y = 0; y < RETICULA; y++ ){
    const celdaIndex = x + y * RETICULA; 
    const celdaActual = celdas[celdaIndex];
    if(celdaActual.colapsada){
        image(
          azulejos[celdaActual.opciones[0]],x*ancho,
          y*alto, 
          ancho, 
          alto
          );
    }

  }
}
//noLoop ();
}
}
