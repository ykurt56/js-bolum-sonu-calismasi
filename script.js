// KULLANICIDAN VERİ ALMAK ||||||||||

// let fullName = prompt("Lütfen Adınızı Giriniz.");

// let greeting = document.querySelector("#greeting");

// greeting.innerHTML = `${greeting.innerHTML} <small style= color:red> ${fullName} </small>`;

//  ||||||||||||||||||||||||||||||||||||||||||||||||||||

/* let lastchild = document.querySelector("ul#list>li:last-child");
 lastchild.innerHTML = "SON";

 let firstchild = document.querySelector("ul#list>li:first-child");
 firstchild.innerHTML = "İLK";*/

// let ulDOM = document.querySelector("ul#list");
// let liDOM = document.createElement(`li`);

// liDOM.innerHTML = "KENDİ OLUŞTURDUĞUMUZ ÖĞE";

// ulDOM.append(liDOM); BU SONA EKLİYOR

// ulDOM.prepend(liDOM); BU BAŞA EKLİYOR

// let greeting = document.querySelector("#greeting");
// greeting.classList.add("text-primary");
// greeting.classList.add("title");
// greeting.classList.add("yanyana", "class", "ekleme");

// greeting.classList.remove("yanyana", "class", "ekleme", "title");

// == EŞİTSE
// === HEM DEĞERİ HEM DE TÜRÜ EŞİTSE (örnek olarak, hem string olcak hem yazı)
// != EŞİT DEĞİLSE
// < küçükse <= kücükeşitse
// && VE
// || VEYA
// ! DEĞİL (TERSİ)

// let userName = prompt("Kullanıcı Adınızı Giriniz");

// if (userName.length > 0) {
//   document.write(`GİRİŞ YAPILDI ${userName}`);
// } else {
//   document.write(`Giriş Başarısız `);
// }

/*           
let userName = prompt("Kullanıcı Adınızı Giriniz");
let age = prompt("Yaşınızı Adınızı Giriniz");

if (userName && age >= 18) {
  document.write("Ehliyet Alabilir");
} else if (!userName) {
  document.write("KULLANICI ADINIZ YOK");
} else if (!age) {
  document.write("Yaş Bilginiz yok veya 18 yaşından küçüksünüz.");
}

 */

// Koşul ? doğruysa : yanlışsa

// örnek

const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`;

const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`;

let examGrade = prompt("Puanı Giriniz.");
let textİnfo;
let info = document.querySelector("#info");

if (examGrade >= 0 && examGrade <= 100) {
  textİnfo = SMILE;
  info.classList.add("text-primary");
  if (examGrade >= 90) {
    textİnfo += " AA";
  } else if (examGrade >= 85) {
    textİnfo += " BA";
  } else if (examGrade >= 80) {
    textİnfo += " BB";
  } else if (examGrade >= 75) {
    textİnfo += " CB";
  } else if (examGrade >= 70) {
    textİnfo += " CC";
  } else if (examGrade >= 65) {
    textİnfo += " DC";
  } else if (examGrade >= 60) {
    textİnfo += " DD";
  } else if (examGrade >= 50) {
    textİnfo += " FD";
  } else if (examGrade < 50) {
    textİnfo = `${FROWN} FF`;
    info.classList.remove("text-primary");
    info.classList.add("text-danger");
  }
} else {
  textİnfo =
    FROWN + " ( 0 ile 100 arasında Lütfen Geçerli Bir Sayı Giriniz.) " + FROWN;
}

info.innerHTML = `${textİnfo} -> ${examGrade}`;
console.log(textİnfo);
