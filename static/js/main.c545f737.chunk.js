(this.webpackJsonptest4=this.webpackJsonptest4||[]).push([[0],{90:function(e,a,r){},97:function(e,a,r){"use strict";r.r(a);var t=r(0),l=r(11),c=r.n(l),i=(r(90),r(60)),n=r(31),s=r(135),o=r(144),d=r(145),j=r(146),b=r(46),u=r(159),p=r(148),f=r(155),O=r(161),h=r(151),x=r(98),m=r(162),y=r(152),g=r(157),v=r(99),C=r(163),w=r(154),T=r(138),N=r(72),B=r.n(N),k=r(71),I=r.n(k),S=r(156),U=r(41),_=r(14),M=Object(_.b)({name:"cars",initialState:{cars:[{brand:"Ferrari",imageUrl:"https://i.gaw.to/vehicles/photos/09/28/092875_2019_ferrari_812.jpg?640x400",model:"812 Superfast",year:2017,fuel:"petrol",bodyType:"Coupe",price:21e6,id:Object(_.c)()},{brand:"Ferrari",imageUrl:"https://images.drive.ru/i/0/577683a3ec05c4fc63000492.jpg",model:"488 GTB",year:2018,fuel:"petrol",bodyType:"Coupe",price:185e5,id:Object(_.c)()},{brand:"Toyota",imageUrl:"https://cdn.motor1.com/images/mgl/9qE3b/s1/2021-toyota-prius-front-quarter-tight.jpg",model:"Prius",year:2021,fuel:"diesel",bodyType:"Sedan",price:2322e3,id:Object(_.c)()},{brand:"Toyota",imageUrl:"https://qrentauto.ru/wp-content/uploads/2018/11/toyota-camry.jpg",model:"Camry VIII",year:2021,fuel:"petrol",bodyType:"Sedan",price:2099e3,id:Object(_.c)()},{brand:"Tesla",imageUrl:"https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png",model:"Model 3",year:2017,fuel:"electric",bodyType:"Liftback",price:6e6,id:Object(_.c)()},{brand:"Kia",imageUrl:"https://www.avtoavenu.ru/wp-content/uploads/Kia-Rio-3.jpg",model:"Rio",year:2013,fuel:"hybrid",bodyType:"Hatchback",price:67e4,id:Object(_.c)()},{brand:"Hyundai",imageUrl:"https://auto.ironhorse.ru/wp-content/uploads/2012/02/H1-old.jpg",model:"Grand Starex I",year:2019,fuel:"diesel",bodyType:"MPV",price:2978450,id:Object(_.c)()},{brand:"Ford",imageUrl:"https://www.zr.ru/d/story/6e/913006/autowp.ru_ford_focus_sedan_82-kopiya.jpg",model:"Focus III",year:2012,fuel:"petrol",bodyType:"Estate",price:535e3,id:Object(_.c)()},{brand:"BMW",imageUrl:"https://cena-auto.ru/blocks/big_photo/src/images/cache/6118-705-0.jpg",model:"X6 M II (F86)",year:2016,fuel:"petrol",bodyType:"SUV",price:3333333,id:Object(_.c)()},{brand:"Volkswagen",imageUrl:"https://car-images.bauersecure.com/pagefiles/29191/vw-amarok_01.jpg",model:"Amarok Double Cab I",year:2012,fuel:"diesel",bodyType:"Pickup",price:1399e3,id:Object(_.c)()},{brand:"Porsche",imageUrl:"https://img-c.drive.ru/models.photos/0000/000/000/000/b5a/48d3d51538bc9b68-large.jpg",model:"Boxster IV 718",year:2019,fuel:"petrol",bodyType:"Cabrio",price:7791369,id:Object(_.c)()},{brand:"Lamborghini",imageUrl:"https://www.bentleygoldcoast.com/galleria_images/7533/7533_p20_l.jpg",model:"Aventador",year:2013,fuel:"petrol",bodyType:"Coupe",price:185e5,id:Object(_.c)()},{brand:"Mercedes",imageUrl:"https://s.auto.drom.ru/i24227/c/photos/fullsize/mercedes-benz/amg_gt/mercedes-benz_amg_gt_862947.jpg",model:"Benz AMG GT I",year:2019,fuel:"petrol",bodyType:"Liftback",price:725e4,id:Object(_.c)()}],filteredCars:[]},reducers:{initialize:function(e){e.filteredCars=e.cars},filterByBrand:function(e,a){"\u0412\u0441\u0435"===a.payload?e.filteredCars=e.cars:e.filteredCars=e.cars.filter((function(e){return e.brand===a.payload}))},filterByYear:function(e,a){if(""===a.payload)return e;e.filteredCars=e.filteredCars.filter((function(e){return e.year===Number(a.payload)}))},filterByFuel:function(e,a){if(""===a.payload)return e;e.filteredCars=e.filteredCars.filter((function(e){return e.fuel===a.payload}))},filterByBodyType:function(e,a){if("\u0412\u0441\u0435"===a.payload)return e;e.filteredCars=e.filteredCars.filter((function(e){return e.bodyType===a.payload}))},filterByModel:function(e,a){if("\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"===a.payload.model)return e;"\u0412\u0441\u0435"===a.payload.model?e.filteredCars=e.cars.filter((function(e){return e.brand===a.payload.brand})):"\u0412\u0441\u0435"===a.payload.brand&&"\u0412\u0441\u0435"!==a.payload.model&&"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"!==a.payload.model&&(e.filteredCars=e.filteredCars.filter((function(e){return e.brand===a.payload.brand}))),"\u0412\u0441\u0435"!==a.payload.brand&&"\u0412\u0441\u0435"!==a.payload.model&&(e.filteredCars=e.filteredCars.filter((function(e){return e.model===a.payload.model}))),"\u0412\u0441\u0435"===a.payload.brand&&"\u0412\u0441\u0435"===a.payload.model&&(e.filteredCars=e.cars)},filterByPrice:function(e,a){if("\u041b\u044e\u0431\u0430\u044f"===a.payload)return e;1===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return e.price<1e6}))),2===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return 1e6<=e.price&&e.price<5e6}))),3===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return e.price>=5e6&&e.price<1e7}))),4===Number(a.payload)&&(e.filteredCars=e.filteredCars.filter((function(e){return e.price>1e7})))},priceToLow:function(e){0===e.filteredCars.length&&(e.filteredCars=e.cars),e.filteredCars.sort((function(e,a){return e.price>a.price?1:e.price<a.price?-1:0}))},priceToHigh:function(e){0===e.filteredCars.length&&(e.filteredCars=e.cars),e.filteredCars.sort((function(e,a){return e.price>a.price?-1:e.price<a.price?1:0}))},search:function(e,a){0!==e.filteredCars.length&&""!==a.payload||(e.filteredCars=e.cars),e.filteredCars=e.filteredCars.filter((function(e){return e.model===a.payload}))}}}),P=M.actions,V=P.initialize,F=P.filterByYear,H=P.filterByBrand,L=P.filterByFuel,z=P.filterByBodyType,E=P.filterByModel,D=P.filterByPrice,G=P.priceToLow,K=P.priceToHigh,R=P.search,W=function(e){return e.cars.cars},q=function(e){return e.cars.filteredCars},A=M.reducer,J=r(140),Y=r(141),X=r(142),Q=r(143),Z=r(3),$=Object(s.a)({img:{height:140}}),ee=function(e){var a=e.info,r=$();return Object(Z.jsx)(T.a,{item:!0,xs:6,children:Object(Z.jsxs)(J.a,{elevation:3,children:[Object(Z.jsx)(Y.a,{title:a.brand,subheader:a.model}),Object(Z.jsx)(X.a,{image:a.imageUrl,className:r.img,title:"Contemplative Reptile"}),Object(Z.jsxs)(Q.a,{children:[Object(Z.jsxs)(b.a,{children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",a.year]}),Object(Z.jsxs)(b.a,{children:["\u0422\u043e\u043f\u043b\u0438\u0432\u043e: ",a.fuel]}),Object(Z.jsxs)(b.a,{children:["\u041a\u0443\u0437\u043e\u0432: ",a.bodyType]}),Object(Z.jsxs)(b.a,{children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",a.price," \u0440\u0443\u0431."]})]})]})})},ae=Object(s.a)({header:{display:"flex",justifyContent:"center",backgroundColor:"black",height:65},container:{display:"flex",marginTop:65},drawer:{width:500},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:20,marginBottom:100},self:{alignSelf:"flex-start",marginTop:20,"&:first-of-type":{marginTop:0}},drawerPaper:{marginTop:65,width:500},girdContainer:{marginTop:20},groupContainer:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},last:{display:"flex",flexDirection:"column"},select:{width:200,marginRight:20},btn:{marginTop:20},wrapper:{display:"flex",justifyContent:"space-around"},search:{display:"flex",justifyContent:"space-around",alignItems:"center"},align:{display:"flex",justifyContent:"center"}}),re=function(){var e=ae(),a=Object(U.c)(W),r=Object(U.c)(q),l=Object(U.b)(),c=Object(t.useState)("\u0412\u0441\u0435"),s=Object(n.a)(c,2),N=s[0],k=s[1],_=Object(t.useState)("\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"),M=Object(n.a)(_,2),P=M[0],A=M[1],J=Object(t.useState)(""),Y=Object(n.a)(J,2),X=Y[0],Q=Y[1],$=Object(t.useState)(""),re=Object(n.a)($,2),te=re[0],le=re[1],ce=Object(t.useState)("\u0412\u0441\u0435"),ie=Object(n.a)(ce,2),ne=ie[0],se=ie[1],oe=Object(t.useState)("\u041b\u044e\u0431\u0430\u044f"),de=Object(n.a)(oe,2),je=de[0],be=de[1],ue=Object(t.useState)(""),pe=Object(n.a)(ue,2),fe=pe[0],Oe=pe[1];return Object(t.useEffect)((function(){return l(V())}),[l]),Object(Z.jsxs)(o.a,{children:[Object(Z.jsx)(d.a,{elevation:0,children:Object(Z.jsx)(j.a,{className:e.header,children:Object(Z.jsx)(b.a,{variant:"h2",children:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"})})}),Object(Z.jsxs)("div",{className:e.container,children:[Object(Z.jsxs)(u.a,{variant:"permanent",anchor:"left",className:e.drawer,classes:{paper:e.drawerPaper},children:[Object(Z.jsx)(b.a,{className:e.btn,variant:"h6",align:"center",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c"}),Object(Z.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),l(H(N)),l(E({brand:N,model:P})),l(F(X)),l(L(te)),l(z(ne)),l(D(je))},noValidate:!0,autoComplete:"off",children:[Object(Z.jsx)("div",{className:e.self,children:Object(Z.jsxs)("div",{className:e.wrapper,children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)(p.a,{id:"brand",children:"\u0411\u0440\u0435\u043d\u0434"}),Object(Z.jsxs)(f.a,{labelId:"brand",id:"select",value:N,onChange:function(e){return k(e.target.value)},className:e.select,children:[Object(Z.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}),Object(Z.jsx)(O.a,{value:"Ferrari",children:"Ferrari"}),Object(Z.jsx)(O.a,{value:"Toyota",children:"Toyota"}),Object(Z.jsx)(O.a,{value:"Tesla",children:"Tesla"}),Object(Z.jsx)(O.a,{value:"Kia",children:"Kia"}),Object(Z.jsx)(O.a,{value:"Hyundai",children:"Hyundai"}),Object(Z.jsx)(O.a,{value:"Ford",children:"Ford"}),Object(Z.jsx)(O.a,{value:"BMW",children:"BMW"}),Object(Z.jsx)(O.a,{value:"Volkswagen",children:"Volkswagen"}),Object(Z.jsx)(O.a,{value:"Porsche",children:"Porsche"}),Object(Z.jsx)(O.a,{value:"Lamborghini",children:"Lamborghini"}),Object(Z.jsx)(O.a,{value:"Mercedes",children:"Mercedes"})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(p.a,{id:"",children:"\u041c\u043e\u0434\u0435\u043b\u044c"}),Object(Z.jsxs)(f.a,{labelId:"model",id:"select",value:P,onChange:function(e){return A(e.target.value)},className:e.select,children:["\u0412\u0441\u0435"!==N||"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434"!==P&&"\u0412\u0441\u0435"!==P?Object(Z.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}):P&&"\u0412\u0441\u0435"===N?null:Object(Z.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}),"\u0412\u0441\u0435"===N?Object(Z.jsx)(O.a,{value:P,children:P}):a.filter((function(e){return e.brand===N})).map((function(e){return Object(Z.jsx)(O.a,{value:e.model,children:e.model},e.value)}))]})]})]})}),Object(Z.jsxs)(h.a,{className:e.self,children:[Object(Z.jsx)(x.a,{children:"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"}),Object(Z.jsx)(m.a,{value:X,onChange:function(e){return Q(e.target.value)},children:Object(Z.jsxs)("div",{className:e.groupContainer,children:[Object(Z.jsx)(y.a,{value:"",control:Object(Z.jsx)(g.a,{}),label:"\u0412\u0441\u0435"}),Object(Z.jsx)(y.a,{value:"2021",control:Object(Z.jsx)(g.a,{}),label:"2021"}),Object(Z.jsx)(y.a,{value:"2019",control:Object(Z.jsx)(g.a,{}),label:"2019"}),Object(Z.jsx)(y.a,{value:"2018",control:Object(Z.jsx)(g.a,{}),label:"2018"}),Object(Z.jsx)(y.a,{value:"2017",control:Object(Z.jsx)(g.a,{}),label:"2017"}),Object(Z.jsx)(y.a,{value:"2016",control:Object(Z.jsx)(g.a,{}),label:"2016"}),Object(Z.jsx)(y.a,{value:"2013",control:Object(Z.jsx)(g.a,{}),label:"2013"}),Object(Z.jsx)(y.a,{value:"2012",control:Object(Z.jsx)(g.a,{}),label:"2012"})]})})]}),Object(Z.jsxs)(h.a,{className:e.self,children:[Object(Z.jsx)(x.a,{children:"\u0422\u043e\u043f\u043b\u0438\u0432\u043e"}),Object(Z.jsx)(m.a,{value:te,onChange:function(e){return le(e.target.value)},children:Object(Z.jsxs)("div",{className:e.groupContainer,children:[Object(Z.jsx)(y.a,{value:"",control:Object(Z.jsx)(g.a,{}),label:"\u0412\u0441\u0435"}),Object(Z.jsx)(y.a,{value:"petrol",control:Object(Z.jsx)(g.a,{}),label:"\u0411\u0435\u043d\u0437\u0438\u043d"}),Object(Z.jsx)(y.a,{value:"diesel",control:Object(Z.jsx)(g.a,{}),label:"\u0414\u0438\u0437\u0435\u043b\u044c"}),Object(Z.jsx)(y.a,{value:"electric",control:Object(Z.jsx)(g.a,{}),label:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(Z.jsx)(y.a,{value:"hybrid",control:Object(Z.jsx)(g.a,{}),label:"\u0413\u0438\u0431\u0440\u0438\u0434"})]})})]}),Object(Z.jsxs)("div",{className:e.self,children:[Object(Z.jsx)(p.a,{id:"bodyType",children:"\u041a\u0443\u0437\u043e\u0432"}),Object(Z.jsxs)(f.a,{labelId:"bodyType",id:"select",value:ne,onChange:function(e){return se(e.target.value)},className:e.select,children:[Object(Z.jsx)(O.a,{value:"\u0412\u0441\u0435",children:"\u0412\u0441\u0435"}),Object(Z.jsx)(O.a,{value:"Coupe",children:"Coupe"}),Object(Z.jsx)(O.a,{value:"Sedan",children:"Sedan"}),Object(Z.jsx)(O.a,{value:"Liftback",children:"Liftback"}),Object(Z.jsx)(O.a,{value:"Hatchback",children:"Hatchback"}),Object(Z.jsx)(O.a,{value:"MPV",children:"MPV"}),Object(Z.jsx)(O.a,{value:"Estate",children:"Estate"}),Object(Z.jsx)(O.a,{value:"SUV",children:"SUV"}),Object(Z.jsx)(O.a,{value:"Pickup",children:"Pickup"}),Object(Z.jsx)(O.a,{value:"Cabrio",children:"Cabrio"})]})]}),Object(Z.jsxs)(h.a,{className:e.self,children:[Object(Z.jsx)(x.a,{children:"\u0426\u0435\u043d\u0430"}),Object(Z.jsx)(m.a,{value:je,onChange:function(e){return be(e.target.value)},children:Object(Z.jsxs)("div",{className:e.last,children:[Object(Z.jsx)(y.a,{value:"\u041b\u044e\u0431\u0430\u044f",control:Object(Z.jsx)(g.a,{}),label:"\u041b\u044e\u0431\u0430\u044f"}),Object(Z.jsx)(y.a,{value:"1",control:Object(Z.jsx)(g.a,{}),label:"\u0414\u043e 1.000.000"}),Object(Z.jsx)(y.a,{value:"2",control:Object(Z.jsx)(g.a,{}),label:"\u041e\u0442 1.000.000 \u0434\u043e 5.000.000"}),Object(Z.jsx)(y.a,{value:"3",control:Object(Z.jsx)(g.a,{}),label:"\u041e\u0442 5.000.000 \u0434\u043e 10.000.000"}),Object(Z.jsx)(y.a,{value:"4",control:Object(Z.jsx)(g.a,{}),label:"\u041e\u0442 10.000.000"})]})})]}),Object(Z.jsx)(v.a,{className:e.btn,variant:"contained",type:"submit",color:"secondary",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})]})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{className:e.search,style:{width:800},children:[Object(Z.jsx)(S.a,{inputValue:fe,onInputChange:function(e,a){Oe(a),l(R(a))},options:a.map((function(e){return e.model})),renderInput:function(e){return Object(Z.jsx)(C.a,Object(i.a)(Object(i.a)({style:{width:300}},e),{},{label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u043e\u0434\u0435\u043b\u0438",margin:"normal",variant:"outlined"}))}}),Object(Z.jsxs)(w.a,{color:"secondary","aria-label":"outlined primary button group",children:[Object(Z.jsxs)(v.a,{onClick:function(){return l(G())},children:["\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e",Object(Z.jsx)(I.a,{})]}),Object(Z.jsxs)(v.a,{onClick:function(){return l(K())},children:["\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",Object(Z.jsx)(B.a,{})]})]})]}),Object(Z.jsx)(T.a,{className:e.girdContainer,container:!0,spacing:3,children:0===r.length?Object(Z.jsx)(T.a,{className:e.align,item:!0,xs:12,children:Object(Z.jsx)(b.a,{variant:"h6",children:"\u041d\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u043c"})}):r.map((function(e){return Object(Z.jsx)(ee,{info:e},e.id)}))})]})]})]})};var te=function(){return Object(Z.jsx)(re,{})},le=Object(_.a)({reducer:{cars:A}});c.a.render(Object(Z.jsx)(U.a,{store:le,children:Object(Z.jsx)(te,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.c545f737.chunk.js.map