 const items = [
       {
  label: 'Events',
  icon: 'pi pi-box',
  items: [
    [
      {
        label: 'Internships',
        items: [
          { label: 'Open Positions', url: '/Internships' },
          { label: 'Apply Now', url: '/Internships' },
          { label: 'FAQ', url: '' }
        ]
      }
    ]
  ]
}
,
        {
            label: 'For colleges',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
        label: 'College Events',
        items: [
          { label: 'Free Workshops', url: '/College-event' },
          { label: 'Training', url: '/College-event' },
          { label: 'Hands on training', url: '/College-event' },
          { label: 'Live Projects', url: '/College-event' },
          { label: 'Contributors', url: '/contributors' },
          { label: 'Mentors', url: '/College-event' },
        ]
      }
                ],
            ]
        },
        {
            label: 'Courses',
            icon: 'pi pi-clock',
            items: [
                [
                    {
                        label: 'Full Stack Development',
                        items: [{ label: 'MERN' , url:'/course' }, { label: 'PERN',url:'/course'}, { label: 'JAVA',url:'/course' }, { label: 'React.js',url:'/course' } , { label: 'Node.js' ,url:'/course'}]
                    }
                ],
                [
                    {
                        label: 'Python Development',
                        items: [{ label: 'Python Basics',url:'/course' }, { label: 'Data Structures' ,url:'/course'}, { label: 'Flask',url:'/course' }, { label: 'Django',url:'/course' }]
                    }
                ],
                [
                    {
                        label: 'Mobile App Development',
                        items: [{ label: 'React Native',url:'/course' }, { label: 'Flutter',url:'/course' }, { label: 'Kotlin',url:'/course' }, { label: 'Swift',url:'/course' }]
                    }
                ],
                [
                    {
                        label: 'web Development',
                        items: [{ label: 'HTML',url:'/course' }, { label: 'CSS',url:'/course' }, { label: 'JavaScript',url:'/course' }, { label: 'React.js',url:'/course' }, { label: 'Node.js' ,url:'/course'}, { label: 'Express.js' }, { label: 'PostgreSql' }]
                    }
                ],
                
            ]
        },
        {
          
          label: 'Feedbacks',
            icon: 'pi pi-comments',
            items: [
                    {

                        items:[{ label: 'Feedbacks' , url : '/#feedback' } , {label: 'Share Feedback' , url : '/feedback-share'}]
                    }
             ]
        }


    ];

    export default items;