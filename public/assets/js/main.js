$(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();

        let newBurger = $("#newBurgerName").val().trim();

    
        $.post("/api/burgers/", {newBurger}).then(
            function () {
                console.log("new burger dude");
                location.reload();
            }
        )

    })
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        // console.log("Change devour" + $(this).data("id"));
        var id = $(this).data("id");
        var devoured = $(this).data("devour");
        
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
          }).then(
            function () {
              console.log("changed burger devour to", devoured);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })
    $(".delBurger").on("click", function (event) {
        event.preventDefault();
        console.log("Del" + $(this).data("id"))
    })
});