// Restrict date picker to Wednesdays
const dateInput = document.getElementById('appointment_date');
dateInput.addEventListener('input', function(e) {
    const day = new Date(this.value).getUTCDay();
    if (day !== 3) {
        this.value = '';
        alert('Appointments are only available on Wednesdays. Please select a Wednesday.');
    }
});

// Format form data into a mailto link
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;
    const comments = document.getElementById('comments').value;
    const preferredDate = document.getElementById('appointment_date').value;
    const signature = document.getElementById('digital_signature').value;
    const signatureDate = document.getElementById('signature_date').value;

    const formatDate = (d) => {
        if (!d) return '';
        const date = new Date(d + 'T00:00:00');
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const subject = 'Booking Request from ' + name;

    const body = [
        'Hi,',
        '',
        'I would like to book an appointment at Restore.',
        '',
        'My details:',
        '',
        '  Name: ' + name,
        '  Date of Birth: ' + formatDate(dob),
        '  Email: ' + email,
        '  Phone: ' + phone,
        '',
        '  Reason for visit: ' + reason,
        comments ? '  Additional details: ' + comments : '',
        '  Preferred date: ' + formatDate(preferredDate),
        '',
        'I have read and agreed to the Privacy & Consent Form.',
        '',
        'Signed: ' + signature,
        'Date: ' + formatDate(signatureDate),
        '',
        'Kind regards,',
        name
    ].filter(line => line !== '').join('\n');

    window.location.href = 'mailto:restore.physio26@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});
