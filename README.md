
# TFI MongoDB NoSQL

Este proyecto es una aplicación backend para la gestión de productos, diseñada como parte de la materia **Base de Datos**. Utiliza **MongoDB Atlas** como base de datos en la nube y está desarrollado con **Node.js** y **Express**.

---

## **Características del Proyecto**

- Operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la colección `productos`.
- Conexión a una base de datos MongoDB en la nube utilizando **MongoDB Atlas**.

---

## **Requisitos Previos**

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes:

1. **Node.js** (versión 16 o superior) [Descargar Node.js](https://nodejs.org/)
2. **Thunder Client** o cualquier cliente REST para probar los endpoints.

---

## **Estructura del Proyecto**

```plaintext
.
├── models/
│   └── producto.js       # Modelo de la colección productos
├── routes/
│   └── productos.js      # Rutas para operaciones CRUD
├── .env                  # Variables de entorno
├── server.js             # Configuración principal del servidor
└── package.json          # Dependencias del proyecto
```

---

## **Instalación**

1. Clona este repositorio:
   ```bash
   git clone https://github.com/vtobias10/tfiDbNoSQL.git
   cd tfiDbNoSQL
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm init -y
   npm install express mongoose dotenv
   ```

---

## **Configuración**

### Archivo .env

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido, con tu cadena de conexión a MongoDB Atlas:

```plaintext
MONGO_URI=mongodb+srv://tobivelazquez80:dbMarketpw@dbmarket.1ngbz.mongodb.net/dbmarket
PORT=5000
```

### Conexión a la Base de Datos

Este proyecto utiliza una base de datos MongoDB en la nube, alojada en **MongoDB Atlas**. Asegúrate de que la base de datos esté accesible y que las credenciales en el archivo `.env` sean correctas.

La cadena de conexión por defecto es:

```plaintext
mongodb+srv://tobivelazquez80:dbMarketpw@dbmarket.1ngbz.mongodb.net/dbmarket
```

---

## **Ejecución del Proyecto**

1. Corre la aplicación:
   ```bash
   node server.js
   ```

2. El servidor estará disponible en:
   ```plaintext
   http://localhost:5000
   ```

---

## **Prueba de Endpoints**

### **Rutas Disponibles**

| Método | Ruta                  | Descripción                           |
|--------|-----------------------|---------------------------------------|
| POST   | `/api/productos`       | Crear un nuevo producto               |
| GET    | `/api/productos`       | Obtener todos los productos           |
| GET    | `/api/productos/:id`   | Obtener un producto por su ID         |
| PUT    | `/api/productos/:id`   | Actualizar un producto existente      |
| DELETE | `/api/productos/:id`   | Eliminar un producto                  |

### **Ejemplo de Cuerpo para POST**
```json
{
    "nombre": "Monitor Full 144HZ 1ms",
    "descripcion": "Monitor de 24 pulgadas",
    "precio": 300.000,
    "stock": 15,
    "categoria": "Monitores"
}
```

---

## **Integrantes**

- Velazquez, Tobias Alejo.
- Juarez, Lautaro Andres Enrique.
- Lazarte, Lucas.
- Moyano Berrondo, Tahiel Lisandro.

---
