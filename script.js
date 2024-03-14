
    const music = new Audio('/audio/Kavinsky - Nightcall.mp3');
    const music1=new Audio('/audio/12-Let Her Go_cut.mp3');







    const song=[
        {
        id:1,
        songname:`Nightcall  <br>
        <div class="subtitle">
        Kavinsky
        </div>`,
        poster:'/images/1.jpg'
        },

        {
         id:2,
         songname:`Let her go  <br>
         <div class="subtitle">
         Passenger
          </div>`,
         poster:'/images/2.jpg'
         },

         {
         id:3,
         songname:`The night we met  <br>
        <div class="subtitle">
        Lord Huran
        </div>`,
        poster:'/images/3.jpg'
        },

       {
         id:4,
         songname:`Phonk  <br>
         <div class="subtitle">
         Beazilain
        </div>`,
        poster:'/images/4.jpg'
      },
     
      {
         id:5,
        songname:`Something in the way  <br>
        <div class="subtitle">
        Nivrana
        </div>`,
        poster:'/images/5.jpg'
     },

     {
        id:6,
        songname:`I'm Vengeance  <br>
        <div class="subtitle">
        Batman
        </div>`,
        poster:'/images/6.jpg'
     },

    {
       id:7,
       songname:`Faye Webster  <br>
       <div class="subtitle">
       Kingston
       </div>`,
       poster:'/images/7.jpg'
     },
                         
     {
       id:8,                          
       songname:`See u again  <br>
       <div class="subtitle">
       Wiz Khalifa
       </div>`,
       poster:'/images/8.jpg'
                                   
    },
     {
       id:9,
       songname:`After hours  <br>
       <div class="subtitle">
       Weekend
       </div>`,
       poster:'/images/9.jpg'
     },
     {
       id:10,
       songname:`Perfect  <br>
      <div class="subtitle">
       Ed Sheeran`,
       poster:'/images/10.jpg'
     },

     {
      id:11,
      songname:`Until I found You  <br>
      <div class="subtitle">
      Stephen Sanchez
      </div>`,
      poster:'images/11.jpg'
    },


    {
      id:12,
       songname:`Tadow  <br>
       <div class="subtitle">
       Masego RKJ
       </div>`,
       poster:'/images/12.jpg'
    },
                                      
    {
                                             
      id:13,
      songname:`Happy hour  <br>
      <div class="subtitle">
      Talha Anjum
      </div>`,
      poster:'/images/13.jpg'
                                                
    },
                                                     
    {
                                                       
      id:14,
      songname:`Punya Paap <br>
      <div class="subtitle">
      Divine
      </div>`,
      poster:'/images/14.jpg'
                                                          
    },
                                                          
    {
    
      id:15,
      songname:`Without me <br>
      <div class="subtitle">
      Eminem
      </div>`,
      poster:'/images/15.jpg'
    
    },
                                                             
    {
    
      id:16,
      songname:`Violent Crime <br>
      <div class="subtitle">
      Kanye West
      </div>`,
      poster:'/images/16.jpg'
    },
                                                                 
    {
    
      id:17,
      songname:`Moonlight<br>
      <div class="subtitle">
      XXXtenacion
      </div>`,
      poster:'/images/17.jpg'
    },
                                                                     
    {
    
      id:18,
      songname:`Yadav Brand <br>
      <div class="subtitle">
      Elivish
      </div>`,
      poster:'/images/18.jpg'
    },
                                                                       
    {
    
      id:19,
      songname:`Hasta rhta hoo <br>
      <div class="subtitle">
      Kabir Singh
      </div>`,
      poster:'/images/19.jpg'
    },
                                                                        
                                                                           
    {
    
      id:20,
      songname:`Rocky <br>
      <div class="subtitle">
      Balboa
      </div>`,
      poster:'/images/20.jpg'
    
    }
                                                                                                                                                                                                                                                                                                            

    ];


    Array.from(document.getElementsByClassName('SongItem')).forEach((e,i)=>{
        e.getElementsByTagName('img')[0].src= song[i].poster
        e.getElementsByTagName('h5')[0].innerHTML=song[i].songname
    });





let popsongleft=document.getElementById('popsongleft');
let popsongright=document.getElementById('popsongright');
let popsong=document.getElementsByClassName('popsong')[0];

