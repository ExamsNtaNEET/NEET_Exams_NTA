document.addEventListener('DOMContentLoaded', () => {
    // Flashing announcement bar
    const announcementBar = document.getElementById('announcement-bar');
    
    // Auto-sliding news items
    const newsItems = document.querySelectorAll('#news-list li');
    let currentNewsIndex = 0;
    
    function showNextNews() {
        newsItems.forEach((item, index) => {
            item.classList.remove('visible');
            if (index === currentNewsIndex) {
                item.classList.add('visible');
            }
        });
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    }
    setInterval(showNextNews, 3000); // Change news every 3 seconds
    
    // Scroll to top functionality
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
