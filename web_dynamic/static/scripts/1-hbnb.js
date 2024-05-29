$(document).ready(function () {
    const nameAmenity = [];
    $('input.amenity-checkbox').click(function () {
      const amenityName = $(this).attr('data-name');
      if ($(this).is(":checked")) {
        nameAmenity.push(amenityName);
      } else {
        const nameIndex = nameAmenity.indexOf(amenityName);
        if (nameIndex > -1) {
          nameAmenity.splice(nameIndex, 1);
        }
      }
      $('.amenities h4').text(nameAmenity.join(', '));
    });
  });