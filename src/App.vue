<template>
  <div id="app" >
    <div>
        <div id="nav" class=" navigation">
            <router-link to="/Main">Главное</router-link> 
            <router-link to="/About">О нас</router-link> 
            <router-link to="/StudentClubs">Студенческие клубы</router-link> 
            <router-link to="/StudentActivities">Студенческие мероприятия</router-link>
            <router-link to="/PsychologicalService">Психологическая служба</router-link> 
            <router-link to="/CorruptionActivities">Антикоррупционная деятельность</router-link> 
            <router-link to="/Dormitory">Общежитие</router-link> 
            <router-link to="/Contacts">Контакты</router-link> 
            <div class="language">
                    <button></button>
                </div>
        </div>
            <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&family=Roboto:ital,wght@0,300;1,300&display=swap');

#nav a{
  color: white;
  text-decoration: none;
  font-size: 105%;
  font-family: 'Roboto Slab', serif;
  cursor: pointer;
  position: relative;
}
a:after {
	display: block;
	position: absolute;
	left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
	width: 0;/*задаём длинну линии до наведения курсора*/
	height: 2px; /*задаём ширину линии*/
	background-color: #f3faf6; /*задаём цвет линии*/
	content: "";
	transition: width 0.3s ease-out; /*задаём время анимации*/
}
a:hover:after,
a:focus:after {
	width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
}
</style>
