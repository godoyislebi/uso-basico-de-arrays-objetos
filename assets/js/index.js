const radiologia = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
  ];
const traumatologia = [
    {
      "HORA": "8:00",
      "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
      "PACIENTE": "PAULA SANCHEZ",
      "RUT": "15554774-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "10:00",
      "ESPECIALISTA": "RAUL ARAYA",
      "PACIENTE": "ANGÉLICA NAVAS",
      "RUT": "15444147-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "10:30",
      "ESPECIALISTA": "MARIA ARRIAGADA",
      "PACIENTE": "ANA KLAPP",
      "RUT": "17879423-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "ALEJANDRO BADILLA",
      "PACIENTE": "FELIPE MARDONES",
      "RUT": "1547423-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "CECILIA BUDNIK",
      "PACIENTE": "DIEGO MARRE",
      "RUT": "16554741-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "12:00",
      "ESPECIALISTA": "ARTURO CAVAGNARO",
      "PACIENTE": "CECILIA MENDEZ",
      "RUT": "9747535-8",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "12:30",
      "ESPECIALISTA": "ANDRES KANACRI",
      "PACIENTE": "MARCIAL SUAZO",
      "RUT": "11254785-5",
      "PREVISION": "ISAPRE"
    }
  ];
const dental = [
    {
      "HORA": "8:30",
      "ESPECIALISTA": "ANDREA ZUÑIGA",
      "PACIENTE": "MARCELA RETAMAL",
      "RUT": "11123425-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "MARIA PIA ZAÑARTU",
      "PACIENTE": "ANGEL MUÑOZ",
      "RUT": "9878789-2",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "SCARLETT WITTING",
      "PACIENTE": "MARIO KAST",
      "RUT": "7998789-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:00",
      "ESPECIALISTA": "FRANCISCO VON TEUBER",
      "PACIENTE": "KARIN FERNANDEZ",
      "RUT": "18887662-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:30",
      "ESPECIALISTA": "EDUARDO VIÑUELA",
      "PACIENTE": "HUGO SANCHEZ",
      "RUT": "17665461-4",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "14:00",
      "ESPECIALISTA": "RAQUEL VILLASECA",
      "PACIENTE": "ANA SEPULVEDA",
      "RUT": "14441281-0",
      "PREVISION": "ISAPRE"
    }
  ];

const primeraAtencionRadiologia = document.getElementById("primeraAtencionRadiologia");

const primeraAtencionTraumatologia = document.getElementById("primeraAtencionTraumatologia");

const primeraAtencionDental = document.getElementById("primeraAtencionDental");

const ultimaAtencionRadiologia = document.getElementById("ultimaAtencionRadiologia");

const ultimaAtencionTraumatologia = document.getElementById("ultimaAtencionTraumatologia");

const ultimaAtencionDental = document.getElementById("ultimaAtencionDental");

//Nombre del paciente junto con la previsión, separados por guión.

primeraAtencionRadiologia.innerHTML = `${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION}`;
primeraAtencionTraumatologia.innerHTML = `${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION}`;
primeraAtencionDental.innerHTML = `${dental[0].PACIENTE} - ${dental[0].PREVISION}`;

ultimaAtencionRadiologia.innerHTML = `${radiologia[radiologia.length - 1].PACIENTE} - 
${radiologia[radiologia.length - 1].PREVISION}`;
ultimaAtencionTraumatologia.innerHTML = `${traumatologia[traumatologia.length - 1].PACIENTE} - 
${traumatologia[traumatologia.length - 1].PREVISION}`;
ultimaAtencionDental.innerHTML = `${dental[dental.length - 1].PACIENTE} - 
${dental[dental.length - 1].PREVISION}`;
 console.log("Holanda");

const tBodyRadiologia = document.getElementById("tBodyRadiologia");
const tBodyTraumatologia = document.getElementById("tBodyTraumatologia");
const tBodyDental = document.getElementById("tBodyDental");
 
const templateTable = (obj, i) => {
  return `<tr>
  <th scope="row">${i + i}</th>
  <td>${obj.HORA}</td>
  <td>${obj.ESPECIALISTA}</td>
  <td>${obj.PACIENTE}</td>
  <td>${obj.RUT}</td>
  <td>${obj.PREVISION}</td>
</tr>
`
};

// MAP
radiologia.map((obj,i)=> {
  tBodyRadiologia.innerHTML += templateTable(obj,i)
});

traumatologia.map((obj,i)=> {
  tBodyTraumatologia.innerHTML += templateTable(obj,i)
});

dental.map((obj,i)=> {
  tBodyDental.innerHTML += templateTable(obj,i)
});

/*
// FOREACH
 radiologia.forEach((obj, i) => [
  tBodyRadiologia.innerHTML += templateTable(obj, i)
 ]);

 traumatologia.forEach((obj, i) => [
  tBodyTraumatologia.innerHTML += templateTable(obj, i)
 ]);

 dental.forEach((obj, i) => [
  tBodyDental.innerHTML += templateTable(obj, i)
 ]);
 */