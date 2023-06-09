const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req, res) => {
    const { id } = req.params
    const { data } = await axios(URL + id)
    try {
        const { id, status, name, species, origin, image, gender } = data
        const character = { id, status, name, species, origin, image, gender }
        return character ? res.status(200).json(character) : res.status(404).send('Not found')
    }
    // .then(({data}) => {
    //     const { id, status, name, species, origin, image, gender } = data
    //     const character = { id, status, name, species, origin, image, gender }
    //     return character ? res.status(200).json(character) : res.status(404).send('Not found')
    // })
    catch(error){
        res.status(500).send(error.message)
    }
}
module.exports={getCharById}