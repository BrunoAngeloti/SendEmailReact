import '../styles/components/ContactBox.css';
import emailjs from "emailjs-com"

function ContactBox() {

    function sendEmail(e){
        e.preventDefault();
        
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_EMAIL, 
            process.env.REACT_APP_TEMPLATE_EMAIL, 
            e.target,
            process.env.REACT_APP_USER_EMAIL
        ).then(res=>{
            console.log(res)
        }).catch(err=> console.log(err))
    }

    return (
        <div className="container">
            <h1>CONTACT ME</h1>
            <form onSubmit={sendEmail} className="form">
                <label>Name</label>
                <input required type="text" name="name" className="name"/>
                <label>Email</label>
                <input required type="email" name="user_email" className="email"/>
                <label>Message</label>
                <textarea required type="text" name="message" className="message"/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactBox;