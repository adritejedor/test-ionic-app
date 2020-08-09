# test-ionic-app
Testing ionic 5 app

# Tests
- Se ha añadido un test de integración para el servicio "card-controller.service.ts" donde se espera que se reciba el listado de objetos card.
- Se ha añadido un test unitario para la respuesta del servicio donde se espera recibir dos positivos en la lista que correspondan con el id 0 y 432.

# Componentes
Se han creado dos componentes: 
- El componente image-card que es el contenedor en el cual está el contenido de las cards.
- El componente key-value-text el cual genera un texto con título que está contenido dentro del componente image-card.
- Se han añadido componentes nativos de ionic como (infinite-scroll y ion-searchbar).

# Pages
La page home es en la cual contiene el listado de cards y el filtro.
El filtro puede filtrar tanto por id como por texto de la card.

# Services
La lógica de la página home está contenida en un servicio llamado "home.service.ts" en el cual está el manejo del filtro.
El servicio "card-controller.service.ts" genera el listado de 4000 objetos y los retorna mediante un observable de forma reactiva usando la librería RxJs. 

