// Kart verileri: Her dosya için bir obje. Burada örnek yazılar ve müzikler var, istediğin gibi düzenleyebilirsin.
const cardData = [
  { 
    file: 'babalar.jpeg',   
    text: `22 Mayıs kırlangıç günü senden ilk öpücüğümü almıştım hemde ortalık 56 olmuştu göndermeli hikaye atmıştık.
    Beraber çicek toplamıstık, bizim aileyle tanısmıştın (gelin olcan kaçışın yok), Halil ibrahime lolipop almıştın fav ablası oldun.
    Kurtlara gönderme atmıştık.Annenle tanışmıştım(damat olucağımı öngördü).Çok eğlendiğim bi gün olmuştu ben de yeri olan çok önemli günlerden biri.
     Çok seviyom seni`, 
    music: 'music/neverthere.mp3' 
  },
  { 
    file: 'baby.jpeg',      
    text: `Sen bundan nefret ediyorsun belki ama benim fav stickerlarımdan biri.Sen böyle her zaman güzel ve tatlı oluyon.
    Mesela bi ara görüntülü konuşarak ders çalışmıştık ya favori aktivitem falan oldu.Böyle ev haliyle ayrı bi tatlıstın zaten.
    Senin her haline aşığım nokta.Çok seviyom seni.`, 
    music: 'music/gnosienn.mp3' 
  },
  { 
    file: 'bebis.jpeg',     
    text: `Benim bebisle fotoğrafımızın kalite der susarım.Yanımda değil kanımda şarkısını sen önermiştin bana tiyatrodayken sardı.
    Şarkıda diyor ki yanımda değil kanımda ama ben de diyorum ki hem yanımda hem kanımda.İyi ki de yanımda cok seviorum.`, 
    music: 'music/yanımda.mp3' 
  },
  { 
    file: 'bebis1.jpeg',    
    text: `Yine klasik ezop günlerinden biri sen götürdüğünden beri fav mekanım olmus durumda.Ama sen su güzelliğe bakarmısın sen su tatlıslığa
    bu kız benim nasıl manitam lan diyo insan.Bilekliklerini de cok seviyorum ayrıca söylim.`, 
    music: 'music/mamas.mp3' 
  },
  { 
    file: 'bebis2.jpeg',    
    text: `"Güneşte ne güzel vuruyo he" hep sen diyon böyle ama kendisine bakan yok.Sen su gözlere saçları bakıp nasıl aşık olmayabilirsin ki 
    adil değil çok güclüsün olmaz.Fotoğrafa baktıkca ısırasım geliyo sen ne kadar artıkısırma desen bile vazgeçmiycem çünkü doyamıyorum yapcak bisey yok. 
    Ayrıca çok güzelsin askim real.💗  `, 
    music: 'music/ney.mp3' 
  },
  { 
    file: 'best.jpeg',      
    text: `Bu fotoğraf yine fav fotoğraflardan biri daha sevgili değiliz ama kollarımda bi güzellik var ne iş bilemiyorum gemileri yakmış... O günü çok seviyorum.
     Beraber o kadar fazla zaman geçirmiştik ki yarım günüm senleydi (simdi farklı sanki) az kalsın pankartı yetiştiremiyoduk. ONU BUNU GEÇ PANKART YAPTIK LAN.DEHŞET 
     BİR PANKARTIMIZ VARDI.Sonra o otobüs yolculuğu bile değerliydi ama onun gecesi mükemmeldi.Ama en komik olan umayın yakamdan tutup beni kenara çekmesiydi.Aslan 
     kardeşim umay seviliyon 🫶`, 
    music: 'music/her.mp3' 
  },
  { 
    file: 'blend.jpeg',     
    text: `Peki onu bunu geçte bizim profil fotoğrafların benzerlik ne iş. Öyle çok benzer müzikler dinlemesekte senin dinlediğin şeyleri seviyorum. Ne kadar dinlemesem
     de worth.Ama 10 mayıstan sonraki 2 akşam ard arda jam dinlemesi de biraz çaktırmıştı olayı ama neyse.Güzeldi blendi dinlerken aklıma bu şarkı geliyo her zaman.
     Bu şarkının da bende yeri bir ayrı.Ama senle jam dinlemesinin yeri çok çok ayrı.❤️‍🔥`, 
    music: 'music/jakuzi.mp3' 
  },
  { 
    file: 'cicek.jpeg',     
    text: `VE VE İSTE O GÜN GELDİ!!!! DİKKAT DİKKAT ZEHRA YÖNEM ARTIK BENİM SEVGİLİM.O gün de ayrı güzel bir gündü bizim paşamız 11 e kadar uyudu biz naptık 9 da dikildik çarşıya
    çiçeğimizi aldık her şeyi hazır ettik.Ama çok güzeldi tepkilerin.Ne kadar belli edemedim desende gözlerinde gördüm ben o mutluluğu bu beni daha çok mutlu eden seydi 
    hep mutlu ol askim olur mu.Bu cümle tanıdık geldi mi? cümlenin sonunda askim yoktu sadece ama o zamanda hep değerliydin benim içim.Peki benim çiçek getirirken 
    garibanlık al cicek der gibi. Ama olsun güzeldi worth.İyi ki sevgilim🤍`, 
    music: 'music/porto.mp3' 
  },
  { 
    file: 'cicek.mp4',      
    text: `Ege ye attığımız o video ama çok güzel bi video.Zeram çok mutlu zıplayan kedi olmus.(Tabi kaptı benim gibi oğlanı bırakmıyo).O çiçek buketinde ki 
    çiçekleri seni düşünerek aldım.Beyaz ve toz pembe renkleri benim hayatıma geldiğinden beri benim hayatımın güzelleşmesini temsil ediyordu.Buketin siyah
    kağıtla kaplı olması benim kötü zamanlarımda ki karanlığımı içindeki çiçekler ise benim kalbimde zehranın yaptığı güzel işlerdi..`, 
    music: 'music/m.mp3' 
  },
  { 
    file: 'düscem.mp4',     
    text: `Düşsem de yanımdasın. Bu videoda düşsem bile sen yanımdasın...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'fes.jpeg',       
    text: `Fesli güzellik. Bu fotoğrafta fesle ne kadar güzel görünüyorsun...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'fesli.jpeg',     
    text: `Fesli başka bir anı. Bu fotoğrafta fesle başka bir güzel anı...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'gang.jpeg',      
    text: `Gangsta ruhun. Bu fotoğrafta gangsta ruhun ne kadar güzel görünüyor...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'gülücük.jpeg',   
    text: `Gülüşün yeter. Bu gülüşünle dünyayı aydınlatıyorsun...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'kimya.jpeg',     
    text: `Kimyamız tuttu. Bu fotoğrafta kimyamızın ne kadar güzel olduğunu görüyorum...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'mistik.jpeg',    
    text: `Mistik bir hava. Bu fotoğrafta mistik bir hava var...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'mutlu.jpeg',     
    text: `Mutluluğun resmi. Bu fotoğrafta ne kadar mutlu görünüyorsun...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'öpücük.jpeg',    
    text: `Öpücükler sana. Bu fotoğrafta öpücükler sana...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'öpücük1.jpeg',   
    text: `Bir öpücük daha. Bu fotoğrafta bir öpücük daha...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'öpücük2.jpeg',   
    text: `Sonsuz öpücük. Bu fotoğrafta sonsuz öpücükler...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'tasıma isi.jpeg',
    text: `Taşıma işi bile güzel seninle. Bu fotoğrafta taşıma işi bile güzel seninle...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'video.mp4',      
    text: `Birlikte video keyfi. Bu videoda birlikte video keyfi yaşıyoruz...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'zera ayna foto.jpeg', 
    text: `Aynadaki güzellik. Bu fotoğrafta aynadaki güzelliğin...`, 
    music: 'music/16-24.mp3' 
  },
  { 
    file: 'zera.jpeg',      
    text: `Her şeyim. Sen benim her şeyimsin...`, 
    music: 'music/16-24.mp3' 
  }
];

const content = document.getElementById('content');

cardData.forEach((item, idx) => {
  const isVideo = item.file.endsWith('.mp4');
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  cardContainer.innerHTML = `
    <div class="flip-card">
      <div class="card-front">
        ${isVideo ? `<video src="images/${item.file}" controls poster="images/${cardData[(idx+1)%cardData.length].file.replace('.mp4','.jpeg')||'zera.jpeg'}"></video>` : `<img src="images/${item.file}" alt="">`}
        <p>${isVideo ? 'Video' : 'Fotoğraf'}</p>
      </div>
      <div class="card-back">
        <div class="back-text">${item.text}</div>
        <button class="audio-btn" title="Müziği Aç">🎵</button>
        <audio class="card-audio" preload="auto">
          <source src="${item.music}" type="audio/mpeg">
        </audio>
      </div>
    </div>
  `;
  content.appendChild(cardContainer);
  
  // Her kart için müzik bittiğinde butonu sıfırla
  const audio = cardContainer.querySelector('.card-audio');
  const btn = cardContainer.querySelector('.audio-btn');
  if (audio && btn) {
    audio.addEventListener('ended', function() {
      btn.textContent = '🎵';
      btn.title = 'Müziği Aç';
    });
  }
});

// Kart döndürme ve müzik kontrolü
content.addEventListener('click', function(e) {
  let cardContainer = e.target.closest('.card-container');
  if (!cardContainer) return;
  
  // Kartı döndür
  const wasFlipped = cardContainer.classList.contains('flipped');
  cardContainer.classList.toggle('flipped');
  const isNowFlipped = cardContainer.classList.contains('flipped');

  // Eğer arka yüzdeki müzik butonuna tıklandıysa
  if (e.target.classList.contains('audio-btn')) {
    const audio = cardContainer.querySelector('.card-audio');
    const button = cardContainer.querySelector('.audio-btn');
    
    if (audio.paused) {
      // Müziği başlat
      audio.volume = 0.3;
      audio.play().then(() => {
        button.textContent = '🔇';
        button.title = 'Müziği Durdur';
      }).catch(err => {
        console.log('Müzik başlatılamadı:', err);
        button.textContent = '🎵';
        button.title = 'Müziği başlatmak için tıklayın';
      });
    } else {
      // Müziği durdur
      audio.pause();
      audio.currentTime = 0;
      button.textContent = '🎵';
      button.title = 'Müziği Aç';
    }
    e.stopPropagation();
  } else {
    // Kart döndüğünde müzik kontrolü
    const audio = cardContainer.querySelector('.card-audio');
    const btn = cardContainer.querySelector('.audio-btn');
    
    if (isNowFlipped && !wasFlipped) {
      // Kart açıldığında müziği otomatik başlat
      if (audio && audio.paused) {
        audio.volume = 0.3;
        audio.play().then(() => {
          btn.textContent = '🔇';
          btn.title = 'Müziği Durdur';
        }).catch(err => {
          console.log('Müzik başlatılamadı:', err);
          btn.textContent = '🎵';
          btn.title = 'Müziği başlatmak için tıklayın';
        });
      }
    } else if (!isNowFlipped && wasFlipped) {
      // Kart kapandığında müziği durdur
      if(audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if(btn) {
        btn.textContent = '🎵';
        btn.title = 'Müziği Aç';
      }
    }
  }
});

// Müzik kontrol fonksiyonu
let isPlaying = false; // Global değişken olarak tanımla

document.addEventListener('DOMContentLoaded', function() {
  const musicToggle = document.getElementById('music-toggle');
  const audio = document.getElementById('background-music');

  if (musicToggle && audio) {
    console.log('Müzik elementi bulundu');
    
    // Mektup açıldığında müziği başlat
    const letter = document.getElementById('letter');
    if (letter) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (letter.classList.contains('opened') && !isPlaying) {
              // Mektup açıldığında müziği başlat
              setTimeout(() => {
                audio.volume = 0.3; // Ses seviyesini ayarla
                console.log('Müzik başlatılıyor...');
                audio.play().then(() => {
                  console.log('Müzik başarıyla başladı');
                  musicToggle.textContent = '🔇';
                  musicToggle.classList.add('playing');
                  isPlaying = true;
                }).catch(err => {
                  console.log('Müzik başlatılamadı:', err);
                  // Kullanıcı etkileşimi gerekebilir
                  musicToggle.textContent = '▶️';
                  musicToggle.title = 'Müziği başlatmak için tıklayın';
                });
              }, 1000);
            }
          }
        });
      });
      
      observer.observe(letter, { attributes: true });
    }

    musicToggle.addEventListener('click', function() {
      if (isPlaying) {
        // Müziği durdur
        audio.pause();
        console.log('Müzik durduruldu');
        musicToggle.textContent = '🔇';
        musicToggle.classList.remove('playing');
        isPlaying = false;
      } else {
        // Müziği başlat
        console.log('Müzik başlatılıyor...');
        audio.play().then(() => {
          console.log('Müzik başarıyla başladı');
          musicToggle.textContent = '🔇';
          musicToggle.classList.add('playing');
          isPlaying = true;
        }).catch(err => {
          console.log('Müzik başlatılamadı:', err);
          musicToggle.textContent = '🎵';
          musicToggle.title = 'Müziği başlatmak için tıklayın';
        });
      }
    });

    // Müzik bittiğinde butonu sıfırla
    audio.addEventListener('ended', function() {
      console.log('Müzik bitti');
      musicToggle.textContent = '🎵';
      musicToggle.classList.remove('playing');
      isPlaying = false;
    });

    // Müzik yükleme hatası
    audio.addEventListener('error', function(e) {
      console.log('Müzik yükleme hatası:', e);
      musicToggle.textContent = '🎵';
      musicToggle.title = 'Müzik dosyası bulunamadı';
    });
  } else {
    console.log('Müzik elementi bulunamadı');
  }
});

// Mektup açma/kapama fonksiyonu
const letter = document.getElementById('letter');
const closeButton = document.querySelector('.close-letter');

if (letter) {
  letter.addEventListener('click', function() {
    if (!letter.classList.contains('opened')) {
      letter.classList.add('opened');
    }
  });
}

if (closeButton) {
  closeButton.addEventListener('click', function(e) {
    e.stopPropagation();
    letter.classList.remove('opened');
    
    // Mektup kapatıldığında müziği durdur
    const audio = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    if (audio && musicToggle) {
      audio.pause();
      audio.currentTime = 0; // Müziği başa sar
      musicToggle.textContent = '🔇';
      musicToggle.classList.remove('playing');
      isPlaying = false;
    }
  });
}

// Geri sayım: 13 Haziran 2025 15:00
const startDate = new Date('2025-06-13T15:00:00');
function updateCountdown() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / (3600*24));
  const hours = Math.floor((diff % (3600*24)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;
  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown(); 