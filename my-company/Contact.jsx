import { userState } from "react";

function Contact () {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: "",
        });

        const HandleChange = (e) => {
            setformData({ ...formDdata, [e.target.name]: e.target.value});
        };

        const HandleSubmit = (e) => {
            e.preventDefault();
            alert ('Form submitted!');
        };

        return ( 
            <div style ={{ padding: "20px"}}>
                <h1>Contact Us</h1>
                <form onsubmit={Handlesubmit}>
                    <imput
                    type="text"
                    name="name"
                    placeholder= "your name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{display: 'block', margin: '10px 0'}}

                    />

                    <imput
                    type="email"
                    name="name"
                    placeholder= "Your email"
                    value={fromData.email}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0'}}

                    />

                    <textarea
                    name="message"
                    placeholder= "Your message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ dispaly: 'block', margin: '10px 0'}}

                    />
                    <button type= "submit">send message</button>
                    </form>

            </div>
        )

    }
    export default Contact;