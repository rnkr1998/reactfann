(this.webpackJsonpreactfann=this.webpackJsonpreactfann||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/rickyandmorky.18901271.jpeg"},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),r=a.n(o),c=(a(15),a(1)),s=a(2),l=a(4),m=a(3),d=a(5),h=a(9),u=a(8),p=a.n(u);var f=function(){return i.a.createElement("div",{id:"header"},i.a.createElement("div",{style:{backgroundColor:"#ede3fc"},className:"headandnavigation"},i.a.createElement("div",{id:"navbar",style:{backgroundColor:"#dee3e3",position:"fixed",top:"0",width:"100%",height:"87px"}},i.a.createElement("div",null,i.a.createElement("img",{src:p.a,id:"titleimg",alt:"",style:{height:"50px",width:"120px",margin:"10px 5px 5px 20px"}}),i.a.createElement("span",{id:"searchcontent",style:{backgroundColor:"#b5b3ba",padding:"12px",borderRadius:"10px",marginLeft:"900px",marginTop:"50px"}},"character",i.a.createElement("input",{type:"search",className:"searchbox",id:"searchbox",placeholder:"Type a location",style:{borderStyle:"none",padding:"10px",width:"160px",marginLeft:"5px"}}),i.a.createElement("button",{className:"glyphicon glyphicon-search",id:"buttonn"},i.a.createElement(h.a,null)))),i.a.createElement("hr",{id:"lineone"})),i.a.createElement("div",null)))};a(16);var E=function(){return i.a.createElement("div",{id:"Homepage"},i.a.createElement("div",{className:"mainn",style:{marginLeft:"250px"}},i.a.createElement("h1",{id:"heading",style:{borderBottom:"2px solid #CECBCE",fontFamily:"times new roman",fontStyle:"oblique",fontWeight:"bolder",fontSize:"40px"}},"Rick and Morty"),i.a.createElement("span",null),i.a.createElement("span",null,i.a.createElement("p",{style:{fontSize:"14px",fontFamily:"times new roman",margin:"0 auto"}},"From Wikipedia, the free encyclopedia")),i.a.createElement("div",{id:"main-container"},i.a.createElement("p",{id:"paraone"},i.a.createElement("strong",{id:"strongdata"},"Rick and Morty"),"  is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block \u2018Adult Swim\u2019. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018, the series was picked up for an additional 70 episodes over an unspecified number of seasons."),i.a.createElement("p",{id:"paratwo"},"Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. The series has been acclaimed by critics for its originality, creativity and humor."))))},g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).Handler=function(t){e.setState({id:t}),console.log(t),e.props.ids(t),e.props.control(!0)},e.state={list:{results:[]},id:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/location/").then((function(e){return e.json()})).then((function(t){e.setState({list:t})})).catch((function(e){console.log("Request failed",e)}))}},{key:"render",value:function(){var e=this,t=this.state.list.results;return i.a.createElement("div",{className:"Location",style:{marginLeft:"250px"}},i.a.createElement("div",{className:"head"},i.a.createElement("h1",{id:"headingg",style:{borderBottom:"2px solid #CECBCE",marginBottom:"30px",fontFamily:"times new roman",fontStyle:"oblique",fontWeight:"bolder",fontSize:"40px"}},"Locations")),i.a.createElement("div",{className:"pagination"},i.a.createElement("a",{href:"#about"},"Prev"),i.a.createElement("a",{href:"#about"},"1"),i.a.createElement("a",{href:"#about",className:"active"},"2"),i.a.createElement("a",{href:"#about"},"3"),i.a.createElement("a",{href:"#about"},"5"),i.a.createElement("a",{href:"#about"},"6"),i.a.createElement("a",{href:"#about"},"Next")),i.a.createElement("div",{className:"row"},t.map((function(t){return i.a.createElement("div",{key:t.id,id:"key",className:"column",style:{marginTop:"20px"}},i.a.createElement("div",{className:"w3-card-4",onClick:e.Handler.bind(e,t.id)},i.a.createElement("header",{className:"w3-container w3-white",style:{textAlign:"center",height:"35px"}},i.a.createElement("h5",{style:{marginTop:"5px"}},t.type)),i.a.createElement("div",{id:"locationnameclass",className:"w3-container",style:{height:"150px",backgroundColor:"#E8EAE3"}},i.a.createElement("h4",{style:{marginTop:"50px"},className:"locationame"},t.name)),i.a.createElement("footer",{className:"w3-container w3-white",style:{textAlign:"center",height:"35px"}},i.a.createElement("h5",{style:{marginTop:"5px"}},t.residents.length,i.a.createElement("span",null," Residents")))))}))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={lists:{},count:1,Names:{},error:null,input:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;fetch("https://rickandmortyapi.com/api/location/"+t).then((function(e){return e.json()})).then((function(t){e.setState({lists:t}),console.log(e.props.id),e.componentDidCatch(e.state.lists.residents)})).catch((function(e){console.log("Request failed",e)}))}},{key:"componentDidCatch",value:function(e){var t=this,a=function(a){fetch(e[a]).then((function(e){return e.json()})).then((function(n){t.setState({Names:n}),t.component(t.state.Names.name,a,e)})).catch((function(e){console.log("Request failed",e)}))};for(var n in e)a(n)}},{key:"component",value:function(e){document.getElementById("residents").innerHTML+=this.state.count+".<b id='resinames'> "+e+"</b><br/>",this.setState({count:this.state.count+1})}},{key:"render",value:function(){var e=this.state.lists,t=a(17);return i.a.createElement("div",{className:"Locationdata",style:{marginLeft:"250px"}},i.a.createElement("div",{className:"head"},i.a.createElement("h1",{style:{borderBottom:"2px solid #CECBCE",fontFamily:"times new roman",fontStyle:"oblique",fontWeight:"bolder",fontSize:"40px"}},"Locations - ",i.a.createElement("span",null,e.name))),i.a.createElement("div",{className:"Locationdatas",style:{marginLeft:"50px"}},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",{className:"locationtitle"},"Type :     ",i.a.createElement("span",{style:{fontSize:"20px",fontWeight:"lighter"}},e.type)),i.a.createElement("h3",{className:"locationtitle"},"Dimension :    ",i.a.createElement("span",{style:{fontSize:"20px",fontWeight:"lighter"}},e.dimension)),i.a.createElement("h3",{className:"locationtitle"},"Created :     ",i.a.createElement("span",{style:{fontSize:"20px",fontWeight:"lighter"}},t(e.created,"ddd mmm dd yyyy"))),i.a.createElement("br",null)),i.a.createElement("div",{className:"residents",style:{marginLeft:"20px"}},i.a.createElement("h3",{className:"locationtitle"},"Residents:"),i.a.createElement("div",{id:"residents",style:{cursor:"pointer"}})))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).Handling=function(){e.setState({showHome:!0}),e.setState({showLocation:!1}),e.setState({showLocationdata:!1})},e.Handlingg=function(){e.setState({showHome:!1}),e.setState({showLocation:!0}),e.setState({showLocationdata:!1})},e.Handle=function(t){e.setState({id:t})},e.guide=function(t){!0===t&&(e.setState({showHome:!1}),e.setState({showLocation:!1}),e.setState({showLocationdata:!0}))},e.state={id:0,converge:"",showHome:!0,showLocation:!1,showLoactiondata:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav"},i.a.createElement("div",{id:"navi"},i.a.createElement("div",{className:"sidenav"},i.a.createElement("a",{id:"homebtn",href:"#home",onClick:this.Handling},"Home"),i.a.createElement("a",{id:"locbtn",href:"#locations",onClick:this.Handlingg},"Locations"))),i.a.createElement("div",{id:"main"},this.state.showHome?i.a.createElement("div",{id:"Home"},i.a.createElement(E,null)):null,this.state.showLocation?i.a.createElement("div",{id:"Location"},i.a.createElement(g,{ids:this.Handle,control:this.guide})):null,this.state.showLocationdata?i.a.createElement("div",{id:"Locationdata"},i.a.createElement(y,{id:this.state.id})):null))}}]),t}(n.Component),v=(a(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null),i.a.createElement(b,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.bb951bf7.chunk.js.map