function handleSubmit() { $('#dogForm').on('click',
    '#js-dogButton', event => { event.preventDefault();
        const count = $("#dogInput").val();
        console.log(count);
    }) }
    function displayResults(responseJson) { console.log(responseJson);
        //replace the existing image with the new one
        $('#dogImg').replaceWith( `<img src="${responseJson.message}" class="results-img">` )
        //display the results section
        $('.results').removeClass('hidden'); }


function getDogImage() { fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json()) 
.then(responseJson => displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.')); }


$(handleSubmit);
$(getDogImage);
