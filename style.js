/* UTILITIES */
* {
    margin: 0;
    padding: 0;
}

html {
    height: 100%;
    width: 100%;
    margin: auto;
    overflow: scroll;
}

body {
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

/* NAVBAR STYLING */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #015871;
    color: #fff;
}

.nav-links a {
    color: #fff;
}

/* LOGO */
.logo {
    font-size: 32px;
    color: #fff;
}

/* NAVBAR MENU */
.menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
}

.menu li:hover {
    background-color: #187791;
    border-radius: 5px;
    transition: 0.3s ease;
}

.menu li {
    padding: 4px 14px;
}

/* DROPDOWN MENU */
.services {
    position: relative;
}

.dropdown {
    background-color: #015871;
    padding: 1em 0;
    position: absolute; /*WITH RESPECT TO PARENT ELEMENT*/
    display: none;
    border-radius: 8px;
    top: 35px;
}

.dropdown li + li {
    margin-top: 10px;
}

.dropdown li {
    padding: 0.5em 1em;
    width: 8em;
    text-align: center;
}

.dropdown li:hover {
    background-color: #187791;
}

.services:hover .dropdown {
    display: block;
}

/* RESPONSIVE NAVBAR MENU STARTS */

/* CHECKBOX HACK */

input[type=checkbox] {
    display: none;
}

/* HAMBURGER MENU */
.hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
}

/* OCEAN ANIMATION */

html, body { height: 100%; }
body {
  background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
  overflow: hidden;
}

.ocean { 
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #015871;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
/* END OF OCEAN ANIMATION */

/* APPLYING MEDIA QUERIES */
@media (max-width: 768px) {
    .menu {
        display: none;
        position: absolute;
        background-color: #015871;
        right: 0;
        left: 0;
        text-align: center;
        padding: 16px 0;
    }

    .menu li:hover {
        display: inline-block;
        background-color: #187791;
        transition: 0.3s ease;
    }

    .menu li + li {
        margin-top: 12px;
    }

    input[type=checkbox]:checked ~ .menu {
        display: block;
    }

    .hamburger {
        display: block;
    }

    .hamburger:hover {
        cursor: pointer;
        background-color:#187791;
        transition: 0.3s ease;
    }

    .dropdown {
        left: 50%;
        top: 30px;
        transform: translateX(30%);
    }

    .dropdown li:hover {
        background-color:#187791;
    }
} 

/* HOME PAGE CSS */
.hero__section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.home__title {
    font-size: 2em;
    color: #15667c;
    padding-top: 1em;
    margin: 0 30px;
    text-align: center;
}

.home__text {
    font-size: 1.5em;
    padding-top: 1em;
    text-align: center;
    margin: 0 7em;
}

/* SOLUTION PAGE */
.solution__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.solution__title {
    font-size: 2em;
    color: #15667c;
    padding-top: 1em;
    text-align:center;
}

.solution__text {
    font-size: 1.5em;
    text-align: center;
    padding-top: 0em;
    margin: 0 7rem;
}

.solution__tiles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#tile {
    padding: 5em 0;
    background: linear-gradient(to top, #015871, rgb(199, 199, 199));
    margin: 4em 3em;
    width: 14em;
    height: 20em;
    border-radius: 2em;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#tile__logo {
    font-size: 6em;
    padding-bottom: 0.5em;
}

.tile__text {
    text-align: center;
    font-size: 1.5em;
}

.tile_button {
    color: black;
}

.tile_button:hover {
    color: white;
    transition: 0.2s linear;
    text-shadow: 2px 2px 5px black;
}

/* INVOLVEMENT PAGE */
.involve__container, .rep__container,
 .inform__container, .vote__container,
 .about__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.involve__title, .rep__title,
 .inform__title, .vote__title,
 .about__title {
    font-size: 2em;
    color:#15667c;
    padding-top: 1em;
    text-align: center;
}

.involve__image, .rep__image, .inform__image,
.vote__image, .about__image {
    padding-top: 30px;
}

.involve__text, .rep__text, .inform__text,
.vote__text, .about__text {
    padding-top: 0.7em;
    text-align: center;
    font-size: 1.2em;
    padding-left: 4em;
    padding-right: 4em;
}

.involve__links, .rep__links, .vote__links {
    padding-top: 3em;
    align-items: center;
}

.involve__protesttiplink {
    padding-top: 3em;
}

.involve__button {
    width: 40em;
    height: 4em;
    border: none;
    color: white;
    border-radius: 1em;
    padding: 1em 2em;
    background: linear-gradient(to top, #006b89, #848b8e);
    font-size: 1.1em;
    font-family: 'Poppins', sans-serif;
    vertical-align: center;
}

.involve__button:hover {
    cursor: pointer;
    background: linear-gradient(to top, #00aede, #c6d0d5);
    transition: all 0.3s;
}

.involve__button:active {
    cursor: pointer;
    background: linear-gradient(to top, #006683, #53585a)
}

.resources__title {
    color: #15667c;
    font-size: 2em;
    padding-top: 5em;
}

.resources__text {
    text-align: center;
    padding: 0 7em;
    font-size: 1.4em;
}

/* TIMELINE */
body {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7em;
    line-height: 1.75;
  }
  
  #timeline {
    display: flex;
    background-color: #031625;
  
    &:hover {
      .tl-item {
        width: 23.3333%;
      }
    }
  }
  
  .tl-item {
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 25%;
    height: 100vh;
    min-height: 1em;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;
    
    &:before, &:after {
      transform: translate3d(0, 0, 0);
      content: '';
      position: absolute;
      left: 0; top: 0;
      width: 100%; height: 100%;
    }
  
    &:after {
      background: transparentize(#031625, 0.15);
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  
    &:before {
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%);
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
  
    &:hover {
      width: 30% !important;
      
      &:after {
        opacity: 0;
      }
  
      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.25s;
      }
      
      .tl-content {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.75s ease 0.5s;
      }
  
      .tl-bg {
        filter: grayscale(0);
      }
    }
  }
  
  .tl-content {
    transform: translate3d(0, 0, 0) translateY(25px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 55%;
    opacity: 0;
  }

  .f2-heading--sanSerif {
    font-size: 2em;
  }
  
  .tl-year {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-size: 3em;
    

  }
  
  .tl-bg {
    transform: translate3d(0, 0, 0);
    position: absolute;
    width: 100%; height: 100%;
    top: 0; left: 0;
    background-size: cover;
    background-position: center center;
    transition: filter 0.5s ease;
    filter: grayscale(100%);
  }
  
  
  
  
