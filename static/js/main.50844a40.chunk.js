(this.webpackJsonptest4=this.webpackJsonptest4||[]).push([[0],{90:function(e,a,r){},97:function(e,a,r){"use strict";r.r(a);var t=r(0),l=r(11),c=r.n(l),i=(r(90),r(60)),n=r(31),s=r(135),o=r(144),d=r(145),j=r(146),b=r(46),u=r(159),p=r(148),f=r(155),O=r(161),h=r(151),x=r(98),m=r(162),y=r(152),g=r(157),v=r(99),C=r(163),w=r(154),T=r(138),N=r(72),B=r.n(N),k=r(71),I=r.n(k),S=r(156),U=r(41),_=r(14),M=Object(_.b)({name:"cars",initialState:{cars:[{brand:"Ferrari",imageUrl:"https://i.gaw.to/vehicles/photos/09/28/092875_2019_ferrari_812.jpg?640x400",model:"812 Superfast",year:2017,fuel:"petrol",bodyType:"Coupe",price:21e6,id:Object(_.c)()},{brand:"Ferrari",imageUrl:"https://images.drive.ru/i/0/577683a3ec05c4fc63000492.jpg",model:"488 GTB",year:2018,fuel:"petrol",bodyType:"Coupe",price:185e5,id:Object(_.c)()},{brand:"Toyota",imageUrl:"https://cdn.motor1.com/images/mgl/9qE3b/s1/2021-toyota-prius-front-quarter-tight.jpg",model:"Prius",year:2021,fuel:"diesel",bodyType:"Sedan",price:2322e3,id:Object(_.c)()},{brand:"Toyota",imageUrl:"https://qrentauto.ru/wp-content/uploads/2018/11/toyota-camry.jpg",model:"Camry VIII",year:2021,fuel:"petrol",bodyType:"Sedan",price:2099e3,id:Object(_.c)()},{brand:"Tesla",imageUrl:"https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png",model:"Model 3",year:2017,fuel:"electric",bodyType:"Liftback",price:6e6,id:Object(_.c)()},{brand:"Kia",imageUrl:"https://www.avtoavenu.ru/wp-content/uploads/Kia-Rio-3.jpg",model:"Rio",year:2013,fuel:"hybrid",bodyType:"Hatchback",price:67e4,id:Object(_.c)()},{brand:"Hyundai",imageUrl:"https://auto.ironhorse.ru/wp-content/uploads/2012/02/H1-old.jpg",model:"Grand Starex I",year:2019,fuel:"diesel",bodyType:"MPV",price:2978450,id:Object(_.c)()},{brand:"Ford",imageUrl:"https://www.zr.ru/d/story/6e/913006/autowp.ru_ford_focus_sedan_82-kopiya.jpg",model:"Focus III",year:2012,fuel:"petrol",bodyType:"Estate",price:535e3,id:Object(_.c)()},{brand:"BMW",imageUrl:"https://cena-auto.ru/blocks/big_photo/src/images/cache/6118-705-0.jpg",model:"X6 M II (F86)",year:2016,fuel:"petrol",bodyType:"SUV",price:3333333,id:Object(_.c)()},{brand:"Volkswagen",imageUrl:"https://car-images.bauersecure.com/pagefiles/29191/vw-amarok_01.jpg",model:"Amarok Double Cab I",year:2012,fuel:"diesel",bodyType:"Pickup",price:1399e3,id:Object(_.c)()},{brand:"Porsche",imageUrl:"https://img-c.drive.ru/models.photos/0000/000/000/000/b5a/48d3d51538bc9b68-large.jpg",model:"Boxster IV 718",year:2019,fuel:"petrol",bodyType:"Cabrio",price:7791369,id:Object(_.c)()},{brand:"Lamborghini",imageUrl:"https://www.bentleygoldcoast.com/galleria_images/7533/7533_p20_l.jpg",model:"Aventador",year:2013,fuel:"petrol",bodyType:"Coupe",price:185e5,id:Object(_.c)()},{brand:"Mercedes",imageUrl:"https://s.auto.drom.ru/i24227/c/photos/fullsize/mercedes-benz/amg_gt/mercedes-benz_amg_gt_862947.jpg",model:"Benz AMG GT I",year:2019,fuel:"petrol",bodyType:"Liftback",price:725e4,id:Object(_.c)()}],filteredCars:[]},reducers:{filterByBrand:function(e,a){"\u0412\u0441\u0435"===a.payload?e.filteredCars=e.cars:e.filteredCars=e.cars.filter((function(e){return e.brand===a.payload}))},filterByYear:function(e,a){if(""===a.payload)return e;e.filteredCars=e.filteredCars.filter((function(e){return e.year===Number(a.payload)}))},filterByFuel:function(e,a){if(""===a.payload)return e;e.filteredCars=e.filteredCars.filter((function(e){return e.fuel===a.payload}))},filterByBodyType:function(e,a){if("\u0412\u0441\u0435"===a.payload)return e;e.filteredCars=e.filteredCars.filter((function(e){return e.bodyType===a.payload}))},filterByModel:function(e,a){if("\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"===a.payload.model)return e;"\u0412\u0441\u0435"===a.payload.model?e.filteredCars=e.cars.filter((function(e){return e.brand===a.payload.brand})):"\u0412\u0441\u0435"===a.payload.brand&&"\u0412\u0441\u0435"!==a.payload.model&&"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"!==a.payload.model&&(e.filteredCars=e.filteredCars.filter((function(e){return e.brand===a.payload.brand}))),"\u0412\u0441\u0435"!==a.payload.brand&&"\u0412\u0441\u0435"!==a.payload.model&&(e.filteredCars=e.filteredCars.filter((function(e){return e.model===a.payload.model}))),"\u0412\u0441\u0435"===a.payload.brand&&"\u0412\u0441\u0435"===a.payload.model&&(e.filteredCars=e.cars)},filterByPrice:function(e,a){if("\u041b\u044e\u0431\u0430\u044f"===a.payload)return e;1===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return e.price<1e6}))),2===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return 1e6<=e.price&&e.price<5e6}))),3===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return e.price>=5e6&&e.price<1e7}))),4===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return e.price>1e7})))},priceToLow:function(e){0===e.filteredCars.length&&(e.filteredCars=e.cars),e.filteredCars.sort((function(e,a){return e.price>a.price?1:e.price<a.price?-1:0}))},priceToHigh:function(e){0===e.filteredCars.length&&(e.filteredCars=e.cars),e.filteredCars.sort((function(e,a){return e.price>a.price?-1:e.price<a.price?1:0}))},search:function(e,a){0===e.filteredCars.length&&(e.filteredCars=e.cars),e.filteredCars=e.filteredCars.filter((function(e){return e.model===a.payload}))}}}),P=M.actions,V=P.filterByYear,F=P.filterByBrand,H=P.filterByFuel,L=P.filterByBodyType,z=P.filterByModel,E=P.filterByPrice,D=P.priceToLow,G=P.priceToHigh,K=P.search,R=function(e){return e.cars.cars},W=function(e){return e.cars.filteredCars},q=M.reducer,A=r(140),J=r(141),Y=r(142),X=r(143),Q=r(3),Z=Object(s.a)({img:{height:140}}),$=function(e){var a=e.info,r=Z();return Object(Q.jsx)(T.a,{item:!0,xs:6,children:Object(Q.jsxs)(A.a,{elevation:3,children:[Object(Q.jsx)(J.a,{title:a.brand,subheader:a.model}),Object(Q.jsx)(Y.a,{image:a.imageUrl,className:r.img,title:"Contemplative Reptile"}),Object(Q.jsxs)(X.a,{children:[Object(Q.jsxs)(b.a,{children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",a.year]}),Object(Q.jsxs)(b.a,{children:["\u0422\u043e\u043f\u043b\u0438\u0432\u043e: ",a.fuel]}),Object(Q.jsxs)(b.a,{children:["\u041a\u0443\u0437\u043e\u0432: ",a.bodyType]}),Object(Q.jsxs)(b.a,{children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",a.price," \u0440\u0443\u0431."]})]})]})})},ee=Object(s.a)({header:{display:"flex",justifyContent:"center",backgroundColor:"black",height:65},container:{display:"flex",marginTop:65},drawer:{width:500},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:20,marginBottom:100},self:{alignSelf:"flex-start",marginTop:20,"&:first-of-type":{marginTop:0}},drawerPaper:{marginTop:65,width:500},girdContainer:{marginTop:20},groupContainer:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},last:{display:"flex",flexDirection:"column"},select:{width:200,marginRight:20},btn:{marginTop:20},wrapper:{display:"flex",justifyContent:"space-around"},search:{display:"flex",justifyContent:"space-around",alignItems:"center"},align:{display:"flex",justifyContent:"center"}}),ae=function(){var e=ee(),a=Object(U.c)(R),r=Object(U.c)(W),l=Object(U.b)(),c=Object(t.useState)("\u0412\u0441\u0435"),s=Object(n.a)(c,2),N=s[0],k=s[1],_=Object(t.useState)("\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"),M=Object(n.a)(_,2),P=M[0],q=M[1],A=Object(t.useState)(""),J=Object(n.a)(A,2),Y=J[0],X=J[1],Z=Object(t.useState)(""),ae=Object(n.a)(Z,2),re=ae[0],te=ae[1],le=Object(t.useState)("\u0412\u0441\u0435"),ce=Object(n.a)(le,2),ie=ce[0],ne=ce[1],se=Object(t.useState)("\u041b\u044e\u0431\u0430\u044f"),oe=Object(n.a)(se,2),de=oe[0],je=oe[1],be=Object(t.useState)(""),ue=Object(n.a)(be,2),pe=ue[0],fe=ue[1];return Object(Q.jsxs)(o.a,{children:[Object(Q.jsx)(d.a,{elevation:0,children:Object(Q.jsx)(j.a,{className:e.header,children:Object(Q.jsx)(b.a,{variant:"h2",children:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"})})}),Object(Q.jsxs)("div",{className:e.container,children:[Object(Q.jsxs)(u.a,{variant:"permanent",anchor:"left",className:e.drawer,classes:{paper:e.drawerPaper},children:[Object(Q.jsx)(b.a,{className:e.btn,variant:"h6",align:"center",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c"}),Object(Q.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),l(F(N)),l(z({brand:N,model:P})),l(V(Y)),l(H(re)),l(L(ie)),l(E(de))},noValidate:!0,autoComplete:"off",children:[Object(Q.jsx)("div",{className:e.self,children:Object(Q.jsxs)("div",{className:e.wrapper,children:[Object(Q.jsxs)("div",{children:[Object(Q.jsx)(p.a,{id:"brand",children:"\u0411\u0440\u0435\u043d\u0434"}),Object(Q.jsxs)(f.a,{labelId:"brand",id:"select",value:N,onChange:function(e){return k(e.target.value)},className:e.select,children:[Object(Q.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}),Object(Q.jsx)(O.a,{value:"Ferrari",children:"Ferrari"}),Object(Q.jsx)(O.a,{value:"Toyota",children:"Toyota"}),Object(Q.jsx)(O.a,{value:"Tesla",children:"Tesla"}),Object(Q.jsx)(O.a,{value:"Kia",children:"Kia"}),Object(Q.jsx)(O.a,{value:"Hyundai",children:"Hyundai"}),Object(Q.jsx)(O.a,{value:"Ford",children:"Ford"}),Object(Q.jsx)(O.a,{value:"BMW",children:"BMW"}),Object(Q.jsx)(O.a,{value:"Volkswagen",children:"Volkswagen"}),Object(Q.jsx)(O.a,{value:"Porsche",children:"Porsche"}),Object(Q.jsx)(O.a,{value:"Lamborghini",children:"Lamborghini"}),Object(Q.jsx)(O.a,{value:"Mercedes",children:"Mercedes"})]})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)(p.a,{id:"",children:"\u041c\u043e\u0434\u0435\u043b\u044c"}),Object(Q.jsxs)(f.a,{labelId:"model",id:"select",value:P,onChange:function(e){return q(e.target.value)},className:e.select,children:["\u0412\u0441\u0435"!==N||"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"!==P&&"\u0412\u0441\u0435"!==P?Object(Q.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}):P&&"\u0412\u0441\u0435"===N?null:Object(Q.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}),"\u0412\u0441\u0435"===N?Object(Q.jsx)(O.a,{value:P,children:P}):a.filter((function(e){return e.brand===N})).map((function(e){return Object(Q.jsx)(O.a,{value:e.model,children:e.model},e.value)}))]})]})]})}),Object(Q.jsxs)(h.a,{className:e.self,children:[Object(Q.jsx)(x.a,{children:"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"}),Object(Q.jsx)(m.a,{value:Y,onChange:function(e){return X(e.target.value)},children:Object(Q.jsxs)("div",{className:e.groupContainer,children:[Object(Q.jsx)(y.a,{value:"",control:Object(Q.jsx)(g.a,{}),label:"\u0412\u0441\u0435"}),Object(Q.jsx)(y.a,{value:"2021",control:Object(Q.jsx)(g.a,{}),label:"2021"}),Object(Q.jsx)(y.a,{value:"2019",control:Object(Q.jsx)(g.a,{}),label:"2019"}),Object(Q.jsx)(y.a,{value:"2018",control:Object(Q.jsx)(g.a,{}),label:"2018"}),Object(Q.jsx)(y.a,{value:"2017",control:Object(Q.jsx)(g.a,{}),label:"2017"}),Object(Q.jsx)(y.a,{value:"2016",control:Object(Q.jsx)(g.a,{}),label:"2016"}),Object(Q.jsx)(y.a,{value:"2013",control:Object(Q.jsx)(g.a,{}),label:"2013"}),Object(Q.jsx)(y.a,{value:"2012",control:Object(Q.jsx)(g.a,{}),label:"2012"})]})})]}),Object(Q.jsxs)(h.a,{className:e.self,children:[Object(Q.jsx)(x.a,{children:"\u0422\u043e\u043f\u043b\u0438\u0432\u043e"}),Object(Q.jsx)(m.a,{value:re,onChange:function(e){return te(e.target.value)},children:Object(Q.jsxs)("div",{className:e.groupContainer,children:[Object(Q.jsx)(y.a,{value:"",control:Object(Q.jsx)(g.a,{}),label:"\u0412\u0441\u0435"}),Object(Q.jsx)(y.a,{value:"petrol",control:Object(Q.jsx)(g.a,{}),label:"\u0411\u0435\u043d\u0437\u0438\u043d"}),Object(Q.jsx)(y.a,{value:"diesel",control:Object(Q.jsx)(g.a,{}),label:"\u0414\u0438\u0437\u0435\u043b\u044c"}),Object(Q.jsx)(y.a,{value:"electric",control:Object(Q.jsx)(g.a,{}),label:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(Q.jsx)(y.a,{value:"hybrid",control:Object(Q.jsx)(g.a,{}),label:"\u0413\u0438\u0431\u0440\u0438\u0434"})]})})]}),Object(Q.jsxs)("div",{className:e.self,children:[Object(Q.jsx)(p.a,{id:"bodyType",children:"\u041a\u0443\u0437\u043e\u0432"}),Object(Q.jsxs)(f.a,{labelId:"bodyType",id:"select",value:ie,onChange:function(e){return ne(e.target.value)},className:e.select,children:[Object(Q.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}),Object(Q.jsx)(O.a,{value:"Coupe",children:"Coupe"}),Object(Q.jsx)(O.a,{value:"Sedan",children:"Sedan"}),Object(Q.jsx)(O.a,{value:"Liftback",children:"Liftback"}),Object(Q.jsx)(O.a,{value:"Hatchback",children:"Hatchback"}),Object(Q.jsx)(O.a,{value:"MPV",children:"MPV"}),Object(Q.jsx)(O.a,{value:"Estate",children:"Estate"}),Object(Q.jsx)(O.a,{value:"SUV",children:"SUV"}),Object(Q.jsx)(O.a,{value:"Pickup",children:"Pickup"}),Object(Q.jsx)(O.a,{value:"Cabrio",children:"Cabrio"})]})]}),Object(Q.jsxs)(h.a,{className:e.self,children:[Object(Q.jsx)(x.a,{children:"\u0426\u0435\u043d\u0430"}),Object(Q.jsx)(m.a,{value:de,onChange:function(e){return je(e.target.value)},children:Object(Q.jsxs)("div",{className:e.last,children:[Object(Q.jsx)(y.a,{value:"\u041b\u044e\u0431\u0430\u044f",control:Object(Q.jsx)(g.a,{}),label:"\u041b\u044e\u0431\u0430\u044f"}),Object(Q.jsx)(y.a,{value:"1",control:Object(Q.jsx)(g.a,{}),label:"\u0414\u043e 1.000.000"}),Object(Q.jsx)(y.a,{value:"2",control:Object(Q.jsx)(g.a,{}),label:"\u041e\u0442 1.000.000 \u0434\u043e 5.000.000"}),Object(Q.jsx)(y.a,{value:"3",control:Object(Q.jsx)(g.a,{}),label:"\u041e\u0442 5.000.000 \u0434\u043e 10.000.000"}),Object(Q.jsx)(y.a,{value:"4",control:Object(Q.jsx)(g.a,{}),label:"\u041e\u0442 10.000.000"})]})})]}),Object(Q.jsx)(v.a,{className:e.btn,variant:"contained",type:"submit",color:"secondary",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})]})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("div",{className:e.search,style:{width:800},children:[Object(Q.jsx)(S.a,{inputValue:pe,onInputChange:function(e,a){fe(a),l(K(a))},options:a.map((function(e){return e.model})),renderInput:function(e){return Object(Q.jsx)(C.a,Object(i.a)(Object(i.a)({style:{width:300}},e),{},{label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u043e\u0434\u0435\u043b\u0438",margin:"normal",variant:"outlined"}))}}),Object(Q.jsxs)(w.a,{color:"secondary","aria-label":"outlined primary button group",children:[Object(Q.jsxs)(v.a,{onClick:function(){return l(D())},children:["\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e",Object(Q.jsx)(I.a,{})]}),Object(Q.jsxs)(v.a,{onClick:function(){return l(G())},children:["\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",Object(Q.jsx)(B.a,{})]})]})]}),Object(Q.jsx)(T.a,{className:e.girdContainer,container:!0,spacing:3,children:0===r.length?a.map((function(e){return Object(Q.jsx)($,{info:e},e.id)})):r.map((function(e){return Object(Q.jsx)($,{info:e},e.id)}))})]})]})]})};var re=function(){return Object(Q.jsx)(ae,{})},te=Object(_.a)({reducer:{cars:q}});c.a.render(Object(Q.jsx)(U.a,{store:te,children:Object(Q.jsx)(re,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.50844a40.chunk.js.map