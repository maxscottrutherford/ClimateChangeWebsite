<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AOCN: Representatives</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/60c1ad44c1.js" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar">
        <!-- LOGO -->
        <div class="logo">
            <a class = "logo" href="index.html"><i class="fa-solid fa-earth-americas">AOCN</i></a>
        </div>

        <!-- NAVIGATION MENU -->
        <ul class="nav-links">

            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776</label>

            <!-- NAVIGATION MENUS -->
            <div class="menu">

                <li><a href="index.html">Home</a></li>
                <li><a href="background.html">Background</a></li>

                <li class="services">
                    <a href="solutions.html">Solutions</a>

                    <!-- DROPDOWN MENU -->
                    <ul class="dropdown">
                        <li><a href="involvement.html">Get Involved</a></li>
                        <li><a href="representatives.html">Speak to Local Reps</a></li>
                        <li><a href="inform.html">Inform Others</a></li>
                        <li><a href="vote.html">Vote</a></li>
                    </ul>

                </li>

                <li><a href="about.html">About</a></li>
            </div>
        </ul>
    </nav>

    <div class="rep__container">
        <div class="rep__title">
            <h1>Speak to a Local Representative</h1>
        </div>
        <div class="rep__image">
            <img src="images/congress.jpg" alt="Congress" width="300em">
        </div>
        <div class="rep__text">
            <p>
                Getting in touch with a local congressperson is easier than most people think, especially in today's
                world where we have almost constant access to the internet. There's many different tools online that
                allow you to find out who your local congressperson is just by providing your zip code. Sending your
                local representatives letters, talking about the climate issue and how we need to pay more attention to it, 
                will hopefully cause them to raise the issue up in a future Congress session.
            </p>
        </div>
        <div class="rep__links">
            <a href="https://ziplook.house.gov/htbin/findrep_house?ZIP=" target="_blank">
                <button class="involve__button">Click Here to Find Your Local Congressperson</button>
            </a>
        </div>
    </div>

</body>
</html>