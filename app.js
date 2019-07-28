const tasks = [
    {
        location: ['Mobile-design','CSS-HTML','Responsive-Compatibility'],
        company: 'self',
        count: 0,
        text: 'Restructured frontend code to incorporate cross-browser compatibility and responsive design using Atomic CSS and semantic HTML, and created flexible and scalable prototypes for mobile apps.'
    },
    {
        location: ['JSON','AJAX'],
        company: 'self',
        count: 0,
        text: 'Revised code using AJAX requests and JSON responses to update UI to display user data in real-time'
    },
    {
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Leveraged Facebook SDK for signup & login, validated user data and saved to local storage.',
        other: true
    },
    {
        location: ['Backend', 'Mobile-design','PHP'],
        company: 'self',
        count: 0,
        text: 'Integrated frontend with backend using PHP and engineered authentication for mobile ‘Tinder for shopping’ app'
    },
    {
        location: ['API-REST','Javascript'],
        company: 'self',
        count: 0,
        text: 'Appended Twilio API & leveraged Javascript to engineer a text alert system to notify users at each step of exchange for a time-banking system (à la TaskRabbit)'
    },
    {
        location: ['Teams','UI-UX'],
        company: 'self',
        count: 0,
        text: 'Team with product managers & designers to develop front-end look & feel of user interfaces.'
    },
    {
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Restyled dashboard and login pages & added new features to improve UX.',
        other: true
    },
    {
        location: ['other'],
        company: 'self',
        count: 0,
        text: 'Utilize responsive / progressive design to build engaging apps.',
        other: true
    },
    {
        location: ['Debug'],
        company: 'self',
        count: 0,
        text: 'Use Chrome Developer Tools to investigate and solve frontend deficiencies in performance, architecture, experience.'
    },
    {
        location: ['Teams','Deadlines'],
        company: 'levi',
        count: 0,
        text: 'Engaged in daily stand-ups / weekly code reviews, updated teams daily and pushed multiple deployments weekly to meet strict deadlines.'
    },
    {
        location: ['Responsive-Compatibility'],
        company: 'self',
        count: 0,
        text: 'Ensure cross-browser compatibility, responsive design'
    },
    {
        location: ['Component-dev'],
        company: 'self',
        count: 0,
        text: 'Designed and developed reusable component-based UI apps.'
    },
    {
        location: ['UI-UX','Frameworks-Libraries'],
        company: 'self',
        count: 0,
        text: 'Build intuitive user interfaces for single page applications using client-side libraries, frameworks.'
    },
    {
        location: ['SEO-Marketing'],
        company: 'levi',
        count: 0,
        text: 'Created solutions for implementing designs into responsive templates for marketing pages.'
    },
    {
        location: ['ADA'],
        company: 'levi',
        count: 0,
        text: 'Updated and developed home and landing pages so they met ADA (American Disability Act) standards.'
    },
    {
        location: ['SEO-Marketing'],
        company: 'levi',
        count: 0,
        text: 'Built, deployed campaigns 24/7 during 2017 holiday season to grow conversion rates to 9%+'
    },
    {
        location: ['SEO-Marketing','Teams'],
        company: 'levi',
        count: 0,
        text: 'Coordinate with Design & Marketing to execute daily ad campaigns/promotions as well as update pages to incorporate SEO best practices.'
    },
    {
        location: ['Javascript','UI-UX'],
        company: 'konversai',
        count: 0,
        text: 'Used Javascript to simplify the sign-up process and develop intuitive, flexible UI, allowing first 10K users to enroll quickly and efficiently.'
    },
    {
        location: ['Javascript','Frameworks-Libraries','UI-UX'],
        company: 'konversai',
        count: 0,
        text: "Streamlined student-teacher scheduling process by creating an easy to use calendar interface leveraging JavaScript and it's libraries."
    },
    {
        location: ['Javascript','UI-UX'],
        company: 'konversai',
        count: 0,
        text: "Initiated mandate to create intuitive interfaces to engage users by writing semantic HTML/CSS and simple, clean Javascript."
    },
    {
        location: ['other'],
        company: 'konversai',
        count: 0,
        text: "Reviewed and updated pages to increase optimization & functionality.",
        other: true
    },
    {
        location: ['Testing','UI-UX'],
        company: 'konversai',
        count: 0,
        text: "Created production UX / UI from designs and built unit and automated tests for pages/components."
    },
    {
        location: ['Testing','UI-UX'],
        company: 'konversai',
        count: 0,
        text: "Designed and developed image manipulation, drag & drop functionality and calendar components using vanilla Javascript."
    },
    {
        location: ['other'],
        company: 'ludwig',
        count: 0,
        text: "Created pixel-perfect pages, components from Sketch designs.",
        other: true
    },
    {
        location: ['Backend','Frameworks-Libraries'],
        company: 'ludwig',
        count: 0,
        text: "Migrated legacy code to Angular.js and linked frontend to Node/Express backend services."
    },
    {
        location: ['Testing','Responsive-Compatibility'],
        company: 'ludwig',
        count: 0,
        text: "Ensured all pages were comparable and functioned as intended on all devices and browsers."
    },
    {
        location: ['Frameworks-Libraries','UI-UX','Component-dev'],
        company: 'ludwig',
        count: 0,
        text: "Developed new signup/login UI components and added client-side validation using Angular."
    },
    {
        location: ['Testing'],
        company: 'strengths',
        count: 0,
        text: "Test / Resolve Cross-Browser Issues"
    },
    {
        location: ['SEO-Marketing'],
        company: 'strengths',
        count: 0,
        text: "Style / Brand Identity & Guide Adherence"
    },
    {
        location: ['Testing'],
        company: 'strengths',
        count: 0,
        text: "Extensive Testing"
    },
    {
        location: ['SEO-Marketing'],
        company: 'strengths',
        count: 0,
        text: "Aesthetic Design Concepts"
    },
    {
        location: ['Javascript','CSS-HTML'],
        company: 'strengths',
        count: 0,
        text: "Strong knowledge of JavaScript, HTML, CSS"
    },
    {
        location: ['Backend'],
        company: 'strengths',
        count: 0,
        text: "Full stack development (front and backend)"
    },
    {
        location: ['SEO-Marketing'],
        company: 'strengths',
        count: 0,
        text: "Defining the user experience / interface"
    },
    {
        location: ['OOP-Functional'],
        company: 'strengths',
        count: 0,
        text: "Functional / Object Oriented Programming"
    },
    {
        location: ['Frameworks-Libraries'],
        company: 'strengths',
        count: 0,
        text: "Migrating front-end stacks to frameworks"
    },
    {
        location: ['Responsive-Compatibility'],
        company: 'strengths',
        count: 0,
        text: "Cross-browser / Cross-platform development & compatibility"
    },
    {
        location: ['API-REST'],
        company: 'strengths',
        count: 0,
        text: "RESTful API integrations"
    },
    {
        location: ['UI-UX'],
        company: 'strengths',
        count: 0,
        text: "UX / UI Principles"
    },
    {
        location: ['Frameworks-Libraries'],
        company: 'strengths',
        count: 0,
        text: "Multiple front end frameworks"
    },
    {
        location: ['other'],
        company: 'strengths',
        count: 0,
        text: "Developing customer dashboards systems",
        other: true
    },
    {
        location: ['Testing'],
        company: 'strengths',
        count: 0,
        text: "Unit and integration testing"
    },
    {
        location: ['ADA', 'SEO-Marketing'],
        company: 'strengths',
        count: 0,
        text: "ADA compliance, SEO, and site optimization best practices "
    },
    {
        location: ['Teams'],
        company: 'strengths',
        count: 0,
        text: "Interpersonal skills in team environments"
    },
    {
        location: ['API-REST', 'AJAX'],
        company: 'self',
        count: 0,
        text: "Built APIs, added RESTful operations, 3rd-party APIs and asynchronous request handling to various apps."
    },
    {
        location: ['Javascript','CSS-HTML','ADA'],
        company: 'levi',
        count: 0,
        text: "Built out new home and landing pages by writing CSS (BEM system), symantic HTML and efficient Javascript, while addressing performance, scalability and accessibility concerns."
    },
    {
        location: ['UI-UX','Libraries-Frameworks'],
        company: 'ludwig',
        count: 0,
        text: "Developed dynamic, aesthetically-appealing dashboard components with Angular."
    },
    {
        location: ['UI-UX'],
        company: 'ludwig',
        count: 0,
        text: "Redesigned login and signup to enhance user-experience and optimization."
    }
];

