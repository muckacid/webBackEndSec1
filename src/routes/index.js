const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    const title = 'Home'
    const message = 'hola'
    res.render('index', { title, message })
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router