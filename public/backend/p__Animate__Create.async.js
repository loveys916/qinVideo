(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{enlI:function(t,n,a){"use strict";a.r(n);a("T2oS");var e,o,i,r=a("W9HT"),s=a("2Taf"),c=a.n(s),u=a("vZ4D"),p=a.n(u),l=a("l4Ni"),f=a.n(l),d=a("ujKo"),m=a.n(d),h=a("MhPg"),g=a.n(h),v=a("q1tI"),y=a.n(v),w=a("MuoO"),b=(a("LLXN"),a("x+KT")),I=(e=Object(w["connect"])(function(t){var n=t.animate,a=t.category,e=t.loading;return{animate:n,category:a,loading:e.effects["animate/postAnimate"]}}),e((i=function(t){function n(){var t,a;c()(this,n);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return a=f()(this,(t=m()(n)).call.apply(t,[this].concat(o))),a.state={animateInfo:{baseInfo:{title:"",slug:"",status:"draft",introduce:"",isUpdate:!1,updateDay:0,rateStar:4,rateCount:1e3,impression:"",eposideCount:12,staff:"",actor:"",firstPlay:"20160606",coverVertical:"",coverHorizontal:"",tags:[]},eposide:[]}},a.handleSubmit=function(t){var n=a.props.dispatch;n({type:"animate/postAnimate",payload:{data:t}})},a}return g()(n,t),p()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.loading,n=this.state.animateInfo;return y.a.createElement(r["a"],{spinning:!!t},y.a.createElement(b["a"],{onChange:this.handleSubmit,animateInfo:n}))}}]),n}(v["Component"]),o=i))||o);n["default"]=I}}]);