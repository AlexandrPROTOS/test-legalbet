const mockForecasts = [{
    author: {
        avatar: "./images/main_img/face.jpg",
        name: "Владимир Вуйтек",
        statistics: {
            wins: 647,
            draws: 29,
            losses: 413,
            roi: 23.9,
            profit: 22820
        }
    },
    content: {
        text: "В Кубке страны команда Унаи Эмери бессовестно размялась на «Виктории» из Ла-Коруньи (8:0). При этом серьёзные соперники: «Севилья», «Барселона» (даже кризисная) и «МЮ» (ещё более кризисный) — били «Вильярреал». ЛЧ не турнир для Эмери. Он гроссмейстер убогой ЛЕ. Поэтому у «Аталанты» есть шансы. Ей необходимо играть лишь на победу. Только выигрыш выводит её в плей-офф ЛЧ. А поражение в комплекте с победой «Янг Бойз» над «МЮ» оставляет бергамасков без еврокубковой весны. Гасперини вполне по силам одолеть команду Эмери. «Аталанта» уже обыгрывала недавно «Юве» и «Наполи». Поставлю на победу итальянского клуба."
    },
    footer: {
        prediction: {
            title: "Прогноз",
            text: "Штрафное время: тотал меньше 16,5"
        },
        bookmaker: {
            logo: "./images/main_img/1Хstavka.jpg",
            coefficient: 3.20
        }
    }
},
{
    author: {
        avatar: "./images/main_img/face.jpg",
        name: "Игорь Хорошилов",
        statistics: {
            wins: 100,
            draws: 5,
            losses: 88,
            roi: 10,
            profit: 500
        }
    },
    content: {
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    footer: {
        prediction: {
            title: "Прогноз",
            text: "Первый раунд: тотал меньше 5"
        },
        bookmaker: {
            logo: "./images/main_img/1Хstavka.jpg",
            coefficient: 5.20
        }
    }
}]

function openFullText(clone) {
    const expandBtn = clone.querySelector('.forecast-item__content-btn');
    const contentText = clone.querySelector('.forecast-item__content-text');

    expandBtn.addEventListener('click', () => {
        contentText.style.maxHeight = `${contentText.scrollHeight}px`;
        contentText.classList.toggle('expanded');

        if (!contentText.classList.contains('expanded')) {
            contentText.style.maxHeight = '';
        }
    });
}

function renderForecasts() {
    const template = document.getElementById('forecast-item');
    const container = document.body;

    mockForecasts.forEach(forecast => {
        const clone = template.content.cloneNode(true);
        
        // Fill author info
        clone.querySelector('.author__info-name').textContent = forecast.author.name;
        clone.querySelector('.author__avatar').src = forecast.author.avatar;
        
        // Fill statistics
        clone.querySelector('.item__content--green').textContent = forecast.author.statistics.wins;
        clone.querySelector('.item__content--grey').textContent = forecast.author.statistics.draws;
        clone.querySelector('.item__content--red').textContent = forecast.author.statistics.losses;
        clone.querySelector('.item__content--green span:last-child').textContent = `${forecast.author.statistics.roi}%`;
        clone.querySelector('.item:last-child .item__content--green').textContent = `+${forecast.author.statistics.profit}`;
        
        // Fill content
        clone.querySelector('.forecast-item__content-text').textContent = forecast.content.text;
        
        // Fill footer
        clone.querySelector('.forecast-item__footer-text').textContent = forecast.footer.prediction.text;
        clone.querySelector('.forecast-item__footer-bookmaker-img').src = forecast.footer.bookmaker.logo;
        clone.querySelector('.forecast-item__footer-bookmaker-text').textContent = forecast.footer.bookmaker.coefficient;
        
        // Open full text
        openFullText(clone);

        container.appendChild(clone);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderForecasts()
});
