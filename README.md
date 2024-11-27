
# TFI MongoDB NoSQL

Este proyecto es una aplicación backend para la gestión de productos, diseñada como parte de la materia **Base de Datos**. Utiliza **MongoDB** como base de datos y está desarrollado con **Node.js** y **Express**.

---

## **Características del Proyecto**

- Operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la colección `productos`.
- Conexión a una base de datos MongoDB local (`dbMarket`).

---

## **Requisitos Previos**

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes:

1. **Node.js** (versión 16 o superior) [Descargar Node.js](https://nodejs.org/)

   
2. **MongoDB** (Base de datos local) [Instalar MongoDB](https://www.mongodb.com/trydownloadcommunity)

3. **Thunder Client** o cualquier cliente REST para probar los endpoints.

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
   npm install express mongoose dotenv
   ```

---

## **Configuración**

### Archivo .env

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```plaintext
MONGO_URI=mongodb://localhost:27017/dbMarket
PORT=5000
```
### Conexión a la Base de Datos

Este proyecto utiliza una base de datos MongoDB local. Asegúrate de que el servicio de MongoDB esté corriendo. Por defecto, se conecta a:
```plaintext
mongodb://localhost:27017/dbMarket
```
---

## **Ejecución del Proyecto**

1. Inicia el servidor de MongoDB:
   ```bash
   mongod
   ```

2. Corre la aplicación:
   ```bash
   node server.js
   ```

3. El servidor estará disponible en:
   ```plaintext
   http://localhost:5000
   ```

---

## **Prueba de Endpoints**

### **Rutas Disponibles**

| Método | Ruta                  | Descripción                           |
|--------|-----------------------|---------------------------------------|
| POST   | `/api/productos`      | Crear un nuevo producto               |
| GET    | `/api/productos`      | Obtener todos los productos           |
| GET    | `/api/productos/:id`  | Obtener un producto por su ID         |
| PUT    | `/api/productos/:id`  | Actualizar un producto existente      |
| DELETE | `/api/productos/:id`  | Eliminar un producto                  |

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

## **Importar la Colección `productos` en MongoDB Compass**

Sigue estos pasos para importar la colección `productos` al proyecto:

1. **Abrir MongoDB Compass**:
   - Inicia la aplicación MongoDB Compass.
   - Conéctate al servidor local usando la siguiente URI:
     ```plaintext
     mongodb://localhost:27017
     ```

2. **Seleccionar la base de datos**:
   - Busca o crea la base de datos `dbMarket`.
   - Selecciona la base de datos y haz clic en `Add Collection` para asegurarte de que exista la colección `productos`.

3. **Importar el archivo JSON**:
   - Haz clic en la colección `productos`.
   - Selecciona el botón `Import Data` ubicado en la parte superior derecha.
   - En la ventana emergente:
     - Selecciona el archivo JSON proporcionado: `dbMarket.productos.json`.
     - Asegúrate de que el formato sea `JSON`.
     - Haz clic en `Import`.

4. **Verificar los datos importados**:
   - Una vez completada la importación, podrás ver los documentos en la colección `productos`.

### Archivo Proporcionado
[Colección(Google Drive Link)] (https://drive.google.com/file/d/17eemWl9eStKZpz-6gzOwhgMwzsxiQXhz/view?usp=sharing)

---

## **Integrantes**

- Velazquez, Tobias Alejo.
- Juarez, Lautaro Andres Enrique.
- Lazarte, Lucas.
- Moyano Berrondo, Tahiel Lisandro.
