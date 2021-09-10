import '../styles/components/ContactBox.css';

function ContactBox() {

    function sendEmail(){
        console.log("cliquei");
    }

    return (
        <div className="container">
            <form onSubmit={() => {sendEmail()}} className="form">
                <input type="text" className="name"/>
                <input type="email" className="email"/>
                <textarea type="text" className="message"/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactBox;