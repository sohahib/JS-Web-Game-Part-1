function newImage(img, src,  position, left, bottom){
     let character = document.createElement(img)
    character.src = src
    character.style.position = position
    character.style.left = left
    character.style.bottom = bottom
    document.body.append(character)
}
 newImage('img', 'assets/green-character.gif', 'fixed', '100px', '100px');
 newImage('img', './assets/pine-tree.png', 'fixed', '450px', '200px');
 newImage('img', './assets/tree.png', 'fixed', '200px', '300px');
 newImage('img', './assets/pillar.png', 'fixed', '350px', '100px');
 newImage('img', 'assets/crate.png', 'fixed', '150px', '200px');
 newImage('img', 'assets/well.png', 'fixed', '500px', '425px');

 function newItem(img, src, position, left, bottom){
     let sword = document.createElement(img)
     sword.src = src;
     sword.style.position = position;
     sword.style.left = left;
     sword.style.bottom = bottom;
     document.body.append(sword)

     sword.addEventListener('dblclick', function(){
         sword.remove();
     })
 }

newItem('img', 'assets/sword.png', 'fixed', '500px', '405px');
newItem('img', 'assets/shield.png', 'fixed', '165px', '185px');
newItem('img', 'assets/staff.png', 'fixed', '600px', '100px');

function backgroundImage(url, position, bottom, width, height, top){
  let image =   document.createElement('img')
  image.src =  url;
  image.style.position = position;
  image.style.bottom = bottom;
  image.style.top = top;
  document.body.append(image);
  image.style.width = width;
  image.style.height = height;
  image.style.zIndex='-1'
}
console.log(window.innerWidth)
console.log(window.innerHeight)
backgroundImage('assets/grass.png', 'absolute', 0, '1920px', '736px')
backgroundImage('assets/sky.png', 'absolute', '200px', '1920px', '200px',0)






