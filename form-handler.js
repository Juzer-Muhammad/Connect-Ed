document.addEventListener('DOMContentLoaded', () => {
    const studentQueryForm = document.getElementById('studentQueryForm');
    if (studentQueryForm) {
        studentQueryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formMessage = document.getElementById('formMessage');
            const submitBtn = document.getElementById('submitQueryBtn');

            formMessage.textContent = 'Submitting your query...';
            formMessage.style.color = 'orange';
            submitBtn.disabled = true; // Disable button during submission
            submitBtn.innerHTML = '<span class="loading"></span> Submitting...'; // Add a loading spinner

            // Collect form data
            const formData = {
                studentName: document.getElementById('studentName').value,
                studentEmail: document.getElementById('studentEmail').value,
                subject: document.getElementById('subject').value,
                yearLevel: document.getElementById('yearLevel').value,
                courseDetails: document.getElementById('courseDetails').value,
                queryDescription: document.getElementById('queryDescription').value
            };

            // Simulate form submission (replace with actual fetch API call to your backend)
            setTimeout(() => {
                console.log('Form Data Submitted:', formData);

                // --- IMPORTANT ---
                // In a real application, you would send this 'formData' to a server.
                // Example using Fetch API:
                /*
                fetch('/api/submit-query', { // Replace with your actual backend API endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle success response from your backend
                    console.log('Success:', data);
                    formMessage.textContent = 'Query submitted successfully! We will get back to you shortly.';
                    formMessage.style.color = 'var(--success-color)';
                    studentQueryForm.reset(); // Clear the form on success
                })
                .catch((error) => {
                    // Handle errors during submission
                    console.error('Error submitting form:', error);
                    formMessage.textContent = 'There was an error submitting your query. Please try again.';
                    formMessage.style.color = 'red';
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Submit Query'; // Restore button text
                });
                */

                // For this static site example, we'll just show a success message
                formMessage.textContent = 'Query submitted successfully! We will get back to you shortly.';
                formMessage.style.color = 'var(--success-color)';
                studentQueryForm.reset(); // Clear the form
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Submit Query'; // Restore button text

            }, 2000); // Simulate network delay for 2 seconds
        });
    }
});