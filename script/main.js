// OUR SERVICES
const servicesTabs = document.querySelector(".services-list");

servicesTabs.addEventListener("click", (e) => {
    const clickedTab = e.target;
    if (!clickedTab.classList.contains("services-list-tab")) return;

    if (!clickedTab.classList.contains("active")) {
        document.querySelector(".services-list-tab.active").classList.remove("active");
        document.querySelector(".service-tab-article.visible").classList.remove("visible");

        const title = clickedTab.dataset.serviceTitle;
        clickedTab.classList.add("active");
        document.querySelector(`.service-tab-article[data-service-title='${title}']`).classList.add("visible");
    }
});

// Our Amazing Work
const filterTabs = document.querySelector(".filter-list");
const workImages = document.querySelector(".work-imgs");

const doFilteringWorkImages = () => {
    const filterName = filterTabs.querySelector(".filter-tab.active").dataset.filterName;

    const workImgItems = workImages.querySelectorAll(".work-img-wrapper");
    if (filterName === "all") {
        workImgItems.forEach((elem) => {
            if (elem.classList.contains("hidden")) {
                elem.classList.remove("hidden");
            }
        });
    } else {
        workImgItems.forEach((elem) => {
            const elemWorkCategory = elem.dataset.workCategory;
            if (elemWorkCategory === filterName && elem.classList.contains("hidden")) {
                elem.classList.remove("hidden");
            } else if (elemWorkCategory !== filterName && !elem.classList.contains("hidden")) {
                elem.classList.add("hidden");
            }
        });
    }
};

filterTabs.addEventListener("click", (e) => {
    const clickedFilter = e.target;
    if (!clickedFilter.classList.contains("filter-tab")) return;
    if (clickedFilter.classList.contains("active")) return;

    filterTabs.querySelector(".active").classList.remove("active");
    clickedFilter.classList.add("active");

    doFilteringWorkImages();
});

const makeHoverHTML = (filterCatgory) => {
    const categoryNames = {
        "graphic-design": "Graphic Design",
        "web-design": "Web Design",
        "landing-pages": "Landing Pages",
        wordpress: "Wordpress",
    };

    const categoryName = categoryNames[filterCatgory] ? categoryNames[filterCatgory] : " ";
    const htmlContent = `
        <div class="work-img-hover">
            <div class="work-img-hover-circles">
                <div class="img-hover-circle">
                <svg class="chain" width="15" height="15" viewBox="0 0 15 15" fill="#1FDAB5" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142
                         9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041
                          3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283
                          12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453
                          8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613
                          10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671
                          12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025
                          4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685
                          11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054
                          8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792
                          9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569
                          9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
                </svg>
                </div>
                <div class="img-hover-circle">
                    <div class="square"></div>
                </div>
            </div>
            <span class="work-img-text-colored upper">creative design</span>
            <span class="work-img-text-grey">${categoryName}</span>
        </div>
    `;
    return htmlContent;
};

workImages.querySelectorAll('.work-img-wrapper').forEach(elem => {
    const filterCategory = elem.dataset.workCategory;
    elem.insertAdjacentHTML('beforeend', makeHoverHTML(filterCategory));
});

// первоначальный вариант с генерацией всплывающего элемента при событиях mouseover
// и mouseout. Заменил на более быстрое и простое решение с обычным добавлением
// всплывающего элемента и стилями CSS на hover
// let currentHoveredElement = null;

// workImages.addEventListener("mouseover", (e) => {
//     const hoveredElem = e.target.closest(".work-img-wrapper");

//     if (currentHoveredElement === hoveredElem) return;
//     if (currentHoveredElement && currentHoveredElement !== hoveredElem) {
//         currentHoveredElement.querySelector(".work-img-hover").remove();
//     }
//     currentHoveredElement = hoveredElem;
//     if (!hoveredElem.querySelector(".work-img-hover")) {
//         hoveredElem.insertAdjacentHTML("beforeend", makeHoverHTML(hoveredElem.dataset.workCategory));
//     }
// });

