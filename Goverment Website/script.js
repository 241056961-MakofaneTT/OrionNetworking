document.addEventListener('DOMContentLoaded', function () {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    const openModalBtn = document.querySelector('#cta .btn');
    const closeModalBtn = modal.querySelector('.close-btn');

    openModalBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
