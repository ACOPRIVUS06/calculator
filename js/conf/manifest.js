// conficuration file
var conf={
	"application":"calculator",
	"version":12,
    "modules":[
    {name: "calculator",
    		    rootpath: "js/lib/calculator/",
    		    version: "v-02",
    		    src: ["calculator-core-v-02.js",
    		          "calculator-events-v-02.js"],
    		    active:true
     } ,

     {name: "scientific",
    		    rootpath: "js/lib/calculator/",
    		    version: "v-102",
    		    src: ["calculator-core-v-102.js",
    		          "calculator-events-v-102.js"],
    		    active:false
     }
      ]
// above equals to :
// "modules":
// ['js/conf/manifest.js',
// 'js/lib/calculator/calculator-events-v-02.js',
// 'js/lib/calculator/calculator-core-v-02.js']
}