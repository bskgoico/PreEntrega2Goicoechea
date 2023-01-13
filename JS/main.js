// Conversor de Monedas

// DECLARACIÓN DE OBJETO Y ARRAY ↡ //

const divisas = {
    ars: { usd: 180, eur: 190 },
    usd: { ars: 0.005, eur: 1.07 },
    eur: { ars: 0.005, usd: 0.92 },
  };
  const conversioneHechas = [];
  
  // FOR IN ↡ //
  
  for (const propiedad in divisas) {
    console.log(propiedad);
  }
  
  // ENTRADA MEDIANTE PROMPT ↡ //
  
  let respuesta = prompt(
    "Bienvenido, ¿Desea realizar alguna conversion? Si la respuesta es si escriba Si, si la respuesta es no escriba No"
  );
  
  // FUNCIONES JS ↡ ""
  
  function confirmacionRespuesta(respuesta) {
    
    
    // CONDICIÓN QUE DETERMINA EL ARRANQUE DEL SIMULADOR, SI LA RESPUESTA ES SI SE DECLARAN VARIABLES DETERMINADAS POR FUNCIONES
    // QUE A PARTIR DEL USO DE PARÁMETROS USAMOS ESAS MISMAS VARIABLES PARA VALIDAR O HACER OPERACIONES, Y LUEGO DE ESO UTILIZAMOS
    // UN MÉTODO PUSH CON LA IDEA DE GUARDAR LOS DATOS DE LAS CONVERSIONES HECHAS DEL USUARIO EN EL ARRAY "conversionesHechas"
    // DECLARADO ARRIBA.
  
    
    if (respuesta.toLowerCase() === "si") {
      let desde = convertirDesde();
      let hasta = convertirA(desde);
      let valor = indicarValor();
      let valorConvertido = convertirDivisa(valor, desde, hasta);
      let conversion = { desde, hasta, valor, valorConvertido };
      conversioneHechas.push(conversion);
  
      alert(`Su resultado es ${valorConvertido}`);
      alert("Muchas gracias.");
    } else {
      alert('Ha elegido "No", hasta luego.');
    }
  }
  
  function convertirDesde() {
    let string = "";
    for (const divisasDesde in divisas) {
      string += divisasDesde + " ";
    }
    let monedaElegida = prompt("¿Que moneda desea convertir? (" + string + ")");
    
    // Consologeo la respuesta de que moneda desea convertir //
    console.log(monedaElegida);
  
    return monedaElegida;
  }
  
  
  
  function convertirA(desde) {
    let string = "";
    for (const divisasDesde in divisas[desde]) {
      string += divisasDesde + " ";
    }
    let monedaAConvertir = prompt(
      "¿A que moneda desea convertir? (" + string + ")"
    );
    
    // Consologeo la respuesta de que a moneda desea convertir //
    console.log(monedaAConvertir);
  
    return monedaAConvertir;
  }
  
  function indicarValor() {
    let valor = parseInt(prompt("Ingrese el valor a convertir"));
    return validarValor(valor);
  }
  
  
  function validarValor(valor) {
    while (Number.isNaN(valor) || valor === 0) {
      if (valor !== 0) {
        alert("Ingrese un valor.");
      } else {
        alert("El valor no puede ser 0.");
      }
      valor = parseInt(prompt("Ingrese valor a convertir"));
    }
  
    return valor;
  }
  
  function convertirDivisa(valor, desde, hasta) {
    let resultadoConversion = valor * divisas[desde][hasta];
  
    console.log("Resultado:" + " " + resultadoConversion);
  
    return resultadoConversion;
  }
  
  confirmacionRespuesta(respuesta);
  
  
  let respuesta2 = prompt("Desea realizar otra conversion?");
  function repetidor(respuesta2) {
    if (
      respuesta2.toLowerCase() === "si" ||
      respuesta2.toLowerCase() === "Si" ||
      respuesta2.toLowerCase() === "SI"
    )
      confirmacionRespuesta(respuesta);
    else {
      alert('Ha elegido "No", hasta luego.');
    }
  
    return respuesta2;
  }
  
  repetidor(respuesta2);
  
  console.log(conversioneHechas);
  
  
  const conversionesArs = conversioneHechas.find(el => el.desde('ars'));
  const conversionesUsd = conversioneHechas.find(el => el.desde('usd'));
  const conversionesEur = conversioneHechas.find(el => el.desde('eur'));
  
  
  console.log(conversionesArs);
  console.log(conversionesUsd);
  console.log(conversionesEur);