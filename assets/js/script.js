// Sélectionne l'élement a partir de son id
var picture = document.getElementById('image1');
// Quand la souris est sur l'element
picture.onmouseover = function() {
  picture.src = 'assets/img/image2.jpg';
}
// Quand la souris n'est plus sur l'element
picture.onmouseout = function() {
  picture.src = 'assets/img/image1.jpg';
}
//this= l'element declencheur de dom/fait reference a l'objet globale
//[suite][this du dom]:
//dom: un interface, une API quie permet de manipuler...
