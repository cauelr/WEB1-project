let intervalScroll;
let curTab = 0;
let maxTab = 2;
let minTab = 0;

const interval = setInterval(() => {
  const carousel = document.getElementById("carousel-container");
  if (!carousel) return;
  renderImgs(carousel);
}, 500);

function renderImgs(carousel) {
  const containerWidth = carousel.clientWidth;
  const imgWidth = containerWidth / 3;

  for (let i = 0; i < 9; i++) {
    const newImg = document.createElement("img");
    const newImgContainer = document.createElement("div");
    newImg.src = `img/carousel/img${i + 1}.png`;
    newImg.alt = `img${i + 1}`;

    newImg.style.width = `100%`;
    newImg.style.height = `100%`;

    newImgContainer.className = "transition-all duration-300 ease-out hover:scale-110";
    newImgContainer.style.minWidth = `${imgWidth}px`;
    newImgContainer.style.height = `100%`;
    newImgContainer.appendChild(newImg);
    newImgContainer.id = "carousel-img";

    carousel.appendChild(newImgContainer);
  }
  clearInterval(interval);
  autoScrollTab();
}

function manualScroll(tab) {
    clearInterval(intervalScroll);
    scrollToTab(tab);

    curTab = tab;
    autoScrollTab();
}

function scrollToTab(tab){
    const container = document.getElementById('carousel-container');
    const firstEl = container.querySelectorAll('#carousel-img')[0];
    let step = container.clientWidth;    

    firstEl.style.marginLeft = `${step * tab * -1}px`;
    changeTab(tab);
}

function autoScrollTab(){
    intervalScroll = setInterval (() => {
        scrollToTab(curTab);
        curTab++;

        if(curTab > maxTab) curTab = minTab;
    },3500);
}

function changeTab(tab){
    const container = document.getElementById('manual-nav');
    const childs = [...container.getElementsByTagName("label")];

    childs.forEach((element, index) => {
        if(index === tab) {
            element.classList.add("bg-white");
        }else{
            element.classList.remove("bg-white");
        }
    });
}

