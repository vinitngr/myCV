   const skillsContainer = document.getElementById("skillsContainer");
        const projectContainer = document.getElementById('projectContainer');

        const skills = [
            {
                category: "Frontend Development",
                skills: ["JS", "CSS", "HTML/EJS", "Tailwind CSS", "React", "TypeScript", "GSAP"]
            },
            {
                category: "Backend Development",
                skills: ["Node and Express", "MongoDB", "PostgreSQL"]
            },
            {
                category: "Programming Languages",
                skills: ["JavaScript", "Python", "TypeScript", "Arduino-Cpp"]
            },
            {
                category: "Databases",
                skills: ["MongoDB", "PostgreSQL", "Drizzle"]
            },
            {
                category: "Tech Tools",
                skills: ["Arduino-Cpp", "GSAP" , "Clerk"]
            }
        ];
        const projects = [
            {
                title: 'Amz Clone',
                description: 'A clone of Amazon\'s website, featuring a fully responsive layout using HTML, CSS, and JavaScript.',
                link: 'https://github.com/vinitngr/webD-amzClone',
                status: 'Completed'
            },
            {
                title: 'ownAcar',
                description: 'A platform for buying and selling cars , immplemented services like drizzle, neon, client etc..',
                link: 'https://github.com/vinitngr/ownacar',
                status: 'Progress'
            },
            {
                title: 'Weblogs',
                description: 'A blogging platform for developers allowing users to create, read, and comment on blog posts. also allow user to repost blogs using ext.',
                link: '',
                status: 'Progress'
            },
            {
                title: 'Type Racer',
                description: 'A simple type racing platform where you can type given quotes and check your type speed ,btw mine is 80 lol.',
                link: 'https://github.com/vinitngr/webD-TypeSpeed-js',
                status: 'completed'
            },
            {
                title: 'Rejouice Clone',
                description: 'A clone of Rejouice A animated website made using Gsap, ',
                link: 'https://github.com/vinitngr/rejouice_clone_GSAP',
                status: 'completed'
            },
            {
                title: 'Simon Game',
                description: 'A classic memory game where players repeat a sequence of colors and sounds.',
                link: 'https://github.com/vinitngr/webD-The-simon-game',
                status: 'Completed'
            },
            {
                title: 'Primarease',
                description: 'A digital dashboard designed for farmers, Primarease offers easy graphical data visualization, allowing users to monitor their crops effectively.',
                link: '',
                status: 'planned'
            }   

        ];
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';

            const statusClass = project.status.toLowerCase();

            projectDiv.innerHTML = `
                <div>
                    <h3 class='titlee'>
                        <a href="${project.link}" target="_blank" style="text-decoration: none; color: black ;">${project.title}</a>
                        <span class="status ${statusClass}" >${project.status}</span>
                    </h3>
                 <p style="margin: 0; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; text-overflow: ellipsis;">
                    ${project.description}
                </p>

                </div>
            `;
            projectContainer.appendChild(projectDiv);
        });

        skills.forEach(section => {
            const categoryHeading = document.createElement("h3");
            categoryHeading.textContent = section.category;
            skillsContainer.appendChild(categoryHeading);

            const skillsWrapper = document.createElement("div");
            section.skills.forEach(skill => {
                const skillTag = document.createElement("code");
                skillTag.textContent = skill;
                skillsWrapper.appendChild(skillTag);
            });
            skillsContainer.appendChild(skillsWrapper);
        });
