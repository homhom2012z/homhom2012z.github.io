(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8947:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(8997)}])},9528:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var s=i(5893),n=i(7294),r=i(949),o=i(8527),a=i(5113),c=i(9116),l=i(9876),h=i(1664),d=i(4651),p=i(894),m=i(6893),u={android:"green",aws:"orange",c:"red",csharp:"teal",cplusplus:"pink",java:"orange",javascript:"yellow",python:"blue",php:"gray",react:"cyan",nodejs:"green",html5:"orange",nextjs:"blue",git:"orange",docker:"blue",expressjs:"red",chakraui:"cyan"};function g(e){var t=e.data,i=(e.id,(0,r.If)().colorMode),a=(0,n.useState)(0),c=a[0],l=a[1];return(0,s.jsx)(o.Kq,{children:(0,s.jsx)(o.fG,{position:"relative",border:"1px solid",borderColor:(0,r.ff)("gray.200","gray.700"),borderRadius:"xl",background:(0,r.ff)("gray.50","#1A1A1A"),transitionProperty:"transform",transitionDuration:"slower","transition-timing-function":"easing-ease-out",_hover:{transform:"translate(-4px,-4px)",shadow:"lg"},onMouseOver:function(){return l(1)},onMouseLeave:function(){return l(0)},p:4,mt:2,mb:2,children:(0,s.jsxs)(o.Ug,{children:[(0,s.jsx)(d.Ee,{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/".concat(t.stacks[0],"/").concat(t.stacks[0],"-original.svg"),alt:"img",width:["40px","50px","60px"],ml:2,mr:4}),(0,s.jsxs)(o.Kq,{spacing:3,width:"100%",children:[(0,s.jsxs)(o.Kq,{justify:"space-between",direction:{base:"column",sm:"row"},children:[(0,s.jsx)(o.X6,{size:"sm",children:(0,s.jsx)(o.AB,{href:t.link,target:"_blank",children:t.title})}),(0,s.jsxs)(o.Ug,{children:[t.stacks.slice(0).reverse().map((function(e){return(0,s.jsx)(o.Ct,{colorScheme:u[e],children:e},e)})),(0,s.jsx)(p.JO,{as:m.AlO,opacity:c})]})]}),(0,s.jsx)(o.xv,{fontSize:"sm",color:{light:"grey.700",dark:"gray.400"}[i],children:t.description})]})]})})})}var j=(0,i(7703).ZP)((function(){return i.e(171).then(i.t.bind(i,5171,23))})),f=function(e){var t=e.data;e.id;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.xu,{maxWidth:"container.md",children:(0,s.jsx)(j,{name:!1,displayObjectSize:!1,displayDataTypes:!1,enableClipboard:!1,src:t,theme:"rjv-default"})})})};function b(e){var t=e.data,i=e.length,d=e.isPreview,p=(0,n.useState)(""),m=p[0],u=p[1],j=(0,n.useState)(!1),b=j[0],x=j[1],k=t.sort((function(e,t){return e.key-t.key})).filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())})),v=(0,r.ff)("purple.100","purple.700");return(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)(o.iz,{mb:12,mt:2,w:"90%",alignSelf:"center"}),(0,s.jsxs)(o.kC,{as:"header",width:"full",align:"center",children:[(0,s.jsxs)(o.X6,{as:"h1",size:"lg",mb:6,children:["Projects",!d&&" (".concat(k.length," project) ")]}),!d&&(0,s.jsx)(o.xu,{marginLeft:"auto",mb:6,opacity:"0.7",children:(0,s.jsx)(o.Kq,{direction:{base:"row"},spacing:2,children:(0,s.jsx)(a.zx,{colorScheme:b?"purple":"orange",size:"sm",onClick:function(){return x(!b)},children:b?"Card View":"JSON View"})})})]}),d?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.xv,{mb:4,children:["Below is the list of"," ",(0,s.jsx)(o.rU,{href:"https://github.com/homhom2012z",textDecorationLine:"underline",isExternal:!0,children:"Open Source"})," ","Projects I've worked on in learning methods and university term projects."]}),(0,s.jsxs)(c.BZ,{mb:4,mr:4,w:"100%",children:[(0,s.jsx)(c.II,{"aria-label":"Search by title",placeholder:"Search by title",onChange:function(e){return u(e.target.value)}}),(0,s.jsx)(c.xH,{children:(0,s.jsx)(l.W1,{color:"gray.300"})})]})]}),!k.length&&(0,s.jsx)(o.Kq,{flex:1,justify:"center",align:"center",children:(0,s.jsx)(o.xv,{children:"No projects found."})}),(0,s.jsx)(o.aV,{children:k.slice(0,"".concat(i||t.length)).map((function(e,t){return b?(0,s.jsx)(f,{data:e,id:t},t):(0,s.jsx)(g,{data:e,id:t},t)}))}),d&&(0,s.jsx)(o.kC,{justify:"center",width:"100%",children:(0,s.jsx)(h.default,{href:"/projects",passHref:!0,children:(0,s.jsx)(o.rU,{_hover:"",mt:8,children:(0,s.jsx)(a.zx,{rightIcon:(0,s.jsx)(l.mr,{}),colorScheme:"gray",variant:"outline","aria-label":"view all projects",fontSize:"sm",_hover:{background:"".concat(v)},children:"View All Projects"})})})})]})}},7991:function(e,t,i){"use strict";i.d(t,{q:function(){return s}});var s=[{title:"CI/CD - Pizza Store Web Application",link:"https://github.com/homhom2012z/CS360_STINSE",stacks:["nodejs","git","CI/CD","docker"],description:"Class project for Selected topics in Software Engineer (CS360) : This project is to develop an existing project from GitHub and simulate the deployment in a team with an agile process by using Docker and creating a CI/CD pipeline and then deploying it to AWS Service."},{title:"CA Timetable & Class Assistant",link:"https://github.com/homhom2012z/CATimetable",stacks:["android","java"],description:"Class project for Mobile Application Development (CS361) : Android application for student timetable management. My responsibility is as a Software engineer and UI Designer. Designed and developed with Android Studio (Java)"},{title:"Hospital Management Systems",link:"https://github.com/homhom2012z/opeope_hospital",stacks:["php"],description:"Class project for Database System1 (CS251) This project is about the management and development of a database system, by creating a Hospital Management website using PHP, HTML, phpMyAdmin, and SQL"},{title:"TU Late Registration System",link:"https://github.com/homhom2012z/cs264_project",stacks:["nodejs","expressjs"],description:"Class project for Introduction to Software Engineering (CS264) - This project is about simulating software development with the agile process by creating a late registration web application for a computer science department."},{title:"Tiny Socket Programming",link:"https://github.com/homhom2012z/socket-programming",stacks:["java"],description:"A tiny Socket Programming (TCP-UDP) writing in Java"},{title:"TU Student - public information viewer",link:"https://github.com/homhom2012z/tustdinfo",stacks:["html5","nodejs"],description:"A web application for retrieving student information from Thammasat University APIs by using a student identification number. Built a project with HTML, EJS, and Node JS as back-end."},{title:"Google scholar Web Scraping",link:"https://github.com/homhom2012z/google-scholar-web-scraping",stacks:["python"],description:"A basic python web scraping using python & selenium for Scraping researches data under the affiliation of Thammasat University."},{title:"Reg-TU Web Scraping",link:"https://github.com/homhom2012z/reg-tu-web-scraping",stacks:["python"],description:"This project is about to scrape all course details by academic year, faculties, and semesters from Thammasat University's registrar's website. And save to a file (Excel format)."},{title:"URL Grabber - Chrome extension",link:"https://github.com/homhom2012z/url-grabber-chrome-extension",stacks:["javascript"],description:"An extension for save - store URL/Tab links likes as default bookmarks | integrated with API."},{title:"Fetch URL title - Node JS Native",link:"https://github.com/homhom2012z/fetch-url-title-nodejs-native",stacks:["nodejs"],description:"An API for fetching URLs title by URL using Node JS Built-in fetch (v.17.5.0+)"},{title:"homhom2012z.github.io",link:"https://github.com/homhom2012z/homhom2012z.github.io",stacks:["nextjs","chakraui"],description:"My Personal Portfolio website. built with Next.js & Chakra-UI"},{title:"Dog every 5 seconds",link:"https://dog-every-5-seconds.vercel.app/",stacks:["nextjs","chakraui"],description:"Display random dogs image every 5 seconds. using API from https://dog.ceo/dog-api/"},{title:"Simple-Native-DB",link:"https://github.com/homhom2012z/simple-native-db",stacks:["nodejs","expressjs","JSON"],description:"Simple JSON native database system"},{title:"Simple-Native-DB-Client",link:"https://simple-native-db-client.vercel.app/",stacks:["nextjs","chakraui"],description:"Frontend client for simple-native-db. Built with Next.js & Chakra-UI"},{title:"Nodejs-Auth-Sessions",link:"https://github.com/homhom2012z/nodejs-express-sessions",stacks:["nodejs","expressjs","sessions"],description:"Sample of Node.js session management using Express.js and Express-sessions."}]},8997:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var s=i(5893),n=(i(7294),i(9008)),r=i(9528),o=i(7991);function a(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("title",{children:"Projects - Siriwat Bunmee"})]}),(0,s.jsx)(r.Z,{data:o.q})]})}}},function(e){e.O(0,[116,268,774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);