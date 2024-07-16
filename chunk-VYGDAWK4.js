import{a as v,b as O}from"./chunk-SM5VW5WZ.js";import{p as f}from"./chunk-MC6M5N3W.js";import"./chunk-Z3C6DEUP.js";import"./chunk-2FEP6AZJ.js";import{$b as i,Ba as c,Gc as D,Ob as m,_b as e,ac as o,ub as s,uc as p,vc as g,wc as x,yc as h}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";var b=["chart"],L=(()=>{let r=class r{constructor(){this.chartOptions={series:[{name:"Metric1",data:this.generateData(18,{min:0,max:90})},{name:"Metric2",data:this.generateData(18,{min:0,max:90})},{name:"Metric3",data:this.generateData(18,{min:0,max:90})},{name:"Metric4",data:this.generateData(18,{min:0,max:90})},{name:"Metric5",data:this.generateData(18,{min:0,max:90})},{name:"Metric6",data:this.generateData(18,{min:0,max:90})},{name:"Metric7",data:this.generateData(18,{min:0,max:90})},{name:"Metric8",data:this.generateData(18,{min:0,max:90})},{name:"Metric9",data:this.generateData(18,{min:0,max:90})}],chart:{height:350,type:"heatmap"},dataLabels:{enabled:!1},colors:["#008FFB"],title:{text:"HeatMap Chart (Single color)"}},this.chartOptions1={series:[{name:"W1",data:this.generateData(8,{min:0,max:90})},{name:"W2",data:this.generateData(8,{min:0,max:90})},{name:"W3",data:this.generateData(8,{min:0,max:90})},{name:"W4",data:this.generateData(8,{min:0,max:90})},{name:"W5",data:this.generateData(8,{min:0,max:90})},{name:"W6",data:this.generateData(8,{min:0,max:90})},{name:"W7",data:this.generateData(8,{min:0,max:90})},{name:"W8",data:this.generateData(8,{min:0,max:90})},{name:"W9",data:this.generateData(8,{min:0,max:90})},{name:"W10",data:this.generateData(8,{min:0,max:90})},{name:"W11",data:this.generateData(8,{min:0,max:90})},{name:"W12",data:this.generateData(8,{min:0,max:90})},{name:"W13",data:this.generateData(8,{min:0,max:90})},{name:"W14",data:this.generateData(8,{min:0,max:90})},{name:"W15",data:this.generateData(8,{min:0,max:90})}],chart:{height:350,type:"heatmap"},dataLabels:{enabled:!1},colors:["#F3B415","#F27036","#663F59","#6A6E94","#4E88B4","#00A7C6","#18D8D8","#A9D794","#46AF78","#A93F55","#8C5E58","#2176FF","#33A1FD","#7A918D","#BAFF29"],xaxis:{type:"category",categories:["10:00","10:30","11:00","11:30","12:00","12:30","01:00","01:30"]},title:{text:"HeatMap Chart (Different color shades for each series)"},grid:{padding:{right:20}}},this.chartOptions2={series:[{name:"Jan",data:this.generateData(20,{min:-30,max:55})},{name:"Feb",data:this.generateData(20,{min:-30,max:55})},{name:"Mar",data:this.generateData(20,{min:-30,max:55})},{name:"Apr",data:this.generateData(20,{min:-30,max:55})},{name:"May",data:this.generateData(20,{min:-30,max:55})},{name:"Jun",data:this.generateData(20,{min:-30,max:55})},{name:"Jul",data:this.generateData(20,{min:-30,max:55})},{name:"Aug",data:this.generateData(20,{min:-30,max:55})},{name:"Sep",data:this.generateData(20,{min:-30,max:55})}],chart:{height:350,type:"heatmap"},plotOptions:{heatmap:{shadeIntensity:.5,colorScale:{ranges:[{from:-30,to:5,name:"low",color:"#00A100"},{from:6,to:20,name:"medium",color:"#128FD9"},{from:21,to:45,name:"high",color:"#FFB200"},{from:46,to:55,name:"extreme",color:"#FF0000"}]}}},dataLabels:{enabled:!1},title:{text:"HeatMap Chart with Color Range"}},this.chartOptions3={series:[{name:"Metric1",data:this.generateData(20,{min:0,max:90})},{name:"Metric2",data:this.generateData(20,{min:0,max:90})},{name:"Metric3",data:this.generateData(20,{min:0,max:90})},{name:"Metric4",data:this.generateData(20,{min:0,max:90})},{name:"Metric5",data:this.generateData(20,{min:0,max:90})},{name:"Metric6",data:this.generateData(20,{min:0,max:90})},{name:"Metric7",data:this.generateData(20,{min:0,max:90})},{name:"Metric8",data:this.generateData(20,{min:0,max:90})},{name:"Metric8",data:this.generateData(20,{min:0,max:90})}],chart:{height:350,type:"heatmap"},stroke:{width:0},plotOptions:{heatmap:{radius:30,enableShades:!1,colorScale:{ranges:[{from:0,to:50,color:"#008FFB"},{from:51,to:100,color:"#00E396"}]}}},dataLabels:{enabled:!0,style:{colors:["#fff"]}},xaxis:{type:"category"},title:{text:"Rounded (Range without Shades)"}}}generateData(d,t){for(var a=0,n=[];a<d;){var u="w"+(a+1).toString(),M=Math.floor(Math.random()*(t.max-t.min+1))+t.min;n.push({x:u,y:M}),a++}return n}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c({type:r,selectors:[["app-heatmapcharts"]],viewQuery:function(t,a){if(t&1&&p(b,5),t&2){let n;g(n=x())&&(a.chart=n.first)}},standalone:!0,features:[D],decls:37,vars:25,consts:[[1,"row"],[1,"col-xl-6"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","heatmap-basic"],["id","chart"],[3,"series","chart","dataLabels","title","colors"],["id","heatmap-multiseries"],[3,"series","chart","dataLabels","colors","grid","xaxis","title"],["id","heatmap-colorrange"],[3,"series","chart","dataLabels","plotOptions","title"],["id","heatmap-range"],[3,"series","chart","dataLabels","colors","stroke","plotOptions","xaxis","title"]],template:function(t,a){t&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),h(5,"Basic Heatmap Chart"),i()(),e(6,"div",5)(7,"div",6)(8,"div",7),o(9,"apx-chart",8),i()()()()(),e(10,"div",1)(11,"div",2)(12,"div",3)(13,"div",4),h(14,"Multi Series Heatmap Chart"),i()(),e(15,"div",5)(16,"div",9)(17,"div",7),o(18,"apx-chart",10),i()()()()(),e(19,"div",1)(20,"div",2)(21,"div",3)(22,"div",4),h(23,"Color Range Heatmap Chart"),i()(),e(24,"div",5)(25,"div",11)(26,"div",7),o(27,"apx-chart",12),i()()()()(),e(28,"div",1)(29,"div",2)(30,"div",3)(31,"div",4),h(32,"Heatmap Range Without Shades"),i()(),e(33,"div",5)(34,"div",13)(35,"div",7),o(36,"apx-chart",14),i()()()()()()),t&2&&(s(9),m("series",a.chartOptions.series)("chart",a.chartOptions.chart)("dataLabels",a.chartOptions.dataLabels)("title",a.chartOptions.title)("colors",a.chartOptions.colors),s(9),m("series",a.chartOptions1.series)("chart",a.chartOptions1.chart)("dataLabels",a.chartOptions1.dataLabels)("colors",a.chartOptions1.colors)("grid",a.chartOptions1.grid)("xaxis",a.chartOptions1.xaxis)("title",a.chartOptions1.title),s(9),m("series",a.chartOptions2.series)("chart",a.chartOptions2.chart)("dataLabels",a.chartOptions2.dataLabels)("plotOptions",a.chartOptions2.plotOptions)("title",a.chartOptions2.title),s(9),m("series",a.chartOptions3.series)("chart",a.chartOptions3.chart)("dataLabels",a.chartOptions3.dataLabels)("colors",a.chartOptions3.colors)("stroke",a.chartOptions3.stroke)("plotOptions",a.chartOptions3.plotOptions)("xaxis",a.chartOptions3.xaxis)("title",a.chartOptions3.title))},dependencies:[O,v,f]});let l=r;return l})();export{L as HeatmapchartsComponent};
