const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data' , 'contact.json')

const fetchAllProducts = (cb)=>{
   fs.readFile(p , (err, fileContent)=>{
     if(err){
       cb([])
     }
     cb(JSON.parse(fileContent))
   })
}

module.exports = class Contact{
    constructor(id, name, email, phone, des){
        this.id= id;
        this.name= name;
        this.email= email;
        this.phone = phone;
        this.des = des;
    }

    save() {
         fetchAllProducts(contacts=>{
           this.id = Math.ceil(Math.random() * 5).toString()
           contacts.push(this);
          fs.writeFile(p, JSON.stringify(contacts), err => {
            console.log(err);
          });
        });
      }

    }