let popartleft=document.getElementById('popartleft');
let popartright=document.getElementById('popartright');
let items=document.getElementsByClassName('items')[0];

popsongright.addEventListener('click',()=>{
    popsong.scrollLeft+=200;
})

popsongleft.addEventListener('click',()=>{
    popsong.scrollLeft-=200;
})

popartleft.addEventListener('click',()=>{
    items.scrollLeft-=200;
})

popartright.addEventListener('click',()=>{
    items.scrollLeft+=200;
});




let masterplaybtn=document.getElementById('masterplaybtn');
let wave=document.getElementById('wave');

masterplaybtn.addEventListener('click', ()=>{
    if(music.paused || music.currentTime<=0){
      music.play();
      wave.classList.add('active1');
      masterplaybtn.classList.remove('bi-play-fill');
      masterplaybtn.classList.add('bi-pause-fill');
    }
    else{
     music.pause();
     wave.classList.remove('active1');
     masterplaybtn.classList.add('bi-play-fill');
     masterplaybtn.classList.remove('bi-pause-fill')

    }
});





let index=0;
let posterofmasterplay=document.getElementById('posterofmasterplay');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('playListplay')).forEach((e) => {
    e.addEventListener('click', (em) => {
        let index = em.target.id;
      //  console.log(index);//
      music.src=`/audio/${index}.mp3`
      posterofmasterplay.src=`/images/${index}.jpg`
      wave.classList.add('active1');


      music.play();
      masterplaybtn.classList.remove('bi-play-fill');
      masterplaybtn.classList.add('bi-pause-fill');


    

      let songtitles=song.filter((els)=>{
        return els.id==index;
      });

      songtitles.forEach(elss=>{
        let {songname} =elss;
        title.innerHTML=songname;
      })

        
    });
});


let CurrentStart=document.getElementById('CurrentStart');
let CurrentEnd=document.getElementById('CurrentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_duration=music.duration;

  let min1=Math.floor(music_duration/60);
  let sec1=Math.floor(music_duration%60);

  if(sec1<10){
    sec1=`0${sec1}`;
  }

  CurrentEnd.innerText=`${min1}:${sec1}`;

  let min2=Math.floor(music_curr/60);
  let sec2=Math.floor(music_curr%60);
  if(sec2<10){
    sec2=`0${sec2}`;
  }

  CurrentStart.innerText=`${min2}:${sec2}`;

  let ProgressBar=parseInt((music_curr/music_duration)*100);
  seek.value=ProgressBar;
 // console.log(seek.value);
  let seekbar=seek.value;
  bar2.style.width=`${seekbar}%`;
  dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let volIcon=document.getElementById('volIcon');
let vol=document.getElementById('vol');
let volbar=document.getElementsByClassName('volbar')[0];
let voldot=document.getElementById('voldot');

vol.addEventListener('change', ()=>{
  if(vol.value==0){
    volIcon.classList.remove('bi-volume-up-fill');
    volIcon.classList.remove('bi-volume-down-fill');
    volIcon.classList.add('bi-volume-mute-fill');
  }

  if(vol.value>0){
    volIcon.classList.remove('bi-volume-up-fill');
    volIcon.classList.add('bi-volume-down-fill');
    volIcon.classList.remove('bi-volume-mute-fill');
  }
  if(vol.value>50){
    volIcon.classList.add('bi-volume-up-fill');
    volIcon.classList.remove('bi-volume-down-fill');
    volIcon.classList.remove('bi-volume-mute-fill');
  }
  let vol_a=vol.value;
  volbar.style.widt=`${vol_a}%`;
  voldot.style.left=`${vol_a}%`;
  music.volume=vol_a/100;

})

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click', () => {
  index = (index - 1 + song.length) % song.length; // Calculate the index of the previous song
  playSelectedSong();
});

next.addEventListener('click', () => {
  index = (index + 1) % song.length; // Calculate the index of the next song
  playSelectedSong();
});

function playSelectedSong() {
  const selectedSong = song[index];
  music.src = `/audio/${selectedSong.id}.mp3`;
  posterofmasterplay.src = selectedSong.poster;
  title.innerHTML = selectedSong.songname;

  music.play(); // Start playing the selected song
  wave.classList.add('active1');
  masterplaybtn.classList.remove('bi-play-fill');
  masterplaybtn.classList.add('bi-pause-fill');
}








