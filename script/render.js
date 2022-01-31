const newsDescriptionHTML = `
    <div class="news-date">
        <span class="news-date-day">12</span>
        <span class="news-date-month">Feb</span>
    </div>
    <div class="news-description">
        <p class="news-name">Amazing Blog Post</p>
        <p class="news-author">By admin</p>
        <p class="news-comments">2 comment</p>
    </div>
`;
document.querySelectorAll(".news-item-link").forEach((elem) => {
    elem.insertAdjacentHTML("beforeend", newsDescriptionHTML);
});

///////////////////////////////////////////////////////////////////////////

const masonryMainElem = document.querySelector(".best-imgs-wrapper");

const masonryMain = new Masonry(masonryMainElem, {
    itemSelector: ".best-img-item",
    columnWidth: 372,
    gutter: 22,
});


imagesLoaded( masonryMainElem ).on( 'progress', function() {
    // layout Masonry after each image loads
    masonryMain.layout();
});
