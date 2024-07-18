/*Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente*/

import Cl_Materia from "./Cl_Materia.js";
import Cl_Estudiante from "./Cl_Estudiante.js";

let todomateria = new Cl_Materia();

let estudiante = new  Cl_Estudiante(888, 60);
let estudiante2 = new Cl_Estudiante(777, 50);
let estudiante3 = new Cl_Estudiante(999, 40);
let estudiante4 = new Cl_Estudiante(333, 90);
let estudiante5 = new Cl_Estudiante(111, 30);
let estudiante6 = new Cl_Estudiante(666, 90);
let estudiante7 = new Cl_Estudiante(444, 48);
let estudiante8 = new Cl_Estudiante(222, 60);

todomateria.procesarEstudiantes(estudiante);
todomateria.procesarEstudiantes(estudiante2);
todomateria.procesarEstudiantes(estudiante3);
todomateria.procesarEstudiantes(estudiante4);
todomateria.procesarEstudiantes(estudiante5);
todomateria.procesarEstudiantes(estudiante6);
todomateria.procesarEstudiantes(estudiante7);
todomateria.procesarEstudiantes(estudiante8);

let salida = document.getElementById("salida");
salida.innerHTML += "resultado:" + "<br>";
salida.innerHTML += "El porcentaje de aprobados es: "+ todomateria.porcAprob() + "% <br>";
salida.innerHTML += "La cedula del mejor estudiante es: "+ todomateria.mejorEstudiante() + "<br>";