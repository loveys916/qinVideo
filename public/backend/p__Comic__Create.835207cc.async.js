(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"+tXX":function(t,n,e){"use strict";e.r(n);e("T2oS");var a,o,c,i=e("W9HT"),r=(e("miYZ"),e("tsqr")),s=e("2Taf"),u=e.n(s),l=e("vZ4D"),p=e.n(l),m=e("l4Ni"),d=e.n(m),f=e("ujKo"),h=e.n(f),y=e("MhPg"),g=e.n(y),v=e("q1tI"),w=e.n(v),b=e("MuoO"),C=e("3a4m"),k=e.n(C),M=e("LLXN"),S=e("+tEW"),T=(a=Object(b["connect"])(function(t){var n=t.comic,e=t.category,a=t.loading;return{comic:n,category:e,loading:a.effects["comic/postComic"]}}),a((c=function(t){function n(){var t,e;u()(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return e=d()(this,(t=h()(n)).call.apply(t,[this].concat(o))),e.state={comic:{title:"",slug:"",status:"draft",introduce:"",isUpdate:!1,updateDay:0,rateStar:4,rateCount:1e3,impression:"",eposideCount:12,staff:"",actor:"",playType:"local",noPrefix:!1,level:0,firstPlay:"20160606",coverVertical:"",coverHorizontal:"",area:[],kind:[],year:[],tag:[]}},e.handleSubmit=function(t){var n=e.props.dispatch;n({type:"comic/postComic",payload:{data:t}}).then(function(t){t&&(r["a"].success(Object(M["formatMessage"])({id:"common.success.tips"})),k.a.push("/comic/list"))})},e}return g()(n,t),p()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.loading,n=this.state.comic;return w.a.createElement(i["a"],{spinning:!!t},w.a.createElement(S["a"],{onChange:this.handleSubmit,info:n}))}}]),n}(v["Component"]),o=c))||o);n["default"]=T}}]);