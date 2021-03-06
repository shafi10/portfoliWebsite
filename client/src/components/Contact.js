import React ,{Fragment,useState} from 'react';
import axios from 'axios';


const Contact = ()=>{
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        des:''
    })
    const { name,email,phone,des} = formData;

    let submitData = async (formData) =>{
        const config = {
            headesrs:{
              'Content-type':'application/json'
            }
          }
        try {
            const res = await axios.post('/add-contact', formData, config);
        } catch (error) {
            console.log(error);
        }
    }
    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})
    return (
        <Fragment>
           <section className="contact">
                    <h1>Contact Me</h1>
                    
                    <form onSubmit={e=>{
                        submitData(formData)
                        setFormData({
                            name:'',email:'',phone:'',des:''
                        })
                        e.preventDefault()
                    }}>
                        <input type="text"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                         placeholder="Full Name"/>
                        <input type="email" 
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        placeholder="Email"/>
                        <input type="phone"
                        name="phone"
                        value={phone}
                        onChange={e => onChange(e)}
                        placeholder="Phone Number"/>
                        <textarea cols="30" rows="10"
                        name="des"
                        value={des}
                        onChange={e => onChange(e)}
                        placeholder="Description"></textarea>
                        <button type="submit">Send Message</button> 
                    </form>               
                </section>
        </Fragment>
    )
}

export default Contact