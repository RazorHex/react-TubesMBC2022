import mbc from '../assets/img/mbc logo.png'
import old_mbc from '../assets/img/logolamambc.png'
import './css/Home.css'


const Home = () => {
  return (
    <section className="home">
      <div className="mbc card mb-3 bg-light bg-gradient ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={mbc}  className="img-fluid rounded-start h-100 img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title ">About MBC</h2>
              <p className="card-text">MBC memiliki kepanjangan Multimedia, Big Data, and Cyber Security, salah satu Laboratorium diatas naungan Kelompok Keahlian Nertworking, Cybernetics, dan Enginerering Management (KK NCM) yang mempelajari mengenai  Cyber Security, Bigdata, GIS, dan Gametech.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mbc card mb-3 bg-light bg-gradient ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={old_mbc}  className="img-fluid rounded-start h-100 w-auto img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title ">Sejarah MBC</h2>
              <p className="card-text">Laboratorium MBC pada awalnya bernama Laboratorium Aplication and Security (A&S) yang berada dibawah naungan
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