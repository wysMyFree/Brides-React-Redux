(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(29),r=t(30),l=t(32),c=t(31),i=t(33),s=t(0),o=t.n(s),u=t(26),m=t(12),d=function(e){return{isAuth:e.auth.isAuth}},E=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,a),Object(r.a)(t,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(u.a,{to:"/login"})}}]),t}(o.a.Component);return Object(m.b)(d)(a)}},130:function(e,a,t){"use strict";t.d(a,"b",(function(){return c}));var n=t(71),r=t(11),l={messagesData:[{id:1,message:"Lorem ipsum dolor sit amet"},{id:2,message:"Adipisci aperiam fuga possimus quae quis tenetur!"},{id:3,message:"Accusamus adipisci, aliquid animi aut consequuntur deleniti"},{id:4,message:"id ipsum nulla, odio quasi repellendus rerum sint"}],chatsData:[{name:"Tanya",id:1,age:"29",city:"Lviv"},{name:"Maryana",id:2,age:"22",city:"Franek"},{name:"Daryna",id:3,age:"23",city:"Gomel"},{name:"Maryna",id:4,age:"24",city:"Chernigiv"},{name:"Iryna",id:5,age:"25",city:"Kyiv"}],myMessagesData:[{id:1,myMessage:"ipsum dolor sit amet"},{id:2,myMessage:"aperiam fuga possimus quae quis tenetur!"},{id:3,myMessage:"adipisci, aliquid animi aut consequuntur deleniti"},{id:4,myMessage:"Lorem id ipsum nulla, odio quasi repellendus rerum sint"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEND_MESSAGE":var t=a.newMessageBody;return Object(r.a)({},e,{myMessagesData:[].concat(Object(n.a)(e.myMessagesData),[{id:6,myMessage:t}])});default:return e}}},134:function(e,a,t){"use strict";var n=t(10),r=t.n(n),l=t(71),c=t(11),i=t(20),s=function(e,a,t,n){e.map((function(e){return e[t]===a?Object(c.a)({},e,{},n):e}))};t.d(a,"d",(function(){return d})),t.d(a,"f",(function(){return E})),t.d(a,"e",(function(){return f})),t.d(a,"c",(function(){return _})),t.d(a,"b",(function(){return p})),t.d(a,"g",(function(){return h}));var o={users:[{id:1,followed:!1,name:"Daryna",age:"23",city:"Gomel"},{id:2,followed:!0,name:"Maryna",age:"24",city:"Mykolaiv"},{id:3,followed:!0,name:"Galyna",age:"25",city:"Kyiv"},{id:4,followed:!0,name:"Malyna",age:"26",city:"Mykolaiv"},{id:5,followed:!1,name:"Kalyna",age:"27",city:"Lviv"}],pageSize:6,totalUsersCount:36,currentPage:1,isFetching:!1,followingInProgress:[]},u=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},f=function(e,a){return{type:"TOGGLE_FOLLOWING_IN_PROGRESS",isFetching:e,userId:a}},_=function(e,a){return function(t){var n;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t(E(!0)),t(d(e)),l.next=4,r.a.awrap(i.c.getUsers(e,a));case 4:n=l.sent,t(E(!1)),t({type:"SET_USERS",users:n.items}),t({type:"SET_TOTAL_USERS_COUNT",count:n.totalCount});case 8:case"end":return l.stop()}}))}},p=function(e){return function(a){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a(f(!0,e)),t.next=3,r.a.awrap(i.c.followUser(e));case 3:0==t.sent.resultCode&&a(u(e)),a(f(!1,e));case 6:case"end":return t.stop()}}))}},h=function(e){return function(a){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a(f(!0,e)),t.next=3,r.a.awrap(i.c.unfollowUser(e));case 3:0==t.sent.resultCode&&a(m(e)),a(f(!1,e));case 6:case"end":return t.stop()}}))}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(c.a)({},e,{users:s(e.users,a.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===a.userId?Object(c.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(c.a)({},e,{users:a.users});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:a.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:a.count});case"TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:a.isFetching});case"TOGGLE_FOLLOWING_IN_PROGRESS":return Object(c.a)({},e,{followingInProgress:a.isFetching?[].concat(Object(l.a)(e.followingInProgress),[a.userId]):e.followingInProgress.filter((function(e){return e!=a.userId}))});default:return e}}},135:function(e,a,t){e.exports=t.p+"static/media/danny.358035aa.jpg"},136:function(e,a,t){e.exports=t.p+"static/media/danny2.11a70194.jpg"},139:function(e,a,t){e.exports=t.p+"static/media/photo3.510c4275.jpg"},140:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA3CAYAAABErrdQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMjE5NDdFNUVFMkZFNTExQThBNURBMEQ4NkYzQTM1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMTcyQkIzMkE4RUExMUU1OERCMUE5NUJEODEwNzlDMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMTcyQkIzMUE4RUExMUU1OERCMUE5NUJEODEwNzlDMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNDAyMDkwNzU3REU1MTE4RThGRUIzOThFM0JBNzZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyMTk0N0U1RUUyRkU1MTFBOEE1REEwRDg2RjNBMzU4Ii8+IDwvcmRmOkRlc2NyaXB0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"},169:function(e,a,t){e.exports=t(296)},174:function(e,a,t){},175:function(e,a,t){},20:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return i}));var n=t(141),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"d24401c4-48d2-41f7-90e2-7b6baed1bd5b"}}),l={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return r.get("users?page=".concat(e,"&count=").concat(a)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:a,rememberMe:t})},logout:function(){return r.delete("auth/login")}}},25:function(e,a,t){e.exports={main_menu:"Sidebar_main_menu__3hpDX",menu_drop:"Sidebar_menu_drop__1Nb-V",badge:"Sidebar_badge__3nE-l",services:"Sidebar_services__3_TJ6",correspondence:"Sidebar_correspondence__1P0j7",ladies:"Sidebar_ladies__2ah-v",finances:"Sidebar_finances__2yS40",myprofile:"Sidebar_myprofile__1x-Kz"}},296:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(65),c=t.n(l),i=(t(174),t(29)),s=t(30),o=t(32),u=t(31),m=t(33),d=(t(175),t(25)),E=t.n(d),f=t(15),_=t(26),p=t(92),h=t.n(p),b=function(){return r.a.createElement("div",{className:h.a.panel},r.a.createElement("h1",{className:"hello_name"},"Welcome,",r.a.createElement("span",null," John"),"!"),r.a.createElement("div",{className:h.a.info_profile},"Dude, your profile is only 35% complete!",r.a.createElement("div",{className:"progress_bar"},r.a.createElement("span",{className:"sr-only"},"!!! 35% Complete !!!")),r.a.createElement("p",null,"To attract more ladies attention to your account - it need`s to be complete. You can check how does it look like now."),r.a.createElement("a",{href:"#",className:"button"},r.a.createElement("button",null,"Edit My Profile")),r.a.createElement("a",{href:"#",className:"button"},r.a.createElement("button",null,"View My Profile"))))},g=t(93),v=t.n(g),y=t(135),N=t.n(y),S=t(136),w=t.n(S),O=t(94),k=t.n(O),M=function(){return r.a.createElement("div",{className:v.a.photo_panel},r.a.createElement("h1",{className:"hello_name"},"My Photos"),r.a.createElement("img",{src:N.a,alt:!0,className:"img_responsive"}),r.a.createElement("img",{src:w.a,alt:""}),r.a.createElement("img",{src:k.a,alt:""}),r.a.createElement("img",{src:k.a,alt:""}),r.a.createElement("div",{className:v.a.upload_block},"Upload Photos",r.a.createElement("p",null,"Browse the photos on your device and select wich of them do you want to upload."),r.a.createElement("a",{href:"#",className:"button"},r.a.createElement("button",null,"Select Photos"))))},L=function(){return r.a.createElement("div",{className:E.a.main_menu},r.a.createElement("div",{className:E.a.menu_drop},r.a.createElement("ul",{className:E.a.correspondence}," Correspondence",r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Ladies",r.a.createElement("span",{className:E.a.badge},r.a.createElement("b",null,"5"),"/24 "))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Administration",r.a.createElement("span",{className:E.a.badge},r.a.createElement("b",null,"1"),"/20 "))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"}," Draft")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Deleted Mail")," "),r.a.createElement("li",null," ",r.a.createElement(f.b,{to:"/chathistory"}," Chat History")," ")),r.a.createElement("ul",{className:E.a.ladies}," Ladies",r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," My favorite ladies")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," My favorite photos")," "),r.a.createElement("li",null,r.a.createElement("a",{href:"#"}," My favorite videos")," "),r.a.createElement("li",null," ",r.a.createElement(f.b,{to:"/ladiescatalog"}," My contact list")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Online ladies")," ")),r.a.createElement("ul",{className:E.a.services}," Services",r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Phone Calls")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Live Chats")," ")),r.a.createElement("ul",{className:E.a.finances}," Finances",r.a.createElement("li",null,r.a.createElement("a",{href:"#"}," My Credits")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Buy Credits")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Expenses History")," ")),r.a.createElement("ul",{className:E.a.myprofile}," My profile",r.a.createElement("li",null," ",r.a.createElement(f.b,{to:"/main/viewprofile"}," View profile")," "),r.a.createElement("li",null," ",r.a.createElement(f.b,{to:"/main/myphotos"}," My photos")," "),r.a.createElement("li",null,r.a.createElement("a",{href:"#"}," Edit profile")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Change Password")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Log Out")," "))),r.a.createElement("div",null,r.a.createElement(_.b,{path:"/main/viewprofile",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(_.b,{path:"/main/myphotos",render:function(){return r.a.createElement(M,null)}})))},j=t(12),P=t(5),A=t.n(P),C=t(139),I=t.n(C),U=t(41),R=t(91),T=function(e){var a=Object(n.useState)(!1),t=Object(R.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(e.status),s=Object(R.a)(i,2),o=s[0],u=s[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!l&&r.a.createElement("div",{className:A.a.status},r.a.createElement("span",{onDoubleClick:function(){c(!0)}}," mood: ",e.status)),l&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(o)},value:o})))},F=function(e){return e.profile?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:A.a.grid_container},r.a.createElement("div",{className:A.a.profile_main_photo},r.a.createElement("img",{src:I.a,alt:""})),r.a.createElement("div",{className:A.a.profile_main_info},r.a.createElement("div",{className:A.a.profile_name},r.a.createElement("h3",null," ",e.profile.fullName," "),r.a.createElement(T,{status:e.status,updateStatus:e.updateStatus}),r.a.createElement("span",{className:A.a.id_girl}," ID: ",e.profile.userId," ")),r.a.createElement("div",{className:A.a.main_params},r.a.createElement("table",{className:A.a.params_table},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Birth Date"),r.a.createElement("td",{className:A.a.value},"10.09.1990 ")),r.a.createElement("tr",null,r.a.createElement("td",null,"Height"),r.a.createElement("td",{className:A.a.value},"160 cm")),r.a.createElement("tr",null,r.a.createElement("td",null,"Weight"),r.a.createElement("td",{className:A.a.value},"50 kg")),r.a.createElement("tr",null,r.a.createElement("td",null,"Eyes"),r.a.createElement("td",{className:A.a.value},"Green")),r.a.createElement("tr",null,r.a.createElement("td",null,"Hair"),r.a.createElement("td",{className:A.a.value},"Black")),r.a.createElement("tr",null,r.a.createElement("td",null,"Build"),r.a.createElement("td",{className:A.a.value},"Slim")),r.a.createElement("tr",null,r.a.createElement("td",null,"Glasses"),r.a.createElement("td",{className:A.a.value},"No")),r.a.createElement("tr",null,r.a.createElement("td",null,"Smoking"),r.a.createElement("td",{className:A.a.value},"Yes")),r.a.createElement("tr",null,r.a.createElement("td",null,"Drinking"),r.a.createElement("td",{className:A.a.value},"Yes")))))),r.a.createElement("div",{className:A.a.profile_add_info},r.a.createElement("div",{className:A.a.action_btns},r.a.createElement("a",{href:"#0",className:A.a.btn_inv},"Invite to Video Chat"),r.a.createElement("a",{href:"#0",className:A.a.btn_start_chat}," Start a Chat"),r.a.createElement("a",{href:"#0",className:A.a.btn_write_letter},"Write a Letter"),r.a.createElement("a",{href:"#0",className:A.a.btn_add_to_fav}," Add to Favorites"),r.a.createElement("a",{href:"#0",className:A.a.btn_like_her},"Like Her!")),r.a.createElement("div",{className:A.a.add_info},r.a.createElement("table",{className:A.a.params_table},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Religion"),r.a.createElement("td",null,r.a.createElement("a",{href:"#0"},"Christian"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Education"),r.a.createElement("td",null,r.a.createElement("a",{href:"#0"},"B.A. Student"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Field of work"),r.a.createElement("td",null,r.a.createElement("a",{href:"#0"},"Medical/Health"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Occupation"),r.a.createElement("td",null,r.a.createElement("a",{href:"#0"},"Student"))),r.a.createElement("tr",null,r.a.createElement("td",null," Marital status"),r.a.createElement("td",null,r.a.createElement("a",{href:"#0"},"Single and No children"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Want to have children?"),r.a.createElement("td",null,r.a.createElement("a",{href:"#0"},"will decide with my husband"))),r.a.createElement("tr",null,r.a.createElement("td",null,"My Languages"),r.a.createElement("td",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#0"},"Russian"),r.a.createElement("span",null,"(Fluent)")),r.a.createElement("li",null,r.a.createElement("a",{href:"#0"},"Ukrainian"),r.a.createElement("span",null,"(Native)")),r.a.createElement("li",null,r.a.createElement("a",{href:"#0"},"English"),r.a.createElement("span",null,"(Beginner)")))))))))),r.a.createElement("div",{className:A.a.btn_wrap},r.a.createElement("a",{href:"#0",className:A.a.btn_chatstart},"Start a Chat"),r.a.createElement("a",{href:"#0",className:A.a.btn_invite},"Invite to VIdeo Chat"),r.a.createElement("a",{href:"#0",className:A.a.btn_present},"Send a Present"),r.a.createElement("a",{href:"#0",className:A.a.btn_send_letter},"Send a FREE Letter"))):r.a.createElement(U.a,null)},W=t(10),x=t.n(W),G=t(11),D=t(20),Z={profile:null,status:""},z=function(e){return{type:"SET_STATUS",status:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER_PROFILE":return Object(G.a)({},e,{profile:a.profile});case"SET_STATUS":return Object(G.a)({},e,{status:a.status});default:return e}},Y=t(109),B=t(9),H=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(F,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(r.a.Component),K=Object(B.d)(Object(j.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(a){var t;return x.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.awrap(D.b.getProfile(e));case 2:t=n.sent,a({type:"SET_USER_PROFILE",profile:t.data});case 4:case"end":return n.stop()}}))}},getStatus:function(e){return function(a){var t;return x.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.awrap(D.b.getStatus(e));case 2:t=n.sent,a(z(t.data));case 4:case"end":return n.stop()}}))}},updateStatus:function(e){return function(a){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.awrap(D.b.updateStatus(e));case 2:0===t.sent.data.resultCode&&a(z(e));case 4:case"end":return t.stop()}}))}}}),_.f,Y.a)(H),V=t(53),q=t.n(V),Q=t(54),X=t.n(Q),$=t(56),ee={userId:null,email:null,login:null,isAuth:!1},ae=function(e,a,t,n){return{type:"SET_USER_DATA",payload:{userId:e,login:a,email:t,isAuth:n}}},te=function(){return function(e){var a,t,n,r,l;return x.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.a.awrap(D.a.me());case 2:0===(a=c.sent).data.resultCode&&(t=a.data.data,n=t.id,r=t.login,l=t.email,e(ae(n,r,l,!0)));case 4:case"end":return c.stop()}}))}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER_DATA":return Object(G.a)({},e,{},a.payload);default:return e}},re=Object(j.b)(null,{logout:function(){return function(e){return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x.a.awrap(D.a.logout());case 2:0===a.sent.data.resultCode&&e(ae(null,null,null,!1));case 4:case"end":return a.stop()}}))}}})((function(e){return r.a.createElement("div",{className:X.a.dashpanel},r.a.createElement("h3",{className:X.a.panel_name},"Dashboard"),r.a.createElement("nav",{className:X.a.action_nav},r.a.createElement("a",{href:"#"}," Inbox "),r.a.createElement("a",{href:"#"}," Chats"),r.a.createElement("a",{href:"#"}," Video Calls")),r.a.createElement("nav",{className:X.a.profile_nav},r.a.createElement("a",{href:"#"}," My Profile "),r.a.createElement("a",{href:"#"}," My Account "),r.a.createElement("button",{onClick:e.logout}," Logout ")))})),le=function(e){return r.a.createElement("div",null,e.isAuth?r.a.createElement(re,null):null,r.a.createElement("header",{className:q.a.header},r.a.createElement("div",{className:q.a.logo},r.a.createElement(f.b,{to:"/main"},"Brides",r.a.createElement("span",{className:q.a.decor},"dating"))),r.a.createElement("nav",{className:q.a.header_nav},r.a.createElement("a",{href:"#"}," Ladies Gallerie "),r.a.createElement("a",{href:"#"}," New Profiles"),r.a.createElement("a",{href:"#"}," Available for VideoChat"),r.a.createElement(f.b,{to:"/ladiescatalog"}," My Favorites"))))},ce=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(le,this.props)}}]),a}(r.a.Component),ie=Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),{getAuthUserData:te})(ce),se=t(8),oe=t.n(se),ue=t(55),me=t.n(ue),de=t(131),Ee=t(132),fe=t(68),_e=t(90),pe=Object(Ee.a)({form:"main_login"})((function(e){return r.a.createElement("div",{className:oe.a.login_form},r.a.createElement("div",null,r.a.createElement("span",{className:oe.a.fa_facebook},"f "),r.a.createElement("span",{className:oe.a.login_fb}," Login using Facebook ")),r.a.createElement("div",{className:oe.a.logform_text},"Please enter your login information below"),e.error&&r.a.createElement("div",{className:oe.a.auth_error},e.error),r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(de.a,{name:"email",component:fe.a,validate:_e.b,placeholder:"ivan@vitenko.com"})),r.a.createElement("div",null,r.a.createElement(de.a,{name:"password",component:fe.a,validate:_e.b,placeholder:"Password",type:"password"})),r.a.createElement("div",{className:oe.a.checkbox},r.a.createElement(de.a,{name:"rememberMe",component:fe.a,type:"checkbox"})," remember Me"),r.a.createElement("div",{className:oe.a.btns},r.a.createElement("a",{className:oe.a.forgot_btn,href:"#"},"Forgot your password?"),r.a.createElement("button",{className:oe.a.prcd_btn,href:"#"},"Proceed"))))})),he=Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,a,t){return function(n){var r,l;return x.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.a.awrap(D.a.login(e,a,t));case 2:0===(r=c.sent).data.resultCode?n(te()):(l=r.data.messages.length>0?r.data.messages[0]:" Incorrect ",n(Object($.a)("main_login",{_error:l})));case 4:case"end":return c.stop()}}))}}})((function(e){return e.isAuth?r.a.createElement(_.a,{to:"/profile"}):r.a.createElement("div",{className:oe.a.login_page},r.a.createElement("div",{className:oe.a.login_column},r.a.createElement("h2",{className:oe.a.column_name},"Login"),r.a.createElement(pe,{onSubmit:function(a){e.login(a.email,a.password,a.rememberMe)}})),r.a.createElement("div",{className:oe.a.welcome_column},r.a.createElement("h2",{className:oe.a.column_name},"Welcome to Brides.dating"),r.a.createElement("div",{className:oe.a.girls_block},r.a.createElement("div",{className:"prev_anketa"},r.a.createElement("div",{className:"link_img"},r.a.createElement("a",{href:"#0",className:oe.a.img_block},r.a.createElement("img",{src:me.a,alt:""})," "),r.a.createElement("a",{href:"#0",className:oe.a.online_ind},"Online")),r.a.createElement("h3",{className:oe.a.user_name},"Anastasia",r.a.createElement("span",{className:"id_online"})),r.a.createElement("span",{class:"from-city"},"25 years old from Lviv")),r.a.createElement("div",{className:"prev_anketa"},r.a.createElement("div",{className:"link_img"},r.a.createElement("a",{href:"#0",className:oe.a.img_block},r.a.createElement("img",{src:me.a,alt:""})," "),r.a.createElement("a",{href:"#0",className:oe.a.online_ind},"Online")),r.a.createElement("h3",{className:oe.a.user_name},"Anastasia",r.a.createElement("span",{className:"id_online"})),r.a.createElement("span",{class:"from-city"},"25 years old from Lviv")),r.a.createElement("div",{className:"prev_anketa"},r.a.createElement("div",{className:"link_img"},r.a.createElement("a",{href:"#0",className:oe.a.img_block},r.a.createElement("img",{src:me.a,alt:""})," "),r.a.createElement("a",{href:"#0",className:oe.a.online_ind},"Online")),r.a.createElement("h3",{className:oe.a.user_name},"Anastasia",r.a.createElement("span",{className:"id_online"})),r.a.createElement("span",{class:"from-city"},"25 years old from Lviv")),r.a.createElement("div",{className:"prev_anketa"},r.a.createElement("div",{className:"link_img"},r.a.createElement("a",{href:"#0",className:oe.a.img_block},r.a.createElement("img",{src:me.a,alt:""})," "),r.a.createElement("a",{href:"#0",className:oe.a.online_ind},"Online")),r.a.createElement("h3",{className:oe.a.user_name},"Anastasia",r.a.createElement("span",{className:"id_online"})),r.a.createElement("span",{class:"from-city"},"25 years old from Lviv")))))})),be={initialized:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SUCCESSFULY_INITIALIZED":return Object(G.a)({},e,{initialized:!0});default:return e}},ve=function(e){return function(a){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(U.a,null)},r.a.createElement(e,a))}},ye=r.a.lazy((function(){return t.e(3).then(t.bind(null,303))})),Ne=r.a.lazy((function(){return t.e(4).then(t.bind(null,304))})),Se=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement(ie,null)," "),r.a.createElement("div",{className:"body"},r.a.createElement(_.b,{path:"/login",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(_.b,{path:"/chathistory",render:ve(Ne)}),r.a.createElement(_.b,{path:"/main",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(_.b,{path:"/ladiescatalog",render:ve(ye)}),r.a.createElement(_.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(K,null)}}))):r.a.createElement(U.a,null)}}]),a}(r.a.Component),we=Object(B.d)(_.f,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var a=e(te());Promise.all([a]).then((function(){e({type:"SUCCESSFULY_INITIALIZED"})}))}}}))(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=t(130),ke=t(134),Me=t(143),Le=t(133),je=Object(B.c)({chatsPage:Oe.a,ladCatalogPage:ke.a,profilePage:J,auth:ne,form:Le.a,app:ge}),Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,Ae=Object(B.e)(je,Pe(Object(B.a)(Me.a)));c.a.render(r.a.createElement(f.a,null,r.a.createElement(j.a,{store:Ae},r.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,a,t){e.exports={type_mssg_area:"FormControl_type_mssg_area__2w8qp",formControl:"FormControl_formControl__1L7L4",error:"FormControl_error__3gWgL"}},41:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(140),c=t.n(l),i=t(52),s=t.n(i);a.a=function(){return r.a.createElement("div",{className:s.a.myModal,tabindex:"-1",role:"dialog","aria-labelledby":"mySmallModalLabel"},r.a.createElement("div",{className:s.a.modal_dialog},r.a.createElement("div",{className:s.a.modal_my_content},"Loading content...",r.a.createElement("img",{src:c.a,alt:"loading",className:s.a.load_img}))))}},5:function(e,a,t){e.exports={grid_container:"Profile_grid_container__x7Znr",profile_main_photo:"Profile_profile_main_photo__2jH_M",action_btns:"Profile_action_btns__AnCkd",btn_inv:"Profile_btn_inv__1Larg",btn_start_chat:"Profile_btn_start_chat__2FhSw",btn_write_letter:"Profile_btn_write_letter__2Sxrj",btn_add_to_fav:"Profile_btn_add_to_fav__IxHvL",btn_like_her:"Profile_btn_like_her__2zEVe",value:"Profile_value__AZyfL",params_table:"Profile_params_table___V7Xi",id_girl:"Profile_id_girl__181i6",btn_wrap:"Profile_btn_wrap__1H0_e",btn_send_letter:"Profile_btn_send_letter__2f_4b",btn_chatstart:"Profile_btn_chatstart__6Fwbh",btn_present:"Profile_btn_present__90zyz",btn_invite:"Profile_btn_invite__2R1M0",status:"Profile_status__2-KPF"}},52:function(e,a,t){e.exports={myModal:"Loading_myModal__wc8ib",modal_dialog:"Loading_modal_dialog__3NGx4",modal_my_content:"Loading_modal_my_content__3PJJV",load_img:"Loading_load_img__1rK05","heart-puls":"Loading_heart-puls__2bnGq"}},53:function(e,a,t){e.exports={header:"Header_header__1VCKf",logo:"Header_logo__3_SJs",decor:"Header_decor__1YUCM",header_nav:"Header_header_nav__1yDvu"}},54:function(e,a,t){e.exports={dashpanel:"DashBP_dashpanel__3_YzM",panel_name:"DashBP_panel_name__TZXpT",profile_nav:"DashBP_profile_nav__1Ekcd",action_nav:"DashBP_action_nav__2yJVc"}},55:function(e,a,t){e.exports=t.p+"static/media/photo.7d98bd1d.jpg"},68:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return o}));var n=t(89),r=t(0),l=t.n(r),c=t(38),i=t.n(c),s=function(e){var a=e.input,t=e.meta,r=Object(n.a)(e,["input","meta"]),c=t.touched&&t.error;return l.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},c&&l.a.createElement("i",null,t.error),l.a.createElement("div",null,l.a.createElement("textarea",Object.assign({},a,r,{className:i.a.type_mssg_area}))))},o=function(e){var a=e.input,t=e.meta,r=Object(n.a)(e,["input","meta"]),c=t.touched&&t.error;return l.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},c&&l.a.createElement("i",null,t.error),l.a.createElement("div",null,l.a.createElement("input",Object.assign({},a,r,{className:i.a.type_login_area}))))}},8:function(e,a,t){e.exports={login_page:"Login_login_page__2NL_l",login_column:"Login_login_column__1aMhW",login_form:"Login_login_form__352zE",btns:"Login_btns__2vA7p",login_fb:"Login_login_fb__2r1kU",fa_facebook:"Login_fa_facebook__2P7FJ",logform_text:"Login_logform_text__108oQ",prcd_btn:"Login_prcd_btn__2e3Ut",forgot_btn:"Login_forgot_btn__19HN7",checkbox:"Login_checkbox__3UFrU",img_block:"Login_img_block__3YpTO",online_ind:"Login_online_ind__1eZSv",user_name:"Login_user_name__2S5ah",girls_block:"Login_girls_block__3r7xZ",auth_error:"Login_auth_error__1QViq"}},90:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n=function(e){if(!e)return"Field incomplete!"},r=function(e){return function(a){if(a.length>e)return"Max length exceeded ".concat(e," symbols")}}},92:function(e,a,t){e.exports={info_profile:"ViewProfile_info_profile__3ANLT",panel:"ViewProfile_panel__sopJp"}},93:function(e,a,t){e.exports={upload_block:"MyPhotos_upload_block__2dYHp"}},94:function(e,a,t){e.exports=t.p+"static/media/danny3.6fc2c0f9.jpg"}},[[169,1,2]]]);
//# sourceMappingURL=main.7f1a2a23.chunk.js.map