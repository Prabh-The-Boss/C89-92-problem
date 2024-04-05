function a_U()
{
    player1_name = document.getElementById("p1_n_i").value ;
    player2_name = document.getElementById("p2_n_i").value ;

        localStorage.setItem("p1_n", player1_name);
        localStorage.setItem("p2_n", player2_name);

        window.location = "game_page.html"
}