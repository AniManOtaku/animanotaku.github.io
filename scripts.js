        
        
        function setLang(lang){
            texts=document.querySelectorAll('[lang-'+lang+']');
            texts.forEach(el => {
                el.innerHTML=el.getAttribute('lang-'+lang);
            });
        }
        
        
        function initScreens(){
            const screens=document.querySelectorAll('.screen');
            screens.forEach(screen=>{
                screen.classList.add('hidden');               
            });
            
            const target=document.getElementById('screen-main');
            target.classList.remove('hidden');
            target.classList.add('active');
            setLang('en');
        }
        
        window.addEventListener('DOMContentLoaded', initScreens);
        
        
        function showScreen(screenId){
            const screens=document.querySelectorAll('.active');
            screens.forEach(screen=>{
                screen.classList.remove('active');
                screen.classList.add('hidden');
            });
            const target=document.getElementById(screenId);
            target.classList.remove('hidden');
            target.classList.add('active');
            target.scrollTop=0;
        }
        
        function adjustHeight(){
            const screen1=document.getElementById('screen-links');
            const child1=document.getElementById('links-horizontal');
            const ph1=screen1.offsetHeight;
            const ch1=child1.scrollHeight;
            if (ph1>ch1) {
                child1.classList.add('centred');
            }
            else{
                child1.classList.remove('centred');
            }
        }
        
        window.addEventListener('resize', adjustHeight);
        window.addEventListener('DOMContentLoaded', adjustHeight);
        
        const images=document.querySelectorAll('.cover-image');
        const buttons=document.querySelectorAll('.play-button');
        const audio=document.getElementById('audio');
        
        function updatePlayers(){
            if(audio.paused){
                audio.currentTime=0;
                images.forEach(img => {
                img.classList.add('paused');
                });
                buttons.forEach(but => {
                but.classList.add('paused');
                });
            }
            else {
                images.forEach(img => {
                img.classList.remove('paused');
                });
                buttons.forEach(but => {
                but.classList.remove('paused');
                });
            }
        }
        
        window.addEventListener('DOMContentLoaded', updatePlayers);
        window.addEventListener('orientationchange', updatePlayers);
        window.addEventListener('resize', updatePlayers);
        
        audio.addEventListener('play', updatePlayers);
        audio.addEventListener('pause', updatePlayers);
        audio.addEventListener('ended' , updatePlayers);
        
        function togglePlay(){
            if(audio.paused){
                audio.currentTime=0;
                audio.play();
            }
            else {
                audio.pause();
            }
        }
        
        
        function switchCards(event){
            const card1=document.querySelector('.one');
            const card2=document.querySelector('.two');
            const card3=document.querySelector('.three');
            const card4=document.querySelector('.four');
            const card5=document.querySelector('.five');
            
            if(event.target.classList.contains('icon')){
                return;
            }
            
            if(event.target.classList.contains('two')){
                card1.classList.remove('one');
                card1.classList.add('five');
                card2.classList.remove('two');
                card2.classList.add('one');
                card3.classList.remove('three');
                card3.classList.add('two');
                card4.classList.remove('four');
                card4.classList.add('three');
                card5.classList.remove('five');
                card5.classList.add('four');
            }
            
            if(event.target.classList.contains('five')){
                card1.classList.remove('one');
                card1.classList.add('two');
                card2.classList.remove('two');
                card2.classList.add('three');
                card3.classList.remove('three');
                card3.classList.add('four');
                card4.classList.remove('four');
                card4.classList.add('five');
                card5.classList.remove('five');
                card5.classList.add('one');
            }
        }
        
        const cards=document.querySelectorAll('.card');
        cards.forEach(card=>{
            card.addEventListener('click',switchCards);
        });
        
        
        