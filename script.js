document.getElementsByTagName("head")[0].style.fontSize = "6vw";

function calculate_days(){
  var Date_in = moment(document.getElementById("date_in").value);
  var Date_out = moment(document.getElementById("date_out").value);
  var days = Date_out.diff(Date_in, 'days');
  return days;
}

function setDays(days){
  document.getElementById("days").value = days;
}

function calculate_cost(){
  var number_of_adults = document.getElementById("Number-of-adults").value;
  var cost = 150.00*number_of_adults*calculate_days();
  return cost;
}

function setCost(cost){
  document.getElementById("cost").value = cost;
}

function Submit() {
  
  var missingUname = setError ($('#username'), true);
  var missingFname = setError ($('#firstname'), true);
  var missingLname = setError ($('#lastname'), true);
  var missingPnum = setError ($('#phonenumber'), true);
  var missingFnum = setError ($('#faxnumber'), true);
  var missingEmail = setError ($('#email'), true);
  
  var cost = document.getElementById("cost").value;
  if(isNaN(cost) || cost === "") {
    displayError(this, " No cost was calculated.");
  }
  else if(cost < 0) {
    displayError(this, " Cost is negative.");
  }
  else if (missingUname == true || missingFname == true || missingLname == true || missingPnum == true || missingFnum == true || missingEmail == true) {
    displayError(this, " Text fields are empty.")
  }
  else {
    displaySuccess(this);
  }
}

function setError (element, iserror) {
  if (element != null) {
    if (iserror == false) {
      $(element[0]).parent().removeClass('has-error');  
      return false;
    }
    
    if (element[0].value === '') {
      $(element[0]).parent().addClass('has-error');
      return true;
    }
  }
 
   return false;
}


function Reset() {
  var elements = document.getElementsByClassName ("userInput");
 
  for (var i=0; i < elements.length;i++)
    elements[i].value = null;
  
  document.getElementById("Number-of-adults").selectedIndex=0;
  
  var radio_element = document.getElementsByName("priority");
  
  for(var i=0; i < radio_element.length; i++)
    radio_element[i].checked = false;
  
  setError ($('#username'), false);
  setError ($('#firstname'), false);
  setError ($('#lastname'), false);
  setError ($('#phonenumber'), false);
  setError ($('#faxnumber'), false);
  setError ($('#email'), false);
  
  displayMessage(this);
  
}


function displayMessage(element) {
 
   $('#toaster_message').html(`
                <div class="alert alert-info fade in" role="alert">
                    <button type="button" class="close close-alert"
                        data-dismiss="alert" aria-label="Close" aria-hidden="true">
                        <span>&times;</span>
                    </button><strong>Success:</strong> Fields were sucessfully cleared.
                </div>`);
 
  window.setTimeout(function() {
     $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(".alert").remove();
      });
    }, 4000);
}

function displayError(element, message) {
 
   $('#toaster_message').html(`
                <div class="alert alert-danger fade in" role="alert">
                    <button type="button" class="close close-alert"
                        data-dismiss="alert" aria-label="Close" aria-hidden="true">
                        <span>&times;</span>
                    </button><strong>Error:</strong>`+ message+`
                </div>`);
 
  window.setTimeout(function() {
     $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(".alert").remove();
      });
    }, 4000);
}

function displaySuccess(element) {
 
   $('#toaster_message').html(`
                <div class="alert alert-success fade in" role="alert">
                    <button type="button" class="close close-alert"
                        data-dismiss="alert" aria-label="Close" aria-hidden="true">
                        <span>&times;</span>
                    </button><strong>Success:</strong> Form was successfully submitted.
                </div>`);
 
  window.setTimeout(function() {
     $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(".alert").remove();
      });
    }, 4000);
}