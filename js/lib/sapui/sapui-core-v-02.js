// all common functions to configure modules


"use strict";
var com={};

// $ is alias for com.sapui
var $= com.sapui= {v:10}

$.initStructure=function (libPath){
var root = window
var structure=libPath.split(".")
for (var i = 0; i < structure.length; i++) {
    root[structure[i]]=root[structure[i]]||{}
    root= root[structure[i]];
    }
}
$.initconf =  function()
{
	 for (var i=0; i < conf.modules.length; i++)
   { var mod = conf.modules[i];
   if(mod.active){
    for (var y=0; y < mod.src.length; y++)
   {
     var script = document.createElement('script')
     script.src = mod.rootpath + mod.src[y];
     document.write(script.outerHTML)
   }}
 }
}
$.initconf()