(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1170)}])},1684:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var n=i(5893),a=i(7294),r=i(949),o=i(8527),s=i(9116),l=i(5113),c=i(9876),h=i(1664),d=i(4651),m=i(894),p=i(6893),u={android:"green",aws:"orange",c:"red",csharp:"teal",cplusplus:"pink",java:"orange",javascript:"yellow",python:"blue",php:"gray",react:"cyan",nodejs:"green",html5:"orange",nextjs:"blue"};function g(e){var t=e.data,i=(e.id,(0,r.If)().colorMode),s=(0,a.useState)(0),l=s[0],c=s[1];return(0,n.jsx)(o.Kq,{children:(0,n.jsx)(o.fG,{position:"relative",border:"1px solid",borderColor:(0,r.ff)("gray.200","gray.700"),borderRadius:"xl",background:(0,r.ff)("gray.50","#1A1A1A"),transitionProperty:"transform",transitionDuration:"slower","transition-timing-function":"easing-ease-out",_hover:{transform:"translateY(-4px)",shadow:"lg"},onMouseOver:function(){return c(1)},onMouseLeave:function(){return c(0)},p:4,mt:2,mb:2,children:(0,n.jsxs)(o.Ug,{children:[(0,n.jsx)(d.Ee,{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/".concat(t.mainTech,"/").concat(t.mainTech,"-original.svg"),alt:"img",width:["40px","50px","60px"],ml:2,mr:4}),(0,n.jsxs)(o.Kq,{spacing:3,width:"100%",children:[(0,n.jsxs)(o.Kq,{justify:"space-between",direction:{base:"column",sm:"row"},children:[(0,n.jsx)(o.X6,{size:"sm",children:(0,n.jsx)(o.AB,{href:t.link,target:"_blank",children:t.title})}),(0,n.jsxs)(o.Ug,{children:[(0,n.jsx)(o.Ct,{colorScheme:u[t.mainTech],children:t.mainTech}),(0,n.jsx)(m.JO,{as:p.AlO,opacity:l})]})]}),(0,n.jsx)(o.xv,{fontSize:"sm",color:{light:"grey.700",dark:"gray.400"}[i],children:t.description})]})]})})})}function f(e){var t=e.data,i=e.length,d=e.isPreview,m=(0,a.useState)(""),p=m[0],u=m[1],f=t.sort((function(e,t){return e.key-t.key})).filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())})),j=(0,r.ff)("gray.100","gray.700");return(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(o.iz,{mb:12,mt:2,w:"90%",alignSelf:"center"}),(0,n.jsxs)(o.X6,{as:"h1",size:"lg",mb:6,children:["Projects",!d&&" ( ".concat(f.length," ) ")]}),d?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.xv,{mb:4,children:"Below is the list of Open Source Projects I've worked on in learning methods and university term projects."}),(0,n.jsxs)(s.BZ,{mb:4,mr:4,w:"100%",children:[(0,n.jsx)(s.II,{"aria-label":"Search by title",placeholder:"Search by title",onChange:function(e){return u(e.target.value)}}),(0,n.jsx)(s.xH,{children:(0,n.jsx)(c.W1,{color:"gray.300"})})]})]}),!f.length&&(0,n.jsx)(o.Kq,{flex:1,justify:"center",align:"center",children:(0,n.jsx)(o.xv,{children:"No projects found."})}),(0,n.jsx)(o.aV,{children:f.slice(0,"".concat(i||t.length)).map((function(e,t){return(0,n.jsx)(g,{data:e,id:t},t)}))}),d&&(0,n.jsx)(o.kC,{justify:"center",width:"100%",children:(0,n.jsx)(h.default,{href:"/projects",passHref:!0,children:(0,n.jsx)(o.rU,{_hover:"",mt:8,children:(0,n.jsx)(l.zx,{rightIcon:(0,n.jsx)(c.mr,{}),colorScheme:"gray",variant:"outline","aria-label":"view all projects",fontSize:"sm",_hover:{background:"".concat(j)},children:"View All Projects"})})})})]})}},7991:function(e,t,i){"use strict";i.d(t,{q:function(){return n}});var n=[{title:"CI/CD - Pizza Store Web Application",link:"https://github.com/homhom2012z/CS360_STINSE",mainTech:"nodejs",description:"Class project for Selected topics in Software Engineer (CS360) : This project is to develop an existing project from GitHub and simulate the deployment in a team with an agile process by using Docker and creating a CI/CD pipeline and then deploying it to AWS Service."},{title:"CA Timetable & Class Assistant",link:"https://github.com/homhom2012z/CATimetable",mainTech:"android",description:"Class project for Mobile Application Development (CS361) : Android application for student timetable management. My responsibility is as a Software engineer and UI Designer. Designed and developed with Android Studio (Java)"},{title:"Hospital Management Systems",link:"https://github.com/homhom2012z/opeope_hospital",mainTech:"php",description:"Class project for Database System1 (CS251) This project is about the management and development of a database system, by creating a Hospital Management website using PHP, HTML, phpMyAdmin, and SQL"},{title:"TU Late Registration System",link:"https://github.com/homhom2012z/cs264_project",mainTech:"nodejs",description:"Class project for Introduction to Software Engineering (CS264) - This project is about simulating software development with the agile process by creating a late registration web application for a computer science department."},{title:"TU Student - public information viewer",link:"https://github.com/homhom2012z/tustdinfo",mainTech:"html5",description:"A web application for retrieving student information from Thammasat University APIs by using a student identification number. Built a project with HTML, EJS, and Node JS as back-end."},{title:"Google scholar Web Scraping",link:"https://github.com/homhom2012z/google-scholar-web-scraping",mainTech:"python",description:"A basic python web scraping using python & selenium for Scraping researches data under the affiliation of Thammasat University."},{title:"Reg-TU Web Scraping",link:"https://github.com/homhom2012z/reg-tu-web-scraping",mainTech:"python",description:"This project is about to scrape all course details by academic year, faculties, and semesters from Thammasat University's registrar's website. And save to a file (Excel format)."},{title:"URL Grabber - Chrome extension",link:"https://github.com/homhom2012z/url-grabber-chrome-extension",mainTech:"javascript",description:"An extension for save - store URL/Tab links likes as default bookmarks | integrated with API."},{title:"Fetch URL title - Node JS Native",link:"https://github.com/homhom2012z/fetch-url-title-nodejs-native",mainTech:"nodejs",description:"An API for fetching URLs title by URL using Node JS Built-in fetch (v.17.5.0+)"},{title:"homhom2012z.github.io",link:"https://github.com/homhom2012z/homhom2012z.github.io",mainTech:"nextjs",description:"My Personal Portfolio website. built with Next.js & Chakra-UI"},{title:"Dog every 5 seconds",link:"https://dog-every-5-seconds.vercel.app/",mainTech:"nextjs",description:"Display random dogs image every 5 seconds. using API from https://dog.ceo/dog-api/"},{title:"Simple-Native-DB",link:"https://github.com/homhom2012z/simple-native-db",mainTech:"nodejs",description:"Simple JSON native database system"},{title:"Simple-Native-DB-Client",link:"https://simple-native-db-client.vercel.app/",mainTech:"nextjs",description:"Frontend client for simple-native-db. Built with Next.js & Chakra-UI"}]},1170:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var n=i(5893),a=i(9008),r=i(949),o=i(8527),s=i(9583),l=i(1664),c=i(5113),h=i(894);function d(e){var t=e.href,i=e.children,a=e.rightIcon,o=(0,r.If)().colorMode;return(0,n.jsx)(l.default,{href:t,passHref:!0,children:(0,n.jsx)(c.zx,{as:"a",variant:"ghost",p:[1,2,4],target:"_blank",rightIcon:a&&(0,n.jsx)(h.JO,{as:a}),_hover:{backgroundColor:{light:"gray.100",dark:"gray.700"}[o]},children:i})})}function m(e){var t=e.colorMode;return(0,n.jsxs)("svg",{id:"Text_",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1024 1024",children:[(0,n.jsx)("path",{id:"right_bracket",fillRule:"evenodd",fill:"dark"===t?"#FFFFFF":"#805AD5",d:"M758.606,750.444v39.687h43.977A58.567,58.567,0,0,0,825.43,785.2a64.261,64.261,0,0,0,21.238-14.8,77.424,77.424,0,0,0,15.66-24.778q6.114-14.913,6.114-34.646V602.851a89.858,89.858,0,0,1,4.076-27.674,71.574,71.574,0,0,1,10.941-21.667,52.126,52.126,0,0,1,15.767-14.051,37.164,37.164,0,0,1,18.557-5.042V491.3a37.132,37.132,0,0,1-18.557-5.041,52.09,52.09,0,0,1-15.767-14.052,71.766,71.766,0,0,1-10.941-21.559,89.552,89.552,0,0,1-4.076-27.781V313.886q0-19.091-6.114-34a81.508,81.508,0,0,0-15.66-25.1,67.809,67.809,0,0,0-21.238-15.553,54.612,54.612,0,0,0-22.847-5.364H758.606v39.473h31.749q7.935,0,13.194,4.183a29.124,29.124,0,0,1,8.366,11.156,60.2,60.2,0,0,1,4.4,16.2A141.357,141.357,0,0,1,817.6,324.4V431.66q0,19.1,4.827,33.251a89.962,89.962,0,0,0,11.906,23.92,68.242,68.242,0,0,0,15.124,15.553,54.6,54.6,0,0,0,14.7,7.937,93.219,93.219,0,0,0-14.266,9.547,81.328,81.328,0,0,0-15.231,16.2,93.131,93.131,0,0,0-12.121,23.705q-4.938,13.838-4.934,32.286V702.176a125.2,125.2,0,0,1-1.287,18.342,55.281,55.281,0,0,1-4.4,15.338,27.782,27.782,0,0,1-8.366,10.619q-5.26,3.967-13.194,3.969H758.606Z"}),(0,n.jsx)("path",{id:"left_bracket",fillRule:"evenodd",fill:"dark"===t?"#FFFFFF":"#805AD5",d:"M250.585,273.341V233.868H206.822a55.73,55.73,0,0,0-23.169,5.364,69.815,69.815,0,0,0-21.559,15.553,80.721,80.721,0,0,0-15.982,25.1q-6.225,14.913-6.222,34V422.865a89.277,89.277,0,0,1-3.861,26.6,76.069,76.069,0,0,1-10.512,21.774,52.18,52.18,0,0,1-15.553,14.695,36.551,36.551,0,0,1-19.2,5.363v43.119a39.656,39.656,0,0,1,19.2,4.827,48.394,48.394,0,0,1,15.553,13.623,68.181,68.181,0,0,1,10.512,21.559,97.982,97.982,0,0,1,3.861,28.425v108.12q0,19.736,6.222,34.646A76.725,76.725,0,0,0,162.094,770.4a66.174,66.174,0,0,0,21.559,14.8,59.784,59.784,0,0,0,23.169,4.934h43.763V750.444H219.05a20.963,20.963,0,0,1-13.3-4.184,30.665,30.665,0,0,1-8.688-11.048,55.688,55.688,0,0,1-4.719-15.445,109.253,109.253,0,0,1-1.4-17.591V594.055q0-20.8-4.934-35.182T174,535.168a59.7,59.7,0,0,0-14.91-14.373,81.729,81.729,0,0,0-13.837-7.4,80.073,80.073,0,0,0,13.837-9.975A88.839,88.839,0,0,0,174,486.364a105.4,105.4,0,0,0,12.013-23.92,90,90,0,0,0,4.934-30.784V323.54a125.223,125.223,0,0,1,1.4-18.986,55.866,55.866,0,0,1,4.719-15.982,30.682,30.682,0,0,1,8.688-11.048,20.963,20.963,0,0,1,13.3-4.183h31.535Z"}),(0,n.jsx)("path",{id:"_0x58","data-name":"0x58",fillRule:"evenodd",fill:"dark"===t?"#805AD5":"#000000",d:"M272.427,499.659a123.973,123.973,0,0,1,1.289-13.707,91.616,91.616,0,0,1,3.008-13.319,41.279,41.279,0,0,1,5.413-11.429,26.632,26.632,0,0,1,8.593-7.991,24.332,24.332,0,0,1,12.461-3.008,24.752,24.752,0,0,1,12.589,3.008,26.922,26.922,0,0,1,8.679,7.991,40.6,40.6,0,0,1,5.456,11.429,92.011,92.011,0,0,1,3.008,13.319,123.973,123.973,0,0,1,1.289,13.707q0.258,6.831.258,12.5,0,5.844-.172,12.675a131,131,0,0,1-1.074,13.706,86.756,86.756,0,0,1-2.793,13.276,39.027,39.027,0,0,1-5.371,11.386,26.058,26.058,0,0,1-8.808,7.949,26.534,26.534,0,0,1-13.061,2.964,26.088,26.088,0,0,1-12.933-2.964,25.773,25.773,0,0,1-8.722-7.949,39.625,39.625,0,0,1-5.328-11.386,86.517,86.517,0,0,1-2.793-13.276,130.643,130.643,0,0,1-1.074-13.749q-0.173-6.875-.172-12.632Q272.169,506.49,272.427,499.659Zm-29.174,27.283q0.3,7.563,1.246,15.038a121.715,121.715,0,0,0,2.75,14.608,73.709,73.709,0,0,0,4.812,13.492,54.959,54.959,0,0,0,7.433,11.686,43.584,43.584,0,0,0,10.656,9.2,52.364,52.364,0,0,0,14.393,6.015,73.5,73.5,0,0,0,18.648,2.149,74.4,74.4,0,0,0,18.776-2.149,52.318,52.318,0,0,0,14.436-6.015,43.64,43.64,0,0,0,10.656-9.2,56.343,56.343,0,0,0,7.476-11.686,71.858,71.858,0,0,0,4.855-13.492,121.913,121.913,0,0,0,2.75-14.608q0.944-7.476,1.246-15.038t0.3-14.78q0-9.108-.558-19.12a127.557,127.557,0,0,0-2.621-19.636,90.761,90.761,0,0,0-5.972-18.3,47.994,47.994,0,0,0-27.327-25.694q-9.924-3.867-24.017-3.867-14.008,0-23.932,3.867a48.1,48.1,0,0,0-16.585,10.441A50.825,50.825,0,0,0,252.061,455.1a87.142,87.142,0,0,0-5.972,18.3,130.92,130.92,0,0,0-2.578,19.636q-0.559,10.011-.559,19.12Q242.952,519.38,243.253,526.942ZM422.8,530.809l-46.145,65.48H411.2l29.561-44,29.217,44h35.575l-46.832-67.2,42.965-57.746H466.114l-25.35,36.607-25.006-36.607H380.182Zm207.35-77.768V428.378H538.98l-16.928,91.861,24.318,0.688q3.179-3.179,6.4-5.93a45.775,45.775,0,0,1,6.789-4.812,33.925,33.925,0,0,1,7.562-3.222,31.489,31.489,0,0,1,8.808-1.16,37.643,37.643,0,0,1,13.878,2.449,31.125,31.125,0,0,1,10.656,6.831,30.114,30.114,0,0,1,6.831,10.484,36.013,36.013,0,0,1,2.406,13.319,43.8,43.8,0,0,1-2.492,15.468,31.132,31.132,0,0,1-6.788,11,27.749,27.749,0,0,1-10.054,6.574,34.5,34.5,0,0,1-12.375,2.191,32.585,32.585,0,0,1-12.374-2.234,28.332,28.332,0,0,1-9.5-6.23,31.048,31.048,0,0,1-6.4-9.366,36.953,36.953,0,0,1-3.008-11.73H518.529A57.848,57.848,0,0,0,523.6,567.8a50.147,50.147,0,0,0,12.546,16.886,53.267,53.267,0,0,0,18.174,10.269,68.465,68.465,0,0,0,21.956,3.48q15.81,0,27.627-4.812a57.376,57.376,0,0,0,19.678-12.847,52.543,52.543,0,0,0,11.773-18.432,61.027,61.027,0,0,0,3.91-21.655q0-14.952-4.512-26.08a50.248,50.248,0,0,0-30.978-29.69,69.6,69.6,0,0,0-22.944-3.695,71.07,71.07,0,0,0-13.534,1.289,36.05,36.05,0,0,0-12.5,4.984l6.7-34.458h68.66Zm64.875,9.581a19.689,19.689,0,0,1,5.886-6.574,26.547,26.547,0,0,1,8.336-3.867,35.949,35.949,0,0,1,9.581-1.289,34.984,34.984,0,0,1,9.925,1.332,22.429,22.429,0,0,1,7.777,3.953,17.67,17.67,0,0,1,5.07,6.617,22.247,22.247,0,0,1,1.8,9.238,23.685,23.685,0,0,1-1.8,9.5,20.171,20.171,0,0,1-4.984,7.046A22.039,22.039,0,0,1,729.058,493a28.475,28.475,0,0,1-9.538,1.547,35.694,35.694,0,0,1-10.14-1.418,25.777,25.777,0,0,1-8.508-4.254,20.385,20.385,0,0,1-8.077-16.842A18.967,18.967,0,0,1,695.029,462.622ZM665.211,480.84a42.009,42.009,0,0,0,9.409,17.4,38.386,38.386,0,0,0,7.605,6.531q-12.2,6.1-18.26,16.713a47.753,47.753,0,0,0-6.059,24.1q0,13.321,4.77,23.374a47.224,47.224,0,0,0,13.061,16.756,56.208,56.208,0,0,0,19.55,10.054,84.561,84.561,0,0,0,24.233,3.352,75.067,75.067,0,0,0,23.2-3.524,57.228,57.228,0,0,0,19.12-10.311,49.2,49.2,0,0,0,13.019-16.757,52.175,52.175,0,0,0,4.812-22.944,45.7,45.7,0,0,0-6.531-24.447,44.893,44.893,0,0,0-18.819-16.714,36.222,36.222,0,0,0,13.835-13.921A40.693,40.693,0,0,0,772.625,471a47.5,47.5,0,0,0-1.375-11.3A40.9,40.9,0,0,0,767,449.045a41.7,41.7,0,0,0-7.347-9.324,45.127,45.127,0,0,0-10.613-7.476A57.988,57.988,0,0,0,735.03,427.3a81.1,81.1,0,0,0-17.659-1.762,69.786,69.786,0,0,0-13.706,1.332,63,63,0,0,0-12.632,3.91,51.371,51.371,0,0,0-10.956,6.4,40.59,40.59,0,0,0-8.55,8.894,42,42,0,0,0-5.586,11.3A43.943,43.943,0,0,0,663.922,471,38.152,38.152,0,0,0,665.211,480.84Zm24.447,54.051a25.661,25.661,0,0,1,6.875-8.637,31.838,31.838,0,0,1,10.183-5.456,39.409,39.409,0,0,1,12.46-1.934,33.7,33.7,0,0,1,11.9,2.106,32.5,32.5,0,0,1,9.882,5.757,27.105,27.105,0,0,1,6.7,8.593,23.573,23.573,0,0,1,2.449,10.613,29.472,29.472,0,0,1-2.191,11.558,25.114,25.114,0,0,1-6.23,8.894,28.284,28.284,0,0,1-9.667,5.714,36.8,36.8,0,0,1-12.5,2.019,44.716,44.716,0,0,1-13.062-1.8,29.024,29.024,0,0,1-10.226-5.371,24.684,24.684,0,0,1-6.7-8.765,28.035,28.035,0,0,1-2.406-11.9A25.279,25.279,0,0,1,689.658,534.891Z"})]})}var p=i(856);function u(){var e=(0,r.If)().colorMode;return(0,n.jsxs)(o.Kq,{as:"section",spacing:{base:8,md:10},direction:{base:"column-reverse",md:"row"},m:"0 auto 4rem auto",maxWidth:"3xl",px:2,children:[(0,n.jsxs)(o.Kq,{justify:"center",spacing:{base:4,md:6},children:[(0,n.jsxs)(o.Ug,{align:"baseline",justify:{base:"flex-start"},children:[(0,n.jsx)(o.X6,{size:"3xl",color:(0,r.ff)("purple.500","white"),children:"Hi"}),(0,n.jsx)(o.X6,{as:"h1",size:"lg",md:2,color:(0,r.ff)("black","purple.500"),children:", I'm Siriwat Bunmee"})]}),(0,n.jsx)(o.kC,{children:(0,n.jsx)(o.xv,{color:{light:"grey.700",dark:"gray.400"}[e],children:"I studying in computer science major, and I have an interest in all things about computers, especially Back-end in Software Development and Software Engineering. Always learning and practicing to develop and improve myself. Feel free to reach out via email or any social media with any inquiries."})}),(0,n.jsxs)(o.Kq,{spacing:{base:4,sm:6},direction:{base:"column",sm:"row"},children:[(0,n.jsx)(d,{href:"https://github.com/homhom2012z",rightIcon:s.hJX,children:"Github"}),(0,n.jsx)(d,{href:"https://www.linkedin.com/in/siriwatbunmee/",rightIcon:s.ltd,children:"Linkedin"})]})]}),(0,n.jsx)(o.kC,{flex:1,justify:"center",align:"center",position:"relative",w:"full",children:(0,n.jsx)(o.oM,{flexShrink:0,ratio:1,w:56,h:56,as:"figure",children:(0,n.jsx)(p.E.div,{animate:{y:20,scale:.97},transition:{repeat:1/0,duration:2,repeatType:"reverse"},children:(0,n.jsx)(o.xu,{position:"relative",align:"center",width:"full",overflow:"hidden",transform:"scale(1.0)",transition:"0.3s ease-in-out",_hover:{transform:"scale(1.2)"},children:(0,n.jsx)(m,{colorMode:e})})})})})]})}var g=i(1684),f=i(7991);function j(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("title",{children:"Home - Siriwat Bunmee"})]}),(0,n.jsx)(u,{}),(0,n.jsx)(g.Z,{data:f.q,length:3,isPreview:!0})]})}}},function(e){e.O(0,[116,385,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);