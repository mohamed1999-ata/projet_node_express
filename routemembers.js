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
router.delete('/:id', function(req, res) {
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

router.post('/',(req , res )=>{
    const id = req.params.id
    const member = {
        "id": req.body.id,
        "name": req.body.name,
        "email": req.body.email,
        "status": req.body.status
    }
    members.push(member)
    res.json(members)
})

///end create 

router.put('/:id', (req , res )=>{
    const id =  req.params.id 
    const found  = members.some((member)=>{
             member.id == id
    })

    if (!found){
         for( let i = 0 ;  i<members.length ; i++){
             if(members[i].id==id){
                 const data = members[i]
                 data.id = req.body.id
                 data.name = req.body.name
                 data.email = req.body.email
                 data.status = req.body.status
                 res.json(data)
             }
         }
        
    }else{
           res.json(
               {
                "alert ": "data not found  !",
               }
           )
           console.log(found);
    }
})

module.exports = router;