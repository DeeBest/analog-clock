const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const day = new Date().getDate().toString().padStart(2, '0');
const month = new Date().toLocaleString('en', { month: 'long' }).slice(0, 3);

const dateDisplay = document.getElementById('date-display');
dateDisplay.textContent = `${day}/${month}/${currentYear}`;
