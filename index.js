const instaTouch = require('instatouch');
require('dotenv').config();
const fs = require('fs');
// Scrape 100 image posts from the user feed
(async () => {
    try {
        const options = {
            count: 100,
            session: process.env.INSTAGRAM_SESSION_ID
        };
        const comments = await instaTouch.comments('B7wOyffArc5', options);
        Vencedor(comments.collector);
    } catch (error) {
        console.log(error);
    }
})();

function Vencedor (participantes){
    const qtdParticipantes = participantes.length;
    const comentarioVencedor = Math.floor(Math.random() * qtdParticipantes);
    const vencedor = participantes[comentarioVencedor];
    console.log(vencedor)
};

