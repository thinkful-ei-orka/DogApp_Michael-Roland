function handleSubmit() { $('#dogForm').on('click',
  '#js-dogButton', event => { 
    event.preventDefault();
    let breed = $('#dogInput').val().toLowerCase();
    getDogImage(breed);
  });
}

function displayResults(responseJson) { 
    $('#dogPhotos').append($(`<img src="${responseJson.message}" class="results-img">`));
}

function getDogImage(str) { 
    fetch(`https://dog.ceo/api/breed/${str}/images/random`)
.then(response => response.json()) 
.then(responseJson => displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.')); }

function handleApp(){
    handleSubmit();
}
$(handleApp);
