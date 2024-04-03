document.addEventListener('DOMContentLoaded', function() {
  // Función para cambiar el color del cuadro
  function cambiarColorCuadro() {
    var color = generarColorAleatorio();
    document.getElementById('cuadro').style.backgroundColor = color;
  }

  // Función para generar un color aleatorio
  function generarColorAleatorio() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Llamadas a las funciones
  document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorCuadro);
  desplazarTextoHeader();
});

