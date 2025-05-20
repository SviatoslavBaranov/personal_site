import { useState } from "react"

const ContactForm: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Thanks, ${name}! Your message was received.`);
        setName('');
        setMessage('');
    };

    return (
            <form onSubmit={handleSubmit}>
                <h3>Contact Us</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
    )
}

export default ContactForm