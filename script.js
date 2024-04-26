// Esperar a que el contenido HTML se cargue completamente
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

  // Llamada a la función para cambiar el color del cuadro al hacer clic en el botón
  document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorCuadro);
  
  // Variables para definir la fecha y la hora de la cuenta regresiva (350 días desde ahora)
  var countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 350); // Restar 350 días al día actual
  
  // Función para iniciar la cuenta regresiva
  function startCountdown() {
    // Actualizar la cuenta regresiva cada segundo
    var countdownInterval = setInterval(function() {
      // Obtener la fecha y hora actual
      var now = new Date().getTime();
      
      // Calcular la distancia entre la fecha límite y la fecha y hora actual
      var distance = countdownDate - now;
      
      // Calcular los días, horas, minutos y segundos restantes
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Mostrar la cuenta regresiva en el elemento con id "countdown"
      document.getElementById("countdown").innerHTML = "" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      
      // Si la cuenta regresiva ha terminado, mostrar un mensaje
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "La cuenta regresiva ha terminado";
      }
    }, 1000); // Actualizar cada segundo
  }

  // Llamar a la función para iniciar la cuenta regresiva
  startCountdown();

});
