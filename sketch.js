const celdas =[];
const RETICULA =4;//numero de altura y altura de retiula 4x4

const azulejos = [];
const NA = 11;//numero de azulejos

let ancho; //ancho de celdas
let alto; //alto de celdas

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
    for (let i = 0; i < NA; i ++){
      azulejos [i] = loadImage (`IMG/TILE${i}.png`);
          }
  }

  function setup(){
createCanvas (1080,1080);

ancho = width / RETICULA;
alto = height / RETICULA;

let opcionesI = []
  for (let i = 0; i < azulejos.length; i++)
{
  opcionesI.push (i);
}

for (let i = 0; i < RETICULA * RETICULA; i ++){
  celdas [i] = {
    colapsada:false,
    opciones: opcionesI,
   }
  }
}
 

  function draw() {
    background (111);
    const celdasDisponibles = celdas.filter ((celda) =>{return celda.colapsada == false;
    });
  
    if (celdasDisponibles.length > 0){celdasDisponibles.sort ((a,b) => {return a.opciones.length - b.opciones.length;
    })};
    
    const celdasPorColapsar = celdasDisponibles.filter ((celda) => {return (celda.opciones.length == celdasDisponibles[0].opciones.length);
    });
  
    const celdaSeleccionada = random (celdasPorColapsar);
    celdaSeleccionada.colapsada = true;  
    
    const opcionSeleccionada = random (celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];
  
    for (let x = 0; x < RETICULA; x ++){
      for (let y= 0; y < RETICULA; y ++){
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas [celdaIndex];
        if (celdaActual.colapsada){
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas [indiceDeAzulejo];
  
    image (azulejos[indiceDeAzulejo],
      x * ancho,
      y * alto, 
      ancho,
      alto
      );
  
      //Monitorear UP
      if (y > 0){
        const indiceUP = x + (y-1)*RETICULA;
        const celdaUP = celdas[indiceUP];
        if (!celdaUP.colapsada){
        }
              }
      //Monitorear Right
      if(x < RETICULA-1){
        const indiceRIGHT = x + 1 + y * RETICULA;
        const celdaRIGHT = celdas[indiceRIGHT];
        if (!celdaRIGHT.colapsada){
  
        }
      }
      //Monitorear Down
      if (y < RETICULA - 1){
        const indiceDOWN = x + (y+1) * RETICULA;
        const celdaDOWN = celdas[indiceDOWN];
        if(!celdaDOWN.colapsada){
  
        }
      }
      //Monitorear Left
      if (x > 0){const indiceLEFT = x - 1 + y * RETICULA;
        const celdaLEFT = celdas [indiceLEFT];
        if (!celdaLEFT.colapsada){
      
        }
          }
      }
  
        }
        noLoop();
      }
    }
  