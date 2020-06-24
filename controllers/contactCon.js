const Contact = require('../models/Contact');

exports.postAddContact= (req,res,next) =>{
    let {name,email,phone,des} = req.body;
    const contact = new Contact(null,name,email,phone,des)
    contact.save();
    res.json({msg:'contact added'});
    //res.redirect('/');
 }