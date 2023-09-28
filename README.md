Vue Slide
===
## Consegna:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Al click su una thumb, visualizzare in grande l’immagine corrispondente
**Bonus:**
1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

## Mio svolgimento

* createApp
* inserisco nei data l'array di oggetti(immagini, descrizioni, titolo)

* stabilisco una struttura adatta su html (essenzialmente avrò un img a cui vario :src facendola cambiare al click dei btn next e prev)

* (stampo dinamicamente le miniature in side con un ciclo v-for, assegnandogli anche un index)

* quando index=counter la side img ha la classe active, e la mask con cui creo l'effetto scuro ha la classe d-none

* aggiungo un evento click alla side img : il counter assume il valore dell'index assegnato alla side img (in pratica cliccando l'immagine main corrisponderà alla side)

* aggiungo un set interval sfruttando le funzioni di scorrimento precedentemente create

* creo uno "switch" true/false che sarà regolato dal bottone di inversione per regolare la direzione dello scorrimento automatico.

* creo un altro "switch" true. All'hover del mouse sul quadrante principale diventerà false. Lo userò per regolare l'interruzione dello scorrimento automatico.