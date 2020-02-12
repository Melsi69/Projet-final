$(document).ready( function () {
    var table = $('#example').DataTable();
  } );
  
  $('input:checkbox').on('change', function () {
      var stats = $('input:checkbox[name="statut"]:checked').map(function() {
          return this.value;
      }).get().join('|');
      $('#example').DataTable().column(2).search(stats, true, false, false).draw(false);
  });