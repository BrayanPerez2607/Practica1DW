document.getElementById('numEstudiantes').addEventListener('input', function() {
    generarCamposEstudiantes(this.value);
  });
  
  document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    calcularNotas();
  });
  
  function generarCamposEstudiantes(numEstudiantes) {
    const estudiantesDiv = document.getElementById('estudiantes');
    estudiantesDiv.innerHTML = ''; // Limpiar los campos anteriores
  
    for (let i = 0; i < numEstudiantes; i++) {
      estudiantesDiv.innerHTML += `
        <h3>Estudiante ${i + 1}</h3>
        <label>Nombre del estudiante:</label>
        <input type="text" id="nombre${i}">
  
        <label>Nombre de la materia:</label>
        <input type="text" id="materia${i}">
  
        <label>Nota 1:</label>
        <input type="text" id="nota1_${i}">
        <label>Porcentaje (%):</label>
        <input type="text" id="porcentaje1_${i}">
  
        <label>Nota 2:</label>
        <input type="text" id="nota2_${i}">
        <label>Porcentaje (%):</label>
        <input type="text" id="porcentaje2_${i}">
  
        <label>Nota 3:</label>
        <input type="text" id="nota3_${i}">
        <label>Porcentaje (%):</label>
        <input type="text" id="porcentaje3_${i}">

        <label>Nota 4:</label>
        <input type="text" id="nota4_${i}">
        <label>Porcentaje (%):</label>
        <input type="text" id="porcentaje4_${i}">

        <label>Nota 5:</label>
        <input type="text" id="nota5_${i}">
        <label>Porcentaje (%):</label>
        <input type="text" id="porcentaje5_${i}">
      `;
    }
  }
  
  function calcularNotas() {
    const numEstudiantes = document.getElementById('numEstudiantes').value;
    const resultadosDiv = document.getElementById('resultado');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
  
    let aprobados = 0;
  
    for (let i = 0; i < numEstudiantes; i++) {
      const nombre = document.getElementById(`nombre${i}`).value;
      const materia = document.getElementById(`materia${i}`).value;
  
      const notaFinal = (
        (parseFloat(document.getElementById(`nota1_${i}`).value) * parseFloat(document.getElementById(`porcentaje1_${i}`).value) / 100) +
        (parseFloat(document.getElementById(`nota2_${i}`).value) * parseFloat(document.getElementById(`porcentaje2_${i}`).value) / 100) +
        (parseFloat(document.getElementById(`nota3_${i}`).value) * parseFloat(document.getElementById(`porcentaje3_${i}`).value) / 100) +
        (parseFloat(document.getElementById(`nota4_${i}`).value) * parseFloat(document.getElementById(`porcentaje4_${i}`).value) / 100) +
        (parseFloat(document.getElementById(`nota5_${i}`).value) * parseFloat(document.getElementById(`porcentaje5_${i}`).value) / 100)
      );
  
      let estado = 'Reprobó';
      if (notaFinal >= 3) {
        estado = 'Aprobó';
        aprobados++;
      }
  
      resultadosDiv.innerHTML += `
        <p>${nombre} (${materia}): Nota Final = ${notaFinal.toFixed(2)} - ${estado}</p>
      `;
    }
  
    const porcentajeAprobados = (aprobados / numEstudiantes) * 100;
    resultadosDiv.innerHTML += `
      <p>Porcentaje de aprobados: ${porcentajeAprobados.toFixed(2)}%</p>
      <p>Porcentaje de reprobados: ${(100 - porcentajeAprobados).toFixed(2)}%</p>
    `;
  }
  