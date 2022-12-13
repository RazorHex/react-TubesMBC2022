import data from '../assets/data/data.json'

import './css/Asisten.css'

const Asisten = () => {
  let imageHolder = 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  
  const card = () => {
    return data.map(dat => {
      return (
        <div className="nama">
          <br/>
          <div className="cs">
            <img src={imageHolder} alt='...' />
            <h2><b>{dat.Name}</b><br/><br/>
                {dat.Divisi} <br/>
                {dat.Angkatan} <br/>
                -------------------------- <br/>
                Reverse Engineering, Python, Git
            </h2>
          </div>
        </div>
      )
    })
  }

  // Returning to front
  return (
    <section className="lab">
        <div className="header">
            <h1>Asisten Laboratorium MBC</h1>
            <br/><br/>
        </div>
        
        <div className="row">

          {card()}
        </div>
    </section>
  )
}

export default Asisten;