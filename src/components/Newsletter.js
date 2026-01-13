import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser'; 

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); 
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || email.indexOf("@") === -1) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');

    const serviceID = "service_srakqmk"; 
    const publicKey = "q96ksh9MWdEHKGZAc";
    // REUSING your existing Auto-Reply template ID
    const templateID = "template_crtialb"; 

    // We send 'Subscriber' as the firstName so the email says "Hi Subscriber"
    const templateParams = {
      firstName: 'Subscriber',
      lastName: '',
      email: email,
      message: 'New Newsletter Subscription Request'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      })
      .catch((err) => {
        setStatus('error');
        setMessage('Subscription failed. Please try again.');
        console.error(err);
      });
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                  required 
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}