const categories = ['ADA','AJAX','API-REST','Backend','Debug','Component-dev','CSS-HTML','Deadlines','Frameworks-Libraries','Javascript','JSON','Mobile-design','PHP', 'OOP-Functional','Responsive-Compatibility','SEO-Marketing','Teams','Testing','UI-UX'];

const intro = {
    beginning: ' with over 4 years experience leveraging ',
    title: ['UI Developer','UI Engineer','Front End Developer','Front End Engineer','Web Developer','Full Stack Developer','Full Stack Engineer'],
    technologies: ['Node','Angular','React','Vue','Mocha','jQuery','Bootstrap','LESS','CSS3','HTML5',],
    tasks: [
        'to design, develop and test engaging components for high traffic apps','to create bold, engaging, high traffic apps and implementing relational databases',
        'to create and optimize intuitive, efficient and cross-browser compatible pages/components',
        'to create intuitive, reusable and efficient front-end components/UI',
        'to create bold, engaging and responsive mobile and web apps',
        'create interactive and customer-focused apps, who values communication and teamwork'
    ],
    optional: [', who has experience in'],
    tasksEnd: ' for high traffic apps'
}

const init = function () {
    let title = document.getElementById('title');
    for(let i=0; i<intro.title.length; i++) {
        let html = '<option value="' + intro.title[i] + '">' + intro.title[i] + '</option>';
        title.insertAdjacentHTML( 'beforeend', html );
    }

    let introTasks = document.getElementById('task')
    for(let i=0; i<intro.tasks.length; i++) {
        let html = '<option value="' + intro.tasks[i] + '">' + intro.tasks[i] + '</option>';
        introTasks.insertAdjacentHTML( 'beforeend', html );
    }

    let buttons = document.getElementById('cat-selectors');
    for(let i=0; i<categories.length; i++) {
        let html = '';
        if((categories[i]==='Javascript')||(categories[i]==='CSS-HTML')) {
            html = `<li><button id="` + categories[i].toLowerCase() + `" class="dflt-btn cat-selected">` + categories[i] + `</button></li>`;
        } else {
            html = `<li><button id="` + categories[i].toLowerCase() + `" class="dflt-btn">` + categories[i] + `</button></li>`;
        }
        buttons.insertAdjacentHTML( 'beforeend', html );
    }
    buttons.addEventListener("click", catSelection);
    for(let i=0; i<tasks.length; i++) {
        tasks[i].id = createID();
    }
    let email = document.getElementById('email');
    email.addEventListener("click", emailToggle);

    let city = document.getElementById('city');
    city.addEventListener("click", cityToggle);

    let phone = document.getElementById('phone');
    phone.addEventListener("click", phoneToggle);

    let techAcumen = document.getElementById('tech-acumen');
    techAcumen.addEventListener("click", techAcumenToggle);

    let efficient = document.getElementById('efficiency');
    efficient.addEventListener("click", efficiencyToggle);

    let customer = document.getElementById('customer');
    customer.addEventListener("click", customerToggle);

    let endingTag = document.getElementById('endingTag');
    endingTag.addEventListener("click", createIntro);
    

    let other = document.getElementById('other-items');
    for (let i=0; i<tasks.length; i++) {
        if (tasks[i].other) {
            let html = `<li id="` + tasks[i].id + `" class="dflt-task">` + tasks[i].text + `</li>`;
            other.insertAdjacentHTML( 'beforeend', html );
        }
    }

    let otherItems = document.getElementById('other-items');
    otherItems.addEventListener('click', otherSelection)

    addTask('javascript');
    addTask('css-html');
    console.log(tasks[2]);
};

