
<script>
    document.addEventListener('DOMContentLoaded', function () {
        var loginBtn = document.getElementById('loginBtn');
        var navigationContainer = document.querySelector('.navigation-container');

        // Attach a click event listener to the login button
        loginBtn.addEventListener('click', function () {
            // Toggle the visibility of the navigation container
            navigationContainer.classList.toggle('hidden');
        });
    });
</script>
