(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{109:function(t,e,n){t.exports=n(140)},86:function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var a=n(87),r=n.n(a),s=n(53),o=n.n(s),u=n(54),c=n.n(u),i=n(55),l=n.n(i),m=n(56),d=n.n(m),f=n(38),p=n.n(f),v=n(88),g=n(0),b=n.n(g),h=n(3),y=n(11),k=n(2),w=n(13),x=n(30),_=n(27),E=n(52),S=n(19),T=n(89),A=n.n(T);function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=p()(t);if(e){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var R=x.a.get(),B=w.a.get("window").height,I=w.a.get("window").width,z=function(t){return 2===R?I<360?.95*t:B<667?t:B>=667&&B<=735?1.15*t:1.25*t:3===R?I<=360?t:B<667?1.15*t:B>=667&&B<=735?1.2*t:1.27*t:3.5===R?I<=360?t:B<667?1.2*t:B>=667&&B<=735?1.25*t:1.4*t:t},P=null,D=function(t){l()(n,t);var e=C(n);function n(t){var a;return o()(this,n),(a=e.call(this,t)).init=function(){for(var t=0;t<a.state.levels+1;t++){for(var e=[],n=[],r=0,s=[],o=[],u=[],c=0;c<a.state.numbers_count;c++)e.push(a.getRandomIntInclusive(a.state.min_random,a.state.max_random));for(var i=0;i<a.state.numbers_count-1;i++)n.push(e[r]+e[r+1]),o.push(0),u.push({test:1}),r++;s.push(e,n),a.state.numbers.push(s),a.state.answers.push(o),a.state.result.push(u),a.setState({numbers:a.state.numbers,answers:a.state.answers,result:a.state.result})}},a.startTimer=function(t){var e,n,s,o,u=arguments;return r.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:0,n=1===e?0:a.state.timer,s=0,o=function(t,e){a.setState({timer:t,seconds:e})},r.abrupt("return",new Promise((function(e,a){P=setInterval((function(){o(n+=1/(10*t),s+=10),n>=1&&(clearInterval(P),P=null,e(1))}),100)})));case 4:case"end":return r.stop()}}),null,null,null,Promise)},a.check=function(){for(var t=0,e=function(e){a.state.answers[e].map((function(n,r){a.state.numbers[e][1][r]==n?(a.state.result[e][r]={value:n,correct:!0,correct_answer:a.state.numbers[e][1][r]},t++):a.state.result[e][r]={value:n,correct:!1,correct_answer:a.state.numbers[e][1][r]},a.setState({result:a.state.result})}))},n=0;n<a.state.levels+1;n++)e(n);a.setState({correct_count:t},(function(){}))},a.result=function(){return a.state.result.map((function(t,e){return b.a.createElement(k.a,{style:L.numbersBox,key:e},t.map((function(t,e){return b.a.createElement(y.a,{style:[L.numberResult,{color:t.correct?"#2ecc71":"#e74c3c"}],key:e},t.value)})))}))},a.repeat=function(){a.setState({page:"start",timer:0,time_1:2,time_2:15,numbers:[],answers:[],task:0,levels:9,variants_count:12,numbers_count:5,min_random:1,max_random:7,variants:[],seconds:0,currentAnswer:0,result:[],correct_count:0},(function(){a.init()}))},a.taskStart=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(1==t&&P&&(clearInterval(P),P=null),a.setState({page:"task",task:a.state.task+t}),a.state.levels<a.state.task||1==t&&a.state.task==a.state.levels)return a.check(),a.setState({page:"finish",task:0,timer:0}),null;a.startTimer(a.state.time_1,t).then((function(){a.setState({page:"task_sum",timer:0,currentAnswer:0}),a.variantCreate(),a.startTimer(a.state.time_2).then((function(){a.setState({task:a.state.task+1,timer:0},(function(){a.taskStart()}))}))}))},a.answers=function(){return a.state.task>a.state.levels?null:a.state.answers[a.state.task].map((function(t,e){return b.a.createElement(_.a,{key:e,underlayColor:"transparent",onPress:function(){return a.setState({currentAnswer:e})}},b.a.createElement(y.a,{style:[L.numberAnswer,{borderBottomColor:a.state.currentAnswer===e?"#7f8c8d":"0"==t?"#ecf0f1":"black",color:a.state.currentAnswer===e?"#7f8c8d":"0"==t?"#ecf0f1":"black"}]},t))}))},a.variantCreate=function(){var t=[];if(a.state.task>a.state.levels)return null;a.state.numbers[a.state.task][1].map((function(e,n){var r=a.getRandomIntInclusive(0,a.state.variants_count-1);t[r]?t[a.getRandomIntInclusive(0,a.state.variants_count-1)]=e:t[r]=e}));for(var e=0;e<a.state.variants_count;e++)t[e]||(t[e]=a.getRandomIntInclusive(2*a.state.min_random,2*a.state.max_random));a.setState({variants:t})},a.variantRender=function(){return a.state.variants.map((function(t,e){return b.a.createElement(_.a,{key:e,underlayColor:"#5cd28e",style:L.variant,onPress:function(){return a.variantPress(t,e)}},b.a.createElement(y.a,{style:L.variantText,key:e},t))}))},a.variantPress=function(t,e){a.state.answers[a.state.task][a.state.currentAnswer]=t,a.setState({answers:a.state.answers},(function(){a.setState({currentAnswer:a.state.currentAnswer===a.state.numbers_count-2?0:a.state.currentAnswer+1})}))},a.pages=function(){switch(a.state.page){case"start":return b.a.createElement(g.Fragment,null,b.a.createElement(y.a,{style:L.title},"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"),b.a.createElement(y.a,{style:L.desc},"\u0412\u0430\u043c \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b ",a.state.numbers_count," \u0447\u0438\u0441\u0435\u043b. \u0412\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u2013 \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f \u0438\u0445 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 ",a.state.time_1," \u0441\u0435\u043a\u0443\u043d\u0434, \u0437\u0430\u0442\u0435\u043c \u0432 \u0443\u043c\u0435 \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0435\u0440\u0432\u043e\u0435 \u0441\u043e \u0432\u0442\u043e\u0440\u044b\u043c, \u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c; \u0432\u0442\u043e\u0440\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u0441 \u0442\u0440\u0435\u0442\u044c\u0438\u043c, \u0441\u0443\u043c\u043c\u0443 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c; \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0443 \u0432\u0430\u0441 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e ",a.state.numbers_count-1," \u0441\u0443\u043c\u043c\u044b. \u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",a.state.time_2," \u0441\u0435\u043a\u0443\u043d\u0434. \u041f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u0435\u0442\u0435 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0440\u044f\u0434\u0443 \u0447\u0438\u0441\u0435\u043b"),b.a.createElement(_.a,{underlayColor:"#5cd28e",style:L.button,onPress:function(){return a.taskStart()}},b.a.createElement(y.a,{style:L.buttonText},"\u041d\u0430\u0447\u0430\u0442\u044c")));case"task":return b.a.createElement(g.Fragment,null,b.a.createElement(y.a,{style:L.titleLevels},a.state.task+1,"/",a.state.levels+1),b.a.createElement(y.a,{style:L.title},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0430"),b.a.createElement(k.a,{style:L.numbersBoxTask},a.numbersLine()));case"task_sum":return b.a.createElement(g.Fragment,null,b.a.createElement(y.a,{style:L.titleLevels},a.state.task+1,"/",a.state.levels+1),b.a.createElement(y.a,{style:L.title},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442\u044b"),b.a.createElement(k.a,{style:L.numbersBox},a.answers()),b.a.createElement(k.a,{style:L.numbersBoxVariants},a.variantRender()),b.a.createElement(_.a,{underlayColor:"#7f8c8d",style:L.buttonNext,onPress:function(){return a.taskStart(1)}},b.a.createElement(y.a,{style:L.buttonText},"\u0414\u0430\u043b\u0435\u0435")));case"finish":return b.a.createElement(g.Fragment,null,b.a.createElement(y.a,{style:L.title},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),b.a.createElement(y.a,{style:L.descEnd},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 - ",a.state.correct_count,". \u041d\u043e\u0440\u043c\u0430 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u2013 \u043e\u0442 ",10*(a.state.numbers_count-1)*.75," \u0438 \u0432\u044b\u0448\u0435"),a.result(),b.a.createElement(_.a,{underlayColor:"#5cd28e",style:L.button,onPress:function(){return a.repeat()}},b.a.createElement(y.a,{style:L.buttonText},"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e")))}},a.bannerError=function(t){alert(t)},a.progressBar=function(){return"android"==S.a.OS?b.a.createElement(E.ProgressBarAndroid,{style:L.slider,styleAttr:"Horizontal",color:"#e74c3c",indeterminate:!1,progress:a.state.timer}):b.a.createElement(A.a,{style:L.slider,minimumValue:0,maximumValue:1,value:a.state.timer,disabled:!1,thumbTintColor:"transparent",minimumTrackTintColor:"#e74c3c",maximumTrackTintColor:"transparent"})},a.state={page:"start",timer:0,time_1:2,time_2:15,numbers:[],answers:[],task:0,levels:9,variants_count:12,numbers_count:5,min_random:1,max_random:7,variants:[],seconds:0,currentAnswer:0,result:[],correct_count:0},a}return c()(n,[{key:"componentDidMount",value:function(){this.init()}},{key:"getRandomIntInclusive",value:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}},{key:"numbersLine",value:function(){return this.state.task>this.state.levels?null:this.state.numbers[this.state.task][0].map((function(t,e){return b.a.createElement(y.a,{style:L.number,key:e},t)}))}},{key:"render",value:function(){return b.a.createElement(k.a,{style:L.container},b.a.createElement(k.a,{style:L.pagesBox},this.progressBar(),this.pages(),b.a.createElement(v.StatusBar,{style:"auto"})))}}]),n}(g.Component),L=h.a.create({container:{flex:1},numbersBox:{flexDirection:"row"},numbersBoxTask:{flexDirection:"row",paddingTop:10},numbersBoxVariants:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginTop:30},number:{fontSize:z(34),color:"black",padding:5},numberResult:{fontSize:z(24),color:"#7f8c8d",padding:5},numberAnswer:{fontSize:z(34),color:"#7f8c8d",margin:5,padding:5,borderBottomColor:"#7f8c8d",borderBottomWidth:3},pagesBox:{flex:1,padding:15,paddingTop:0,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},slider:{top:0,position:"absolute",width:"100%",height:"android"==S.a.OS?4:2,zIndex:1e3},title:{fontSize:z(28),textAlign:"center",padding:15},titleLevels:{fontSize:z(28),textAlign:"center",padding:15,color:"#7f8c8d"},desc:{fontSize:z(14),textAlign:"center",padding:15},descEnd:{fontSize:z(14),textAlign:"center",padding:15,paddingTop:0},button:{backgroundColor:"#2ecc71",borderRadius:30,width:"50%",margin:15},buttonNext:{backgroundColor:"#bdc3c7",borderRadius:30,width:"50%",margin:15,marginTop:30},variant:{backgroundColor:"#2ecc71",borderRadius:25,width:50,height:50,margin:10},variantText:{fontSize:20,fontWeight:"500",textAlign:"center",padding:10,color:"white"},buttonText:{fontSize:z(16),fontWeight:"500",textAlign:"center",padding:15,color:"white"}})}},[[109,1,2]]]);
//# sourceMappingURL=app.722fb698.chunk.js.map