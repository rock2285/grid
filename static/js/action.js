
function fill(data)
{
  for (i = 0; i<3; i++)
  {
    for (j=0; j<3; j++)
    {
      tid = "r"+i.toString() + "c" + j.toString();
      $("#"+tid).html(data.grid[tid]);
    }
  }
}

$(function() //ready function
{
  //make upper left cell first selected
  id = "r0c0";
  $("#"+id).css("background-color","green");
  $.get(
    "action/",
    {},
    fill
    )

  $(".cell").bind //define the behavior of clicking on a cell
  (
    "click",
    function(e)
    {
      id = e.target.id
      $(".cell").css("background-color","transparent");
      $("#"+e.target.id).css("background-color","green");
    }
  )

  $( "#send" ).bind( //define the behavior of the send button
    "click", 
    function() 
    {
      $.post(
        "action/",
        {"id":id,"offset":$("#offset").val()},
        fill
        )
    }
  );
}
)

