(this["webpackJsonpwarehouse-ui"]=this["webpackJsonpwarehouse-ui"]||[]).push([[0],{30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(31),c=a.n(s),r=a(8),l=a(2),o=(a(37),a(38),a(0)),d=function(){return Object(o.jsx)("nav",{id:"navbar",className:"navbar navbar-dark navbar-expand-md",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("ul",{className:"nav navbar-nav",children:[Object(o.jsx)(r.c,{className:"nav-link",exact:!0,to:"/",children:"Klientai"}),Object(o.jsx)(r.c,{className:"nav-link",exact:!0,to:"/clients/new",children:"Sukurti klient\u0105"})]})})})},h=function(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"m-5",children:["Route did not match",Object(o.jsx)("button",{className:"btn btn-primary ml-3",onClick:function(){return e.history.push("/")},children:"Go Home"})]})})},m=(a(45),a(10)),j=a(11),b=a(13),u=a(12),p=a(9),x=a.n(p),O="/warehouse",v=function(e){var t=e.clients,a=e.items;return Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{to:"/clients/new",className:"btn btn-primary mb-2",children:"Prid\u0117ti nauj\u0105 klient\u0105"}),Object(o.jsxs)("table",{className:"table table-secondary",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Klientas"}),Object(o.jsx)("th",{children:"Inventorius, vnt."}),Object(o.jsx)("th",{children:"Informacija"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){var n=e.id,i=e.firstName,s=e.lastName;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:t+1}),Object(o.jsx)("td",{children:i+" "+s}),Object(o.jsx)("td",{children:a?a.filter((function(e){return e.clientId===n})).length:0}),Object(o.jsx)("td",{children:Object(o.jsx)(r.b,{to:"/clients/".concat(n),className:"mr-2",children:"Per\u017ei\u016br\u0117ti"})})]},n)}))})]})]})},y=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={clients:[],items:[]},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("/warehouse/api/clients").then((function(t){e.setState({clients:t.data})})),x.a.get("/warehouse/api/items").then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"page",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"text-center py-3",children:"Klientai"}),Object(o.jsx)(v,{clients:this.state.clients,items:this.state.items})]})})}}]),a}(n.Component),N=a(20),f=(a(30),function(e){var t=e.name,a=e.value,n=e.labelStyle,i=e.label,s=e.mandatory,c=e.type,r=e.error,l=e.placeholder,d=e.onChange,h=e.invalidStyle,m=e.errorMessage,j=e.min,b=e.max,u=e.disabled,p=e.formGroupStyle;return Object(o.jsxs)("div",{className:"form-group ".concat(p),children:[Object(o.jsxs)("label",{htmlFor:t,className:n,children:[i,s&&!u?Object(o.jsx)("span",{className:"mandatory",children:" *"}):""]}),"textarea"!==c?Object(o.jsx)("input",{type:c,className:"form-control ".concat(r),placeholder:l,id:t,value:a,name:t,onChange:d,min:j,max:b,disabled:u}):Object(o.jsx)("textarea",{className:"form-control ".concat(r),id:t,value:a,name:t,onChange:d,min:j,disabled:u}),Object(o.jsx)("div",{className:"invalid-feedback ".concat(h),children:m})]})}),g=function(e){var t=e.items,a=e.item,n=e.defaultValue,i=e.handleChange,s=e.mandatory,c=e.label,r=e.labelStyle,l=e.invalidStyle,d=e.errorMessage,h=e.error;return Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsxs)("label",{htmlFor:a,className:r,children:[c,s?Object(o.jsx)("span",{className:"mandatory",children:" *"}):""]}),Object(o.jsxs)("select",{className:"form-select ".concat(h),id:a,name:a,onChange:i,children:[Object(o.jsx)("option",{defaultValue:!0,value:"",children:n}),t.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))]}),Object(o.jsx)("div",{className:"invalid-feedback ".concat(l),children:d})]})},S=function(e){var t=e.types,a=e.client,n=e.handleChange,i=e.handleSubmit,s=e.errors,c=e.message,r=e.messageStyle,l="pt-2 text-right",d="text";return Object(o.jsx)("div",{className:"page",children:Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsxs)("form",{className:"bg-light p-3 rounded",onSubmit:i,children:[Object(o.jsx)(f,{name:"firstName",value:"".concat(a.firstName),label:"Vardas",mandatory:!0,type:d,error:s.firstName,placeholder:"",onChange:n,errorMessage:"\u0160is laukas privalomas.",labelStyle:l}),Object(o.jsx)(f,{name:"lastName",value:"".concat(a.lastName),label:"Pavarde",mandatory:!0,type:d,error:s.lastName,placeholder:"",onChange:n,errorMessage:"\u0160is laukas privalomas.",labelStyle:l}),Object(o.jsx)(f,{name:"birthDay",value:"".concat(a.birthDay),label:"Gimimo data",mandatory:!0,type:"datetime-local",error:s.birthDay,onChange:n,errorMessage:"\u0160is laukas privalomas.",labelStyle:l,max:new Intl.DateTimeFormat("lt-LT",{dateStyle:"medium",timeStyle:"short"}).format(new Date).split(" ")[0]+"T"+new Intl.DateTimeFormat("lt-LT",{dateStyle:"medium",timeStyle:"short"}).format(new Date).split(" ")[1]}),Object(o.jsx)(f,{name:"phoneNo",value:"".concat(a.phoneNo),label:"Telefono numeris",mandatory:!0,type:"number",error:s.phoneNo,onChange:n,errorMessage:"\u0160is laukas privalomas.",labelStyle:l}),Object(o.jsx)(g,{items:t,handleChange:n,defaultValue:"Pasirinkite tip\u0105",item:"clientType",mandatory:!0,label:"Kliento tipas",labelStyle:l,errorMessage:"\u0160is laukas privalomas.",error:s.clientType}),Object(o.jsx)("div",{className:"".concat(r," mt-3"),children:c}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"I\u0161saugoti"})]})})})},k="warehouse",w=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.client,a=n.validate();if(n.setState({errors:a||{}}),a&&Object.keys(a).length>0)return n.setState({message:"Nepavyko sukurti kliento. Pasitikrinkite duomenis."}),void n.setState({messageStyle:"alert alert-danger"});window.location.pathname==="/".concat(k,"/clients/new")?x.a.post("".concat(O,"/api/clients"),{firstName:t.firstName,lastName:t.lastName,birthDay:t.birthDay,phoneNo:t.phoneNo,clientType:t.clientType}).then((function(){n.setState({types:[],client:{firstName:"",lastName:"",birthDay:"",phoneNo:"",clientType:""},errors:{firstName:"",lastName:"",birthDay:"",phoneNo:"",clientType:""}}),n.props.history.push("/")})).catch((function(e){return console.log(e)})):x.a.put("".concat(O,"/api/clients/").concat(t.id),{id:t.id,firstName:t.firstName,lastName:t.lastName,birthDay:t.birthDay,phoneNo:t.phoneNo,clientType:t.clientType}).then((function(){n.setState({types:[],client:{firstName:"",lastName:"",birthDay:"",phoneNo:"",clientType:""},errors:{firstName:"",lastName:"",birthDay:"",phoneNo:"",clientType:""}}),n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=Object(N.a)({},n.state.errors),i=n.validateProperty(t);i?a[t.name]=i:delete a[t.name];var s=Object(N.a)({},n.state.client);s[t.name]=t.value,n.setState({client:s,errors:a}),n.setState({message:"",messageStyle:""})},n.validateProperty=function(e){var t=e.name,a=e.value;if("firstName"===t&&a.trim().split(" ").length<3)return"is-invalid";if("lastName"===t&&a.trim().split(" ").length<3)return"is-invalid";return"birthDay"===t&&0===a.trim().length||"phoneNo"===t&&0===a.trim().length?"is-invalid":"clientType"!==t||"Pasirinkite tip\u0105"!==a&&""!==a?void 0:"is-invalid"},n.validate=function(){var e={},t=n.state.client;return""===t.phoneNo.trim()&&(e.phoneNo="is-invalid"),""===t.birthDay.trim()&&(e.birthDay="is-invalid"),""===t.firstName.trim()&&(e.firstName="is-invalid"),""===t.lastName.trim()&&(e.firstName="is-invalid"),""!==t.clientType&&"Pasirinkite tip\u0105"!==t.clientType||(e.clientType="is-invalid"),e},n.state={types:[],client:{firstName:"",lastName:"",birthDay:"",phoneNo:"",clientType:""},errors:{firstName:"",lastName:"",birthDay:"",phoneNo:"",clientType:""},message:"",messageStyle:""},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.location.pathname!=="/".concat(k,"/clients/new")&&x.a.get("".concat(O,"/api/clients/").concat(this.props.match.params.id)).then((function(t){return e.setState({client:t.data})})).catch((function(e){return console.log(e)})),x.a.get("/warehouse/api/clients/types").then((function(t){e.setState({types:t.data})}))}},{key:"render",value:function(){return Object(o.jsx)(S,{types:this.state.types,handleChange:this.handleChange,handleSubmit:this.handleSubmit,client:this.state.client,errors:this.state.errors,message:this.state.message,messageStyle:this.state.messageStyle})}}]),a}(n.Component),D=(a(64),function(e){var t=e.title,a=(e.url,e.cardStyle),n=e.description,i=e.id,s=(e.buttons,e.onClick),c=e.isSelected,l=e.client;return Object(o.jsx)("div",{className:"".concat(a),id:i,onClick:s,children:Object(o.jsx)("div",{className:"card ".concat(c&&"selectedBorder"),children:Object(o.jsxs)("div",{className:"card-body  bg-light",children:[t&&Object(o.jsx)("h5",{className:"card-title",children:t}),n&&Object(o.jsx)("p",{className:"card-text",children:n}),l&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Gimimo data: ",l.birthDay]}),Object(o.jsxs)("p",{children:["Telefono numeris: ",l.phoneNo]}),Object(o.jsxs)("p",{children:["Kliento tipas: ",l.clientType]})]}),Object(o.jsx)(r.b,{to:"/clients/".concat(i,"/items/new"),className:"btn btn-primary",children:"Prid\u0117ti nauj\u0105 prek\u0119"})]})})})}),T=function(e){var t=e.client;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h6",{className:"text-center",children:"Kliento informacija"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(D,{id:t.id,cardStyle:"col my-3 bg-light p-0 rounded",title:t.firstName+" "+t.lastName,client:t,buttons:!0},t.id)})]})},C=function(){return Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"spinner-border",role:"status"})})},I=function(e){var t=e.items,a=e.clientId;return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h6",{className:"text-center mb-4",children:"Inventorius"}),Object(o.jsxs)("table",{className:"table table-light",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Pavadinimas"}),Object(o.jsx)("th",{children:"Svoris, kg."}),Object(o.jsx)("th",{children:"Sektorius"}),Object(o.jsx)("th",{children:"Patalpinimo data"})]})}),Object(o.jsx)("tbody",{children:t.filter((function(e){return e.clientId===a})).map((function(e,t){var a=e.id,n=e.title,i=e.weight,s=e.placementDate,c=e.sectorNo;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:t+1}),Object(o.jsx)("td",{children:n}),Object(o.jsx)("td",{children:i}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:s})]},a)}))})]})]})},P=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={client:{},items:[],clientId:""},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("".concat(O,"/api/clients/").concat(this.props.match.params.id)).then((function(t){e.setState({client:t.data}),e.setState({clientId:t.data.id})})).catch((function(e){return console.log(e)})),x.a.get("".concat(O,"/api/items")).then((function(t){return e.setState({items:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"page",children:this.state.client?Object(o.jsx)("div",{className:"container pt-3",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-4",children:Object(o.jsx)(T,{client:this.state.client})}),this.state.items.length>0&&Object(o.jsx)("div",{className:"col-8 px-5",children:Object(o.jsx)(I,{items:this.state.items,clientId:this.state.clientId})})]})}):Object(o.jsx)(C,{})})}}]),a}(n.Component),M=function(){return Object(o.jsx)("div",{className:"page",children:Object(o.jsx)("h2",{children:"Kuriama..."})})},K=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(o.jsx)(M,{})}}]),a}(n.Component),F=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(o.jsx)(l.a,{exact:!0,path:"/clients/new",component:w}),Object(o.jsx)(l.a,{exact:!0,path:"/clients/:id",component:P}),Object(o.jsx)(l.a,{exact:!0,path:"/clients/:id/items/new",component:K}),Object(o.jsx)(l.a,{path:"*",component:h}),Object(o.jsx)(l.a,{component:h})]}),e.children]})};a(65);document.title="Sand\u0117lio valdymo sistema",c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(r.a,{basename:"/warehouse",children:Object(o.jsx)(F,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.63ed1b75.chunk.js.map