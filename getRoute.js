const polka = require('polka');    
const router = polka();    
router
    .get('/all', (req, res) => res.end(JSON.stringify({ msg: 'works' })))
    .get('/:id', (req, res) => res.end("By id " + req.params.id));
module.exports = router;
