import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    /* initialize the state */
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    })

    /* onChange of input */
    const handleChange = (event) => {
        const { name, value } = event.target;

        /* [name] can be name or email or feedback depending on what changed */
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
        Rating: ${formData.rating}
        `;

        /* This conditional statement checks if the user has confirmed their details by clicking "OK" */

        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);

        if(isConfirmed) {
            console.log('Submitting feedback:', formData);
            setFormData({ 
                name: '',
                email: '',
                feedback: '',
                rating: ''
            });

            alert('Thank you for your valuable feedback!')
        }
    }



  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
    {/* no need () => handleSubmit() since we wont use parameter */}
      <form onSubmit={handleSubmit} className="feedback-form" >
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* two primary methods in styling: using a JavaScript object in JSX or applying styles using a string of CSS */}

        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
            {/* radio btns */}
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                /> 1
            </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                /> 2
            </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                /> 3
            </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                /> 4
            </p>
            <p>
                <input
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleChange}
                /> 5
            </p>

        </div>

        {/* text area */}
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        {/* submit */}
        <button type="submit">Submit Feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
