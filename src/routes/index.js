const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
    const title = "Home"
    res.render('home.ejs', { title })
})

router.get('/about', (req, res) => {
    const title = "About"
    res.render('about', { title })
})

router.get('/downloads', (req, res) => {
    const title = "Downloads"
    res.render('downloads', { title })
})

module.exports = router