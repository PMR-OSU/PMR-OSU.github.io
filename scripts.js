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

