// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
  // Menü kontrolü
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const pages = document.querySelectorAll('.page');

  // Menü açma/kapama
  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  // Sayfa geçişleri
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetPage = this.getAttribute('data-page');
      
      // Aktif menü öğesini güncelle
      menuItems.forEach(mi => mi.classList.remove('active'));
      this.classList.add('active');
      
      // Sayfaları gizle/göster
      pages.forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(targetPage + '-page').classList.add('active');
      
      // Menüyü kapat
      menu.classList.remove('active');
    });
  });

  // Geri sayım hesaplama
  function updateCountdown() {
    // İlişki başlangıç tarihi (13 Haziran 2025)
    const startDate = new Date('2025-06-13T00:00:00');
    const now = new Date();
    const difference = now - startDate;

    if (difference > 0) {
      // Toplam süre hesaplama (ondalık)
      const totalSeconds = Math.floor(difference / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      // Ay hesaplama - daha doğru hesaplama
      const monthsDiff = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
      const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      const daysDiff = now.getDate() - startDate.getDate();
      const totalMonthsDecimal = monthsDiff + (daysDiff / daysInCurrentMonth);
      const totalYearsDecimal = totalMonthsDecimal / 12;

      // Kalan süre hesaplama (tam sayı)
      const months = Math.floor(totalDays / 30.44) % 12;
      const days = totalDays % 30;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      // Sayaç güncelleme
      document.getElementById('months').textContent = months.toString().padStart(2, '0');
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

      // Toplam süre güncelleme (ondalık)
      document.getElementById('total-years').textContent = totalYearsDecimal.toFixed(2);
      document.getElementById('total-months').textContent = totalMonthsDecimal.toFixed(2);
      document.getElementById('total-days').textContent = totalDays;
      document.getElementById('total-hours').textContent = totalHours;
      document.getElementById('total-minutes').textContent = totalMinutes;
      document.getElementById('total-seconds').textContent = totalSeconds;
    }
  }

  // Sayaç güncellemesi
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Mektup kontrolü
  const letter = document.getElementById('letter');
  const closeLetter = document.querySelector('.close-letter');
  const musicToggle = document.getElementById('music-toggle');
  const audio = document.getElementById('background-music');

  if (letter) {
    letter.addEventListener('click', function() {
      this.classList.add('opened');
      // Mektup açıldığında müziği otomatik başlat
      if (audio && audio.paused) {
        audio.volume = 0.3;
        audio.play().then(() => {
          musicToggle.textContent = '🔇';
          musicToggle.title = 'Müziği Durdur';
        }).catch(err => {
          console.log('Müzik başlatılamadı:', err);
        });
      }
    });
  }

  if (closeLetter) {
    closeLetter.addEventListener('click', function(e) {
      e.stopPropagation();
      letter.classList.remove('opened');
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (musicToggle) {
        musicToggle.textContent = '🎵';
        musicToggle.title = 'Müziği Aç';
      }
    });
  }

  // Müzik kontrolü
  if (musicToggle && audio) {
    musicToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (audio.paused) {
        audio.volume = 0.3;
        audio.play().then(() => {
          this.textContent = '🔇';
          this.title = 'Müziği Durdur';
        }).catch(err => {
          console.log('Müzik başlatılamadı:', err);
          this.textContent = '🎵';
          this.title = 'Müziği başlatmak için tıklayın';
        });
      } else {
        audio.pause();
        audio.currentTime = 0;
        this.textContent = '🎵';
        this.title = 'Müziği Aç';
      }
    });
  }

  // Fotoğraf kartlarını oluştur
  createPhotoCards();

  // Doğum günü mektubu kontrolü
  const birthdayLetter = document.getElementById('birthday-letter');
  const closeBirthdayLetter = document.querySelector('.close-birthday-letter');

  if (birthdayLetter) {
    birthdayLetter.addEventListener('click', function() {
      // Doğum günü kontrolü - 24 Temmuz 2025 00:00'dan sonra açılsın
      const today = new Date();
      const birthday = new Date('2025-07-24T00:00:00'); // Zehra'nın doğum günü tarihini buraya yaz
      
      if (today >= birthday) {
        this.classList.add('opened');
        
        // Mektup açıldığında müziği otomatik başlat
        const birthdayAudio = document.getElementById('birthday-background-music');
        const birthdayMusicToggle = document.getElementById('birthday-music-toggle');
        if (birthdayAudio && birthdayMusicToggle && birthdayAudio.paused) {
          birthdayAudio.volume = 0.3;
          birthdayAudio.play().then(() => {
            birthdayMusicToggle.textContent = '🔇';
            birthdayMusicToggle.title = 'Müziği Durdur';
          }).catch(err => {
            console.log('Müzik başlatılamadı:', err);
            birthdayMusicToggle.textContent = '🎵';
            birthdayMusicToggle.title = 'Müziği başlatmak için tıklayın';
          });
        }
      } else {
        // Doğum gününden önceyse uyarı göster
        const timeLeft = birthday - today;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        alert(`Bu mektup sadece doğum gününden sonra açılabilir! 🎂\n\nKalan süre: ${daysLeft} gün, ${hoursLeft} saat, ${minutesLeft} dakika`);
      }
    });
  }

  if (closeBirthdayLetter) {
    closeBirthdayLetter.addEventListener('click', function(e) {
      e.stopPropagation();
      birthdayLetter.classList.remove('opened');
      
      // Mektup kapatıldığında müziği durdur
      const birthdayAudio = document.getElementById('birthday-background-music');
      const birthdayMusicToggle = document.getElementById('birthday-music-toggle');
      if (birthdayAudio && birthdayMusicToggle) {
        birthdayAudio.pause();
        birthdayAudio.currentTime = 0;
        birthdayMusicToggle.textContent = '🎵';
        birthdayMusicToggle.title = 'Müziği Aç';
      }
    });
  }

  // Doğum günü müzik kontrolü
  const birthdayMusicToggle = document.getElementById('birthday-music-toggle');
  const birthdayAudio = document.getElementById('birthday-background-music');

  // Doğum günü müzik dosyasını script'te tanımla
  if (birthdayAudio) {
    birthdayAudio.innerHTML = '<source src="music/dede.mp3" type="audio/mpeg">';
  }

  if (birthdayMusicToggle && birthdayAudio) {
    birthdayMusicToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (birthdayAudio.paused) {
        birthdayAudio.volume = 0.3;
        birthdayAudio.play().then(() => {
          this.textContent = '🔇';
          this.title = 'Müziği Durdur';
        }).catch(err => {
          console.log('Müzik başlatılamadı:', err);
          this.textContent = '🎵';
          this.title = 'Müziği başlatmak için tıklayın';
        });
      } else {
        birthdayAudio.pause();
        birthdayAudio.currentTime = 0;
        this.textContent = '🎵';
        this.title = 'Müziği Aç';
      }
    });
  }


});

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
    music: 'music/yanimda.mp3' 
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
    music: 'Her.mp3' 
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
    text: `Ege'ye attığımız o video ama çok güzel bi video.Zeram çok mutlu zıplayan kedi olmus.(Tabi kaptı benim gibi oğlanı bırakmıyo).O çiçek buketinde ki 
    çiçekleri seni düşünerek aldım.Beyaz ve toz pembe renkleri benim hayatıma geldiğinden beri benim hayatımın güzelleşmesini temsil ediyordu.Buketin siyah
    kağıtla kaplı olması benim kötü zamanlarımda ki karanlığımı içindeki çiçekler ise benim kalbimde zehranın yaptığı güzel işlerdi..`, 
    music: 'music/m.mp3' 
  },
  { 
    file: 'düscem.mp4',     
    text: `O gün o videoyu çektiğim için çok mutluyum.Bu kadar tatlış bir video olamazdı.O kollarınla bana tutunman ve sımsıkı sarılman o kadar güzel hissettirdi ki...
    hep bana öyle sımsıkı sarıl hic bırakma olur mu?Çünkü ben seni çok seviyorum sen de kendimi buluyorum.Tatlı tatlı bide düscem düscem diyon yicem ağzını🫶`, 
    music: 'music/ahu.mp3' 
  },
  { 
    file: 'fes.jpeg',       
    text: `KERİMİN FESİNİ CALDIM.O kadar mutluyum ki fesimi çaldığına 10 fesim olsa 11 tanesini sana verirdim.Bugün remzi ve Nuray hocayla birde seymen aslan gardeşimle beraber
    mekana intikal ediyoruz bi kaç kere araba yolculuğumuz oldu ama bu da çok sevdiğim fotoğraflardan ayrıca fes sana çok yakışıyo ama sadece benim fesim. `, 
    music: 'music/alla.mp3' 
  },
  { 
    file: 'fesli.jpeg',     
    text: `Daha aramızda bisey yok ama fesimizi kendine yakıştıranlar var,sadece fes mi? şüpheli bilmiyoruz.Ayşe zeynep aslan kardeşimle beraber foto çekiniyoruz bebisimiz çok mutlu
    gerçekten.Hep böyle mutlu ol gül tamam mı.`, 
    music: 'music/saril.mp3' 
  },
  { 
    file: 'gang.jpeg',      
    text: `Ekip no face maskeli beşler ateş altında kaldı kardeşler.Bu dizeyi hep söylüyom çok müzik zevkine uymuyo ama olsun hep öyle romantik şarkılar koyarak gittik ben senle 
    sadece romantizm aşk için sevgili değilim yanında çocuklaşabildiğim eğlenebildiğim gülebildiğim için sevgilinim.O yüzden ekip fire🔥🔥🔥`, 
    music: 'music/noface.mp3' 
  },
  { 
    file: 'gülücük.jpeg',   
    text: `O kadar güzel gülüyorsun ki içimde ki karanlığa ışık oluyosun çok seviyorum seni.Bu zamanlar aramızda bişeyler yok ama aslan gardeşim dostinyom olarak hayatımdasın 
    eski gözlüğünü de çok seviyodum ama şimdi ayrı bi güzel olmussun be.Şu fotoğrafları yazarken bidaha baktım real fire.❤️‍🔥`, 
    music: 'music/start.mp3' 
  },
  { 
    file: 'kimya.jpeg',     
    text: `Kimya sınavımız var beraber kimya çözüyoruz ben tabi dehset çözüyorum ama sınavda sıcıyorum. Ama senle ders çalışmak bile çok güzel arada gözlerin dikkatimi dağıtıyo ama
    ben yine focuslanıyom relax ol. Zaten süleyman hoca da razı 2 çifti onayladım birini ayırdım diyo. 3. onayladığım çift olabilirsiniz diyo bilemedim artık evlencez galiba.🐧`, 
    music: 'music/kapi.mp3' 
  },
  { 
    file: 'mistik.jpeg',    
    text: `Tiyatro çıkışı baba şekerin telefonundan çekilmiş fotoğrafımız iyi ter atmısız iyi gülmüşüz ağlamışız güzel bir gün geçirmişiz. Beraber fotoğraf çekiliyoruz anne yönem 
    büyük plandan habersiz görmüyo. Tulumbacıları övüyo övüyo ama sen diyemiyon ki anne benim sevilim de tulumbacı.Çiçeklerin çok güzel ama benim aldığım çiçek daha güzel kusura bakma ayşe
    zeynep.`, 
    music: 'music/succes.mp3' 
  },
  { 
    file: 'mutlu.jpeg',     
    text: `Uzun zaman sonra yüzümde ki o gerçek gülümsemeyi görüyorum. Bunu başarabildin ya helal olsun.O günkü saçların da ayrı bi güzel olmuştu valla kıyafetlerin falan bakmaktan alamadım
    kendimi.O gün kurt biraz seni üzmüştü.Yanına gelmedim kusura bakma gelsem daha çok ağlardın sarılıp ama mükemmeldin askim.İşte bu benim sevgilim diyebildim.Dam üstüne çul serer de fav 
    şarkılarımdan biri herkese kullanmam ayıktırayım.`, 
    music: 'music/dam.mp3' 
  },
  { 
    file: 'öpücük.jpeg',    
    text: `Artık bir manyağın var sevgilim.Bunu nasıl becerdin bilmiyorum ama yaptın valla.Bugün halk bahçesi gitmiştik beraber ben alık alık üstüme fuse tea dökmüştüm.Sonra tuvalete gittiğimde de
    burnum kanamıştı.Sen tabi takıl zor gördü zaten bizi sonra yine yanına gelmiştim.Halk bahçesi seninle ayrı bi güzel oluyor.Hatta senle geçirdiğim her dakika çok güzel oluyor.`, 
    music: 'music/batu.mp3' 
  },
  { 
    file: 'öpücük1.jpeg',   
    text: `Burda yine ben yanağına bir öpücük konduruyorum ama favorim dudakların.Burda tiyatro öncesi takılmaca yapıyoruz.Tabi boş bulduğum an sarılıyorum.O kaçamaklar okadar güzel oluyor ki 
    anlatamam.Telefonunun arkasında da benim verdiğim çiçeğimiz duruyo.Çicek de kılıfa bi fena yakışmış he.🔥`, 
    music: 'music/sicak.mp3' 
  },
  { 
    file: 'öpücük2.jpeg',   
    text: `Burda da bebisimiz bizi öpüp mal ediyo.Kırlangıç günü öğretmenler odası date.Artık öğretmenler odası date atmadık da demeyiz.Seymen prova alırken biz date atıyoruz çok farklı sayılmayız 
    ama baya iyiyiz he.Ama burda da çok tatlıs öpüyom.Beğendim seni.🌸`, 
    music: 'music/öyle.mp3' 
  },
  { 
    file: 'tasıma isi.jpeg',
    text: `Gülce dost sen ben kütüphane date atmısız ardından tabyalar geçmişiz.Sen benle uğraşıyon o sinirli kedi gibi.Sonra ben seni kavrıyom tabi bırakırmıyım hiç.
    Artık murathan da gelicek inşallah kütüphane date atıcaz.Ulan başarıyoz la gerçekten.Gülce dostta çok mutlu.Olcak olcak ben beğendim bu işi.Beraber yksyi diktiğimiz de dehset olucak
    o gğnü bekliyorum.🙏`, 
    music: 'music/balik.mp3' 
  },
  { 
    file: 'video.mp4',      
    text: `Böyle bana tatlıs tatlıs videolar atıyosun ya bayılıyorum ya.En sevdiğim şey falan.Oturuyom wp de konusuyoz bi anda bi video geliyo.Pamuk gibi oluyorum.Asık mıyım neyim anlamadım. 
    Bana hep böyle tatlıs videolar at olur mu?Cok seviyorum cok seviyorum cok.💓`, 
    music: 'music/mavi.mp3' 
  },
  { 
    file: 'zera ayna foto.jpeg', 
    text: `Beraber otistik olduğumuz için ayna fotoğrafı çekilememiştik. Ama tabiki de o kadar iyi bir çiftiz ki normal ayna fotoğraflarından 10 kat daha güzel ve samimi bir fotoğraf çıkartmıştık.
    Aynada da çok güzel görünüyoruz. Ama olay o andaki güzel his der geçerim. Gururlu vatan gülüşü atıyorum.Her halini her zerreni çok seviyorum.Yüzüklerin, bilekliklerin hepsi çok hoşuma gidiyo.
    Bu arada saat 2.32 hala yapmaya devam ediyorum.Az önce yatırdım seni askim kusura bakma.`, 
    music: 'music/gider.mp3' 
  },
  { 
    file: 'zera.jpeg',      
    text: `Bitanem askim canım herşeyim o kadar güzelsin ki şu fotoğrafa bakınca içim gidiyo hala.Bide sen beni başbaşayken düşün.O kadar güzel seviyorum ki seni.Gözlerin, dudakların hepsi 
    ayrı bi güzel.Adil değil çok güçlüsün.Sen bana ne kadar bebis desen de bizim alemde ağırlığımz devam ediyo.Ayrıc bebis sensin benim kollarımda görüyoz seni.🐣`, 
    music: 'music/seni.mp3' 
  },
  { 
    file: 'roll.jpg',
    text: `İŞTE BEKLEDİĞİM O TRİPLE DATE GÜNÜ GELDİ.Beril yengemizi son anda yanlıştan döndürerek büyük işler yatpım bence bu sayede ekip toplandı.O kadar güzel bir gündü ki keske o günü tekrar 
    yasasak.O gün içtiğim yeşil içeceği çok sevdim güzeldi.Ayrıca yemek masasında hiperaktif bir çocuk gibi davranabildim cok süper sohbetler döndü ayrıca karyanın amk.İyi ki varsın sevgilim.
     Bunları başka biri olsa yapamazdım.Ayrıca o gün tam bu müzik gibi hissettiriyo.❤️‍🔥`,
    music: 'music/freaks.mp3' 
  },
  { 
    file: 'ezop.jpg',
    text: `Yine triple date gününden bir foto.Senin işte bu yanını aşırı seviyorum.Ben böyle saçma veya sıkıcı bi işle uğraşsam bile o kadar dikkatle dinliyosun ki bu beni çok mutlu ediyo.
    Hayatımda olduğun için çok sanslıyım.Ben orda araba yarısı oynarken güzel güzel beni seyrediyosun ve O GÜN BİRBİRİMİZE PASTA YEDİRDİK (bilinç akışı özür😞).Evlenek artık çok uzun sürdü.
    Çok seviyorum seni.`,
    music: 'music/heart.mp3' 
  },
];

