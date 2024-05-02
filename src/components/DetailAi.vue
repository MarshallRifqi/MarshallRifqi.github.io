<template>
    <main>
    ``<div class="container">
        <div class="main-arc">
        <!-- <p></p> -->
        <div class="main-title">
            <h2 class="page-title">ChatGPT Minggir, AI Baru Google Punya Fitur Secanggih Ini</h2>
            <p class="tag tag-blue">Technology</p>
            <p class="writer">Rizky Aris Adzin, 01 Mei 2024</p>
        </div>
        <img src="@/assets//google.jpeg" alt="">
        <figcaption>Tesla Model S</figcaption>
        <p class="content-blog">Google meluncurkan sistem Artificial Intelligence (AI) baru. Berbeda dengan ChatGPT, AI Google yang dinamai ImageFX merupakan alat untuk membuat gambar berdasarkan perintah teks.</p>
        <p class="content-blog">Cara kerja ImageFX sama dengan MusicFX Google. Tools tersebut memiliki 'chip' dan kata kunci untuk menyempurnakan perintah.

Chip dalam ImageFX bertugas untuk membuat gambar yang diinginkan dengan beberapa versi alternatif. Pengguna dapat memilih gambar yang sudah dibuat tersebut. 

Namun untuk sekarang ImageFX baru tersedia dalam bahasa Inggris. Aksesnya juga baru tersedia untuk beberapa negara yakni Amerika Serikat (AS), Selandia Baru dan Kenya.</p>
        <p class="content-blog">Untuk menggunakannya, Anda perlu mengakses AI Test Kitchen. Berikut tahapannya, dikutip dari Toms Guide, Senin (5/2/2024):</p>
        <!-- <hr> -->
        <p class="title-other">Check Out Our Other Blogs</p>
        <section>
            <div class="section-one">
                <img src="@/assets/nvidia1.jpg" alt="" class="section-img">
                <p class="section-title">NVIDIA Mengumumkan GeForce RTX 40 Series: Revolusi Baru di Dunia GPU</p>
            </div>
            <div class="section-one">
                <img src="@/assets/parfume1.jpg" alt="" class="section-img">
                <p class="section-title">Fragrance: Seni Aroma yang Menghanyutkan</p>
            </div>
            <div class="section-one">
                <img src="@/assets/rocket1.jpg" alt="" class="section-img">
                <p class="section-title">SpaceX Meluncurkan Misi Baru: Mengirim Astronot ke Stasiun Luar Angkasa Internasional (ISS)</p>
            </div>
        </section>
            <!-- <hr> -->
            <p class="content-blog">Tidak hanya ramah lingkungan, Tesla juga menawarkan performa yang luar biasa. Dengan akselerasi yang cepat dan responsif, serta kenyamanan berkendara yang luar biasa, mobil Tesla memberikan pengalaman mengemudi yang tak tertandingi.</p>
            <img src="@/assets/tesla-inside.jpg" alt="">
            <figcaption>Tesla Model S Dashboard</figcaption>
            <p class="content-blog">Selain itu, Tesla telah memimpin dalam pengembangan teknologi otonom. Fitur-fitur seperti Autopilot memungkinkan mobil untuk mengemudi sendiri dalam kondisi tertentu, meningkatkan kenyamanan dan keamanan pengemudi.</p>
            <p class="content-blog">Terlepas dari inovasi teknologi dan kinerja yang luar biasa, Tesla juga menawarkan desain yang futuristik dan menarik. Dari Model S yang elegan hingga Model X yang inovatif dengan pintu belakang sayap elangnya, setiap mobil Tesla menawarkan kombinasi yang unik antara estetika dan fungsionalitas.</p>
            <p class="content-blog">Dengan semua ini, tidak mengherankan jika mobil Tesla telah menjadi ikon dalam industri otomotif modern. Dengan terus mengembangkan teknologi baru dan menantang batas-batas konvensional, Tesla terus memimpin revolusi mobil listrik dan merubah cara kita memandang transportasi.</p>
        </div>    
        <div class="side-arc">
            <a href="">
            <!-- <img class="ads-stick" src="@/assets/ads1.png" alt=""> -->
          </a>
          <div class="ads-stick">
            <!-- <div class="section-one"> -->
                <img src="@/assets/parfume1.jpg" alt="" class="section-img">
                <p class="section-title">Fragrance: Seni Aroma yang Menghanyutkan</p>
              <!-- </div> -->
          </div>
          <div class="ads-stick">
            <!-- <div class="section-one"> -->
              <img src="@/assets/rocket1.jpg" alt="" class="section-img">
                <p class="section-title">SpaceX Meluncurkan Misi Baru: Mengirim Astronot ke Stasiun Luar Angkasa Internasional (ISS)</p>
              <!-- </div> -->
          </div>
          <div class="ads-stick">
            <!-- <div class="section-one"> -->
                <img src="@/assets/nvidia1.jpg" alt="" class="section-img">
                <p class="section-title">NVIDIA Mengumumkan GeForce RTX 40 Series: Revolusi Baru di Dunia GPU</p>
              <!-- </div> -->
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped> 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .tag {
  /* align-self: flex-start; */
  display: inline;
  padding: .25em .75em;
  border-radius: 1em;
  font-size: .75rem;
}


