# Sit on chair workshop (workshop 01)
## developement branch

* Ten projekt jest próbą napisania strony web na podstawie zrzutu ekranu gotowego layoutu graficznego projektu.
* Wygląd, proporcje i wymiary poszczególnych elementów z zachowaniem skali 1:1 - praca z dodatkiem **PerfectPixel** do przeglądarki _Chrome_.
* Technologie wykorzystywane przy projekcie to **HTML**, **Sass(z nazewnictwem BEM) => CSS**, **Gulp**, **JavaScript**, w dalszej kolejności **RWD**.

* Projekt zautomatyzowany przy użyciu Gulp, instalacja Gulp:
1. Instalacja node.js z [node.js](http://nodejs.org)
1. Instalacja Gulp globalnie ```npm install -g gulp```
1. Instalacja paczek npm będąc w katalogu głównym projektu ```npm install```
1. W konsoli wpisać ```gulp sass``` (enter) i ```gulp watch``` (enter) aby mieć 	 kompilację z formatu .scss do .css i podgląd ew. błędów w konsoli (aby wyjść z _gulp watch_ -> ```ctrl+c``` w konsoli)
1. W katalogu głównym projektu są pliki potrzebne do działania Gulpa _"gulpfile.js"_ oraz _"package.json"_ odpowiedzialny za instalację zależności poprzez npm (```npm install```) i są one nie potrzebne do działania strony, tak jak plik _"README.md"_ i _"LICENSE"_ oraz katalog _"scss"_
