## Instrucciones

  - Rutas:

  /series -> listaSeries  / cardSerie ✅
  
  /serie/IDSERIE -> DetalleSerie ✅

  1 - Creación de rutas y componentes (de momento descritos, a lo mejor creamos más). ✅

 2 - ¿Necesitamos interfaces ? ¿Dónde las genero? ¿Como los relaciono con los datos? ✅

   3 - Generamos un servicio series con un metodo que nos recupere todas las series.  ✅

   4 - En la listaSeries recuperamos todas las series y las mostramos de manera BONITA.  ✅


/serie/8
/serie/1
/serie/3

Voy a cargar DetalleSeries 
 
  1 - Recuperar el valor de la ruta variable URL (ActivatedRoute)  ✅

    2 - Crear en el servicio un metodo que me retorne UNA UNICA serie por ID. (getById)  ✅

    3 - Dentro del detalle mostrar dicha serie con la maquetacion que querais.  ✅

   4 - Desde listado de series poner un boton que nos permita navegar hasta al ruta de series por id, cada card tendra su boton y su id.  ✅

  5 - Crear componente temporadas, con texto plano y generar un par de botones que permitan navegar entre temporas y personajes dentro del detalle serie. (rutas hijas) ✅

  6 - crear un servicio para personajes ✅
  7 - capturar el id de la serie en vista personajes ✅ y vista temporadas. 
  8 - hacer una funcion en el servicio de personajes que me devuelva los personajes de una serie por idserie ✅
  9 - hacer una funcion que me devuelva las temporadas de la serie piendolo al servicio de series. ✅
  10 - pintar los resultados dentro de los componentes.  ✅

  11 - quiero que dentro de la vista de series hagais dos filtros
           1 - por rating por puntuacion. ✅
           2 - buscar nombre de serie ✅
      - trabajaran contra el servicio de series
                - getByRating
                - getByTitle

      - controlar que si un filtro no devuelve nada salga un mensaje de no hay series   ✅
