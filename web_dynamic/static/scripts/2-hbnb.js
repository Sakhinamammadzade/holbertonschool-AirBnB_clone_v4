$(document).ready(function () {
  const nameAmenity = [];
  $('input:checkbox').click(function () {
    if ($(this).is(":checked")) {
      nameAmenity.push($(this).attr('data-name'));
    } else {
      const nameIndex = nameAmenity.indexOf($(this).attr('data-name'));
      nameAmenity.splice(nameIndex, 1);
    }
    $('.amenities h4').text(nameAmenity.join(', '));
  });
  $.getJSON('http://127.0.0.1:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});