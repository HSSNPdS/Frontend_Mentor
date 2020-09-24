function toggleShareOptions(){
  document
  .querySelector('body .share-button')
  .addEventListener("click", function() {
    document
      .querySelector('.share-options')
      .classList.toggle('hide')
  })

}
