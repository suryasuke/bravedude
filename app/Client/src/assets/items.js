 
 const items = [
        {
            label: 'About Us',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'About CEO',
                        items: [{ label: 'CEO Profile' , url : 'https://suryachronicle.netlify.app'}, { label: 'Vision' }, { label: 'Mission' }]

                    }
                ],
                [
                    {
                        label: 'About Contributors',
                        items: [{ label: 'Contributors' , url:'/contributors' }, { label: 'Mentors' }, { label: 'Volunteers' }]
                    },
                ],
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Instagram',
                        items: [{ label: 'Follow Us' }, { label: 'DM Us' }]
                    }
                ],
                [
                    {
                        label: 'Whatsapp',
                        items: [{ label: 'Chat with Us' , url :'https://wa.me/8110974040?text=hi%20want%20to%20talk%20about%20the%20courses'
 }]
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