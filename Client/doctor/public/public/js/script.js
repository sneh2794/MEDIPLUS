function filterDoctors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterSelect = document.getElementById('filterSelect').value;
    const doctorCards = document.querySelectorAll('.doctor-card');
    
    doctorCards.forEach(card => {
        const doctorName = card.querySelector('.card-title').textContent.toLowerCase();
        const doctorSpecialization = card.getAttribute('data-specialization');
        
        if ((doctorName.includes(searchInput) || searchInput === "") && (filterSelect === "" || doctorSpecialization === filterSelect)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
