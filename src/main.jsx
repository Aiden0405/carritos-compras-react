import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CarritoApp } from "./CarritoApp";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>
  </BrowserRouter>
);



// Este es el archivo principal de una aplicación React, llamado main.jsx. Aquí te explico qué hace cada línea:

// Importaciones
// import { StrictMode } from "react";: Importa el componente StrictMode de la biblioteca React. Este componente es utilizado para activar el modo estricto en la aplicación, lo que ayuda a detectar problemas de rendimiento y a mejorar la experiencia del usuario.
// import { createRoot } from "react-dom/client";: Importa la función createRoot de la biblioteca react-dom/client. Esta función se utiliza para crear un nuevo elemento raíz en el DOM y renderizar la aplicación React en él.
// import { BrowserRouter } from "react-router-dom";: Importa el componente BrowserRouter de la biblioteca react-router-dom. Este componente es utilizado para habilitar el enrutamiento en la aplicación y permitir la navegación entre diferentes rutas.
// import { CarritoApp } from "./CarritoApp";: Importa el componente CarritoApp de un archivo llamado CarritoApp.jsx en el mismo directorio. Este componente es el punto de entrada de la aplicación y contiene la lógica principal de la aplicación.
// Renderizado de la aplicación
// createRoot(document.getElementById("root")).render(...): Crea un nuevo elemento raíz en el DOM y lo renderiza en el elemento con el id "root". El método render se utiliza para renderizar la aplicación React en el elemento raíz.
// <BrowserRouter>...</BrowserRouter>: Envuelve la aplicación en un componente BrowserRouter, lo que habilita el enrutamiento en la aplicación.
// <StrictMode>...</StrictMode>: Envuelve la aplicación en un componente StrictMode, lo que activa el modo estricto en la aplicación.
// <CarritoApp />: Renderiza el componente CarritoApp dentro del componente StrictMode y BrowserRouter.
// En resumen, este archivo crea un nuevo elemento raíz en el DOM, renderiza la aplicación React en él, habilita el enrutamiento y activa el modo estricto. Luego, renderiza el componente CarritoApp dentro de la aplicación.