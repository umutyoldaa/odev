$(document).ready(function() {

    var arrLang={
        
        
        'en':{
            '0':'Start Discover',
            '1':'About',
            '2':'Picture',
            '3':'Contact',
            '4':'Welcome to my page',
            '5':'Student in Computer Programming | Half-time Traveler',
            '6':'Photos',
            '7':'About',
            '8':'I am a student in Iskenderun Technical University in Iskenderun/Hatay. My departmant is Computer Programming.I love my departmant and i really would like to work in this field!',
            '9':'Hello! My name is Emre Kocyatagi. I am energetic person you evern seen. I am 23 years old. I like travelling, hikiking, free climibing. I love to meet new people and culture.',
            '10':'Download Now!',
            '11':'Contact me',
            '12':'Send',
            '13':'Location',
            '14':'Iskenderun Technical University MYO',
            '15':'Around the web',
            '16':'About freelancer',
            '17':'Call me!',
            '18':'To Learn More About Me!',
        },

        'tr':{

            '0':'Keşfetmeye Başla',
            '1':'Hakkında',
            '2':'Fotoğraflar',
            '3':'İletişim',
            '4':'Sayfama Hoşgeldiniz',
            '5':'Bilgisayar Programcılıgı ögrencisi | Yari zamanli gezgin',
            '6':'Fotoğraflar',
            '7':'Hakkımda',
            '8':'İskenderun/Hatayda İskenderun Teknik Üniversitesinde öğrenciyim. Bölümüm Bilgisayar Programcılığı. Bölümümü seviyorum ve bu alanda çalışmayı gerçekten çok istiyorum!',
            '9':'Merhaba! Adım Emre Koçyatağı. Ben şimdiye kadar gördüğün enerjik insanım. Ben 23 yaşındayım. Seyahat etmeyi, yürüyüş yapmayı, serbest tırmanmayı severim. Yeni insanlarla ve kültürlerle tanışmayı seviyorum.',
            '10':'Şimdi İndir',
            '11':'İletişime Geç',
            '12':'Gönder',
            '13':'Konum',
            '14':'İskenderun Teknik Üniversitesi MYO',
            '15':'Sosyal Medya',
            '16':'Freelancer hakkında',
            '17':'Ara Beni!',
            '18':'Hakkımda daha fazla bilgi için',

 


        },
        'deu':{
            '0':'Beginnen Sie mit der Erkundung',
            '1':'Information über',
            '2':'Fotos',
            '3':'Kommunikation',
            '4':'Wilkommen auf meiner Seite',
            '5':'Student in Computerprogrammierung | Halbzeitreisender',
            '6':'Fotos',
            '7':'Information über',
            '8':'Ich bin Student an der Iskenderun Technical University in Iskenderun/Hatay. Mein Hauptfach ist Computerprogrammierung. Ich liebe meine Abteilung und möchte unbedingt in diesem Bereich arbeiten!',
            '9':'Hallo! Mein Name ist Emre Koçyatagi. Ich bin die energiegeladene Person, die Sie je gesehen haben. Ich bin 23 Jahre alt. Ich mag reisen, wandern, freies Klettern. Ich liebe es, neue Menschen und Kulturen kennenzulernen.',
            '10':'jetzt downloaden',
            '11':'Kontaktiere uns',
            '12':'Schicken',
            '13':'Standort',
            '14':'Technische Universität Iskenderun MYO',
            '15':'Soziale Medien',
            '16':'Über Freiberufler',
            '17':'Ruf mich an!',
            '18':'Für mehr Informationen über mich',

        },
        
        
    };


    
$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="en"){
        $("#dropdownMenuButton1").html("English");
    }
    else if(lang=="tr"){
        $("#dropdownMenuButton1").html("Türkçe");

    }
    else if(lang=="deu"){
        $("#dropdownMenuButton1").html("German");
    }

    $('a,h5,p,h1,h2,h4,h6,span,li,button,h3,label').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    
  });

});