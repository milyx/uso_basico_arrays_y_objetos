const radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

const traumatologia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

const dental = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

//console.log("inicio")
//console.log(radiologia)fetch
//console.log("Tiene " + radiologia.length + " elementos" )
//console.log(`Tiene ${radiologia.length} elementos`)
//console.log(`La primera atención es ${radiologia[0]}`)

//Radiología
console.log(radiologia[0]);
console.log(radiologia[radiologia.length - 1]);
const primeraAtencionRadiologia = radiologia[0];
const ultimaAtencionRadiologia = radiologia[radiologia.length - 1];
console.log(
  `Radiología: Primera atención: ${primeraAtencionRadiologia.PACIENTE} - ${primeraAtencionRadiologia.PREVISION} | Última atención: ${ultimaAtencionRadiologia.PACIENTE} -  ${ultimaAtencionRadiologia.PREVISION}`
);
document.getElementById(
  "firstAttentionRadiology"
).innerHTML = `${primeraAtencionRadiologia.PACIENTE} - ${primeraAtencionRadiologia.PREVISION}`;
document.getElementById(
  "lastAttentionRadiology"
).innerHTML = `${ultimaAtencionRadiologia.PACIENTE} - ${ultimaAtencionRadiologia.PREVISION}`;

//Tabla Radiología
let table = `
      <p><B>Radiología</B></p>
      <table border='1'>
      <tr>
        <td><B>HORA</B></td>
        <td><B>ESPECIALISTA</B></td>
        <td><B>PACIENTE</B></td>
        <td><B>RUT</B></td>
        <td><B>PREVISIÓN</B></td>
      </tr>
      `;
for (let k = 1; k <= radiologia.length; k++) {
  //console.log(radiologia[k-1])
  table =
    table +
    `
      <tr>
        <td>${radiologia[k - 1].HORA}</td>
        <td>${radiologia[k - 1].ESPECIALISTA}</td>
        <td>${radiologia[k - 1].PACIENTE}</td>
        <td>${radiologia[k - 1].RUT}</td>
        <td>${radiologia[k - 1].PREVISION}</td>
      </tr>
      `;
}

table = table + `</table>`;
document.getElementById("radiologyTable").innerHTML = `${table}`;

//Traumatología
console.log(traumatologia[0]);
console.log(traumatologia[traumatologia.length - 1]);
const primeraAtencionTraumatologia = traumatologia[0];
const ultimaAtencionTraumatologia = traumatologia[traumatologia.length - 1];
console.log(
  `Primera atención: ${primeraAtencionTraumatologia.PACIENTE} - ${primeraAtencionTraumatologia.PREVISION} | Última atención: ${ultimaAtencionTraumatologia.PACIENTE} -  ${ultimaAtencionTraumatologia.PREVISION}`
);
document.getElementById(
  "firstAttentionTraumatology"
).innerHTML = `${primeraAtencionTraumatologia.PACIENTE} - ${primeraAtencionTraumatologia.PREVISION}`;
document.getElementById(
  "lastAttentionTraumalogy"
).innerHTML = `${ultimaAtencionTraumatologia.PACIENTE} - ${ultimaAtencionTraumatologia.PREVISION}`;

table = `
        <p><B>Traumatología</B></p>
        <table border='1'>
        <tr>
          <td><B>HORA</B></td>
          <td><B>ESPECIALISTA</B></td>
          <td><B>PACIENTE</B></td>
          <td><B>RUT</B></td>
          <td><B>PREVISIÓN</B></td>
        </tr>
     `;
for (let k = 1; k <= traumatologia.length; k++) {
  //console.log(traumatologia[k-1])
  table =
    table +
    `
   <tr>
     <td>${traumatologia[k - 1].HORA}</td>
     <td>${traumatologia[k - 1].ESPECIALISTA}</td>
     <td>${traumatologia[k - 1].PACIENTE}</td>
     <td>${traumatologia[k - 1].RUT}</td>
     <td>${traumatologia[k - 1].PREVISION}</td>
   </tr>
 `;
}

table = table + `</table>`;
document.getElementById("traumalogyTable").innerHTML = `${table}`;

//Dental
console.log(dental[0]);
console.log(dental[dental.length - 1]);
const primeraAtenDental = dental[0];
const ultimaAtencionDental = dental[dental.length - 1];
console.log(
  `Primera atención: ${primeraAtenDental.PACIENTE} - ${primeraAtenDental.PREVISION} | Última atención: ${ultimaAtencionDental.PACIENTE} -  ${ultimaAtencionDental.PREVISION}`
);
document.getElementById(
  "firstDentalCare"
).innerHTML = `${primeraAtenDental.PACIENTE} - ${primeraAtenDental.PREVISION}`;
document.getElementById(
  "lastDentalCare"
).innerHTML = `${ultimaAtencionDental.PACIENTE} - ${ultimaAtencionDental.PREVISION}`;

table = `
   <p><B>Dental</B></p>
   <table border='1'>
   <tr>
    <td><B>HORA</B></td>
    <td><B>ESPECIALISTA</B></td>
    <td><B>PACIENTE</B></td>
    <td><B>RUT</B></td>
    <td><B>PREVISIÓN</B></td>
  </tr>
 `;
for (let k = 1; k <= traumatologia.length; k++) {
  //console.log(traumatologia[k-1])
  table =
    table +
    `
<tr>
 <td>${traumatologia[k - 1].HORA}</td>
 <td>${traumatologia[k - 1].ESPECIALISTA}</td>
 <td>${traumatologia[k - 1].PACIENTE}</td>
 <td>${traumatologia[k - 1].RUT}</td>
 <td>${traumatologia[k - 1].PREVISION}</td>
</tr>
`;
}

table = table + `</table>`;
document.getElementById("dentalCareTable").innerHTML = `${table}`;

for (let k = 1; k <= traumatologia.length; k++) {
  console.log(traumatologia[k - 1]);
}
for (let k = 1; k <= dental.length; k++) {
  console.log(dental[k - 1]);
}