// workImages.addEventListener("mouseout", (event) => {
//     if (event.relatedTarget === null && currentHoveredElement) {
//         currentHoveredElement.querySelector(".work-img-hover").remove();
//         currentHoveredElement = null;
//         return;
//     }
//     const relatedTarget = event.relatedTarget.closest(".work-img-wrapper");
//     if (relatedTarget !== null && relatedTarget === currentHoveredElement) return;
//     const leftIMG = event.target.closest(".work-img-wrapper");
//     leftIMG.querySelector(".work-img-hover").remove();
//     currentHoveredElement = null;
// });

const loadMoreWorkImgsBtn = document.querySelector("#work-imgs-load-btn");

const createWorkImgELEM = (number, category) => {
    const elem = document.createElement('div');
    elem.dataset.workCategory = category;
    elem.classList.add('work-img-wrapper');
    const categoryAdress = {
        "graphic-design": `./img/graphic-design/graphic-design0${number}.jpg`,
        "web-design": `./img/web-design/web-design${number}.jpg`,
        "landing-pages": `./img/landing-pages/landing-page${number}.jpg`,
        "wordpress": `./img/wordpress/wordpress0${number}.jpg`,
    };
    elem.innerHTML = `<img src="${categoryAdress[category]}" alt="image of work sample">`;
    elem.style.height = '0';
    elem.style.overflow = 'hidden';

    elem.insertAdjacentHTML('beforeend', makeHoverHTML(category));
    
    return elem;
};

const shuffleArray = array => {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
};

loadMoreWorkImgsBtn.addEventListener("click", (e) => {
    loadMoreWorkImgsBtn.disabled = true;
    const spinner = document.querySelector("#amazing-works-section-spinner");
    spinner.classList.toggle("hidden");
        
    const imgsList = [];
    const amountExistingImgs = workImages.querySelectorAll(".work-img-wrapper").length;
    const startIndex = amountExistingImgs > 12 ? 3 : 0;
    for (let i = 1; i <= 3; i++) {
        imgsList.push(createWorkImgELEM(startIndex + i, "graphic-design"));
        imgsList.push(createWorkImgELEM(startIndex + i, "web-design"));
        imgsList.push(createWorkImgELEM(startIndex + i, "landing-pages"));
        imgsList.push(createWorkImgELEM(startIndex + i, "wordpress"));
    }

    shuffleArray(imgsList);

    imgsList.forEach((elem) => {
        workImages.insertAdjacentElement ("beforeend", elem);
    });

    setTimeout(() => {
        spinner.classList.toggle("hidden");

        imgsList.forEach(elem => {
            elem.style.height = '';
        });
        
        const filterName = filterTabs.querySelector(".filter-tab.active").dataset.filterName;

        if (filterName !== "all") {
            doFilteringWorkImages();
        }

        loadMoreWorkImgsBtn.disabled = false;
        if (startIndex) {
            loadMoreWorkImgsBtn.remove();
        }
    }, 2000);
});

// WHAT PEOPLE SAY SECTION

const scrollToRightBtn = document.querySelector("#scroll-right-arrow");
const scrollToLeftBtn = document.querySelector("#scroll-left-arrow");
const smallPhotosBlock = document.querySelector(".carousel-photo-wrapper");
const quotesWrapper = document.querySelector(".persons-quotes-wrapper");
let currentQuoteBlock = quotesWrapper.querySelector(".person-quote-block:not(.hidden-to-left, .hidden-to-right)");
let currentCarouselPhoto = document.querySelector(".carousel-photo.active");

scrollToRightBtn.addEventListener("click", (e) => {
    if (!currentQuoteBlock.nextElementSibling) return;
    currentQuoteBlock.classList.add("hidden-to-left");
    currentQuoteBlock = currentQuoteBlock.nextElementSibling;
    currentQuoteBlock.style.zIndex = "1";
    currentQuoteBlock.classList.remove("hidden-to-right");

    currentCarouselPhoto.classList.remove("active");
    currentCarouselPhoto = currentCarouselPhoto.nextElementSibling;
    currentCarouselPhoto.classList.add("active");
});

