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

