# Proxpace
## Installation
local folder run command:  
`git clone https://github.com/Texaco360/Proxpace.git`  
\
cd into the directory. Then type:  
`npm install`
## Branches
### Workflow diagram 
\
\
![workflow](https://github.com/Texaco360/Proxpace/blob/main/Workflow.drawio.png) 
### Workflow uitleg
Elk **SCRUM team** maakt op de dev branch een pagina branch aan.  
bvb :  
`git chechout dev`  
`git branch shoppagina`

lees verderop hoe je eeb html pagina aan project toevoegt.

Vanop de gemaakte pagina branch maat elk **teamlid** zijn eigen branches aan.\
bvb :\
`git checkout shoppagina`\
`git branch sidebar`\
`git checkout sidebar`  
\
start met coderen !

## Gebruik van de themekit
### SCSS

Schrijf css die uniek is voor de pagina in pagina_naam.sccs.\
SCSS die ook op andere pagina's gebruikt wordt kan je plaatsen in de _global.scss file.

type `npm run sass-dev` om de scss te compileren naar `style.min.css`

### Een extra HTML pagina toevoegen.

1) Voeg een niewe html pagina toe in de project folder.
plaats in de header de volgende css-link:
` <link rel="stylesheet" href="assets/css/style.min.css">`

2) juist boven de afsluitende body-tag voeg je volgend script toe:
`<script src="./assets/js/bundle.min.js"></script>`

3) voorzie ook een main tag en plaats daarop een klasse met dezefde naam als de pagina .paginanaam class:\
    \<main class="pagename"\>\
      ...\
    \</main\>

4) maak een nieuwe scss file aan: _paginanaam.scss en voeg bovenstaande klasse toe :\

    .paginanaam \{

      \}

5) open nu style.scss en voeg onderaan volgende toe:\
`@import "paginanaam";`

### Theming .

#### ThemeKit
Op de Themekit.html kun je alle bootstrap elementen terugvinden op een pagina.

Het bootstrap thema kan aangepast worden door de bootstrap variabelen toe te voegen aan _variables.scss.
In het _custom-maps.scss bestand kunnen eigen maps en mixins aangemaakt worden
In de _fonts.scss file kunnen de fonts ingeladen worden. Ook om het bootstrap font te vervangen.
