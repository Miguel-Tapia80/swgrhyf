// ==========================================================================
// LÓGICA DE AUTENTICACIÓN SIMULADA - SWGRHyF
// ==========================================================================

const usuariosValidos = [
    { user: "admin_ti", pass: "1234", rol: "Superusuario / Administrador TI" },
    { user: "rh_user", pass: "1234", rol: "Personal RH (Administrador de Personal)" },
    { user: "jefe_area", pass: "1234", rol: "Mando Medio / Jefe de Área" },
    { user: "empleado", pass: "1234", rol: "Empleado / Usuario Base" }
];

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitamos recarga por defecto

            const usuarioInput = document.getElementById("usuario");
            const passwordInput = document.getElementById("password");
            const errorDiv = document.getElementById("error-message");

            const usuarioIngresado = usuarioInput.value.trim();
            const passwordIngresado = passwordInput.value.trim();

            // Buscamos coincidencia exacta en usuario y contraseña
            const usuarioEncontrado = usuariosValidos.find(
                u => u.user === usuarioIngresado && u.pass === passwordIngresado
            );

            if (usuarioEncontrado) {
                // Ocultamos mensaje de error si existía
                if (errorDiv) errorDiv.style.display = "none";

                // Guardamos la sesión en el almacenamiento local del navegador
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));
                
                // Redirección inmediata al Dashboard
                window.location.href = "Modulos/dashboard.html";
            } else {
                // Mostramos mensaje de error si las credenciales fallan
                if (errorDiv) {
                    errorDiv.style.display = "block";
                    errorDiv.innerText = "Usuario o contraseña incorrectos.";
                }
            }
        });
    }
});