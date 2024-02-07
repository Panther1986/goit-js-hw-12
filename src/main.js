import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import GalerryApiService from "./gallery-service";

const inputElem = document.querySelector('.search-input');
const formElem = document.querySelector('.search-form');
const imagesContainer = document.querySelector('.gallery');
const divElem = document.querySelector('div');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

const galerryApiService = new GalerryApiService();


const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  divElem.append(loader);
}

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

formElem.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    showLoader();
    imagesContainer.innerHTML = "";
    e.preventDefault();
    galerryApiService.userQuery = e.currentTarget.elements.searchQuery.value;

    galerryApiService.fetchArticles();
}

function onLoadMore() {
galerryApiService.fetchArticles();
}





const options = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionSelector: "img",
  captionDelay: 250,
};
