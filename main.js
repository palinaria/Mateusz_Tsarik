const menu = document.querySelector('.menu');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

const items = [
    {
        title: `BE@<br>#HOLI`,
        description: ``,
        background: 'var(--pink)',
        button: "HOLI",
        buttonBackground: 'pink',
        colorTitle: '#FFF0E8',
    },
    {
        title: `ALL<br>REASONS`,
        description: `Unforgettable memories<br>
        Breaking stereotypes<br>
        Immersion in living culture<br>
        Unique visual atmosphere<br>
        Emotional reset`,
        background: 'var(--orange)',
        button: "WHY HOLI?",
        buttonBackground: 'orange',
        color: '#FFF0E8',
        colorTitle: '#FFF0E8',
    },
    {
        title: `HOLIKA<br>DAHAN`,
        description: `<p>The word “Holi” is derived from the Sanskrit<br> term “Holika”, which is associated with the<br> Hindu legend of
            the demoness Holika and the<br> pious young man Prahlada.</p>
            <p>According to the myth, Holika tried to burn<br> Prahlada in the fire, but she herself died, while <br>the young
            man remained unharmed - thanks to <br>the protection of the god Vishnu. This story<br> symbolizes the triumph of
            faith and good over<br> evil, and fires are still lit on the eve of the<br> festival - Holika Dahan - as a
            ritual<br> remembrance of this event.</p>`,
        background: 'var(--yellow)',
        button: "TRADITIONS",
        buttonBackground: 'yellow',
        color: '#000000',
        colorTitle: '#FFF0E8',
    },
    {
        title: `RANGWALI`,
        description: `<p style = "max-width: 377px">The next day is the most famous stage of the<br> festival - sprinkling powdered colors (gulabs) <br>on each other
        and pouring water on each other.<br> People in light-colored clothes gather in the<br> streets, sing, dance, have
        fun and stage color <br>battles. This tradition symbolizes fun, equality<br> and renewal, as well as the return of
        brightness and life after the winter period.</p>`,
        background: 'var(--blue)',
        button: "STORY",
        buttonBackground: 'blue',
        color: '#FFF0E8',
        colorTitle: '#FFF0E8'
    },
    {
        title: `HAPPINESS<br>SPRING<br>LOVE`,
        description: `<p >Holi is a traditional Indian spring festival known as the “Festival of Colors” or “Festival of Love”,
        celebrated mainly by Hindu communities in India, Nepal and countries with an Indian diaspora. The festival
        symbolizes the victory of good over evil, the arrival of spring, fertility, the rebirth of nature, as well
        as joy, forgiveness and the breaking down of social barriers.</p>`,
        background: 'var(--green)',
        button: "EMOTIONS",
        buttonBackground: 'green',
        color: '#FFF0E8',
        colorTitle: '#FFF0E8',
    },
    {
        title: `<p style="line-height: 0.5; margin: 0">HOLI <br> <span class="title__min">FESTIVAL</span></p>`,
        description:  `<p>Every spring, people across<br> India and around the world <br> celebrate the Hindufestival<br>  “Holi”, throwing colored <br> water and powders on one<br>  another in joyous<br>  celebration.</p>

<p>On this one day—the full-<br> moon day of the Hindu<br>  month of Phalguna—societal <br> rankings such as caste,<br>  gender, age, and status are <br> eschewed in the spirit of<br>  making merry together, and<br>  everyone is fair game to be<br>  doused with color.</p>`,
        background: 'var(--white)',
        button: "ABOUT",
        color: '#000000',
        colorTitle: '#000000',
        buttonBackground: 'black'
    },


];

function setActive(index) {
    const item = items[index];
    title.innerHTML = item.title;
    description.innerHTML = item.description;
    if (item.color) {
        description.style.setProperty('color', item.color);
    }
    if (item.colorTitle) {
        title.style.setProperty('color', item.colorTitle);
    }

    document.body.style.setProperty('background', item.background);

    document.querySelectorAll('.menu__block').forEach(el =>
        el.classList.remove('menu__item--active')
    );

    menu.children[index].classList.add('menu__item--active');
}

items.forEach((item, index) => {
    const block = document.createElement("div");
    block.classList.add("menu__block");

    const text = document.createElement("div");
    text.classList.add("menu__text");
    text.textContent = item.button.trim();

    const circle = document.createElement("div");
    circle.classList.add("menu__item", `menu__item--${item.buttonBackground}`);

    block.appendChild(text);
    block.appendChild(circle);

    block.addEventListener("click", () => setActive(index));

    menu.appendChild(block);
});

setActive(0);
