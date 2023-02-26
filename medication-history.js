// Define a function to retrieve a patient's medication history from the EMR system
function getMedicationHistory(patientId) {
  // Use an AJAX request to retrieve the medication history data from the server
  $.ajax({
    url: '/api/medication-history',
    data: { patientId: patientId },
    success: function(data) {
      // Once the data is retrieved, update the UI to display the medication history
      updateMedicationHistory(data);
    },
    error: function() {
      // If an error occurs, display a message to the user
      showError('Error retrieving medication history');
    }
  });
}

// Define a function to update the UI with the medication history data
function updateMedicationHistory(data) {
  // Loop through the medication history data and create a table to display it
  var tableHtml = '<table>';
  for (var i = 0; i < data.length; i++) {
    tableHtml += '<tr><td>' + data[i].name + '</td><td>' + data[i].dose + '</td><td>' + data[i].route + '</td></tr>';
  }
  tableHtml += '</table>';

  // Update the UI to display the medication history table
  $('#medication-history').html(tableHtml);
}
