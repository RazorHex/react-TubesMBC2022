import './css/Dosen.css'

import nyb from '../assets/img/NYB.jpg'
import sui from "../assets/img/SUI.jpeg"
import fav from "../assets/img/FAV.jpg"

const Dosen = () => {
  return (
    <>
    <div className="container-xl">
    <h1 className="Title_pembina" align="center">Pembina Laboratorium MBC</h1>
    <div className="row">
      <div className="col">
        <div className="card h-100">
          <img src={nyb} className="card-img-top" height="349px" alt='...'/>
          <div className="card-body">
            <h5 className="card-title">Dr. Nyoman Bogi Aditya Karna S.T., M.T.</h5>
            <p className="card-text">Kode Dosen: NYB<br/>
              NIP : 11730049<br/>
              Email : aditya@telkomuniversity.ac.id</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={sui} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sussi S.Si., M.T.</h5>
            <p className="card-text">Kode Dosen: SUI<br/>
              NIP : 20830010<br/>
              Email : sussiss@telkomuniversity.ac.id</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={fav} className="card-img-top" height="349px" alt='...'/>
          <div className="card-body">
            <h5 className="card-title">Dr.Eng. Favian Dewanta, S.T., M.Eng.</h5>
            <p className="card-text">Kode Dosen: FAV<br/>
              NIP : 15870022<br/>
              Email : favian@telkomuniversity.ac.id</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Dosen;