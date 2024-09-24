import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}


// Este es el archivo CarritoApp.jsx, que es el punto de entrada de la aplicación React. Aquí te explico qué hace cada línea:

// Importaciones
// import { Navigate, Route, Routes } from "react-router-dom";: Importa tres componentes de la biblioteca react-router-dom:
// Navigate: Un componente que permite redirigir a una ruta específica.
// Route: Un componente que define una ruta en la aplicación.
// Routes: Un componente que agrupa varias rutas y las renderiza según la ruta actual.
// import { NavBar } from "./components/NavBar";: Importa el componente NavBar de un archivo llamado NavBar.jsx en el directorio components. Este componente probablemente contiene la barra de navegación de la aplicación.
// import { ComprasPage } from "./pages/ComprasPage";: Importa el componente ComprasPage de un archivo llamado ComprasPage.jsx en el directorio pages. Este componente probablemente contiene la lógica para la página de compras.
// import { CarritoPage } from "./pages/CarritoPage";: Importa el componente CarritoPage de un archivo llamado CarritoPage.jsx en el directorio pages. Este componente probablemente contiene la lógica para la página del carrito.
// import { ProductosProvider } from "./context/ProductosProvider";: Importa el proveedor de contexto ProductosProvider de un archivo llamado ProductosProvider.jsx en el directorio context. Este proveedor probablemente proporciona acceso a los productos en la aplicación.
// import { CarritoProvider } from "./context/CarritoProvider";: Importa el proveedor de contexto CarritoProvider de un archivo llamado CarritoProvider.jsx en el directorio context. Este proveedor probablemente proporciona acceso al carrito en la aplicación.
// Definición de la aplicación
// export const CarritoApp = () => { ... }: Define la función CarritoApp, que es el punto de entrada de la aplicación. Esta función devuelve un elemento JSX que representa la aplicación.
// Renderizado de la aplicación
// <ProductosProvider>...</ProductosProvider>: Envuelve la aplicación en un proveedor de contexto ProductosProvider, lo que proporciona acceso a los productos en la aplicación.
// <CarritoProvider>...</CarritoProvider>: Envuelve la aplicación en un proveedor de contexto CarritoProvider, lo que proporciona acceso al carrito en la aplicación.
// <NavBar></NavBar>: Renderiza el componente NavBar dentro de la aplicación.
// <div className="container">...</div>: Renderiza un contenedor que contiene las rutas de la aplicación.
// <Routes>...</Routes>: Define un grupo de rutas en la aplicación.
// <Route path="/" element={<ComprasPage></ComprasPage>}></Route>: Define una ruta para la página de compras. Cuando la ruta es /, se renderiza el componente ComprasPage.
// <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>: Define una ruta para la página del carrito. Cuando la ruta es /carrito, se renderiza el componente CarritoPage.
// <Route path="/*" element={<Navigate to='/' />}></Route>: Define una ruta catch-all que redirige a la ruta / cuando no se encuentra una ruta coincidente.
// En resumen, este archivo define la aplicación CarritoApp que proporciona acceso a los productos y el carrito, y renderiza una barra de navegación y un contenedor que contiene las rutas de la aplicación. Las rutas se definen utilizando el componente Routes y se renderizan según la ruta actual.