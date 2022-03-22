(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8947:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(8997)}])},1684:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var n=i(5893),r=i(7294),a=i(949),o=i(8527),s=i(9116),c=i(5113),l=i(9876),h=i(1664),d=i(4651),m=i(894),p=i(6893),u={android:"green",aws:"orange",c:"red",csharp:"teal",cplusplus:"pink",java:"orange",javascript:"yellow",python:"blue",php:"gray",react:"cyan",nodejs:"green",html5:"orange"};function g(e){var t=e.data,i=(e.id,(0,a.If)().colorMode),s=(0,r.useState)(0),c=s[0],l=s[1];return(0,n.jsx)(o.Kq,{children:(0,n.jsx)(o.fG,{position:"relative",border:"1px solid",borderColor:(0,a.ff)("gray.200","gray.700"),borderRadius:"xl",background:(0,a.ff)("gray.50","#1A1A1A"),transitionProperty:"transform",transitionDuration:"slower","transition-timing-function":"easing-ease-out",_hover:{transform:"translateY(-4px)",shadow:"lg"},onMouseOver:function(){return l(1)},onMouseLeave:function(){return l(0)},p:4,mt:2,mb:2,children:(0,n.jsxs)(o.Ug,{children:[(0,n.jsx)(d.Ee,{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/".concat(t.mainTech,"/").concat(t.mainTech,"-original.svg"),alt:"img",width:["40px","50px","60px"],ml:2,mr:4}),(0,n.jsxs)(o.Kq,{spacing:3,width:"100%",children:[(0,n.jsxs)(o.Kq,{justify:"space-between",direction:{base:"column",sm:"row"},children:[(0,n.jsx)(o.X6,{size:"sm",children:(0,n.jsx)(o.AB,{href:t.link,target:"_blank",children:t.title})}),(0,n.jsxs)(o.Ug,{children:[(0,n.jsx)(o.Ct,{colorScheme:u[t.mainTech],children:t.mainTech}),(0,n.jsx)(m.JO,{as:p.AlO,opacity:c})]})]}),(0,n.jsx)(o.xv,{fontSize:"sm",color:{light:"grey.700",dark:"gray.400"}[i],children:t.description})]})]})})})}function f(e){var t=e.data,i=e.length,d=e.isPreview,m=(0,r.useState)(""),p=m[0],u=m[1],f=t.sort((function(e,t){return e.key-t.key})).filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())})),j=(0,a.ff)("gray.100","gray.700");return(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(o.iz,{mb:12,mt:2,w:"90%",alignSelf:"center"}),(0,n.jsxs)(o.X6,{as:"h1",size:"lg",mb:6,children:["Projects",!d&&" ( ".concat(f.length," ) ")]}),d?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.xv,{mb:4,children:"Below is the list of Open Source Projects I've worked on in learning methods and university term projects."}),(0,n.jsxs)(s.BZ,{mb:4,mr:4,w:"100%",children:[(0,n.jsx)(s.II,{"aria-label":"Search by title",placeholder:"Search by title",onChange:function(e){return u(e.target.value)}}),(0,n.jsx)(s.xH,{children:(0,n.jsx)(l.W1,{color:"gray.300"})})]})]}),!f.length&&(0,n.jsx)(o.Kq,{flex:1,justify:"center",align:"center",children:(0,n.jsx)(o.xv,{children:"No projects found."})}),(0,n.jsx)(o.aV,{children:f.slice(0,"".concat(i||t.length)).map((function(e,t){return(0,n.jsx)(g,{data:e,id:t},t)}))}),d&&(0,n.jsx)(o.kC,{justify:"center",width:"100%",children:(0,n.jsx)(h.default,{href:"/projects",passHref:!0,children:(0,n.jsx)(o.rU,{_hover:"",mt:8,children:(0,n.jsx)(c.zx,{rightIcon:(0,n.jsx)(l.mr,{}),colorScheme:"gray",variant:"outline","aria-label":"view all projects",fontSize:"sm",_hover:{background:"".concat(j)},children:"View All Projects"})})})})]})}},7991:function(e,t,i){"use strict";i.d(t,{q:function(){return n}});var n=[{title:"CI/CD - Pizza Store Web Application",link:"https://github.com/homhom2012z/CS360_STINSE",mainTech:"nodejs",description:"Class project for Selected topics in Software Engineer (CS360) : This project is to develop an existing project from GitHub and simulate the deployment in a team with an agile process by using Docker and creating a CI/CD pipeline and then deploying it to AWS Service."},{title:"CA Timetable & Class Assistant",link:"https://github.com/homhom2012z/CATimetable",mainTech:"android",description:"Class project for Mobile Application Development (CS361) : Android application for student timetable management. My responsibility is as a Software engineer and UI Designer. Designed and developed with Android Studio (Java)"},{title:"Hospital Management Systems",link:"https://github.com/homhom2012z/opeope_hospital",mainTech:"php",description:"Class project for Database System1 (CS251) This project is about the management and development of a database system, by creating a Hospital Management website using PHP, HTML, phpMyAdmin, and SQL"},{title:"TU Late Registration System",link:"https://github.com/homhom2012z/cs264_project",mainTech:"nodejs",description:"Class project for Introduction to Software Engineering (CS264) - This project is about simulating software development with the agile process by creating a late registration web application for a computer science department."},{title:"TU Student - public information viewer",link:"https://github.com/homhom2012z/tustdinfo",mainTech:"html5",description:"A web application for retrieving student information from Thammasat University APIs by using a student identification number. Built a project with HTML, EJS, and Node JS as back-end."},{title:"Google scholar Web Scraping",link:"https://github.com/homhom2012z/google-scholar-web-scraping",mainTech:"python",description:"A basic python web scraping using python & selenium for Scraping researches data under the affiliation of Thammasat University."},{title:"Reg-TU Web Scraping",link:"",mainTech:"python",description:"This project is about to scrape all course details by academic year, faculties, and semesters from Thammasat University's registrar's website. And save to a file (Excel format)."},{title:"URL Grabber - Chrome extension",link:"https://github.com/homhom2012z/url-grabber-chrome-extension",mainTech:"javascript",description:"An extension for save - store URL/Tab links likes as default bookmarks | integrated with API."},{title:"Fetch URL title - Node JS Native",link:"https://github.com/homhom2012z/fetch-url-title-nodejs-native",mainTech:"nodejs",description:"An API for fecthing URLs title by URL using Node JS Built-in fetch (v.17.5.0+)"}]},8997:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(5893),r=(i(7294),i(9008)),a=i(1684),o=i(7991);function s(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("title",{children:"Projects - Siriwat Bunmee"})]}),(0,n.jsx)(a.Z,{data:o.q})]})}}},function(e){e.O(0,[116,385,774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);