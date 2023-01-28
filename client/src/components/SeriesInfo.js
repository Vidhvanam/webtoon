import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function SeriesInfo() {
  const { id } = useParams()
  const [series,setSeries] =useState({})
  useEffect(() => {
     axios.get(`http://localhost:6969/api/series/${id}`)
     .then(series => {
         console.log(series.data.seriesInfo)
        
       setSeries(series.data.seriesInfo)
     }
     )
     .catch(err => console.log(err))
  }, [])
  useEffect(()=>{
   console.log('ddd')   
  },[series])
  
  return (
    <>
      <div className="main-container ">
        {/* {console.log('seriesData : ', seriesData)} */}
        <div className="series-container">
          {/* <h1>{id}</h1> */}
          <div className="series-info">
            <h1>{series.name}</h1>
            <h3>{series.author}</h3>
            <p>{series.description}</p>
            <div className="flex-row-box gap-2">
              <span>Subsribers : {series.subscribers}</span>
              <span>Rating : {series.ratting}</span>
              <span>Add Review : </span>
            </div>
           

          </div>
          <div className="flex-col-box gap-2 episodes-container ">
            <a className="flex-row-box episode">
              <span>this is episode title</span>
              <div>
                <span className="mr-5">12 /12 /2023</span>
                <span># 1</span>
              </div>
            </a>
            <div className="flex-row-box episode">
              <span>this is episode title</span>
              <div>
                <span className="mr-5">12 /12 /2023</span>
                <span>episode 1</span>
              </div>
            </div>
            <div className="flex-row-box episode">
              <span>this is episode title</span>
              <div>
                <span className="mr-5">12 /12 /2023</span>
                <span>episode 1</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SeriesInfo