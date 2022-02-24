var express = require('express');
var router = express.Router();
const members =require('./members');
// get all  members //
router.get('/', function(req, res) {
    res.send(members)
});

// end get all members 
 
// find members by id 
router.get('/:id', function(req, res) {
    for (let pas = 0; pas < members.length; pas++) {
        if(members[pas].id==req.params.id){
           res.json(members[pas])
        }
        
      }
 
});
/// end find by id


// delete // 
router.delete('/delete/:id', function(req, res) {
    tab = [] ;
    for (let pas = 0; pas < members.length; pas++) {
        if(members[pas].id==req.params.id){
           members.splice(pas,1)
           res.send(members)
           res.end()
        }
       
      }
 
});

// end delete  //


// create 

router.post('/create',(req , res )=>{
    const data = req.body
    members.push(data)
    res.send(members)
    res.end()

})

///end create 

module.exports = router;