const tasks = [
    {
        id: 2,
        location: ['Mobile-design','CSS-HTML','Responsiveness-Compatibility'],
        company: 'self',
        count: 0,
        text: 'Restructured frontend code to incorporate cross-browser compatibility and responsive design using Atomic CSS and semantic HTML, and created flexible and scalable prototypes for mobile apps.'
    },
    {
        id: 34,
        location: ['JSON','AJAX'],
        company: 'self',
        count: 0,
        text: 'Revised code using AJAX requests and JSON responses to update UI to display user data in real-time'
    },
    {
        id: 13,
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Leveraged Facebook SDK for signup & login, validated user data and saved to local storageRevised code using AJAX requests and JSON responses to update UI to display user data in real-time'
    },
    {
        id: 45,
        location: ['Mobile-design','PHP'],
        company: 'self',
        count: 0,
        text: 'Integrated frontend with backend using PHP and engineered authentication for mobile ‘Tinder for shopping’ app'
    },
    {
        id: 56,
        location: ['API-REST','Javascript'],
        company: 'self',
        count: 0,
        text: 'Appended Twilio API & leveraged Javascript to engineer a text alert system to notify users at each step of exchange for a time-banking system (à la TaskRabbit)'
    },
    {
        id: 356,
        location: ['Team-collaboration','UI-UX-Design-Development'],
        company: 'self',
        count: 0,
        text: 'Team with product managers & designers to develop front-end look & feel of user interfaces.'
    },
    {
        id: 56,
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Restyled dashboard and login pages & added new features to improve UX.'
    },
    {
        id: 3452,
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Utilize responsive/progressive design to build engaging apps.'
    },
    {
        id: 3452,
        location: ['Bug-reporting'],
        company: 'self',
        count: 0,
        text: 'Use Chrome Developer Tools to investigate and solve frontend deficiencies in performance, architecture, experience.'
    },
    {
        id: 23434562,
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Work with R&D while developing user-friendly, flexible, efficient UI'
    },
    {
        id: 2,
        location: ['Team-collaboration','Deadlines'],
        company: 'levi',
        count: 0,
        text: 'Engaged in daily stand-ups / weekly code reviews, updated teams daily and pushed multiple deployments weekly to meet strict deadlines.'
    },
    {
        id: 843,
        location: ['Responsiveness-Compatibility'],
        company: 'self',
        count: 0,
        text: 'Ensure cross-browser compatibility, responsive design'
    },
    {
        id: 872622,
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Developed reusable component-based UI apps.'
    },
    {
        id: 872622,
        location: ['UI-UX-Design-Development','Frameworks-Libraries'],
        company: 'self',
        count: 0,
        text: 'Build intuitive user interfaces for single page applications using client-side libraries, frameworks.'
    },


];

const categories = ['ADA','AJAX','API-REST','Backend','Bug-reporting','Component-based-reusable','CSS-HTML','Deadlines','Frameworks-Libraries','Javascript','JSON','Leadership-Ownership','Mobile-design','PHP','Responsiveness-Compatibility','SEO-Marketing','Team-collaboration','Testing','UI-UX-Design-Development'];

const init = function () {
    let buttons = document.getElementById('cat-selectors');
    for(let i=0; i<categories.length; i++) {
        let html = `<li><button id="` + categories[i].toLowerCase() + `" class="dflt-btn">` + categories[i] + `</button></li>`;
        buttons.insertAdjacentHTML( 'beforeend', html );
        buttons.addEventListener("click", catSelection);
    }
};

const catSelection = function (e) {
    if (e.target.nodeName === 'BUTTON') {
        let add = e.target.classList.contains('cat-selected');
        e.target.classList.toggle("cat-selected");
        if (!add) {
            addTask(e.target.id);
        } else {
            removeTask(e.target.id);
        }
    }
};

const addTask = function (id) {
    for(let i=0; i<tasks.length; i++) {
        for (let j=0; j<tasks[i].location.length; j++) {
            if (tasks[i].location[j].toLowerCase()===id) {
                if(tasks[i].count === 0) {
                    tasks[i].count++;
                    let company = document.getElementById(tasks[i].company.toLowerCase());
                    let html = `<li id="res-item-` + tasks[i].id + `" class="res-item"><p>` + tasks[i].text + `</p></li>`;
                    company.insertAdjacentHTML( 'beforeend', html );
                } else if (tasks[i].count > 0) {
                    tasks[i].count++;
                }

            }
        }
    }
}

const removeTask = function (id) {
    for(let i=0; i<tasks.length; i++) {
        for (let j=0; j<tasks[i].location.length; j++) {
            if (tasks[i].location[j].toLowerCase()===id) {
                if(tasks[i].count === 1) {
                    tasks[i].count--;
                    let item = document.getElementById('res-item-' + tasks[i].id);
                    console.log(item)
                    console.log( 'removing ' + tasks[i].id + ' from DOM');
                    item.remove();
                } else if (tasks[i].count > 1) {
                    tasks[i].count--;
                }
            }
        }
    }
}

init();