function filterTechs(tek) {
    if (tek.checked) {
        return tek.value;
    }
}

const createIntro = function () {
    let title = document.getElementById('title');
    let task = document.getElementById('task');
    let tag = document.getElementById('introTag');
    let introField = document.getElementById('intro');
    let techs = document.getElementsByClassName('introTech');
    let newArr = [];
    for (let i = 0; i<techs.length; i++) {
        if(techs[i].checked) {
            newArr.push(techs[i].value)
        }
    }
    if (newArr.length>1) {
        newArr.splice( newArr.length-1, 0, "and");
    }
    let html = title.options[title.selectedIndex].value + ' with over 4 years experience leveraging ' + newArr.join(' ') + ' ' + task.options[task.selectedIndex].value;
    if (tag.value) {
        html = html + intro.optional + ' ' + tag.value + '.';
    } else {
        html = html + '.'
    }
    html = html + '<p>&nbsp;</p>';
    introField.innerHTML = html;
}

const emailToggle = function (e) {
    let myEmail = document.getElementById('myEmail');
    if (e.target.checked) {
        myEmail.innerText='jmebradl@yahoo.com'
    } else {
        myEmail.innerText='hintonbradley@gmail.com';
    }
};

const techAcumenToggle = function (e) {
    let ta = document.getElementById('technical-acumen');
    if (e.target.checked) {
        ta.style.display = "block";
    } else {
        ta.style.display = "none";
    }
};

