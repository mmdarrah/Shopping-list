$(document).ready(function() {
  let $item = $("#newItem");
  let $btn = $("#addBtn");
  let $table = $("#table");
  let $msg = $("#message");
  let $delBtn = $("#delBtn");

  $btn.click(addItem);




  /* Press enter to add */
  $item.keypress(function(e) {
    if (e.which == 13) {
      addItem();
      /* alert("test"); */
    }
  });


  /* Add items */
  function addItem() {
    let $temp = $item.val();
    if ($temp !== "") {
      $table.prepend(
        '<tr><td><input type="checkbox" name="check" id ="box">' +
          $temp +
          '<span><i class="fas fa-trash-alt"></i></span></td></tr>'
      );
      $item.val("");
    } else {    // Empty input meg
      $msg.show(500).fadeOut(3000);
    }
  }


  /* Delete singel item */

  $table.on("click", "span", function() {
    $(this)
      .parent()
      .fadeOut(500, function() {
        $(this).remove();
      });
  });

  /* Delete all items */

  $delBtn.click("span", function() {
    $($table).fadeOut(500, function() {
      $(this).remove();
    });
  });


  /* Add style item while checkbox is checked */
  
  $($table).change("span", function() {
    $(this).toggleClass("strike");
  });




}); //Ready
