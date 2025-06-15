function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
        if(uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
        if(uiBHK[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
    var loading = document.getElementById("loading");
    var errorMessage = document.getElementById("errorMessage");

    // Hide previous results and errors
    estPrice.classList.remove("show");
    errorMessage.classList.remove("show");
    
    // Show loading
    loading.classList.add("show");

    // var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
    var url = "http://127.0.0.1:5000/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    })
    .done(function(data, status) {
        console.log(data.estimated_price);
        loading.classList.remove("show");
        
        // Update result with animation
        setTimeout(() => {
            estPrice.querySelector(".result-price").innerHTML = data.estimated_price.toString() + " Lakh";
            estPrice.classList.add("show");
        }, 300);
        
        console.log(status);
    })
    .fail(function() {
        loading.classList.remove("show");
        errorMessage.classList.add("show");
        console.log("Error occurred while fetching price estimate");
    });
}

function onPageLoad() {
    console.log("document loaded");
    // var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
    var url = "http://127.0.0.1:5000/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            
            // Add default option
            var defaultOpt = new Option("Choose a Location", "");
            defaultOpt.disabled = true;
            defaultOpt.selected = true;
            $('#uiLocations').append(defaultOpt);
            
            // Add location options
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    })
    .fail(function() {
        console.log("Failed to load locations");
    });
}

window.onload = onPageLoad;

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add input validation feedback
    const sqftInput = document.getElementById('uiSqft');
    
    sqftInput.addEventListener('input', function() {
        if (this.value < 1) {
            this.style.borderColor = '#e53e3e';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });

    // Add smooth transitions for radio buttons
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Add a small animation effect when selection changes
            this.nextElementSibling.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.nextElementSibling.style.transform = 'scale(1)';
            }, 150);
        });
    });
});