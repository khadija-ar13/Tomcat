<script>
$(document).ready(function(){
    $('#carousel').slick({
        dots: true, // Affiche des indicateurs de pagination
        infinite: true, // Permet de faire défiler les images en boucle
        speed: 500, // Vitesse de transition en millisecondes
        slidesToShow: 1, // Nombre d'images à afficher à la fois
        slidesToScroll: 1 // Nombre d'images à faire défiler à la fois
    });
});
</script>
