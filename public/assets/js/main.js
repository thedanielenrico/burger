$(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();

        let newBurger = $("#newBurgerName").val().trim();
        if(newBurger.length > 0){
            
            $.post("/api/burgers/", {newBurger}).then(
                function () {
                    location.reload();
                }
            )

        }
    })
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devoured = $(this).data("devour");

        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
          }).then(
            function () {

              location.reload();
            }
          );
    })
});