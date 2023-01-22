import { useEffect } from "react"
import { useParams } from "react-router-dom"

function SeriesInfo(){
    const {id} = useParams()
    useEffect(()=>{

    },[])
    return(
        <>
          <div>
                {/* {console.log('seriesData : ', seriesData)} */}
                <h1>{id}</h1>
          </div>
        </>
    )
}

export default SeriesInfo