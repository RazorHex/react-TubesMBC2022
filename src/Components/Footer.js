import './Footer.css'

const Foot = () => {
  return (
    <footer>
      <div className="footer-content">
        #WeAttackWeProtect<br/>
        Contact Us
        <ul className="socials">
          <div><a href="https://www.instagram.com/mbclab/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a></div>
          <div><a href="https://www.youtube.com/@mbcmedia1857" target="_blank" rel='noreferrer'><i className="fab fa-youtube"></i></a></div>
          <div><a href="https://www.linkedin.com/company/mbclaboratory/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a></div>
          <div><a href="https://line.me/ti/p/~@sok8073r" target="_blank" rel='noreferrer'><i className="fab fa-line"></i></a></div>
        </ul>
      </div>
    </footer>
  )
}

export default Foot;