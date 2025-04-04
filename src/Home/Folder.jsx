import './Folder.css';
export default function Folder() {
  const users = {
    1:{
       id: 1,
        name: "Work is an essential part of life.It helps us grow, learn new skills, and contribute to society.Through work, we gain experience, meet new people, and build our careers.Whether it is a full-time job, part-time, or freelance work, having a purpose and being productive brings meaning to our lives.",
         city: "Cairo",
         imgs :'https://cdn-talent-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg',
         alt: "Image 1" 
       },
    2:{
       id: 2,
       name: "A good job teaches responsibility, discipline, and teamwork.In today’s world, technology has made it possible to work remotely and connect with teams from around the globe.Finding a job you enjoy can be challenging, but when you do, work becomes more than just a way to earn money",
       city: "Giza",
       imgs :'https://www.shutterstock.com/image-illustration/programmer-developer-typing-script-source-600nw-2060615648.jpg',
        alt: "Image 2" 
     },
    3:{
       id: 3,
       name: "Working in the field of programming is both challenging and rewarding. As a developer, I build web applications that solve real-world problems and improve people’s lives. My work involves writing clean and efficient code, designing databases, and creating user-friendly interfaces.",
       city: "Alexandria",
       imgs :'https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg',
         alt: "Image 3" 
       },
       4:{
        id: 4,
        name: "I work as a programmer with a strong focus on web development. I specialize in building full-stack applications using modern technologies such as Laravel for backend and React.js for frontend.",
        city: "Alexandria",
        imgs :'https://www.ganttic.com/wp-content/uploads/2021/05/marketing-project-management-scaled.jpg',
         alt: "Image 4" 
        },
        5:{
          id: 5,
          name: "My responsibilities include writing clean, maintainable code, integrating APIs, managing databases, and optimizing performance. I enjoy solving complex problems, automating tasks, and continuously learning new tools and frameworks .",
          city: "Alexandria",
          imgs :'https://thumbs.dreamstime.com/b/manager-pointing-talking-coding-program-meeting-room-convocation-caucasian-project-engineering-prompt-diverse-smart-336303690.jpg',
           alt: "Image 5" 
          },
          6:{
            id: 6,
            name: "I’m comfortable working independently or as part of a team, and I always strive to deliver high-quality, scalable solutions that meet client needs. Passion, attention to detail, and a strong work ethic define my approach to programming.",
            city: "Alexandria",
            imgs :'https://miro.medium.com/v2/resize:fit:1400/0*LlP76gas89xP-qeH',
             alt: "Image 5" 
            },
  };
  return (
    <div className="folder">
      <div className='falcon'>
        {Object.values(users).map(user => (
          <div className='name' key={user.id}>
                <img src={user.imgs} alt={user.alt}  />
                <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
