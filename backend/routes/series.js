import express from 'express'
import series from '../modules/series.js'

const router = express.Router()
router.get('/:id' , (req ,res) =>{
    series.findById(req.params.id)
    .then(seriesInfo => res.send({seriesInfo}))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
})
export default router