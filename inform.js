<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AOCN: Inform</title>
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
    <!-- END OF NAVBAR -->
    
    <div class="inform__container">
        <div class="inform__title">
            <h1>Informing Others</h1>
        </div>
        <div class="inform__image">
            <img src="images/inform.jpg" alt="Two guys talking" height="400em">
        </div>
        <div class="inform__text">
            <p>
                Although it may seem like just telling people about the climate crisis won't do much, a little
                bit ends up going a long way. When people learn new information, they like to tell people about
                it if they find it interesting. A domino effect occurs in which people keep spreading this new
                information around and now, one person telling their friend about the climate issue in daily conversation
                has suddenly turned into 1,000 people being told about the climate issue in their own daily conversation.
                Raising awareness on the issue also leads into pressure being put on the government to pass eco-friendly
                legislation, since more people being aware of the issue causes more unrest among constituents.
                We must speak up about climate change because otherwise, the issue will go to the back of
                people's minds. We can't fix the issue of climate change without first speaking up on it.
            </p>
        </div>
    </div>

</body>
</html>