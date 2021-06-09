# proyecto-paul-cocina
Es una página pensada para un cocinero llamado Paul, quien realiza sus recetas únicas y las comparte en su página web. Con los problemas surgidos de la pandemia en 2020, Paul decidió ampliar su negocio a nuevos frentes y incorporó la posibilidad de comprar los ingredientes de cada receta a través de una API de pagos de MercadoLibre para que cada cliente pruebe las recetas de Paul en su casa sin tener los problemas de no contar con la totalidad de los ingredientes o tener que sustituirlos. Éste proyecto se complementa con el siguiente enlace: https://github.com/Mac-Kett/PaulCocinaBack

# Casos de uso - Listado de funcionalidades

Como Usuario necesito autenticarme para poder ingresar al sistema.
Como Admin necesito poder gestionar las Recetas, con la finalidad de darles de alta, baja o modificarlos.
Como Usuario, necesito poder agregar recetas al carrito de compras, con la finalidad de poder comprar.
Como Admin necesito poder procesar la compra con la finalidad de realizarla o cancelarla.

# Listado de actores/roles

Admin
Clientes

# Listado de entidades principales

Pedidos
Recetas
Ingredientes

## Para tener nuestro proyecto en su computadora
```
clone proyect desde GitHub
```

## Luego, desde el IDE, se instalan las dependencias con el siguiente comando
```
npm install
```

### Para compilarlo
```
npm run serve
```

# Listado de endpoints de la API

/users/
/users/:id
/recetas/
/recetas/:id
/recetas//byCategory/:categoria'
/pedidos/
