import '../styles/components/ContactBox.css';

function ContactBox() {

    function sendEmail(){
        console.log("cliquei");
    }

    return (
        <div className="container">
            <h1>CONTACT ME</h1>
            <form onSubmit={() => {sendEmail()}} className="form">
                <label>Name</label>
                <input type="text" className="name"/>
                <label>Email</label>
                <input type="email" className="email"/>
                <label>Message</label>
                <textarea type="text" className="message"/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactBox;