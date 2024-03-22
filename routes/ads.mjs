import express from 'express'
import Ads from '../models/Ads.mjs'
const router = express.Router()

router.get('/' , async (req , res)=>{
    const ads = await Ads.find()
    res.send({message: 'add fetched successfully' , data: ads})
})

router.post('/post' , async (req , res)=>{
    try {
        const ad = new Ads(req.body)
        await ad.save()
        res.status(201).send({message : 'add posted successfully'})
        
    } catch (error) {
        res.status(500).send({message: 'e.message'})
        
    }
})

//router.put('/:id')
router.put('/put/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, amount } = req.body;
    try {
        const updatedAd = await Ads.findByIdAndUpdate(id, { title, description, amount }, { new: true });
        if (!updatedAd) {
            return res.status(404).send('Ad not found');
        }
        res.send('Ad edited successfully');
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});



//router.delete('/:id')
router.delete('/delete/:id' , async (req , res)=>{
    try {
        const deleted =await Ads.findByIdAndDelete(req.params.id)
        if(deleted){
            res.send('item deleted to database')
        }else{
            res.send('item do not deleted')

        }
       
    } catch (error) {
        res.send('item do not deleted')
    }
})
export default router
