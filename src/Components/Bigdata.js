import './css/Divisi_style.css'
import './css/Bigdata.css'

const Bigdata = () => {
  return (
    <>
    <br/>
    <div className="Jimbotron">
      <div className="header">
        <div className="title">
          <h1 className="divisi">
            DIVISI
            <br />
            <span className="divs-name">BIG DATA 📅</span>
          </h1>
          <p className="text-head-desc">
            Welcome to Our Division, today we made a Machine Learning Application that can recommend "anyone" who has the
            skills you are looking for in the search engine section
          </p>
          <a className="btn btn-primary cbs-button" href="main.html" role="button">Website</a>
        </div>
      </div>
    </div>

    <div className="main-desc">
      <h5 className="title-desc">What is "Big Data" ???</h5>
      <div className="par-desc">
        <p className="desc-bd">
          <b><i>Big Data</i></b> is a data set that has a very large volume or size consisting of structured,
          semi-structured, and unstructured data that can develop over time.
          <b><i>Big Data</i></b> is also the concept of grouping or collecting data on a large scale, which consists of
          various types of data, including structured, semi-structured and unstructured data.
        </p>
      </div>
    </div>
    </>
  )
}

export default Bigdata;