// Fotoğraf kartlarını oluştur
function createPhotoCards() {
  const content = document.getElementById('content');
  if (!content) return;

  cardData.forEach((item, idx) => {
    const isVideo = item.file.endsWith('.mp4');
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    
    // Yazıyı temizle - fazla boşlukları ve satır sonlarını düzelt
    const cleanText = item.text.trim().replace(/\s+/g, ' ').replace(/\n/g, ' ');
    
    cardContainer.innerHTML = `
      <div class="flip-card">
        <div class="card-front">
          ${isVideo ? `<video src="images/${item.file}" controls poster="images/${cardData[(idx+1)%cardData.length].file.replace('.mp4','.jpeg')||'zera.jpeg'}"></video>` : `<img src="images/${item.file}" alt="">`}
        </div>
        <div class="card-back">
          <div class="back-text">${cleanText}</div>
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
      // Yeni bir karta tıklandığında önceki açık kartları kapat
      const allCards = content.querySelectorAll('.card-container');
      allCards.forEach(card => {
        if (card !== cardContainer && card.classList.contains('flipped')) {
          // Önceki kartı kapat
          card.classList.remove('flipped');
          const prevAudio = card.querySelector('.card-audio');
          const prevBtn = card.querySelector('.audio-btn');
          if (prevAudio) {
            prevAudio.pause();
            prevAudio.currentTime = 0;
          }
          if (prevBtn) {
            prevBtn.textContent = '🎵';
            prevBtn.title = 'Müziği Aç';
          }
        }
      });
      
      // Şimdi yeni kartı aç
      const wasFlipped = cardContainer.classList.contains('flipped');
      cardContainer.classList.toggle('flipped');
      const isNowFlipped = cardContainer.classList.contains('flipped');
      
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
} 
