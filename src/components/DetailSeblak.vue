<template>
    <main>
      <div class="container">
        <div class="main-arc">
        <!-- <p></p> -->
        <div class="main-title">
            <h2 class="page-title">Seblak, Makanan Khas Bandung Yang Diminati Banyak Orang.</h2>
            <p class="tag tag-brown">Food</p>
            <p class="writer">Rizky Aris Adzin, 01 Mei 2024</p>
        </div>
        <img src="@/assets//seblak1.jpg" alt="">
        <figcaption>Tesla Model S</figcaption>
        <p class="content-blog">Mobil Tesla telah menjadi sorotan dalam industri otomotif selama beberapa tahun terakhir. Dikenal karena inovasi teknologinya, performa yang luar biasa, dan fokus pada keberlanjutan, Tesla telah mengubah cara kita memandang mobil listrik. Mari kita lihat mengapa mobil Tesla begitu menarik dan revolusioner.</p>
        <p class="content-blog">Mobil Tesla, yang dipimpin oleh visi Elon Musk, telah membuka jalan untuk mobilitas masa depan yang bersih dan berkelanjutan. Dengan menggabungkan teknologi canggih dengan desain yang menarik, Tesla telah menghasilkan mobil yang tidak hanya menarik perhatian, tetapi juga merubah paradigma tentang bagaimana mobil masa depan seharusnya.</p>
        <p class="content-blog">Salah satu hal yang membedakan Tesla dari produsen mobil lainnya adalah fokusnya pada penggunaan energi bersih. Semua mobil Tesla sepenuhnya listrik, tidak menghasilkan emisi langsung selama digunakan. Ini berkontribusi pada upaya global untuk mengurangi polusi dan ketergantungan pada bahan bakar fosil.</p>
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


  .tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
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