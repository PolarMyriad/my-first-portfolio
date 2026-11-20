// SKILLS: Change text in quotes. Copy an entire { ... }, line to add a skill.
// Icon choices: design, layout, search, code, cloud, git, tools.
// Suggested maximum: 4 categories, 6 skills each; descriptions under 100 characters.

export const categories = [
    {
      title: 'Programming',
      skills: [
        { name: 'C#', desc: 'Main language for game programming.', icon: 'code' },
        { name: 'C++', desc: 'Basic console programs.', icon: 'code' },
        { name: 'Java', desc: 'GUI builder and SQL integration via Apache GUI Builder.', icon: 'code' },
        { name: 'PHP', desc: 'Basic experience and SQL integration.', icon: 'code' },
        { name: 'MySQL', desc: 'Extensive relational database experience and best practices.', icon: 'code'}
      ],
    },
    {
      title: 'Front-end',
      skills: [
        { name: 'HTML and CSS', desc: 'Web dev experience which can be developed into UI experience.', icon: 'code' },
        { name: 'JavaScript', desc: 'Web dev experience with SQL integration.', icon: 'code' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git and GitHub', desc: 'Version control and handoff.', icon: 'git' },
        { name: 'Unity', desc: 'Basics of navigating the game engine.', icon: 'tools' },
      ],
    },
  ];

export const skillsSection = { title: 'Skills & Technologies', subtitle: 'The tools and methods I have experience with.' };
