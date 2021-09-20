
function renderHeader() {
    const header = document.querySelector('.header');

    const titlearea = document.createElement('div');
          titlearea.classList.add('titlearea')
    
    const title = document.createElement('p');
          title.classList.add('title');
          title.textContent = 'Green Space:';

    const phrase = document.createElement('p');
          phrase.classList.add('phrase');
          phrase.textContent = 'providing for the world';

    const weblogo = document.createElement('img');
          weblogo.classList.add('weblogo');
          weblogo.src = '/logo.png';
          
    const menutab = document.createElement('div');
          menutab.classList.add('menutab', 'material-icons', 'md-48');
          menutab.innerHTML = 'menu';
          menutab.addEventListener('click', () =>{
              displayMenu();
          })
          
    header.appendChild(weblogo);
    titlearea.appendChild(title);
    titlearea.appendChild(phrase);
    header.appendChild(titlearea);
    header.appendChild(menutab);
}
function renderPage(){
    const content = document.querySelector('.content')
    const backgroundimage = document.createElement('img');
    backgroundimage.classList.add('backgroundimage');
    backgroundimage.src = '/para.jpg';

    content.appendChild(backgroundimage);
}
renderHeader()
renderPage()

function displayMenu(){
    const menutab = document.querySelector('.menutab')
    menutab.innerHTML = '';
    
}

   
