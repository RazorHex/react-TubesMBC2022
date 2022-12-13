import mbc from '../assets/img/mbc logo.png'
import old_mbc from '../assets/img/logolamambc.png'
import './css/Home.css'


const Home = () => {
  return (
    <section class="home">
      <div class="mbc card mb-3 bg-light bg-gradient ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={mbc}  class="img-fluid rounded-start h-100 img" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title ">About MBC</h2>
              <p class="card-text">MBC memiliki kepanjangan Multimedia, Big Data, and Cyber Security, salah satu Laboratorium diatas naungan Kelompok Keahlian Nertworking, Cybernetics, dan Enginerering Management (KK NCM) yang mempelajari mengenai  Cyber Security, Bigdata, GIS, dan Gametech.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mbc card mb-3 bg-light bg-gradient ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={old_mbc}  class="img-fluid rounded-start h-100 w-auto img" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title ">Sejarah MBC</h2>
              <p class="card-text">Laboratorium MBC pada awalnya bernama Laboratorium Aplication and Security (A&S) yang berada dibawah naungan
              Kelompok Keahlian Jaringan dan Multimedia (KK JMM) dan memiliki 6 divisi, antara lain Intrusion Detection (IDS),
              Voice
              Over Internet Protocol (VOIP), Game Technology, Interactive Video (IV), Geographic Information System, dan Web.
              Kemudian, berubah nama menjadi Laboratorium MBC pada 4 Oktober 2019 dengan 4 Divisi yaitu: Cyber Security,
              Bigdata,Multimedia (GIS, Game tech).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;