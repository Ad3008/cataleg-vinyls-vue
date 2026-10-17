🎵 Catàleg de Vinils
1. Temàtica i descripció de l'aplicació

Aquesta aplicació és un catàleg de vinils desenvolupat amb Vue 3 i Firebase. Permet consultar una col·lecció de discos de vinil mostrant informació com el títol, l'artista, el gènere musical i la imatge de portada. Les dades s'emmagatzemen a Cloud Firestore i l'aplicació està desplegada a Firebase Hosting.

2. Instal·lació del projecte

Clonar el repositori GitHub i instal·lar les dependències necessàries amb la comanda:

npm install

3. Execució en mode desenvolupament

Per iniciar el servidor de desenvolupament executar:

npm run dev

Després obrir el navegador a l'adreça local indicada per Vite.

4. Generació de la versió de producció

Per generar la versió optimitzada del projecte executar:

npm run build

Els fitxers resultants es generen dins la carpeta dist.

5. Desplegament

Per publicar l'aplicació a Firebase Hosting executar:

firebase deploy

L'aplicació quedarà disponible a l'URL proporcionada per Firebase.

6. Tecnologies utilitzades
Vue 3
Vite
JavaScript
HTML5
CSS3
Firebase
Cloud Firestore
Firebase Hosting
7. Configuració i regles de Firestore

El projecte utilitza el fitxer firestore.rules amb les següents regles de seguretat:

Lectura pública de les dades.
Escriptura bloquejada per als usuaris no autoritzats.

8. Relació dels components propis i la seva funció
- barra-navegacio.vue: Capçalera amb el menú de navegació entre vistes mitjançant RouterLink.
- targeta-vinyl.vue: Component que mostra la fitxa visual de cada disc de vinil.
- peu-pagina.vue: Peu de pàgina amb els crèdits d'autoria del projecte.

9. Exemple de comunicació amb props (Pare a Fill)
- Component pare: src/views/cataleg.vue
- Component fill: src/components/targeta-vinyl.vue
- Dades que es passen: El pare llegeix els vinils de Firestore i passa al fill les props declarades titol (String), artista (String), any (Number) i edicio (String).

10. Relació de les tres rutes (Vue Router)
- / (inici.vue): Pàgina de benvinguda i presentació amb un vinil destacat.
- /cataleg (cataleg.vue): Vista que carrega i mostra el catàleg de vinils des de Cloud Firestore.
- /sobre (sobreview.vue): Pàgina informativa sobre el projecte i l'equip de so.

11. Col·lecció de Firestore, camps i vista
- Col·lecció: vinyls
- Camps principals: Album name (string), Artist (string), Edition (string) i Year (int64/number).
- Vista que mostra les dades: src/views/cataleg.vue (ruta /cataleg).

12. Enllaç a la web publicada amb Firebase Hosting
https://cataleg-vinyls-vue.web.app
