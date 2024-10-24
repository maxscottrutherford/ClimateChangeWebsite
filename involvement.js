<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AOCN: Involvement</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/60c1ad44c1.js" crossorigin="anonymous"></script>
</head>
<body>
    <!--  -->
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


    <div class="involve__container">
        <div class="involve__title">
            <h1>Getting Involved</h1>
        </div>
        <div class="involve__image">
            <img src="images/protest.jpg" alt="" width="600em" height="300em">
        </div>
        <div class="involve__text">
            <p>
                There's many different ways to become politically active in order to fight climate change. One method that
                people use in order to spread awareness on the issue is to have protests and/or marches. Protesting on these
                issues in large masses shows our government and citizens that many people strongly believe in the issue. These
                protests also bring together like-minded people, who can then come up with other ways to make an impact on the
                issue of the climate crisis. These demonstrations also put pressure on our government to pass legislation that 
                will help strengthen the battle against climate change. Seeing so many people disgruntled and upset over an 
                issue will cause our legislative houses across the nations to start paying more attention to this very serious
                issue.
            </p>
        </div>
        <div class="involve__links">
            <div class="involve__protestlink">
                <a href="https://carnegieendowment.org/publications/interactive/climate-protest-tracker#" target="_blank">
                    <button class="involve__button">Click Here to See a Tracker of All Climate Protests</button>
                </a>
            </div>
            <div class="involve__protesttiplink">
                <a href="https://www.nrdc.org/stories/how-protest-safely" target="_blank">
                    <button class="involve__button">Click Here to See Some Tips on Protesting Safely</button>
                </a>
            </div>
        </div>
    </div>
</body>
</html>