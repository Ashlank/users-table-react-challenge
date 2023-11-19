# Prueba técnica React

Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).

Desafío tomado de [Midudev](https://github.com/midudev)

## Descripción

Se muestra una tabla de usuarios con la posibilidad de eliminarlos y la opción de aplicar filtros a la tabla.

### Características

- Los datos se obtienen de [RANDOMUSER](https://randomuser.me/)
- Posibilidad de colorear la tabla
- Opción de ordenar por país
- Capacidad de filtrar por país utilizando un input
- Posee la capacidad de ordenar por columnas al clickear el encabezado de la misma
- Se permite eliminar filas de la tabla
- Permite restaurar el estado original de la tabla, es decir, se recuperan las filas eliminadas
- Se utiliza el hook useMemo para la optimización del filtrado y ordenamiento
- Los diferentes ordenamientos funcionan también para los resultados del filtrado
- Implementa un infinite scroll para obtener mas usuarios al llegar al final de la tabla

### Deploy

Puede verse el deploy [acá](https://users-table-react-challenge.vercel.app/)
