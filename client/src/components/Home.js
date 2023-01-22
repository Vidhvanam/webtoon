import Card from './Card'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from './Slider'
function Home() {
    const [seriesData, setSeriesData] = useState([
        {
            _id: "63cac612305732edcfde1ae6",
            userId: "63c8ce0ec9e27245d70b4c69",
            name: "sweet home",
            completed: true,
            genres: ["Thriller", "Horror"],
            description: "Now a major adaptation on streaming. After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it’s too late.",
            ratting: 9,
            subscriders: 500,
            episodes: ["epID-1", "epID-2"],
            reviews: ["review-id-1", "review-id-1"],
            date: "2022-12-31T18:30:00.000Z"
        },
        {
            _id: "63cac9ee305732edcfde1ae8",
            userId: "63c8ce0ec9e27245d70b4c69",
            name: "sweet home 2",
            completed: false,
            genres: ["Thriller", "Horror"],
            description: "streaming. After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it’s too late.",
            ratting: 9,
            subscriders: 500,
            episodes: ["epID-1", "epID-2"],
            reviews: ["review-id-1", "review-id-1"],
            date: "2023-12-31T18:30:00.000Z"
        }, {
            _id: "63cac612305732edcfde1ae6",
            userId: "63c8ce0ec9e27245d70b4c69",
            name: "sweet home",
            completed: true,
            genres: ["Thriller", "Horror"],
            description: "Now a major adaptation on streaming. After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it’s too late.",
            ratting: 9,
            subscriders: 500,
            episodes: ["epID-1", "epID-2"],
            reviews: ["review-id-1", "review-id-1"],
            date: "2022-12-31T18:30:00.000Z"
        }, {
            _id: "63cac612305732edcfde1ae6",
            userId: "63c8ce0ec9e27245d70b4c69",
            name: "sweet home",
            completed: true,
            genres: ["Thriller", "Horror"],
            description: "Now a major adaptation on streaming. After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it’s too late.",
            ratting: 9,
            subscriders: 500,
            episodes: ["epID-1", "epID-2"],
            reviews: ["review-id-1", "review-id-1"],
            date: "2022-12-31T18:30:00.000Z"
        },
    ])
    const NewSeries = seriesData.map(series => (
       
        <Card key={series._id} series={series}/>
    ))

    useEffect(() => {
        // axios.get('http://localhost:6969/')
        // .then(res=>{
        //     setSeriesData(res.data.series)
        // })
    }, [])
    return (

        <div className="main-container">
            {console.log(seriesData)}
            <Slider />
            <div className='sub-container'>
                <h2 className='txt-center'>New Series</h2>
                <div className="flex-box">
                {NewSeries}
                </div>
            </div>

            

            
        </div>
    )
}
export default Home