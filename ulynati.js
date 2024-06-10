function changeLanguage(language) {
    let clubInfo = document.getElementById('club-info');
    switch (language) {
        case 'en':
            clubInfo.innerHTML = `
                <p>Welcome to ULYNATION Historical Club! ULYNATION is a place where students can immerse themselves in the fascinating world of Kazakhstan's history and its rich culture. Our club offers engaging activities, lectures, discussions and excursions to help students gain a deeper understanding of their country's past and be inspired by its heritage. We study various periods and events in the history of Kazakhstan, from ancient times to modern times. Our goal is to expand students' knowledge and help them develop critical thinking and analytical skills. Join us to learn more about our fascinating history, discuss key moments and enjoy the richness of Kazakhstan's culture with ULYNATION!</p>
            `;
            break;
        case 'ru':
            clubInfo.innerHTML = `
                <p>Добро пожаловать в исторический клуб ULYNATION! ULYNATION - это место, где ученики могут погрузиться в захватывающий мир истории Казахстана и его богатой культуры. Наш клуб предлагает увлекательные мероприятия, лекции, дискуссии и экскурсии, чтобы помочь учащимся глубже понять прошлое своей страны и вдохновиться ее наследием. Мы изучаем различные периоды и события истории Казахстана, начиная от древних времен до современности. Наша цель - расширить знания студентов и помочь им развить критическое мышление и аналитические навыки. Присоединяйтесь к нам, чтобы узнать больше о нашей увлекательной истории, обсудить ключевые моменты и насладиться богатством культуры Казахстана вместе с ULYNATION!</p>
            `;
            break;
        case 'kk':
            clubInfo.innerHTML = `
                <p>ULYNATION тарихи клубына қош келдіңіз! ULYNATION – оқушылар Қазақстан тарихының бай мәдениетінің қызықты әлеміне енетін орны. Біздің клуб оқушыларға өз елінің өткенін тереңірек түсінуге және оның мұрасынан шабыт алуға көмектесу үшін қызықты іс-шараларды, лекцияларды, пікірталастарды және экскурсияларды ұсынады. Біз Қазақстан тарихының көне дәуірден қазіргі заманға дейінгі әртүрлі кезеңдері мен оқиғаларын зерттейміз. Біздің мақсатымыз – оқушылардың білімдерін кеңейту және оларды критикалық ойлау және талдау дағдыларын дамыту. ULYNATION-мен Қазақстан мұрасының байлығын тамашалау үшін бізге қосылыңыз!</p>
            `;
            break;
    }
}