const customerToggle = function (e) {
    let cust = document.getElementById('customer-focused');
    if (e.target.checked) {
        cust.style.display = "block";
    } else {
        cust.style.display = "none";
    }
};

const efficiencyToggle = function (e) {
    let eff = document.getElementById('efficient');
    if (e.target.checked) {
        eff.style.display = "block";
    } else {
        eff.style.display = "none";
    }
};

const phoneToggle = function (e) {
    let myPhone = document.getElementById('myPhone');
    if (e.target.checked) {
        myPhone.innerHTML = '';
    } else {
        myPhone.innerHTML = '&nbsp; &#9670; &nbsp; 415-672-3193';
    }
};

const cityToggle = function (e) {
    let myCity = document.getElementById('myCity');
    if (e.target.checked) {
        myCity.innerText='Napa, CA 94559'
    } else {
        myCity.innerText='San Francisco, CA 94116';
    }
};

const createID = function () {
    return Math.random().toString(36).substring(2,10);
}

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

const otherSelection = function (e) {
    if(e.target.nodeName==='LI') {
        let add = e.target.classList.contains('other-selected');
        if (!add) {
            addOther(e.target.id);
        } else {
            removeOther(e.target.id);
        }
        e.target.classList.toggle('other-selected');
    }
}

const addOther = function (id) {
    console.log(id);
    for(let i=0; i<tasks.length; i++) {
        if (tasks[i].id===id) {
            let html = '';
            if (tasks[i].company === 'strengths') {
                html = `<span id="res-item-` + tasks[i].id + `" class="res-item strength-item in-bl"><span class="txt-sm ">` + tasks[i].text + ` &#9670;&nbsp;</span></span>`;
            } else {
                html = `<li id="res-item-` + tasks[i].id + `" class="res-item"><p>` + tasks[i].text + `</p></li>`;
            }
            let company = document.getElementById(tasks[i].company.toLowerCase());
            company.insertAdjacentHTML( 'beforeend', html );
        }
    }
}

const removeOther = function (id) {
    console.log(id);
    let item = document.getElementById('res-item-' + id);
    item.remove();

}

const addTask = function (id) {
    console.log(id)
    for(let i=0; i<tasks.length; i++) {
        for (let j=0; j<tasks[i].location.length; j++) {
            if (tasks[i].location[j].toLowerCase()===id) {
                if(tasks[i].count === 0) {
                    tasks[i].count++;
                    let company = document.getElementById(tasks[i].company.toLowerCase());
                    let html = '';
                    if (tasks[i].company === 'strengths') {
                        html = `<span id="res-item-` + tasks[i].id + `" class="res-item strength-item in-bl"><span class="txt-sm ">` + tasks[i].text + ` &#9670;&nbsp;</span></span>`;
                    } else {
                        html = `<li id="res-item-` + tasks[i].id + `" class="res-item"><p>` + tasks[i].text + `</p></li>`;
                    }
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