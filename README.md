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

* (stampo dinamicamente le miniature in side con un ciclo v-for)

* sposto le funzioni create precedentemente nei methods di App cercando di mantenerne adatto il funzionamento

* ?proseguire dopo