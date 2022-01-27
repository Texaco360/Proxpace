# Proxpace
## Installation
local folder run command:  
`git clone https://github.com/Texaco360/Proxpace.git`  
\
cd into the directory. Then type:  
`npm install`
## Branches
Elk **SCRUM team** maakt op de dev branch een pagina branch aan.  
bvb :  
`git chechout dev`  
`git branch blogpagina`

lees verderop hoe je eeb html pagina aan project toevoegt.

Vanop de gemaakte pagina branch maat elk **teamlid** zijn eigen branches aan.\
bvb :\
`git chechout blogpagina`\
`git branch sidebar`\
`git checkout sidebar`  
\
start met coderen !

## Usage
### SCSS

Write custom css that is unique for the page into the _pagename.sccs.\
SCSS that is used on other pages can be witten into de _global.scss file.

type `npm run sass-dev` to compile de sccs to the `style.min.css`

### Adding an extra HTML page.

1) Add a new html page to de project folder.
in the header add css-link:
` <link rel="stylesheet" href="assets/css/style.min.css">`

2) in above the closing body tag add javacript link:
`<script src="./assets/js/bundle.min.js"></script>`

3) in the main tag add a .pagename class:\
    \<main class="pagename"\>\
      ...\
    \</main\>

4) create new scss file: _newPagename.scss and add:\

    .pagename \{

      \}

5) open style.scss and at the bottom of the file add:\
`@import "newPagename";`

### Theming .

#### ThemeKit
Open Themekit.html in the browser to overview all bootstrap elements.

The theme can be overwritten by adding or changing the bootstrap variables in the _variables.scss.
Custom maps can be made in the _custom-maps.scss file.
Add fonts in the the _fonts.scss file.
