import { userData } from 'react";

function Contact() {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        message: '',

    }),

    const handleChange =(e) => {
        setformData({ ...formData, [e.target.name]: e.target.value});
    };

    const handlechange = (e) => {
        e.preventDefault();
        alert('form submitted!');
    }

    return (
        <div style={{ padding '20px'}}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                palceholder="Your name"
                value={formData.name}
                onChange={handlchange}
                style={{ display: 'block', margin: '10px 0',}}
                />
                <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                style={{ display: 'block', margin: '10px 0',}}
                />
                <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                style={{ display: 'block', margin: '10px 0',}}
                />

                <button type="submit">Send message</button>

            </form>

        </div>
    );
}

expect default Contact;