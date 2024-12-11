document.addEventListener("DOMContentLoaded", function () {
    let colorSeleccionado = 'rgb(255, 255, 0)';
    let pincelActivo = false;
  
    const zonaDibujo = document.getElementById('zonadibujo');
    const mensajePincel = document.getElementById('pincel');
    const colores = document.querySelectorAll('#paleta .color1, #paleta .color2, #paleta .color3, #paleta .color4, #paleta .color5, #paleta .color6');
  
    // Crear tabla de 30x30
    const crearTablero = () => {
      const tabla = document.createElement('table');
      tabla.classList.add('tablerodibujo');
      
      for (let fila = 0; fila < 30; fila++) {
        const tr = document.createElement('tr');
        
        for (let columna = 0; columna < 30; columna++) {
          const td = document.createElement('td');
          td.classList.add('celda');
          tr.appendChild(td);
          
          // Evento para pintar cuando el pincel esté activado
          td.addEventListener('mousedown', (e) => {
            pincelActivo = !pincelActivo; // Activar/desactivar pincel
            mensajePincel.textContent = pincelActivo
              ? 'PINCEL ACTIVADO...'
              : 'PINCEL DESACTIVADO...';
            
            if (pincelActivo && colorSeleccionado) {
              e.target.style.backgroundColor = colorSeleccionado;
            }
          });
  
          // Pintar con el mouse sobre las celdas 
          td.addEventListener('mouseover', (e) => {
            if (pincelActivo && colorSeleccionado) {
              e.target.style.backgroundColor = colorSeleccionado;
            }
          });
        }
        
        tabla.appendChild(tr);
      }
  
      zonaDibujo.appendChild(tabla);
    };
  
    // Manejar selección de colores
    colores.forEach((color) => {
      color.addEventListener('click', () => {
        colores.forEach((c) => c.classList.remove('seleccionado'));
        color.classList.add('seleccionado');
        colorSeleccionado = getComputedStyle(color).backgroundColor;
      });
    });
  
    crearTablero();
  });
  