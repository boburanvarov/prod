var t={series:[70],chart:{height:300,type:"radialBar"},colors:["#0162e8"],plotOptions:{radialBar:{hollow:{size:"70%"}}},labels:["Cricket"]},o={series:[44,55,67,83],chart:{height:300,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(){return 249}}}}},colors:["#0162e8","#00b9ff","#fbbc0b","#ee335e"],labels:["Apples","Oranges","Bananas","Berries"]},r={series:[76,67,61,90],chart:{height:320,type:"radialBar"},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},colors:["#0162e8","#00b9ff","#fbbc0b","#ee335e"],labels:["Vimeo","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"14px",position:"left",labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,a){return e+":  "+a.w.globals.series[a.seriesIndex]},itemMargin:{vertical:3}},responsive:[{breakpoint:480,options:{legend:{show:!1}}}]},s={series:[75],chart:{height:320,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{show:!0,name:{offsetY:-10,show:!0,color:"#888",fontSize:"17px"},value:{formatter:function(e){return parseInt(e)},color:"#111",fontSize:"36px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b9ff"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},labels:["Percent"]},l={series:[67],chart:{height:320,type:"radialBar",offsetY:-10},colors:["#0162e8"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"16px",color:void 0,offsetY:120},value:{offsetY:76,fontSize:"22px",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["Median Ratio"]},i={series:[65],chart:{height:330,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{hollow:{margin:15,size:"70%",imageWidth:32,imageHeight:32,imageClipped:!1},dataLabels:{name:{show:!1,color:"#fff"},value:{show:!0,color:"#333",offsetY:10,fontSize:"22px"}}}},fill:{type:"image",image:{src:["./assets/images/media/media-64.jpg"]}},stroke:{lineCap:"round"},labels:["Volatility"]},n={series:[76],chart:{type:"radialBar",offsetY:-20,height:320},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#fff",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},colors:["#0162e8"],grid:{padding:{top:-10}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.4,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},f={series:[14,23,21,17,15,10,12,17,21],chart:{type:"polarArea",height:300},stroke:{colors:["#fff"]},fill:{opacity:.8},legend:{position:"bottom"},colors:["#0162e8","#00b9ff","#fbbc0b","#49b6f5","#ee335e","#22c03c","#6d6ef3","#49b6f5","#5b67c7"],responsive:[{breakpoint:480,options:{chart:{}}}]},p={series:[42,47,52,58,65],chart:{height:300,type:"polarArea"},labels:["Rose A","Rose B","Rose C","Rose D","Rose E"],fill:{opacity:1},stroke:{width:1,colors:void 0},yaxis:{show:!1},legend:{position:"bottom"},plotOptions:{polarArea:{rings:{strokeWidth:0},spokes:{strokeWidth:0}}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:.6,color:"#0162e8"}}};export{t as a,o as b,r as c,s as d,l as e,i as f,n as g,f as h,p as i};