.tag-blue {
  background: #56CCF2;
  background: linear-gradient(to bottom, #2F80ED, #56CCF2);
  color: #fafafa;
}
  
  p, h4, span, h5, small,hr, h2, figcaption {
      color: #000;
  }

  main{
    margin-top: 130px;
  }
  
  body{
    /* font-family: monospace; */
    /* font-family: monserrat; */
    font-family: "Montserrat", sans-serif;
    /* font-optical-sizing: auto; */
    /* font-weight: <weight>;
    font-style: normal; */
    background: #7f7fd5;
    background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
    height: 100vh;
  }

  .main-title{
    margin-bottom: 50px;
  }
  
  .writer{
    font-size: .8rem;
  }
  
  .page-title{
    /* margin-bottom: 50px; */
  }
  
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

  
  .container{
    width: 1140px;
    /* border: 1px solid black; */
    margin: 0 auto;
    box-sizing: border-box;
    /* display: flex; */
    /* flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 3fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    padding: 5px;
    column-gap: 3rem;
  }
  
  .main-arc{
    /* background-color: salmon; */
    padding: 10px;
  }
  
  /* hr{
    margin-bottom: 50px;
  } */
  
  h2{
    font-size: 2rem;
  }
  
  img{
    width: 100%;
  }
  
  figcaption{
    font-weight: 500;
    font-size: small;
    margin-bottom: 50px;
  }
  
  .content-blog{
    /* line-height: 160%; */
    line-height: 2rem;
    font-size: 1.25rem;
    margin-bottom: 2.20rem;
  }
  
  .side-arc{
    /* background-color: aqua; */
  }
  
  section{
    display: flex;
    /* margin: 5px; */
    justify-content: space-between;
    /* width: fit-content; */
    /* border: 1px solid black ; */
    /* padding: 5px; */
    border-bottom: 1px solid black;
    margin-bottom: 50px;
  }
  
  .section-one{
    margin: 5px;
    width: 100%;
  }
  
  .section-img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    
  }
  
  .section-title{
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.7rem;
  }
  
  .title-other{
    font-size: 1rem;
    font-weight: bold;
  }
  
  .side-arc{
    /* background-color: aqua; */
    /* border: 1px solid black; */
    display: flex ;
    flex-direction: column;
    justify-content: space-between
    /* gap: 90px; */
  }
  
  .ads-stick{
    position: sticky;
    margin: 50px;
    top: 10px;
    /* left: 150px; */
    width: 250px;
    margin: 0 auto;
    background-color: 	#E5E4E2;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 100px;
  }
  </style>