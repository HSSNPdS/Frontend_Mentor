function toggleShareOptions(){
  document
  .querySelector('share-button')
  .addEventListener("click", function() {
    document
      .querySelector('.share-options')
      .classList.toggle('hide')
  })

  console.log('TOma');
}
