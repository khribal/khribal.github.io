
function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6LcHUFopAAAAACS-avrD6prt6csLD8igbN7dfU7d', { action: 'LOGIN' });
    });
}