scrollToLeftBtn.addEventListener("click", (e) => {
    if (!currentQuoteBlock.previousElementSibling) return;
    currentQuoteBlock.classList.add("hidden-to-right");
    currentQuoteBlock = currentQuoteBlock.previousElementSibling;
    currentQuoteBlock.style.zIndex = "1";
    currentQuoteBlock.classList.remove("hidden-to-left");

    currentCarouselPhoto.classList.remove("active");
    currentCarouselPhoto = currentCarouselPhoto.previousElementSibling;
    currentCarouselPhoto.classList.add("active");
});

smallPhotosBlock.addEventListener("click", (e) => {
    if (!(e.target.tagName === "IMG" || e.target.classList.contains("carousel-photo"))) {
        return;
    }

    const target = e.target.closest(".carousel-photo");

    if (target.classList.contains("active")) return;

    const personName = target.dataset.personName;
    currentCarouselPhoto.classList.remove("active");
    target.classList.add("active");
    currentCarouselPhoto = target;

    const quoteBlockToShow = quotesWrapper.querySelector(`.person-quote-block[data-person-name=${personName}]`);
    if (quoteBlockToShow.classList.contains("hidden-to-left")) {
        currentQuoteBlock.classList.add("hidden-to-right");
        let tempElem = currentQuoteBlock.previousElementSibling;
        while (tempElem !== quoteBlockToShow) {
            tempElem.style.zIndex = "-1";
            tempElem.classList.remove("hidden-to-left");
            tempElem.classList.add("hidden-to-right");
            tempElem = tempElem.previousElementSibling;
        }
        quoteBlockToShow.style.zIndex = "1";
        quoteBlockToShow.classList.remove("hidden-to-left");
    } else {
        currentQuoteBlock.classList.add("hidden-to-left");
        let tempElem = currentQuoteBlock.nextElementSibling;
        while (tempElem !== quoteBlockToShow) {
            tempElem.style.zIndex = "-1";
            tempElem.classList.remove("hidden-to-right");
            tempElem.classList.add("hidden-to-left");
            tempElem = tempElem.nextElementSibling;
        }
        quoteBlockToShow.style.zIndex = "1";
        quoteBlockToShow.classList.remove("hidden-to-right");
    }
    currentQuoteBlock = quoteBlockToShow;
});


// GALLERY OF BEST IMAGES
const loadGalleryBtn = document.querySelector('#gallery-load-btn');
const galleryImgs = document.querySelector('.best-imgs-wrapper');


loadGalleryBtn.addEventListener('click', e => {
    loadGalleryBtn.disabled = true;
    const spinner = document.querySelector('#gallery-section-spinner');
    spinner.classList.remove('hidden');

    const amountPictures = galleryImgs.querySelectorAll('.best-img-item').length;
    const startIndex = amountPictures > 8 ? 12 : 0;
    const elemsArr = [];

    for (let i = 1; i <= 12; i++) {
        const imgElem = document.createElement('div');
        imgElem.innerHTML = `<img src="./img/07-best-images/additional-imgs/${startIndex + i}-photo.jpg"
                                alt="photo sample">`
        imgElem.classList.add('best-img-item');
        imgElem.style.height = '0';
        imgElem.style.overflow = 'hidden';
        elemsArr.push(imgElem);
    }

    shuffleArray(elemsArr);

    elemsArr.forEach(elem => {
        galleryImgs.insertAdjacentElement('beforeend', elem);
    })

    setTimeout(() => {
        elemsArr.forEach(elem => {
            elem.style.height = '';
        });

        masonryMain.appended(elemsArr);
        
        imagesLoaded( elemsArr ).on( 'progress', function() {
            // layout Masonry after each image loads
            masonryMain.layout();
        });

          if (startIndex) {
              loadGalleryBtn.remove();
          } else {
              loadGalleryBtn.disabled = false;
          }
          
          spinner.classList.add('hidden');

    }, 2000)
})

