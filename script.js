document.addEventListener('DOMContentLoaded', function () {

    const navButtons = document.querySelectorAll('.nav-btn[data-section]');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const target = this.dataset.section;

            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            sections.forEach(s => s.classList.remove('active'));
            const section = document.getElementById('section-' + target);
            if (section) section.classList.add('active');

            if (target === 'certs') {
                document.getElementById('certs-submenu').classList.add('open');
                const firstCert = document.querySelector('.cert-list');
                if (firstCert) {
                    document.querySelectorAll('.cert-list').forEach(c => c.classList.remove('active'));
                    firstCert.classList.add('active');
                }
            } else {
                document.getElementById('certs-submenu').classList.remove('open');
            }
        });
    });

    const subButtons = document.querySelectorAll('.sub-btn');
    const certLists = document.querySelectorAll('.cert-list');

    subButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const cert = this.dataset.cert;

            subButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            certLists.forEach(c => c.classList.remove('active'));
            const target = document.getElementById('cert-' + cert);
            if (target) target.classList.add('active');
        });
    });
});
