import mbc from '../assets/img/mbc logo.png'
import old_mbc from '../assets/img/logolamambc.png'
import './css/Home.css'


const Home = () => {
  return (
    <section class="home">
    <div class="row">
      <h1 class="abt text-center">About MBC</h1>
      <div class="col">
        <img src={mbc} class="mbc-logo" alt='MBC Logo'/>
      </div>
      <div class="col">
        <p>MBC memiliki kepanjangan Multimedia, Big Data, and Cyber Security, salah satu Laboratorium diatas naungan Kelompok Keahlian Nertworking, Cybernetics, dan Enginerering Management (KK NCM) yang mempelajari mengenai  Cyber Security, Bigdata, GIS, dan Gametech.</p>
      </div>
    </div>
    <div class="row">
      <h1 class="sejarah text-center">Sejarah MBC</h1>
      <div class="col">
        <img src={old_mbc} class="old-mbc-logo" alt='Old MBC Logo'/>
      </div>
      <div class="col">
        Laboratorium MBC pada awalnya bernama Laboratorium Aplication and Security (A&S) yang berada dibawah naungan
        Kelompok Keahlian Jaringan dan Multimedia (KK JMM) dan memiliki 6 divisi, antara lain Intrusion Detection (IDS),
        Voice
        Over Internet Protocol (VOIP), Game Technology, Interactive Video (IV), Geographic Information System, dan Web.
        Kemudian, berubah nama menjadi Laboratorium MBC pada 4 Oktober 2019 dengan 4 Divisi yaitu: Cyber Security,
        Bigdata,Multimedia (GIS, Game tech).
      </div>
    </div>
  </section>
  )
}

export default Home;