const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send("mensaje a la web")
})

router.get('/about', (req, res) => {
    res.render("mensaje a la web about")
})

module.exports = router