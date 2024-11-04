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
                skills: ["Arduino-Cpp", "GSAP"]
            }
        ];
        const projects = [
            {
                title: 'Amz Clone',
                description: 'A clone of Amazon\'s website, featuring a fully responsive layout using HTML, CSS, and JavaScript.',
                link: 'https://example.com/amazon-clone',
                status: 'Completed'
            },
            {
                title: 'ownAcar',
                description: 'A platform for buying and selling used cars with user authentication and listings.',
                link: 'https://example.com/ownacar',
                status: 'Progress'
            },
            {
                title: 'Weblogs',
                description: 'A blogging platform allowing users to create, read, and comment on blog posts.',
                link: 'https://example.com/weblogs',
                status: 'Progress'
            },
            {
                title: 'Type Racer',
                description: 'A typing speed game that allows users to race against each other in typing texts.',
                link: 'https://example.com/type-racer',
                status: 'completed'
            },
            {
                title: 'Rejouice Clone',
                description: 'A clone of Rejouice, featuring music streaming and user playlists.',
                link: 'https://example.com/rejouice-clone',
                status: 'completed'
            },
            {
                title: 'Simon Game',
                description: 'A classic memory game where players repeat a sequence of colors and sounds.',
                link: 'https://example.com/simon-game',
                status: 'Completed'
            },
            {
                title: 'primarease',
                description: 'A classic memory game where players repeat a sequence of colors and sounds.',
                link: 'https://example.com/simon-game',
                status: 'planned'
            }
        ];
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';

            const statusClass = project.status.toLowerCase();

            projectDiv.innerHTML = `
                <div style="padding: 0px 10px">
                    <h3 style="border-left: 3px solid gray; padding-left: 10px">
                        <a href="${project.link}" target="_blank" style="text-decoration: none; color: black ;">${project.title}</a>
                        <span class="status ${statusClass}" >${project.status}</span>
                    </h3>
                    <p style="margin: 0">${project.description}</p>
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
