export const navItems = [
  { name: "About", link: "#about" },
  { name: "TechStack", link: "#projects" },
  { name: "Clients", link: "#clients" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Experience in the entire software development lifecycle, from initial planning and requirement gathering to deployment and maintenance. ",
    description: "Full Lifecycle Development",
    className: "lg:col-span-5 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Efficiently managing project high-quality deliverables.",
    description: "Time Management",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Bringing creative and innovative solutions to enhance application functionality and user experience.",
    description: "Innovation",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Frontend Tech Stack",
    des: "ccccc",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
  },
  {
    id: 2,
    title:
      "Backend Tech Stack ,Message Brokers,Authentication and Authorization",
    des: "JavaScript (Node.js,Next.js),Java (Spring Boot),RabbitMQ,Apache Kafka ,ActiveMQ,OAuth2 ,JWT (JSON Web Tokens),OpenID Connect,Passport.js (Node.js) Spring Security (Java) ",
    img: "/p2.svg",
    iconLists: [
      "/spring.svg",
      "/kafka.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
    ],
    link: "",
  },
  {
    id: 3,
    title: "Containerization,CI/CD,Monitoring and Logging",
    des: "Docker,Kubernetes,Docker Compose, Helm ,Jenkins,GitLab CI/CD,GitHub Actions,Prometheus,Grafana ,ELK Stack (Elasticsearch, Logstash, Kibana) Splunk",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Cloud Services,Testing,API Development,Databases",
    des: "ccc",
    img: "/p5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Developing and Implementing REST API using Spring Boot for Enterprise Applications which interact with upstream and downstream systems.Experience in Spring Framework modules such as Spring Core (IOC, SPEL, Dependency Injection), Spring MVC, Spring AOP, Spring Cloud, Spring Data (JPA, JDBC, Hibernate), Spring Security, Spring REST and Spring Boot Designed and integrated RESTful APIs with Java, ensuring seamless communication between frontend and backend systems.",
    name: "",
    title: "Spring Boot",
  },
  {
    quote:
      "Proficient in using Amazon Web Services AWS. Extensive experience in focusing on services like EC2, VPC, Cloud Watch, CloudFront, IAM, S3, Amazon RDS, Elastic Cache, SNS, SQS.Utilizing AWS API Gateway to develop, deploy, and manage APIs at scale, including defining endpoints, request/response mappings, and integration with backend services.Launching EC2 instances to run Java applications, choosing the appropriate EC2 instance type, and configuring EC2 instance parameters like CPU, memory, and storage.",
    name: "",
    title: "Cloud Experience",
  },
  {
    quote:
      "Extensive experience in Core Java concepts like Exception handling, Multi-threading, Generics, Garbage collection, Synchronization, Serialization, IO, Collections framework, Java Beans.Implemented Multithreading, Concurrency, Exception Handling and Collections,Java Streams",
    name: "",
    title: "Core Java",
  },
  {
    quote:
      "Developed and maintained scalable web applications using React for frontend and Node.js for backend.Designed and implemented RESTful APIs and integrated third-party services.Collaborated with cross-functional teams to define, design, and ship new features.Optimized application performance by identifying bottlenecks and improving code efficiency.Utilized Redux for state management and ensured data consistency across the application.Integrated authentication and authorization using OAuth2 and JWT.",
    name: "",
    title: "React & Node.js",
  },
  {
    quote:
      "Designed and implemented microservices architecture to improve scalability and maintainability of the application.Decomposed a monolithic application into independent services using domain-driven design principles.Developed RESTful APIs and gRPC endpoints for inter-service communication.Utilized Docker for containerizing services and Kubernetes for orchestration and deployment.Integrated API Gateway for routing and load balancing, enhancing security and performance.Implemented message brokers like Kafka and RabbitMQ for asynchronous communication between services.Ensured data consistency and integrity across services using distributed transaction patterns and eventual consistency.",
    name: "",
    title: "MicroServices",
  },
];

export const companies = [
  {
    id: 1,
    name: "Staples",
    img: "/staples.svg",
    nameImg: "/staplesnme.svg",
  },
  {
    id: 2,
    name: "Freddie Mac",
    img: "/FreddieMac.svg",
    nameImg: "/freddimacnme.svg",
  },
  {
    id: 3,
    name: "AST",
    img: "/ast-financial.svg",
    nameImg: "/astnme.svg",
  },
  {
    id: 4,
    name: "paypal",
    img: "/PayPal.svg",
    nameImg: "/paypalnme.svg",
  },
  {
    id: 5,
    name: "cognizant.",
    img: "/cog.svg",
    nameImg: "/cognme.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Proficient in HTML, CSS, JavaScript, and modern frameworks/libraries like React, Angular, or Vue.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "API Development and Integration:",
    desc: "Experience with RESTful and SOAP APIs for seamless integration of backend services.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Server-Side Technologies",
    desc: "Experience with server-side frameworks like Spring Boot, Hibernate, and JPA.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Algorithm and Data Structure Expertise",
    desc: "In-depth understanding of algorithms and data structures to write efficient and optimized code.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
