document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach((teamMember) => {
        teamMember.addEventListener("click", function () {
            const emailAddress = this.getAttribute("data-email");
            window.location.href = `mailto:${emailAddress}`;
            console.log(emailAddress);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollToHeroBtn = document.getElementById('scroll-to-hero');
    const heroSection = document.getElementById('hero');
    const threshold = 300;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > threshold) {
            scrollToHeroBtn.style.display = 'block';
        } else {
            scrollToHeroBtn.style.display = 'none';
        }
    });

    scrollToHeroBtn.addEventListener('click', function() {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const cards = document.querySelectorAll('.benefit-card-js');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = (x - centerX) / centerX;
    const dy = (y - centerY) / centerY;

    const rotateY = dx * 10;
    const rotateX = -dy * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});