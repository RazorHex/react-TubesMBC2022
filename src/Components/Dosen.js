import './css/Dosen.css'


const Dosen = () => {
  return (
    <div class="container-xl">
      <h1 class="Title_pembina" align="center">Pembina Laboratorium MBC</h1>
      <div class="row">
        <div class="col">
          <div class="card h-100">
            <img src="assets\img\NYB.jpg" class="card-img-top" height="349px" alt="Pak Bogi"/>
            <div class="card-body">
              <h5 class="card-title">Dr. Nyoman Bogi Aditya Karna S.T., M.T.</h5>
              <p class="card-text">Kode Dosen: NYB<br/>
              NIP   : 11730049<br/>
              Email : aditya@telkomuniversity.ac.id</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="assets\img\SUI.jpeg" class="card-img-top" alt="Bu Sussi" />
            <div class="card-body">
              <h5 class="card-title">Sussi S.Si., M.T.</h5>
              <p class="card-text">Kode Dosen: SUI<br/>
                NIP   : 20830010<br/>
                Email : sussiss@telkomuniversity.ac.id</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img alt="Pak Favian" src="assets\img\FAV.jpg" class="card-img-top" height="349px"/>
            <div class="card-body">
              <h5 class="card-title">Dr.Eng. Favian Dewanta, S.T., M.Eng.</h5>
              <p class="card-text">Kode Dosen: FAV<br/>
                NIP   : 15870022<br/>
                Email : favian@telkomuniversity.ac.id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dosen;