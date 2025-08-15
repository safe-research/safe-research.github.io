/**
 * Main JavaScript for Safe Research website
 * Handles email obfuscation and contact link functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.getElementById('contact-link');
    if (contactLink) {
        // Email obfuscation: construct email address from parts
        const email = ['safe.global', '@', 'research'].reverse().join('');
        contactLink.href = 'mailto:' + email;
    }
});
