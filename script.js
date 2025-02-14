document.addEventListener("DOMContentLoaded", () => {
    // Select all portfolio items
    const portfolioItems = document.querySelectorAll('#main-content a');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const descriptionText = item.getAttribute('data-description');
            const description = document.createElement('div');
            description.classList.add('hover-description');
            description.textContent = descriptionText;

            // Append it to the current item
            item.appendChild(description);
        });

        item.addEventListener('mouseleave', () => {
            // Remove the hover description
            const description = item.querySelector('.hover-description');
            if (description) {
                description.remove();
            }
        });
    });
});



const colorOptions = ['#44857c', '#757c88', '#0a1172', '#48aaad', '#0492c2', '#2832c2', '#1f456e'];
let currentColorIndex = 0;
function changeTextColors() {
    const headings = document.querySelectorAll('#myname, h4');
    const navButtons = document.querySelectorAll('.mainnav > a');
    headings.forEach(element => {
        element.style.color = colorOptions[currentColorIndex];
    });

    navButtons.forEach(button => {
    button.style.backgroundColor = colorOptions[currentColorIndex];
    });

    currentColorIndex += 1;
    if (currentColorIndex >= colorOptions.length) {
    	currentColorIndex = 0
    }
}

document.addEventListener('click', changeTextColors);
