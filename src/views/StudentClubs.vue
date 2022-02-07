<template>
    <div class="Main-block">
        <div class="First-block container">
            <div class="header-text">
                <p>Студенческие клубы</p>
            </div>
            <div class="socialNetworks">
                <div class="Instagram">
                    <a href="https://www.instagram.com/aues_university/" target="_blank"><img  src="../assets/pictures/instagramPic.png"></a>
                </div>
                <div class="TikTok">
                    <a href="https://www.tiktok.com/@aues_uni?_d=secCgwIARCbDRjEFSADKAESPgo8hIdI1RIxDykmY%2B117i6Swo1QNokg09PMkhH5UI%2FQWqYQPG9PNNBWy8HyBgG9%2BR5P97jikRevfeMuKKeCGgA%3D&language=ru&sec_uid=MS4wLjABAAAAybvrGildxqKzbHDi4v5MKovEme7EAUFFT_6G4_Ss4I8Ry1ov5v5R66K-MMdMkHdl&share_app_name=musically&share_author_id=6844731653044028422&timestamp=1643715567&u_code=dacc1g3g483209&user_id=6783552851463308293&utm_campaign=client_share&utm_medium=android&utm_source=more&source=h5_m&_r=1" target="_blank"><img  src="../assets/pictures/tik-tok.png"></a>
                </div>
                <div class="Gmail">
                    <a href="#" target="_blank"><img  src="../assets/pictures/Gmail.png"></a>
                </div>
                <div class="Youtube">
                    <a href="https://www.youtube.com/channel/UCUnDGC1ddotzf1fpn-hyXDA" target="_blank"><img  src="../assets/pictures/youtube.png"></a>
                </div>
            </div>
        </div>
        <div class="Second-block">
            <div class="FirstBlockStudClubs">
                <div class="box">
                    <img src="../assets/pictures/StudentClubsheader.jpeg" alt="Здесь должна была быть картинка">
                    <span><span class="ProfComStud">Профсоюзный комитет студентов</span>— высший орган студенческого самоуправления университета. 
                                Представляет права обучающихся на участие в управлении образовательным процессом, решении важных 
                                вопросов в жизнедеятельности студенческой молодежи, развитии ее социальной активности, поддержки и 
                                реализации социальных инициатив</span>
                </div>
                <div class="box-right">
                    <img src="../assets/pictures/StudentClubsheader.jpeg" alt="Здесь должна была быть картинка">
                    <div class="StudClubR">
                        <span><span class="bigText">Как нас найти?<br> </span>
                        <span>Корпус А, 315 ауд.</span></span>
                        <br>
                        <p><span class="bigText">Как с нами связаться ?<br></span>
                        <span>Эл. почта: aues.life@aues.kz<br>
                        <span>Тел. номер: +7 727 292 30 80</span></span></p>
                    </div>
                </div>
            </div>
            <div class="SecondBlockStudClubs">
                <p>Наша команада</p>
                    <div class="slideshow-container">

                    <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="img_nature_wide.jpg" style="width:100%">
                    <div class="text">Caption Text</div>
                    </div>

                    <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="img_snow_wide.jpg" style="width:100%">
                    <div class="text">Caption Two</div>
                    </div>

                    <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="img_mountains_wide.jpg" style="width:100%">
                    <div class="text">Caption Three</div>
                    </div>

                    <a class="prev" onclick="plusSlides(-1)"></a>
                    <a class="next" onclick="plusSlides(1)"></a>

                    </div>
                    <br>

                    <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span> 
                    <span class="dot" onclick="currentSlide(2)"></span> 
                    <span class="dot" onclick="currentSlide(3)"></span> 
                    </div>
            </div>
            <div class="ThirdBlockClubs">
                <p>Студенческие организации</p>
                <div></div>
            </div>
        </div>
    </div>
</template>



<style>
@import '/src/assets/index.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&family=Roboto:ital,wght@0,300;1,300&display=swap');

.Second-block{
    color:blue;
    width:80%;
    margin:0 auto;
}
.header-text {
    font-family: 'Roboto Slab', serif;
    font-size: 170%;
    font-weight:500;
    color:blue;
}
.ProfComStud{
    font-family: 'Roboto Slab', serif;
    font-weight:500;
}
.box{
    width:50%;
    display:flex;
    justify-content:space-between;
}
.box > img{
    max-width: 100px;
    max-height: 100px;
}
.box > span{
    width:66%;
}
.box-right{
    width:40%;
}
.box-right > img{
    max-width: 100px;
    max-height: 100px;
}
.FirstBlockStudClubs{
    display:flex;
    justify-content:space-between;
}
.StudClubR{
    float:right;
}
.bigText{
    font-family: 'Roboto Slab', serif;
    font-size: 110%;
    font-weight:500;
}
.SecondBlockStudClubs,.ThirdBlockClubs > p{
    text-align: center;
    margin-top:5%;
    font-family: 'Roboto Slab', serif;
    font-size: 120%;
    font-weight:500;
}



* {box-sizing: border-box}
.mySlides {display: none}
.slideshow-container > img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>

