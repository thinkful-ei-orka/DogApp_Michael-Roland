function handleSubmit() { $('#dogForm').on('click',
  '#js-dogButton', event => { 
    event.preventDefault();
    let count = $('#dogInput').val();
    for(count; count > 0; count--){
        getDogImage();
    }
  });
}
function displayResults(responseJson) { 
    console.log(Object.entries(responseJson));
    //replace the existing image with the new one
    $('#dogPhotos').append($(`<img src="${responseJson.message}" class="results-img">`));
}

function getDogImage() { 
    fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json()) 
.then(responseJson => displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.')); }

function handleApp(){
    handleSubmit();
}
$(handleApp);
