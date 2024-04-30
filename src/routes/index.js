const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    const nombre = "maximiliano"
    res.render('home', { nombre })
})

router.get('/about', (req, res) => {
    res.render("mensaje a la web about")
})

module.exports = router