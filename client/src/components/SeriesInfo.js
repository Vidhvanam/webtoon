import { useEffect } from "react"
import { useParams } from "react-router-dom"

function SeriesInfo() {
  const { id } = useParams()
  useEffect(() => {

  }, [])
  return (
    <>
      <div className="main-container ">
        {/* {console.log('seriesData : ', seriesData)} */}
        <div className="series-container">
          {/* <h1>{id}</h1> */}
          <div className="series-info">
            <h1>Lore Olympus</h1>
            <h3>Rachel Smythe </h3>
            <p>Witness what the gods do…after dark. The friendships and the lies, the gossip and the wild parties, and of course, forbidden love. Because it turns out, the gods aren’t so different from us after all, especially when it comes to their problems. Stylish and immersive, this is one of mythology’s greatest stories -- The Taking of Persephone -- as it’s never been told before.</p>
            <div className="flex-row-box gap-2">
              <span>Subsribers : 500</span>
              <span>Rating : 9</span>
              <span>Add Review : </span>
            </div>
           

          </div>
          <div className="flex-col-box gap-2 episodes-container ">
            <a className="flex-row-box episode">
              <span>this is episode title</span>
              <div>
                <span className="mr-5">12 /12 /2023</span>
                <span>episode 1</span>
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