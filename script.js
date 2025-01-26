// 3D Background Animation with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// GSAP Animations
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('.cta-button', { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

// delay navbar
document.querySelectorAll('.nav-links a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default
        const targetId = this.getAttribute('href'); // Ambil ID target (misal: #home)
        const targetSection = document.querySelector(targetId); // Ambil elemen target

        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll dengan efek smooth
            }, 300); // Delay 300ms sebelum scroll
        }
    });
});

// function for contact
function sendMessage(event) {
    event.preventDefault(); // Mencegah form submit default

    // Ambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, saya ${name} (${email}). Pesan saya: ${message}`;

    // Nomor admin WhatsApp (ganti dengan nomor Anda)
    const adminNumber = '6281248175090';

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirect ke WhatsApp dengan pesan otomatis
    window.open(
        `https://wa.me/${adminNumber}?text=${encodedMessage}`,
        '_blank'
    );
}
