
$(document).ready(function() {

  let removedSkills = [];

  $('#skills tbody').on('click', 'button', function() {
    let row = $(this).closest('tr');
    removedSkills.push(row[0].outerHTML);
    row.fadeOut(500, function() {
      row.remove();
    });
    $('#restoreHomes').removeAttr('disabled');
  });

  $('#addSkill').click(function(event){
      let newSkill = $('#entry').val();
      let newRow = `<tr>
          <td style="border:none;"><button class="remove">X</button></td>
          <td style="border:none;">${newSkill}</td>
        </tr>`;
      $('#skills tbody').append(newRow);
  });

})