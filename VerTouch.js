(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"VerTouch_atlas_1", frames: [[1508,1292,383,239],[1508,1533,383,239],[1508,1774,383,239],[705,0,375,321],[0,250,375,321],[1082,0,375,321],[1459,0,375,321],[0,573,375,321],[0,896,375,321],[0,1219,375,321],[0,1542,375,321],[377,323,375,321],[754,323,375,321],[1131,323,375,321],[1508,323,375,321],[377,646,375,321],[377,969,375,321],[377,1292,375,321],[377,1615,375,321],[754,646,375,321],[1131,646,375,321],[1508,646,375,321],[754,969,375,321],[754,1292,375,321],[0,0,703,248],[754,1615,375,321],[1131,969,375,321],[1508,969,375,321],[1131,1292,375,321],[1131,1615,375,321]]},
		{name:"VerTouch_atlas_2", frames: [[0,0,383,239],[385,0,383,239],[770,0,383,239],[1155,0,383,239],[1540,0,383,239],[0,241,383,239],[385,241,383,239],[770,241,383,239],[1155,241,383,239],[1540,241,383,239],[0,482,383,239],[385,482,383,239],[770,482,383,239],[1155,482,383,239],[1540,482,383,239],[0,723,383,239],[428,1384,381,133],[1710,1152,258,90],[854,964,426,138],[1282,964,426,138],[854,1104,426,138],[1282,1104,426,138],[0,1112,426,138],[428,1244,426,138],[0,1252,426,138],[856,1244,426,138],[1284,1244,426,138],[0,964,425,146],[427,964,425,146],[385,723,383,239],[770,723,383,239],[1155,723,383,239],[1540,723,383,239],[1710,964,270,186]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._02022018110711590_1 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._02022018110713796_1 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._08072016100811130 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._09032017104417590_1 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._09032017104432690_1 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1212201423121568 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._12122014231342893 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._12122014231949914 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._12122014232013776 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._12122014235042227 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._13122014000341958 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._13122014000613848 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._13122014033322459 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._14032016093727355_1 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._14032016093938695_1 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._26092017155319984_4 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._26092017155320912_1 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._27052015175249031 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._29012015123004986 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._30072015160714667 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._42591a375x321copy2 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._42591a375x321copy = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._42591a375x321 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._43169bpic375x3211 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._43169bpic375x3212 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._43839_c_capsulot_375x321_sg1 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._43839_c_capsulot_375x321_sg12 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._43839_c_capsulot_375x321_sg13 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._43839_c_capsulot_375x321_sg14 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._43839_c_capsulot_375x321_sg15 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._43839_c_capsulot_375x321_sg16 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._74352 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._74392 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._76452 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._76912 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._77042 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._77112 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._77122 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._77142 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._77152 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap52 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap69 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.capriccio = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_OL_Ispirazione_Napoli_Front_View_Shadow = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_OL_Ispirazione_Venezia_Front_View_Shadow = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_VL_MilkyWorld_BiancoForte_Front_shadow = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_VL_MilkyWorld_BiancoLeggero = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Kazar = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.livanto = function() {
	this.initialize(ss["VerTouch_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ארונדיו = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.פורטדו = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.פולקפה = function() {
	this.initialize(ss["VerTouch_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.livanto_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.livanto();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqKAAIUVAA");
	this.shape.setTransform(74.225,135.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,138.3);


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ap4AAITxAA");
	this.shape.setTransform(63.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,128.6,2);


(lib.pul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.פולקפה();
	this.instance.setTransform(0,54.8,0.203,0.2512,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pul, new cjs.Rectangle(0,0,46.7,54.8), null);


(lib.altu2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._09032017104432690_1();
	this.instance.setTransform(0,0,0.5232,0.5126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.altu2, new cjs.Rectangle(0,0,200.4,122.5), null);


(lib.alto1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._09032017104417590_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.alto1, new cjs.Rectangle(0,0,383,239), null);


(lib.blackBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("EiBdA5eMAAAhy7MEC7AAAMAAABy7g");
	this.shape.setTransform(828.6,367.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1657.2,735.6);


(lib.voltesoBlcak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014231949914();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.voltesoBlcak, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.hzlinoblack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42591a375x321copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hzlinoblack, new cjs.Rectangle(0,0,375,321), null);


(lib.decafe80black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014232013776();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.decafe80black, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.black26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._43169bpic375x3212();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black26, new cjs.Rectangle(0,0,129,102.9), null);


(lib.black25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._43169bpic375x3211();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black25, new cjs.Rectangle(0,0,129,102.9), null);


(lib.black24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._02022018110713796_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black24, new cjs.Rectangle(0,0,131.7,76.6), null);


(lib.black23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._02022018110711590_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black23, new cjs.Rectangle(0,0,131.7,76.6), null);


(lib.black22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ארונדיו();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black22, new cjs.Rectangle(0,0,383,239), null);


(lib.black21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._26092017155319984_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black21, new cjs.Rectangle(0,0,383,239), null);


(lib.black20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._26092017155320912_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black20, new cjs.Rectangle(0,0,383,239), null);


(lib.black19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.פורטדו();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black19, new cjs.Rectangle(0,0,383,239), null);


(lib.black18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._08072016100811130();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black18, new cjs.Rectangle(0,0,383,239), null);


(lib.black17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._14032016093727355_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black17, new cjs.Rectangle(0,0,383,239), null);


(lib.black16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._14032016093938695_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black16, new cjs.Rectangle(0,0,383,239), null);


(lib.black15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._29012015123004986();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black15, new cjs.Rectangle(0,0,383,239), null);


(lib.black14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1212201423121568();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black14, new cjs.Rectangle(0,0,383,239), null);


(lib.black13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13122014000613848();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black13, new cjs.Rectangle(0,0,383,239), null);


(lib.black11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13122014033322459();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black11, new cjs.Rectangle(0,0,383,239), null);


(lib.black10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._30072015160714667();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black10, new cjs.Rectangle(0,0,383,239), null);


(lib.black9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42591a375x321copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black9, new cjs.Rectangle(0,0,375,321), null);


(lib.black8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoLeggero();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black8, new cjs.Rectangle(0,0,383,239), null);


(lib.black7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoForte_Front_shadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black7, new cjs.Rectangle(0,0,383,239), null);


(lib.black5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42591a375x321();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black5, new cjs.Rectangle(0,0,375,321), null);


(lib.black4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014235042227();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black4, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.black3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014231342893();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black3, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.balck12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13122014000341958();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.balck12, new cjs.Rectangle(0,0,383,239), null);


(lib.vina = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._43839_c_capsulot_375x321_sg16();

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(188,278,2.2243,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-9}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,375,330);


(lib.tokyo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._43839_c_capsulot_375x321_sg15();

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(179.85,279.9,2.3286,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-6}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,375,327);


(lib.stokholm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._43839_c_capsulot_375x321_sg14();
	this.instance.setTransform(0,4);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(180.6,282.5,2.369,1,0,0,0,63.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:4}}]}).to({state:[{t:this.instance,p:{y:-10}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,375,335);


(lib.shenghay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._43839_c_capsulot_375x321_sg13();

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(185.55,278.15,2.2243,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-5}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,375,326);


(lib.voloto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76452();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.35,121.4,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-3}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,154.9,138.2);


(lib.venzia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_OL_Ispirazione_Venezia_Front_View_Shadow();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(79.85,135.15,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,138.2);


(lib.roma = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._74392();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(70.65,136.5,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-1}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,154.9,138.5);


(lib.rist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77042();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.95,122.4,1,1,0,0,0,63.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApHAAISPAA");
	this.shape.setTransform(77.175,127.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.Onik = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._74352();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(78.5,125.45,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.Oety = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77142();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.4,126.8,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.Ocolo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77152();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(78.5,128.3,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.napoli = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_OL_Ispirazione_Napoli_Front_View_Shadow();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(75.45,119.05,1,1,0,0,0,63.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApJAAISTAA");
	this.shape.setTransform(76.175,122.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.kazr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Kazar();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(75.95,124.3,1,1,0,0,0,63.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApCAAISFAA");
	this.shape.setTransform(77.725,126.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.indo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77112();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(77.45,130.5,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.india = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77122();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(78,134.55,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-1}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,154.9,136.6);


(lib.forti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.capriccio();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.1,118.15,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.cosi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._27052015175249031();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(75.35,117.6,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.arpjo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76912();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(73.15,125.65,1,1,0,0,0,63.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AphAAITDAA");
	this.shape.setTransform(75.925,122.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.con9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(187.05,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("ניקארגוואה", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 160;
	this.text.parent = this;
	this.text.setTransform(81.8,8.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("AwbDvIAAndMAg3AAAIAAHdg");
	this.shape.setTransform(105.175,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AsxAAIZjAA");
	this.shape_1.setTransform(81.8125,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AJJDvI5kAAIAAndMAg3AAAIAAHdg");
	this.shape_2.setTransform(105.175,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{y:8.35,color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{y:9,color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,211.4,55.8);


(lib.con8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(167.45,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("גוטאמלה", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(72,7.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("Au5DrIAAnVIdzAAIAAHVg");
	this.shape.setTransform(95.375,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ArPAAIWGAAIAZAA");
	this.shape_1.setTransform(72.025,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AHNDsI2GgBIAAnWIdzAAIAAHWInTABg");
	this.shape_2.setTransform(95.375,31.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{y:7.9,color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{y:9.55,color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,191.8,55.8);


(lib.con7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(155.15,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("אתיופיה", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(65.85,9.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("At7DqIAAnTIb3AAIAAHTg");
	this.shape.setTransform(89.225,30.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AqSAAIUlAA");
	this.shape_1.setTransform(65.875,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("At7DqIAAnTIb3AAIAAHTg");
	this.shape_2.setTransform(89.225,30.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{y:9.2,color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{y:9.55,color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,179.5,55.8);


(lib.con6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(89.7,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("הודו", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(32.2,8.75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("Ao0DsIAAnXIRpAAIAAHXg");
	this.shape.setTransform(56.5,31.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlLAAIKXAA");
	this.shape_1.setTransform(33.15,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("ABiDsIqWAAIAAnXIRpAAIAAHXg");
	this.shape_2.setTransform(56.5,31.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:32.2,y:8.75,color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{x:33.15,y:9.55,color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,114,55.8);


(lib.con5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(127.4,27.4,1,1,0,0,0,23.4,27.4);

	this.kenya = new cjs.Text("קניה", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.kenya.name = "kenya";
	this.kenya.textAlign = "center";
	this.kenya.lineHeight = 44;
	this.kenya.lineWidth = 66;
	this.kenya.parent = this;
	this.kenya.setTransform(68.95,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.kenya);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("ArVDtIAAnZIWrAAIAAHZg");
	this.shape.setTransform(72.575,31.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFfAAIq9AA");
	this.shape_1.setTransform(68.95,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AE6DtIq8AAIK8AAIq8AAIlTAAIAAnZIWrAAIAAHZg");
	this.shape_2.setTransform(72.575,31.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.kenya,p:{color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.kenya,p:{color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.7,55.9);


(lib.con4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(127.4,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("ברזיל", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("ArxDsIAAnXIXiAAIAAHXg");
	this.shape.setTransform(75.35,31.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoAAAIQBAA");
	this.shape_1.setTransform(51.2625,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AEQDsIwBAAIAAnXIXiAAIAAHXg");
	this.shape_2.setTransform(75.35,31.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,151.7,55.8);


(lib.con3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("קולומביה", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 131;
	this.text.parent = this;
	this.text.setTransform(67.7,9.6);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(158.85,27.4,1,1,0,0,0,23.4,27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("AuOEIIAAoPIcdAAIAAIPg");
	this.shape.setTransform(91.075,28.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AqkAAIVJAA");
	this.shape_1.setTransform(67.7125,54.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AG7EII1JAAIAAoPIcdAAIAAIPg");
	this.shape_2.setTransform(91.075,28.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text,p:{color:"#FFFFFF",lineHeight:44.25}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.text,p:{color:"#000000",lineHeight:45.25}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,183.2,55.9);


(lib.con2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(207.95,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("קוסטה ריקה", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 180;
	this.text.parent = this;
	this.text.setTransform(91.8,7.6);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("AyDEIIAAoPMAkHAAAIAAIPg");
	this.shape.setTransform(115.625,26.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AuaAAIc1AA");
	this.shape_1.setTransform(92.2625,52.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AKxEII80AAIAAoPMAkHAAAIAAIPg");
	this.shape_2.setTransform(115.625,26.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF",lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{color:"#000000",lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,232.3,54.8);


(lib.con1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("מקסיקו", "normal 400 33px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 111;
	this.text.parent = this;
	this.text.setTransform(57.35,5.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(138.1,25,1,1,0,0,0,23.4,27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0)").s().p("AsmEAIAAn/IZNAAIAAH/g");
	this.shape.setTransform(80.7,29.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ao9AAIR7AA");
	this.shape_1.setTransform(57.375,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.047)").s().p("AsmEAIAAgoIAAnXIZNAAIAAH/gAFVDYIx7AAg");
	this.shape_2.setTransform(80.7,29.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{y:25}},{t:this.text,p:{color:"#FFFFFF",lineHeight:44.25}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance,p:{y:27.4}},{t:this.text,p:{color:"#000000",lineHeight:45.25}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.4,162.4,57.199999999999996);


(lib.volteso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014231949914();
	this.instance.setTransform(2,0,0.494,0.4613);

	this.black1 = new lib.voltesoBlcak();
	this.black1.name = "black1";
	this.black1.setTransform(95.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black1.cache(-2,-2,193,114);

	this.text = new cjs.Text("ולטוסו", "normal 400 33px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 106;
	this.text.parent = this;
	this.text.setTransform(97.95,91.95);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:2}}]}).to({state:[{t:this.black1}]},1).to({state:[{t:this.instance,p:{x:1}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,193,137.2);


(lib.vanik = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib._42591a375x321();

	this.black5 = new lib.black5();
	this.black5.name = "black5";
	this.black5.setTransform(187.5,160.5,1,1,0,0,0,187.5,160.5);
	this.black5.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black5.cache(-2,-2,379,325);

	this.text = new cjs.Text("פאי וניל", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 212;
	this.text.parent = this;
	this.text.setTransform(196.05,287.15);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black5}]},1).to({state:[{t:this.instance},{t:this.text,p:{y:287.15,color:"#000000"}}]},1).to({state:[{t:this.instance},{t:this.text,p:{y:247.75,color:"#FFFFFF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379,374.4);


(lib.stormio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._13122014000341958();

	this.black12 = new lib.balck12();
	this.black12.name = "black12";
	this.black12.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black12.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black12.cache(-2,-2,387,243);

	this.text = new cjs.Text("סטורמיו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 223;
	this.text.parent = this;
	this.text.setTransform(197.6,193.25);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black12}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,273.9);


(lib.sollu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._14032016093938695_1();

	this.black16 = new lib.black16();
	this.black16.name = "black16";
	this.black16.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black16.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, -100, 0))];
	this.black16.cache(-2,-2,387,243);

	this.text = new cjs.Text("סולליו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black16}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.scoro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._26092017155320912_1();

	this.black20 = new lib.black20();
	this.black20.name = "black20";
	this.black20.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black20.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(96, 0, -100, 0))];
	this.black20.cache(-2,-2,387,243);

	this.text = new cjs.Text("דאבל אספרסו סקורו", "normal 400 49px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 66;
	this.text.lineWidth = 382;
	this.text.parent = this;
	this.text.setTransform(193.2,200.75);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black20}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,362.1);


(lib.nets = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._42591a375x321copy();

	this.black6 = new lib.hzlinoblack();
	this.black6.name = "black6";
	this.black6.setTransform(187.5,160.5,1,1,0,0,0,187.5,160.5);
	this.black6.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(49, 0, -100, 0))];
	this.black6.cache(-2,-2,379,325);

	this.text = new cjs.Text("מאפין אגוזי לוז ", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 379;
	this.text.parent = this;
	this.text.setTransform(195.15,248.2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black6}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386.6,343.5);


(lib.natol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014232013776();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.black2 = new lib.decafe80black();
	this.black2.name = "black2";
	this.black2.setTransform(94.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black2.cache(-2,-2,193,114);

	this.text = new cjs.Text("אינטנסו נטול ", "normal 400 33px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 180;
	this.text.parent = this;
	this.text.setTransform(91.75,88.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black2}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,133.9);


(lib.mexico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._02022018110713796_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black24 = new lib.black24();
	this.black24.name = "black24";
	this.black24.setTransform(65.8,38.3,1,1,0,0,0,65.8,38.3);
	this.black24.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(49, 0, -100, 0))];
	this.black24.cache(-2,-2,136,81);

	this.text = new cjs.Text("ארץ מקור מקסיקו", "normal 400 15px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 121;
	this.text.parent = this;
	this.text.setTransform(65.4,65.95);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black24}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,87.6);


(lib.melozio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._29012015123004986();

	this.black15 = new lib.black15();
	this.black15.name = "black15";
	this.black15.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black15.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black15.cache(-2,-2,387,243);

	this.text = new cjs.Text("מלוזיו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 194;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black15}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.leggero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoLeggero();

	this.black8 = new lib.black8();
	this.black8.name = "black8";
	this.black8.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black8.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, 0, -100, 0))];
	this.black8.cache(-2,-2,387,243);

	this.text = new cjs.Text("ביאנקו לגרו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black8}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.jorjono = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._14032016093727355_1();

	this.black17 = new lib.black17();
	this.black17.name = "black17";
	this.black17.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black17.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black17.cache(-2,-2,387,243);

	this.text = new cjs.Text("ג'יורינו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(191.5,206.35);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black17}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,292.6);


(lib.intenso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._30072015160714667();

	this.balck10 = new lib.black10();
	this.balck10.name = "balck10";
	this.balck10.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.balck10.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(84, 0, -100, 0))];
	this.balck10.cache(-2,-2,387,243);

	this.text = new cjs.Text("אינטנסו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 248;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.balck10}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.forte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoForte_Front_shadow();

	this.black7 = new lib.black7();
	this.black7.name = "black7";
	this.black7.compositeOperation = "lighten";
	this.black7.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(41, 0, -100, 0))];
	this.black7.cache(-2,-2,387,243);

	this.text = new cjs.Text("ביאנקו פורטה", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 382;
	this.text.parent = this;
	this.text.setTransform(184.6,205.95);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black7}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,0,395.5,286.6);


(lib.fortado = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.פורטדו();

	this.black19 = new lib.black19();
	this.black19.name = "black19";
	this.black19.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black19.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(47, 0, -100, 0))];
	this.black19.cache(-2,-2,387,243);

	this.text = new cjs.Text("פורטאדו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 224;
	this.text.parent = this;
	this.text.setTransform(196.45,205.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black19}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,286.3);


(lib.etyopiya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._43169bpic375x3212();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black28 = new lib.black26();
	this.black28.name = "black28";
	this.black28.setTransform(64.5,51.5,1,1,0,0,0,64.5,51.5);
	this.black28.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(48, 0, -100, 0))];
	this.black28.cache(-2,-2,133,107);

	this.text = new cjs.Text("ארץ מקור אתיופיה", "normal 400 15px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(65.1,86.95);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black28}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,0,139.7,110.1);


(lib.elvizo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._1212201423121568();

	this.black14 = new lib.black14();
	this.black14.name = "black14";
	this.black14.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black14.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black14.cache(-2,-2,387,243);

	this.text = new cjs.Text("אלווציו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.parent = this;
	this.text.setTransform(191.5,198.35);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black14}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,281.7);


(lib.diavolito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib._12122014235042227();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.black4 = new lib.black4();
	this.black4.name = "black4";
	this.black4.setTransform(94.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(100, 0, -100, 0))];
	this.black4.cache(-2,-2,193,114);

	this.text = new cjs.Text("דיאווליטו", "normal 400 33px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 127;
	this.text.parent = this;
	this.text.setTransform(89.75,88.6);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhmWg/WMDMtAAAMAAAB+tMjMtAAAg");
	this.shape.setTransform(655.1,382.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("EhmWA/XMAAAh+tMDMtAAAMAAAB+tg");
	this.shape_1.setTransform(655.1,382.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black4}]},1).to({state:[{t:this.instance},{t:this.text,p:{x:89.75,y:88.6,color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text,p:{x:96.5,y:94.2,color:"#000000"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-24.1,1312.2,812.9);


(lib.decaff230 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._13122014000613848();

	this.black13 = new lib.black13();
	this.black13.name = "black13";
	this.black13.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black13.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black13.cache(-2,-2,387,243);

	this.text = new cjs.Text("נטול קפאין", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(195.05,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black13}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.decaff150 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._08072016100811130();

	this.black18 = new lib.black18();
	this.black18.name = "black18";
	this.black18.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black18.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black18.cache(-2,-2,387,243);

	this.text = new cjs.Text("נטול קפאין", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 355;
	this.text.parent = this;
	this.text.setTransform(193.9,205.05);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black18}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,285.7);


(lib.costa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._43169bpic375x3211();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black25 = new lib.black25();
	this.black25.name = "black25";
	this.black25.setTransform(64.5,51.5,1,1,0,0,0,64.5,51.5);
	this.black25.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(51, 0, -100, 0))];
	this.black25.cache(-2,-2,133,107);

	this.text = new cjs.Text("ארץ מקור \nקוסטה ריקה", "normal 400 15px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(67.05,84.75);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black25}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,0,142.4,128.1);


(lib.colombia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._02022018110711590_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black23 = new lib.black23();
	this.black23.name = "black23";
	this.black23.setTransform(65.8,38.3,1,1,0,0,0,65.8,38.3);
	this.black23.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(49, 0, -100, 0))];
	this.black23.cache(-2,-2,136,81);

	this.text = new cjs.Text("ארץ מקור קולומביה", "normal 400 15px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(65.8,64.75);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black23}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,0,144.20000000000002,87.1);


(lib.chiaro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._26092017155319984_4();

	this.black21 = new lib.black21();
	this.black21.name = "black21";
	this.black21.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black21.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(80, 0, -100, 0))];
	this.black21.cache(-2,-2,387,243);

	this.text = new cjs.Text("דאבל אספרסו קיארו", "normal 400 49px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 66;
	this.text.lineWidth = 344;
	this.text.parent = this;
	this.text.setTransform(184.15,190.9);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black21}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,355.1);


(lib.carael = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._42591a375x321copy2();

	this.black9 = new lib.black9();
	this.black9.name = "black9";
	this.black9.setTransform(187.5,160.5,1,1,0,0,0,187.5,160.5);
	this.black9.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black9.cache(-2,-2,379,325);

	this.text = new cjs.Text("עוגיות כרמל", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 312;
	this.text.parent = this;
	this.text.setTransform(195.8,243.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black9}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379,330.5);


(lib.arondio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.ארונדיו();

	this.black22 = new lib.black22();
	this.black22.name = "black22";
	this.black22.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black22.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(31, 0, -100, 0))];
	this.black22.cache(-2,-2,387,243);

	this.text = new cjs.Text("ארונדיו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 222;
	this.text.parent = this;
	this.text.setTransform(194.25,196.6);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black22}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,277.3);


(lib.aodiso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._13122014033322459();

	this.black11 = new lib.black11();
	this.black11.name = "black11";
	this.black11.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black11.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black11.cache(-2,-2,387,243);

	this.text = new cjs.Text("אודסיו", "normal 400 60px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black11}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.alto_dolche = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._09032017104432690_1();
	this.instance.setTransform(0,0,0.5232,0.5126);

	this.altu2 = new lib.altu2();
	this.altu2.name = "altu2";
	this.altu2.setTransform(100.2,61.2,1,1,0,0,0,100.2,61.2);
	this.altu2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(36, 0, -100, 0))];
	this.altu2.cache(-2,-2,204,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.altu2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,126);


(lib.alto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._09032017104417590_1();

	this.instance_1 = new lib.alto1();
	this.instance_1.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.instance_1.compositeOperation = "lighten";
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(27, 0, -100, 0))];
	this.instance_1.cache(-2,-2,387,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,243);


(lib.altiso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014231342893();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.black3 = new lib.black3();
	this.black3.name = "black3";
	this.black3.setTransform(94.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(88, 0, -100, 0))];
	this.black3.cache(-2,-2,193,114);

	this.text = new cjs.Text("אלטיסיו", "normal 400 33px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 122;
	this.text.parent = this;
	this.text.setTransform(94.6,88.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black3}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,133.9);


(lib.capetune = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._43839_c_capsulot_375x321_sg12();

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(189.85,275.2,2.3699,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-9}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,375,330);


(lib.bons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._43839_c_capsulot_375x321_sg1();

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(181.95,278.5,2.0948,1,0,0,0,63.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-7}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,375,328);


(lib.tabs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}
	this.frame_3 = function() {
		var self=this;
		self.stop();
	}
	this.frame_4 = function() {
		var self=this;
		self.stop();
	}
	this.frame_5 = function() {
		var self=this;
		self.stop();
	}
	this.frame_6 = function() {
		var self=this;
		self.stop();
	}
	this.frame_7 = function() {
		var self=this;
		self.stop();
	}
	this.frame_8 = function() {
		var self=this;
		self.stop();
	}
	this.frame_9 = function() {
		var self=this;
		self.stop();
	}
	this.frame_10 = function() {
		var self=this;
		self.stop();
	}
	this.frame_11 = function() {
		var self=this;
		self.stop();
	}
	this.frame_12 = function() {
		var self=this;
		self.stop();
	}
	this.frame_13 = function() {
		var self=this;
		self.stop();
	}
	this.frame_14 = function() {
		var self=this;
		self.stop();
	}
	this.frame_15 = function() {
		var self=this;
		self.stop();
	}
	this.frame_16 = function() {
		var self=this;
		self.stop();
	}
	this.frame_17 = function() {
		var self=this;
		self.stop();
	}
	this.frame_18 = function() {
		var self=this;
		self.stop();
	}
	this.frame_19 = function() {
		var self=this;
		self.stop();
	}
	this.frame_20 = function() {
		var self=this;
		self.stop();
	}
	this.frame_21 = function() {
		var self=this;
		self.stop();
	}
	this.frame_22 = function() {
		var self=this;
		self.stop();
	}
	this.frame_23 = function() {
		var self=this;
		self.stop();
	}
	this.frame_24 = function() {
		var self=this;
		self.stop();
	}
	this.frame_25 = function() {
		var self=this;
		self.stop();
	}
	this.frame_26 = function() {
		var self=this;
		self.stop();
	}
	this.frame_27 = function() {
		var self=this;
		self.stop();
	}
	this.frame_28 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1));

	// x
	this.btnX = new cjs.Text("x", "normal 700 96px 'Assistant'");
	this.btnX.name = "btnX";
	this.btnX.textAlign = "center";
	this.btnX.lineHeight = 127;
	this.btnX.lineWidth = 133;
	this.btnX.parent = this;
	this.btnX.setTransform(86.05,13.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.btnX);
	}

	this.timeline.addTween(cjs.Tween.get(this.btnX).wait(1).to({x:-62.4,y:2,font:"normal 700 65px 'Assistant'",color:"#FFFFFF",lineHeight:86.35,lineWidth:81},0).wait(13).to({x:-39.9,y:-12.95},0).wait(15));

	// tab
	this.instance = new lib.altiso();
	this.instance.setTransform(677.95,55.55,1,1,0,0,0,94.6,55.1);

	this.instance_1 = new lib.Bitmap50();
	this.instance_1.setTransform(166,349,0.5573,0.4222);

	this.text = new cjs.Text("אלטסיו", "normal 700 60px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(335.25,22.3);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("דרגת חוזק 9\n.מרקם קטיפתי ועשיר וגוף מלא\nמצויינת כאספרסו\n.או כבסיס למשקאות קפה עם חלב", "normal 700 39px 'Assistant'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 53;
	this.text_1.lineWidth = 822;
	this.text_1.parent = this;
	this.text_1.setTransform(358.85,112.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhGugmTMCNdAAAMAAABMnMiNdAAAg");
	this.shape.setTransform(347.675,245.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#565F6B").s().p("EhGuAmUMAAAhMnMCNdAAAMAAABMng");
	this.shape_1.setTransform(347.675,245.225);

	this.instance_2 = new lib.diavolito();
	this.instance_2.setTransform(656.85,55.1,1,1,0,0,0,94.6,55.1);

	this.instance_3 = new lib.volteso();
	this.instance_3.setTransform(677.6,56.15,1,1,0,0,0,96.6,55.1);

	this.instance_4 = new lib.natol40();
	this.instance_4.setTransform(677.45,55.55,1,1,0,0,0,94.6,55.1);

	this.instance_5 = new lib.Bitmap51();
	this.instance_5.setTransform(156,348);

	this.instance_6 = new lib.chiaro();
	this.instance_6.setTransform(688.85,69.7,0.4277,0.3344,0,0,0,191.6,119.6);

	this.instance_7 = new lib.scoro();
	this.instance_7.setTransform(663.75,63.5,0.5616,0.3976,0,0,0,191.5,119.6);

	this.instance_8 = new lib.leggero();
	this.instance_8.setTransform(658.25,56.2,0.6135,0.4694,0,0,0,191.7,120);

	this.instance_9 = new lib.arondio();
	this.instance_9.setTransform(664.05,60.85,0.5655,0.4017,0,0,0,191.6,119.5);

	this.instance_10 = new lib.Bitmap52();
	this.instance_10.setTransform(133,378,1.7442,1.1778);

	this.instance_11 = new lib.fortado();
	this.instance_11.setTransform(677.2,52.3,0.4948,0.4377,0,0,0,191.6,119.5);

	this.instance_12 = new lib.costa();
	this.instance_12.setTransform(660.7,46.05,1.7194,1.4665,0,0,0,64.5,51.5);

	this.instance_13 = new lib.etyopiya();
	this.instance_13.setTransform(657.7,41.7,1.6698,1.5598,0,0,0,64.5,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBGvgpbMAAABS3EhGuApcMAAAhS3");
	this.shape_2.setTransform(347.675,251.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#565F6B").s().p("EhGuAtgIAAlVMAAAhS2IAAi0MCNdAAAIAAC0MAAABS2IAAFVg");
	this.shape_3.setTransform(347.675,259.275);

	this.instance_14 = new lib.decaff150();
	this.instance_14.setTransform(654.35,54.15,0.562,0.4864,0,0,0,191.7,119.5);

	this.instance_15 = new lib.Bitmap68();
	this.instance_15.setTransform(148,337);

	this.instance_16 = new lib.decaff230();
	this.instance_16.setTransform(648.65,60.8,0.6178,0.5891,0,0,0,191.8,119.5);

	this.instance_17 = new lib.Bitmap67();
	this.instance_17.setTransform(151,374);

	this.instance_18 = new lib.mexico();
	this.instance_18.setTransform(654.75,64.1,1.7846,1.4598,0,0,0,66,38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhGugrYMCNdAAAMAAABWxMiNdAAAg");
	this.shape_4.setTransform(347.675,245.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#565F6B").s().p("EhGuArZMAAAhWxMCNdAAAMAAABWxg");
	this.shape_5.setTransform(347.675,245.25);

	this.instance_19 = new lib.Bitmap66();
	this.instance_19.setTransform(172,388,0.8967,0.6522);

	this.instance_20 = new lib.colombia();
	this.instance_20.setTransform(666.25,73.35,2.0349,1.9151,0,0,0,65.8,38.3);

	this.instance_21 = new lib.Bitmap65();
	this.instance_21.setTransform(155,380);

	this.instance_22 = new lib.vanik();
	this.instance_22.setTransform(647.05,40.05,0.7331,0.5923,0,0,0,187.7,160.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBGvgmTMAAABMnEhGuAmUMAAAhMn");
	this.shape_6.setTransform(347.675,245.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#565F6B").s().p("EhGuAraIAAlGMAAAhMoIAAlFMCNdAAAIAAFFMAAABMoIAAFGg");
	this.shape_7.setTransform(347.675,245.275);

	this.instance_23 = new lib.Bitmap64();
	this.instance_23.setTransform(158,380);

	this.instance_24 = new lib.carael();
	this.instance_24.setTransform(636.95,50.05,0.7197,0.6729,0,0,0,187.5,160.5);

	this.instance_25 = new lib.Bitmap63();
	this.instance_25.setTransform(158,333);

	this.instance_26 = new lib.nets();
	this.instance_26.setTransform(679,57.55,0.4827,0.4084,0,0,0,187.6,160.4);

	this.instance_27 = new lib.Bitmap62();
	this.instance_27.setTransform(135,333);

	this.instance_28 = new lib.forte();
	this.instance_28.setTransform(673,66.75,0.4561,0.4476,0,0,0,191.5,119.5);

	this.instance_29 = new lib.Bitmap61();
	this.instance_29.setTransform(135,333);

	this.instance_30 = new lib.intenso();
	this.instance_30.setTransform(677.05,56.15,0.4517,0.4526,0,0,0,191.6,119.5);

	this.instance_31 = new lib.stormio();
	this.instance_31.setTransform(675.45,64,0.5039,0.4477,0,0,0,191.6,119.5);

	this.instance_32 = new lib.Bitmap60();
	this.instance_32.setTransform(143,333);

	this.instance_33 = new lib.aodiso();
	this.instance_33.setTransform(676.05,63.1,0.5007,0.45,0,0,0,191.6,119.7);

	this.instance_34 = new lib.melozio();
	this.instance_34.setTransform(676.55,64,0.4986,0.4897,0,0,0,191.7,119.5);

	this.instance_35 = new lib.elvizo();
	this.instance_35.setTransform(658.5,56.75,0.5091,0.4477,0,0,0,191.5,119.5);

	this.instance_36 = new lib.jorjono();
	this.instance_36.setTransform(684,69.1,0.459,0.4146,0,0,0,191.5,119.5);

	this.instance_37 = new lib.sollu();
	this.instance_37.setTransform(677.4,62.8,0.4935,0.431,0,0,0,191.5,119.5);

	this.instance_38 = new lib.Bitmap70();
	this.instance_38.setTransform(147,323);

	this.instance_39 = new lib.alto1();
	this.instance_39.setTransform(668.1,60.05,0.5038,0.5025,0,0,0,191.6,119.5);

	this.instance_40 = new lib.Bitmap69();
	this.instance_40.setTransform(146,333);

	this.instance_41 = new lib.altu2();
	this.instance_41.setTransform(685,67,1,1,0,0,0,100.2,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 9\n.מרקם קטיפתי ועשיר וגוף מלא\nמצויינת כאספרסו\n.או כבסיס למשקאות קפה עם חלב",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אלטסיו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 11\nתערובת הקפה העוצמתית ביותר שלנו\nמושלמת להכנת אספרסו קצא וחזק\n.או ליצירת משקאות חלב עשירים במיוחד ",x:358.85,y:112.25,lineWidth:822}},{t:this.instance_2},{t:this.text,p:{text:"דיאווליטו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 9\n.מרקם קטיפתי ועשיר וגוף מלא\nמצויינת כאספרסו\n.או כבסיס למשקאות קפה עם חלב",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אלטסיו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 4\nתערובת קפה אספרסו קלילה ומתקתקה\n.ארומות של ביקוויט\n.מצויינת לקפה עדין בשילוב עם חלב",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"וולטסו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 7\nתערובת הקפה נטול קפאין חזק מתאפיינת\nבארומות מודגשות של קקאו, לצד ארומות עדינות\n.פירותיות וארומות דגנים ",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"נטול קפאין חזק",x:336.95,lineWidth:405,y:22.3}},{t:this.instance_1},{t:this.instance_4}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 6\nמצויינת להכנת מנה\n.כפולה של אספרסו מאוזן ",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אספרסו כפול קיארו",x:323.05,lineWidth:477,y:22.3}},{t:this.instance_6},{t:this.instance_5,p:{x:156,y:348}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 8\nתערובת הקפה אספרסו כפול סקורו מתאפיינת\nבארומות של קקאו ווניל, גוף מלא ועשיר במיוחד\n.מרירות גבוהה וארומות המזכירות דגנים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אספרסו כפול סקורו",x:337.6,lineWidth:454,y:22.3}},{t:this.instance_7},{t:this.instance_5,p:{x:164,y:333}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"תערובת הקפה ביאנקו לגרו מתאפיינת בארומות\nעשירות של ביסקוויט ומתיקות עדינה. שילוב הקפה\nעם חלב מביא לידי ביטוי ארומות של קרמל ונוצר\n.מרקם קטיפתי במיוחד",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"ביאנקו לגרו",x:312.95,lineWidth:310,y:22.3}},{t:this.instance_1},{t:this.instance_8}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 6\n:תערובת הקפה ארונדיו הינה מאוזנת במיוחד\n,מרירות וחמיצות הקפה משתלבים יחדיו נפלא\n.לצד ארומות עדינות של דגנים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"ארונדיו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_1},{t:this.instance_9}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 8\nפולי הרובוסטה מהודו מעניקים לתערובת את\nהגוף המלא במיוחד שלה. בנוסף, תערובת הקפה\nפורטדו מתאפיינת במרירות גבוהה וארומות\n.מודגשות של קלייה ושל דגנים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אלטסיו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_11},{t:this.instance_10,p:{y:378,x:133}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 7\nתהליך העיבוד במי המעיינות יוצר איזון מושלם\nשל טעמים וארומות בספל הקפה. תערובת\nקפה זו מתאפיינת בגוף עשיר במיוחד וארומות\n.מתקתקות המזכירות דגנים ",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"קוסטה ריקה",x:345.7,lineWidth:323,y:22.15}},{t:this.instance_12},{t:this.instance_10,p:{y:374,x:133}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text_1,p:{text:"דרגת חוזק 4\nעדינה במיוחד ועם טעם אופייני לקפה אתיופי \nחמצמץ ומתקתק\n,מתאימה למי שאוהב קפה ערביקה בלבד.\nארומות פרחוניות רעננות וטעם פירותי\nהאופיינים להתליך עיבוד בשיטה הטבעית.",x:352.8,y:105.85,lineWidth:903}},{t:this.text,p:{text:"אתיופיה",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_13},{t:this.instance_10,p:{y:423,x:117}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 4\nתערובת הקפה נטול אונטנסו מתאפיינת בארומות\nדגניות, גוף קליל וחמיצות עדינה ומרקם קטיפתי\n.במיוחד\n",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"נטול קפאין אונטנסו",x:324,lineWidth:465,y:22.15}},{t:this.instance_14},{t:this.instance_10,p:{y:355,x:116}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 6\nתערובת הקפה נטול קפאין מתאפיינית בארומות\nמודגשות של דגנים, מרירות מאוזנת וגוף עשיר\n.המקנה תחושה עגולה בחלל הפה",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"נטול קפאין",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_16},{t:this.instance_15}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_1,p:{text:"דרגת חוזק 7\nארומות מורגשות של קלייה ומרירות מאוזנת, בזכות\nפולי הקפה מסוג רובוסטה שעובדו בשטיפה\nכפולה. מתאימה למי שמחפש כוס קפה גדולה\nועוצמתית",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"מקסיקו",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_18},{t:this.instance_17}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 5\nמאוזנת במיוחד ועם טעם פירותי עשיר ומעט\nמתקתק, הנוצר בזכות שימוש בפולי\n.ערביקה בלבד",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"קולומביה",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_20},{t:this.instance_19}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.text_1,p:{text:"שילוב ארומות וטעמי וניל, לצד טעמים עדינים של\n.שקדים וביסקוויט חמאה. טעם וניל מודגש\n.קפה קרמי במיוחד עם תחושה חלקה בחלל הפה",x:358.85,y:134.75,lineWidth:822}},{t:this.text,p:{text:"פאי וניל",x:335.25,lineWidth:265,y:22.3}},{t:this.instance_22},{t:this.instance_21}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.text_1,p:{text:".שילוב נפלא של טעמי קרמל,חמאה וביסקוויט\nהטעם הקרמלי הראשוני מגיע מפולי הקפה עצמם\nובתוספת של תמציות טעם טבעיות, מתקבל גם\n.טעם של עוגיות",x:358.85,y:134.75,lineWidth:822}},{t:this.text,p:{text:"עוגיות קרמל",x:304.95,lineWidth:326,y:22.3}},{t:this.instance_24},{t:this.instance_23}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"שילוב נפלא בין טעם אגוזי לוז לטעם עדין של\nשקדים וביסקוויט. טעם אגוזי הלוז משתלב נפלא\nעם פולי קפה הערביקה, ונוצר טעם עדין של\n.מאפים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"מאפין אגוזי לוז",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"תערובת הקפה ביאנקו פורטה מתאפיינת במרירות\nגבוהה המתאזנת בעת הוספת החלב. ארומות\nמודגשות של קלייה, מרקם קטיפתי וחלק וארומות\n.המזכירות דגנים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"ביאנקו פורטה",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_28},{t:this.instance_27}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 9\nתערובת הקפה אינטנסו מתאפיינת במרירות\nגבוהה, ארומות מודגשות במיוחד של קלייה, גוף\n.מלא ועשיר ורמז קל לארומות של דגנים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אינטנסו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_30},{t:this.instance_29}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 8\nתערובת הקפה סטורמיו מתאפיינית בארומות\nעשירות של קלייה ושל דגנים, גוף מלא ומרירות\n.גבוהה",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"סטורמיו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_32,p:{x:143,scaleX:1,scaleY:1,y:333}},{t:this.instance_31}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 7\nתערובת הקפה אודסיו מתאפיינת במרירות\nמאוזנת לצד פירותיות עדינה ומפתיעה. לתערובת\n.ארומות מודגשות של קלייה וגוף מלא",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אודסיו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_33},{t:this.instance_32,p:{x:164,scaleX:1,scaleY:1,y:333}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 6\nמושלמת להכנת ספל קפה גדול שאינו עוצמתי\n.מדי ומשתלב נפלא עם חלב\n,תערובת הקפה מלוזיו מתאפיינת בגוף מאוזן\n.מרירות עדינה וארומות נעימות של דגנים",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"מלוזיו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_32,p:{x:183,scaleX:0.9108,scaleY:0.7935,y:375}},{t:this.instance_34}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 4\nתערובת הקפה אלווציו מתאפיינית בחמיצות\nעדינה ובארומות פירותיות. גוף קליל מאוד\nומרירות נמוכה במיוחד.",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אלווציו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_32,p:{x:164,scaleX:1,scaleY:1,y:333}},{t:this.instance_35}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 4\nתערובת הקפה ג'יורניו מתאפיינת בארומות\nמודגשות המזכירות פרחים, גוף קליל במיוחד\n.וחמיצות עדינה",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"ג'יורניו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_27},{t:this.instance_36}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 2\nתערובת הקפה סולליו מתאפיינת בחמיצות גבוהה\n.ופירותיות המתאזנת עם פרחוניות עשירה\n.מצויינת למי שואהב קפה עדין במיוחד עם חלב",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"סולליו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_27},{t:this.instance_37}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 7\nרובוסטה שטופה מגוואטמלה מעניקה לתערובת\nארומות עציות וקרמליות המשתלבות נפלא עם\n.הארומות העדינות יותר של הערביקה מקוסטה ריקה",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אלטו איטנסו",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_39},{t:this.instance_38}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"דרגת חוזק 4\nתערובת הקפה אלטו דולצ'ה מתאפיינית בארומות\nשל דגנים, גוף קליל ומרירות נמוכה במיוחד, לצד\n.ארומות עדינות המזכירות קרמל",x:358.85,y:112.25,lineWidth:822}},{t:this.text,p:{text:"אלטו דולצ'ה",x:349.5,lineWidth:419,y:22.3}},{t:this.instance_41},{t:this.instance_40}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-57.9,912.4,608.4);


// stage content:
(lib.VerTouch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		stage.enableMouseOver(24); //אישור מעברי עכבר
		
		self.tabs.visible = false;
		
		//////////////////////////////////////////
		////-------/////פונקציות גלובליות/-------//
		
		for (var i = 1; i <= 21; i++) {
		//משנה את סימני העכבר
			self["or" + i].addEventListener("mouseover", mouselement)
			self["or" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 1; i++) {
		
			self["con" + i].addEventListener("mouseover", mouselement)
			self["con" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 8; i++) {
		
			self["MUG" + i].addEventListener("mouseover", mouselement)
			self["MUG" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 4; i++) {
		
			self["MO" + i].addEventListener("mouseover", mouselement)
			self["MO" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 3; i++) {
		
			self["longo" + i].addEventListener("mouseover", mouselement)
			self["longo" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 2; i++) {
		
			self["duobel" + i].addEventListener("mouseover", mouselement)
			self["duobel" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 5; i++) {
		
			self["BR" + i].addEventListener("mouseover", mouselement)
			self["BR" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 4; i++) {
		
			self["ES" + i].addEventListener("mouseover", mouselement)
			self["ES" + i].addEventListener("mouseout", mouselementOut)
		
		}
		
		
		function mouselement() {
			stage.cursor = "pointer";
		}
		function mouselementOut() {
			stage.cursor = "auto";
		}
		
		
		
		
		
		function changeToblack() {
			for (var i = 1; i <= 8; i++) {
				self["MUG" + i].gotoAndStop(1);
			}
		for (var i = 1; i <= 4; i++) {
				self["MO" + i].gotoAndStop(1);
			}
				
		for (var j = 1; j <= 4; j++) {
				self["ES" + j].gotoAndStop(1);
			}
		for (var j = 1; j <= 5; j++) {
				self["BR" + j].gotoAndStop(1);
			}
			for (var j = 1; j <= 3; j++) {
				self["longo" + j].gotoAndStop(1);
			}
		
			self.duobel1.gotoAndStop(1);
			self.duobel2.gotoAndStop(1);
		
		
			self.ALTO1.gotoAndStop(1);
			self.ALTO2.gotoAndStop(1);
		
		}
		function chabgTocolor() {
		for (var j = 1; j <= 8; j++) {
				self["MUG" + j].gotoAndStop(0);
			}
			
		for (var j = 1; j <= 4; j++) {
				self["MO" + j].gotoAndStop(0);
			}
		for (var j = 1; j <= 4; j++) {
				self["ES" + j].gotoAndStop(0);
			}
		for (var j = 1; j <= 5; j++) {
				self["BR" + j].gotoAndStop(0);
			}
			for (var j = 1; j <= 3; j++) {
				self["longo" + j].gotoAndStop(0);
			}
		
		
			self.duobel1.gotoAndStop(0);
			self.duobel2.gotoAndStop(0);
		
		
			self.ALTO1.gotoAndStop(0);
			self.ALTO2.gotoAndStop(0);
		
		}
		
		function Nounderline() {
			for (var i = 1; i <= 21; i++) {
				self["or" + i].gotoAndStop(0);
			}
			for (var i = 1; i <= 9; i++) {
				self["con" + i].gotoAndStop(0);
			}
		
			napoli = false;
			kazar = false;
			ris = false;
			arp = false;
			rome = false;
			ven = false;
			liv = false;
			india = false;
			indonzia = false;
			ORcolo = false;
			ORnik = false;
			ORetyo = false;
			//vivlto = false;
			//envivo = false;
			//forti = false;
			voloto = false;
			cosi = false;
			cap = false;
			linizyu = false;
			bons= false;
			vina= false;
			tokyo= false;
			stokholm= false;
			capetune= false;
			shenghi = false;
		
			mexico = false;
			kosta = false;
			colombia = false;
			brazil = false;
			knia = false;
			Cindia = false;
			etyupia = false;
			Gua = false;
			nik = false;
		
		
		}
		
		self.tabs.btnX.addEventListener("click", clickX);
		
		function clickX() {
			self.tabs.visible = false; //סוגר את הכרטסיה 
		
			//capsulClick = false; //מרויד את הדגל
		
		}
		
		////////////////////////////////////
		///------אירועי עכבר מקסיקו-----////
		////////////////////////////////////
		
		
		self.con1.addEventListener("click", clickMexico)
		var mexico = false;
		
		function clickMexico() {
			if (mexico == false) {
				console.log("נכון");
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MO2.gotoAndStop(2);
		
		
				Nounderline()
				self.con1.gotoAndStop(1);
				mexico = true;
			} else if (mexico == true) {
				console.log("לא נכון");
				chabgTocolor();
				self.con1.gotoAndStop(0);
				mexico = false;
			}
		
		}
		
		/////////////////////////////////////////
		///------אירועי עכבר קוסטה ריקה-----////
		////////////////////////////////////////
		
		
		self.con2.addEventListener("click", clickKosta)
		var kosta = false;
		
		function clickKosta() {
			if (kosta == false) {
				console.log("לא נכון");
				changeToblack();
				self.duobel1.gotoAndStop(2);
				self.MO3.gotoAndStop(2);
				Nounderline()
				self.con2.gotoAndStop(1);
		
				kosta = true;
			} else if (kosta == true) {
				console.log("נכון");
				chabgTocolor();
				self.con2.gotoAndStop(0);
				kosta = false;
		
			}
		
		}
		
		
		/////////////////////////////////////////
		///------איורעי עכבר קולומביה-----////
		////////////////////////////////////////
		
		
		self.con3.addEventListener("click", clicColo)
		var colombia = false;
		
		function clicColo() {
			if (colombia == false) {
				console.log("לא נכון");
				changeToblack();
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
				Nounderline()
				self.con3.gotoAndStop(1);
				colombia = true;
			} else if (colombia == true) {
				console.log("נכון");
				chabgTocolor();
				self.con3.gotoAndStop(0);
				colombia = false;
			}
		
		}
		
		/////////////////////////////////////////
		///------איורעי עכבר ברזיל-----////
		////////////////////////////////////////
		
		
		self.con4.addEventListener("click", clickBzil)
		var brazil = false;
		
		function clickBzil() {
			if (brazil == false) {
				console.log("לא נכון");
				changeToblack();
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
				Nounderline()
				self.con4.gotoAndStop(1);
				brazil = true;
			} else if (brazil == true) {
				console.log("נכון");
				chabgTocolor();
				self.con4.gotoAndStop(0);
				brazil = false;
			}
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר קניה-----////
		////////////////////////////////////////
		
		
		self.con5.addEventListener("click", clickKnia)
		var knia = false;
		
		function clickKnia() {
			if (knia == false) {
				console.log("לא נכון");
				changeToblack();
		
		
				self.MUG2.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				Nounderline()
		
				self.con5.gotoAndStop(1);
				knia = true;
			} else if (knia == true) {
				console.log("נכון");
				chabgTocolor();
				self.con5.gotoAndStop(0);
				knia = false;
			}
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר הודו-----////
		////////////////////////////////////////
		
		
		self.con6.addEventListener("click", clickCIndia)
		var Cindia = false;
		
		function clickCIndia() {
			if (Cindia == false) {
				console.log("אחרי לחיצה");
				changeToblack();
		
				self.longo2.gotoAndStop(2);
		
				Nounderline()
				self.con6.gotoAndStop(1);
				Cindia = true;
			} 
			else if (Cindia == true) {
				console.log("לא עובד");
				chabgTocolor();
				self.con6.gotoAndStop(0);
				Cindia = false;
			}
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר אתיופיה-----////
		////////////////////////////////////////
		
		
		self.con7.addEventListener("click", clickEtyupia)
		var etyupia = false;
		
		function clickEtyupia() {
			if (etyupia == false) {
				console.log("לא נכון");
				changeToblack();
		
				self.MUG2.gotoAndStop(2);
				self.MO2.gotoAndStop(2);
		
				Nounderline()
				self.con7.gotoAndStop(1);
				etyupia = true;
			} else if (etyupia == true) {
				console.log("נכון");
				chabgTocolor();
				self.con7.gotoAndStop(0);
				etyupia = false;
		
			}
		
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר גווטמלה-----////
		////////////////////////////////////////
		
		
		self.con8.addEventListener("click", clickGua)
		var Gua = false;
		
		function clickGua() {
			if (Gua == false) {
				console.log("לא נכון");
				changeToblack();
		
				self.MUG1.gotoAndStop(2);
				self.MUG3.gotoAndStop(2)
				self.ES2.gotoAndStop(2)
				self.duobel1.gotoAndStop(2);
				Nounderline()
				self.con8.gotoAndStop(1);
				Gua = true;
			} else if (Gua == true) {
				console.log("נכון");
				chabgTocolor();
				self.con8.gotoAndStop(0);
				Gua = false;
		
			}
		
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר ניקארגווה-----////
		////////////////////////////////////////
		
		
		self.con9.addEventListener("click", clickNik)
		var nik = false;
		
		function clickNik() {
			if (nik == false) {
				console.log("לא נכון");
				changeToblack();
		
		
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				Nounderline()
				self.con9.gotoAndStop(1);
				nik = true;
			} else if (nik == true) {
				console.log("נכון");
				chabgTocolor();
				self.con9.gotoAndStop(0);
				nik = false;
		
			}
		
		}
		
		
		////////////////////////////////////////
		////////////////////////////////////////
		//----אירועי עכבר קפסולות אוריגו------//
		////////////////////////////////////////
		///////////////////////////////////////
		//////////////////////////////////////////
		//-------איועי עכבר נפולי---------//
		
		self.or1.addEventListener("click", clickNapoli)
		
		var napoli = false;
		
		function clickNapoli() {
		
			if (napoli == false) {
		
				changeToblack();
				
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.BR4.gotoAndStop(2);
				self.ES2.gotoAndStop(2);
		
		
				Nounderline()
				napoli = true;
				self.or1.gotoAndStop(1);
		
			} else if (napoli == true) {
				self.or1.gotoAndStop(0);
				chabgTocolor()
				napoli = false;
			}
		
		}
		//-------איועי עכבר קזאר---------//
		
		self.or2.addEventListener("click", clickKzar)
		
		var kazar = false;
		
		function clickKzar() {
		
			if (kazar == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.ES2.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.BR4.gotoAndStop(2);
				self.ES2.gotoAndStop(2);
		
				Nounderline()
				kazar = true;
				self.or2.gotoAndStop(1);
		
			} else if (kazar == true) {
				self.or2.gotoAndStop(0);
				chabgTocolor()
				kazar = false;
			}
		
		}
		//-------איועי עכבר ריסטרטו---------//
		
		self.or3.addEventListener("click", clickRis)
		
		var ris = false;
		
		function clickRis() {
		
			if (ris == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				self.duobel1.gotoAndStop(2);
		
				self.MO3.gotoAndStop(2);
				self.ES3.gotoAndStop(2);
		
				Nounderline();
				ris = true;
				self.or3.gotoAndStop(1);
			} else if (ris == true) {
				self.or3.gotoAndStop(0);
		
				chabgTocolor()
				ris = false;
			}
		
		}
		//-------איועי עכבר ארפגיו---------//
		
		self.or4.addEventListener("click", clickArp)
		
		var arp = false;
		
		function clickArp() {
		
			if (arp == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				self.duobel1.gotoAndStop(2);
		
				self.ES3.gotoAndStop(2);
				self.MO3.gotoAndStop(2);
				self.BR3.gotoAndStop(2);
				
				Nounderline()
				arp = true;
				self.or4.gotoAndStop(1);
		
			} else if (arp == true) {
				self.or4.gotoAndStop(0);
				chabgTocolor()
				arp = false;
			}
		
		}
		//-------איועי עכבר רומא---------//
		
		self.or5.addEventListener("click", clickRome)
		
		var rome = false;
		
		function clickRome() {
		
			if (rome == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
				self.duobel2.gotoAndStop(2);
		
				self.MO2.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
				Nounderline()
				rome = true;
				self.or5.gotoAndStop(1);
			} else if (rome == true) {
				self.or5.gotoAndStop(0);
				chabgTocolor()
				rome = false;
			}
		
		}
		//-------איועי עכבר ונציה---------//
		
		self.or6.addEventListener("click", clickVen)
		
		var ven = false;
		
		function clickVen() {
		
			if (ven == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
				self.duobel2.gotoAndStop(2);
		
		
		
				Nounderline()
				ven = true;
				self.or6.gotoAndStop(1);
			} else if (ven == true) {
				console.log("לא עובד");
				self.or6.gotoAndStop(0);
				chabgTocolor()
				ven = false;
			}
		
		}
		
		//-------איועי עכבר ליונטו---------//
		self.or7.addEventListener("click", clickLiv)
		
		var liv = false;
		
		function clickLiv() {
		
			if (liv == false) {
		
				changeToblack();
		
				self.MUG6.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
		
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
		
		
				self.ES1.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MO4.gotoAndStop(2);
				self.BR3.gotoAndStop(2);		
				
				Nounderline()
				liv = true;
				self.or7.gotoAndStop(1);
		
			} else if (liv == true) {
				self.or7.gotoAndStop(0);
				chabgTocolor()
				liv = false;
			}
		
		}
		//-------איועי עכבר הודו---------//
		self.or8.addEventListener("click", clickIndia)
		
		var india = false;
		
		function clickIndia() {
		
			if (india == false) {
		
				changeToblack();
		
				self.MUG3.gotoAndStop(2);
				self.MUG1.gotoAndStop(2);
		
				self.ES2.gotoAndStop(2);		
				
				self.duobel1.gotoAndStop(2);
		
				self.longo2.gotoAndStop(2);
				self.BR4.gotoAndStop(2);
		
				self.MO2.gotoAndStop(2);
		
				Nounderline()
				india = true;
				self.or8.gotoAndStop(1);
			} else if (india == true) {
				self.or8.gotoAndStop(0);
				chabgTocolor()
				india = false;
			}
		
		}
		//-------איועי עכבר אינדונזיה---------//
		self.or9.addEventListener("click", clickIndonezia)
		
		var indonzia = false;
		
		function clickIndonezia() {
		
			if (indonzia == false) {
				console.log("gucs");
				changeToblack();
		
					self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
				self.duobel2.gotoAndStop(2);
		
				self.MO2.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
		
				Nounderline()
				indonzia = true;
				self.or9.gotoAndStop(1);
		
			} else if (indonzia == true) {
				console.log("לא עובד");
				self.or9.gotoAndStop(0);
				chabgTocolor()
				indonzia = false;
			}
		
		}
		
		//-------איועי עכבר קולומביה---------//
		self.or10.addEventListener("click", clickORcolo)
		
		var ORcolo = false;
		
		function clickORcolo() {
		
			if (ORcolo == false) {
				console.log("כאן עובד ");
				changeToblack();
		
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
				self.BR3.gotoAndStop(2);
		
				Nounderline()
				ORcolo = true;
				self.or10.gotoAndStop(1);
			} else if (ORcolo == true) {
				self.or10.gotoAndStop(0);
				chabgTocolor()
				ORcolo = false;
		
			}
		
		}
		//-------איועי עכבר ניקארגווה---------//
		self.or11.addEventListener("click", clickORnik)
		
		var ORnik = false;
		
		function clickORnik() {
		
			if (ORnik == false) {
		
				changeToblack();
		
					self.MUG6.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
		
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
		
		
				self.ES1.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				
				self.BR3.gotoAndStop(2);
		
		
		
		
				Nounderline()
				ORnik = true;
				self.or11.gotoAndStop(1);
			} else if (ORnik == true) {
				self.or11.gotoAndStop(0);
				chabgTocolor()
				ORnik = false;
			}
		
		}
		//-------איועי עכבר אתיופיה---------//
		self.or12.addEventListener("click", clickORetyo)
		
		var ORetyo = false;
		
		function clickORetyo() {
		
			if (ORetyo == false) {
		
		
				changeToblack();
				self.longo1.gotoAndStop(2);
				self.MO4.gotoAndStop(2);
				
				self.ES1.gotoAndStop(2);
				self.ES4.gotoAndStop(2);
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.ALTO2.gotoAndStop(2);
				
		
				Nounderline()
				ORetyo = true;
				self.or12.gotoAndStop(1);
			} else if (ORetyo == true) {
				self.or12.gotoAndStop(0);
				chabgTocolor()
				ORetyo = false;
			}
		
		}
		//-------איועי עכבר ווילטו---------//
		self.or13.addEventListener("click", clickVivlto)
		self.or13.addEventListener("mouseover", overor13);
		function overor13() {
			mouselement()
		}
		var vivlto = false;
		
		function clickVivlto() {
		
			if (vivlto == false) {
		
				changeToblack();
				self.MUG6.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
		
				self.or13.gotoAndStop(1);
		
		self.MO4.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
				self.longo1.gotoAndStop(2);
					self.BR3.gotoAndStop(2);
				Nounderline()
				vivlto = true;
				self.or13.gotoAndStop(1);
		
			} else if (vivlto == true) {
				self.or13.gotoAndStop(0);
				chabgTocolor()
				vivlto = false;
			}
		
		}
		//-------איועי עכבר אנביבו---------//
		self.or14.addEventListener("click", clickEnvivo)
		
		var envivo = false;
		
		function clickEnvivo() {
		
			if (envivo == false) {
		
				changeToblack();
		
				self.longo2.gotoAndStop(2);
		self.MO2.gotoAndStop(2);
		self.ES3.gotoAndStop(2);
		self.MUG3.gotoAndStop(2);
				self.MUG1.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
					self.BR4.gotoAndStop(2);
				Nounderline()
				envivo = true;
				self.or14.gotoAndStop(1);
		
			} else if (envivo == true) {
				self.or14.gotoAndStop(0);
				chabgTocolor()
				envivo = false;
			}
		
		}
		//-------איועי עכבר פורטיסיו---------//
		self.or15.addEventListener("click", clickForti)
		
		var forti = false;
		
		function clickForti() {
		
			if (forti == false) {
		
				changeToblack();
		
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				self.duobel1.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				
					self.MO3.gotoAndStop(2);
			self.ALTO2.gotoAndStop(2);
				Nounderline()
				forti = true;
				self.or15.gotoAndStop(1);
		
			} else if (forti == true) {
				self.or15.gotoAndStop(0);
				chabgTocolor()
				forti = false;
			}
		
		}
		//-------איועי עכבר לינציו---------//
		self.or16.addEventListener("click", clickLinizyu)
		
		var linizyu = false;
		
		function clickLinizyu() {
		
			if (linizyu == false) {
		
				changeToblack();
		
		
				self.MUG7.gotoAndStop(2);
		
		
				self.longo1.gotoAndStop(2);
		
		
		
				Nounderline()
				linizyu = true;
				self.or16.gotoAndStop(1);
		
			} else if (linizyu == true) {
				self.or16.gotoAndStop(0);
				chabgTocolor()
				linizyu = false;
			}
		
		}
		//-------איועי עכבר קפריסו---------//
		self.or17.addEventListener("click", clickCap)
		
		var cap = false;
		
		function clickCap() {
		
			if (cap == false) {
		
				changeToblack();
		
		
				self.MUG6.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
		self.duobel2.gotoAndStop(2)
				self.longo3.gotoAndStop(2);
		
		
		
				Nounderline()
				cap = true;
				self.or17.gotoAndStop(1);
		
			} else if (cap == true) {
				self.or17.gotoAndStop(0);
				chabgTocolor()
				cap = false;
			}
		
		}
		
		
		
		
		//-------איועי עכבר voloto---------//
		self.or18.addEventListener("click", clicVoloto)
		
		var voloto = false;
		
		function clicVoloto() {
		
			if (voloto == false) {
		
				changeToblack();
		
				self.ES1.gotoAndStop(2);
					self.BR3.gotoAndStop(2);
				
				self.MUG6.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
		
				Nounderline()
				voloto = true;
				self.or18.gotoAndStop(1);
		
			} else if (voloto == true) {
				self.or18.gotoAndStop(0);
				chabgTocolor()
				voloto = false;
		
			}
		
		}
		//-------איועי עכבר cosi---------//
		self.or19.addEventListener("click", clicCosi)
		
		var cosi = false;
		
		function clicCosi() {
		
			if (cosi == false) {
		
				changeToblack();
				self.MO4.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
		
				Nounderline()
				cosi = true;
				self.or19.gotoAndStop(1);
		
			} else if (cosi == true) {
				self.or19.gotoAndStop(0);
				chabgTocolor()
				cosi = false;
			}
		
		}
		//-------איועי עכבר שאנגחי---------//
		self.or20.addEventListener("click", clicShenghi)
		
		var shenghi = false;
		
		function clicShenghi() {
		
			if (shenghi == false) {
		
				changeToblack();
		
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.MO4.gotoAndStop(2);
		
				Nounderline()
				shenghi = true;
				self.or20.gotoAndStop(1);
		
			} else if (shenghi == true) {
				self.or20.gotoAndStop(0);
				chabgTocolor()
				shenghi = false;
			}
		
		}
		//-------איועי עכבר באונססייראס---------//
		self.or21.addEventListener("click", clicBoenos)
		
		var boenos = false;
		
		function clicBoenos() {
		
			if (boenos == false) {
		
				changeToblack();
				self.MUG6.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
				self.BR3.gotoAndStop(2);
				self.ALTO1.gotoAndStop(2);
				self.MO3.gotoAndStop(2);
				
				Nounderline()
				boenos = true;
				self.or21.gotoAndStop(1);
		
			} else if (boenos == true) {
				self.or21.gotoAndStop(0);
				chabgTocolor()
				boenos = false;
			}
		
		}
		
		
		////////////////////////////////////////
		/////////////קפסולות ורטו //////////////
		////////////אירועי עכבר ///////////////
		
		//אירועי עכבר דיאבוליטו\\
		
		self.ES2.addEventListener("click", clickDiavolito)
		
		function clickDiavolito(){
			console.log("כרטיסיית דיאווליטו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(1); //פותח את הכרטסיה בפריים הנכון
		}
		
		
		
		//אירועי עכבר אלטיסיו\\
		
		self.ES3.addEventListener("click", clickAltiso)
		
		function clickAltiso(){
			console.log("כרטיסיית אלטיסו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(0); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר ולטסו\\
		
		self.ES1.addEventListener("click", clickVoltso)
		
		function clickVoltso(){
			console.log("ולטסו אלטיסו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(3); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אלטיסיו\\
		
		self.ES3.addEventListener("click", clickAltiso)
		
		function clickAltiso(){
			console.log("כרטיסיית אלטיסו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(2); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו נטול\\
		
		self.ES4.addEventListener("click", clickESD)
		
		function clickESD(){
			console.log("אספרסו נטול כרטיסיית")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(4); //פותח את הכרטסיה בפריים הנכון
		}
		
		
		//אירועי עכבר אספרסו דאבל אספרסו קיארו\\
		
		self.duobel2.addEventListener("click", clickduobel2)
		
		function clickduobel2(){
			console.log("אירועי עכבר אספרסו דאבל אספרסו קיארו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(5); //פותח את הכרטסיה בפריים הנכון
		}
		
		
		//אירועי עכבר אספרסו דאבל אספרסו סקרו\\
		
		self.duobel1.addEventListener("click", clickduobel1)
		
		function clickduobel1(){
			console.log("אירועי עכבר אספרסו דאבל אספרסו סקרו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(6); //פותח את הכרטסיה בפריים הנכון
		}
		//אירועי עכבר אספרסו דאבל בינקו לאגרו\\
		
		self.BR3.addEventListener("click", clickBR3)
		
		function clickBR3(){
			console.log("אירועי עכבר אספרסו דאבל בינקו לאגרו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(7); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו  ארודיאו\\
		
		self.longo3.addEventListener("click", clicklongo3)
		
		function clicklongo3(){
			console.log("אירועי עכבר אספרסו  ארודיאו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(8); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו  פורטדו\\
		
		self.longo2.addEventListener("click", clicklongo2)
		
		function clicklongo2(){
			console.log("אירועי עכבר אספרסו  פורטדו")
		//	self.ES2.gotoAndStop(3);
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(9); //פותח את הכרטסיה בפריים הנכון
		}
		//אירועי עכבר אספרסו  קוסטה ריקה\\
		
		self.MO3.addEventListener("click", clickMO3)
		
		function clickMO3(){
			console.log("אירועי עכבר אספרסו  קוסטה ריקה")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(10); //פותח את הכרטסיה בפריים הנכון
		}
		//אירועי עכבר אספרסו  אתיופיה\\
		
		self.MO4.addEventListener("click", clickMO4)
		
		function clickMO4(){
			console.log("אירועי עכבר אספרסו  אתיופיה")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(11); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו  לונגו נטול\\
		
		self.longo1.addEventListener("click", clicklongo1)
		
		function clicklongo1(){
			console.log("אירועי עכבר אספרסו  לונגו נטול")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(12); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו  מאג נטול\\
		
		self.MUG4.addEventListener("click", clickMUG4)
		
		function clickMUG4(){
			console.log("אירועי עכבר אספרסו  מאג נטול")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(13); //פותח את הכרטסיה בפריים הנכון
		}
		//אירועי עכבר אספרסו  מאג נטול\\
		
		self.MO2.addEventListener("click", clickMO2)
		
		function clickMO2(){
			console.log("אירועי עכבר   מאג נטול")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(15); //פותח את הכרטסיה בפריים הנכון
		}
		
		
		//אירועי עכבר אספרסו  מאג נטול\\
		
		self.MO1.addEventListener("click", clickMO1)
		
		function clickMO1(){
			console.log("אירועי עכבר   מאג נטול")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(15); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו  וניל\\
		
		self.BR1.addEventListener("click", clickBR1)
		
		function clickBR1(){
			console.log("אירועי עכבר אספרסו  קרמל")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(16); //פותח את הכרטסיה בפריים הנכון
		}
		//אירועי עכבר אספרסו  קרמל\\
		
		self.BR2.addEventListener("click", clickBR2)
		
		function clickBR2(){
			console.log("אירועי עכבר אספרסו  קרמל")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(17); //פותח את הכרטסיה בפריים הנכון
		}
		
		//אירועי עכבר אספרסו  אגוזי לוז\\
		
		self.BR5.addEventListener("click", clickBR5)
		
		function clickBR5(){
			console.log("אירועי עכבר אספרסו  אגוזי לוז")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(18); //פותח את הכרטסיה בפריים הנכון
		}
		//אירועי עכבר אספרסו  באנקופרטה\\
		
		self.BR4.addEventListener("click", clickBR4)
		
		function clickBR4(){
			console.log("אירועי עכבר אספרסו  באנקופרטה")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(19); //פותח את הכרטסיה בפריים הנכון
		}
		/*
		for (var i = 1; i <= 8; i++) {
				self.("MUG" + i).addEventListener("click",vvvv)
			console.log("אינטנסו")
			}
			function vvvv(){
				console.log("אינטנסו")
			}*/
		
		//אירועי עכבר אספרסו  אינטנסו\\
		
		self.MUG1.addEventListener("click", clickMUG1)
		
		function clickMUG1(){
			console.log("אירועי עכבר אספרסו  אינטנסו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(20); //פותח את הכרטסיה בפריים הנכון
		}
		
		
		self.MUG2.addEventListener("click", clickMUG2)
		
		function clickMUG2(){
			console.log("אירועי עכבר אספרסו  אודסיו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(22); //פותח את הכרטסיה בפריים הנכון
		}
		self.MUG3.addEventListener("click", clickMUG3)
		
		function clickMUG3(){
			console.log("אירועי עכבר אספרסו  סטרמיו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(21); //פותח את הכרטסיה בפריים הנכון
		}
		
		self.MUG6.addEventListener("click", clickMUG6)
		
		function clickMUG6(){
			console.log("אירועי עכבר אספרסו  מלזיו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(23); //פותח את הכרטסיה בפריים הנכון
		}
		
		self.MUG5.addEventListener("click", clickMUG5)
		
		function clickMUG5(){
			console.log("אירועי עכבר אספרסו  אולציו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(24); //פותח את הכרטסיה בפריים הנכון
		}
		
		
		self.MUG7.addEventListener("click", clickMUG7)
		
		function clickMUG7(){
			console.log("אירועי עכבר אספרסו  סולליו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(26); //פותח את הכרטסיה בפריים הנכון
		}
		
		self.MUG8.addEventListener("click", clickMUG8)
		
		function clickMUG8(){
			console.log("אירועי עכבר אספרסו  גורניו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(25); //פותח את הכרטסיה בפריים הנכון
			
		}
		self.ALTO2.addEventListener("click", clickALTO2)
		
		function clickALTO2(){
			console.log("אירועי עכבר   אלטו")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(27); //פותח את הכרטסיה בפריים הנכון
		}
		
		self.ALTO1.addEventListener("click", clickALTO1)
		
		function clickALTO1(){
			console.log("אירועי עכבר   אלטו האפור")
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			self.tabs.gotoAndStop(28); //פותח את הכרטסיה בפריים הנכון
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tabs
	this.tabs = new lib.tabs();
	this.tabs.name = "tabs";
	this.tabs.setTransform(987.95,370.6,1,1,0,0,0,549.9,315.7);

	this.timeline.addTween(cjs.Tween.get(this.tabs).wait(1));

	// origen
	this.or21 = new lib.bons();
	this.or21.name = "or21";
	this.or21.setTransform(1369.75,603.2,0.3184,0.3248,0,0,0,187.7,160.6);

	this.or20 = new lib.shenghay();
	this.or20.name = "or20";
	this.or20.setTransform(1483.65,603.2,0.3184,0.3248,0,0,0,187.5,160.6);

	this.or16 = new lib.vina();
	this.or16.name = "or16";
	this.or16.setTransform(1590.35,603.25,0.3184,0.3248,0,0,0,187.7,160.8);

	this.or13 = new lib.tokyo();
	this.or13.name = "or13";
	this.or13.setTransform(1369.75,513.4,0.3184,0.3248,0,0,0,187.7,160.8);

	this.or15 = new lib.stokholm();
	this.or15.name = "or15";
	this.or15.setTransform(1481.7,511.55,0.3184,0.3248,0,0,0,187.7,160.6);

	this.or14 = new lib.capetune();
	this.or14.name = "or14";
	this.or14.setTransform(1590.35,510.35,0.3184,0.3248,0,0,0,187.7,160.6);

	this.or19 = new lib.cosi();
	this.or19.name = "or19";
	this.or19.setTransform(1369.75,690.65,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or17 = new lib.forti();
	this.or17.name = "or17";
	this.or17.setTransform(1590.35,688.55,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or9 = new lib.indo();
	this.or9.name = "or9";
	this.or9.setTransform(1369.75,301.8,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or11 = new lib.Onik();
	this.or11.name = "or11";
	this.or11.setTransform(1481.7,407.05,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or8 = new lib.india();
	this.or8.name = "or8";
	this.or8.setTransform(1481.7,301.35,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or12 = new lib.Oety();
	this.or12.name = "or12";
	this.or12.setTransform(1369.75,409.15,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or10 = new lib.Ocolo();
	this.or10.name = "or10";
	this.or10.setTransform(1590.35,406.15,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or18 = new lib.voloto();
	this.or18.name = "or18";
	this.or18.setTransform(1483.7,688.55,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or7 = new lib.livanto_1();
	this.or7.name = "or7";
	this.or7.setTransform(1530.6,247.6,0.7709,0.7709);

	this.or5 = new lib.roma();
	this.or5.name = "or5";
	this.or5.setTransform(1481.7,190.7,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or2 = new lib.kazr();
	this.or2.name = "or2";
	this.or2.setTransform(1481.7,86.55,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or4 = new lib.arpjo();
	this.or4.name = "or4";
	this.or4.setTransform(1590.35,190.7,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or3 = new lib.rist();
	this.or3.name = "or3";
	this.or3.setTransform(1369.75,86.55,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or1 = new lib.napoli();
	this.or1.name = "or1";
	this.or1.setTransform(1590.35,86.55,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or6 = new lib.venzia();
	this.or6.name = "or6";
	this.or6.setTransform(1369.75,190.7,0.7709,0.7709,0,0,0,77.5,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.or6},{t:this.or1},{t:this.or3},{t:this.or4},{t:this.or2},{t:this.or5},{t:this.or7},{t:this.or18},{t:this.or10},{t:this.or12},{t:this.or8},{t:this.or11},{t:this.or9},{t:this.or17},{t:this.or19},{t:this.or14},{t:this.or15},{t:this.or13},{t:this.or16},{t:this.or20},{t:this.or21}]}).wait(1));

	// cuntry
	this.con9 = new lib.con9();
	this.con9.name = "con9";
	this.con9.setTransform(1195.65,466.95,1,1,0,0,0,105.2,27.4);

	this.con4 = new lib.con4();
	this.con4.name = "con4";
	this.con4.setTransform(1225.5,236.7,1,1,0,0,0,75.4,27.4);

	this.con8 = new lib.con8();
	this.con8.name = "con8";
	this.con8.setTransform(1205.45,697.5,1,1,0,0,0,95.4,27.4);

	this.con7 = new lib.con7();
	this.con7.name = "con7";
	this.con7.setTransform(1211.55,620.45,1,1,0,0,0,89.2,27.4);

	this.con6 = new lib.con6();
	this.con6.name = "con6";
	this.con6.setTransform(1244.3,159.95,1,1,0,0,0,56.5,27.4);

	this.con5 = new lib.con5();
	this.con5.name = "con5";
	this.con5.setTransform(1225.5,83.1,1,1,0,0,0,75.4,27.4);

	this.con3 = new lib.con3();
	this.con3.name = "con3";
	this.con3.setTransform(1209.65,543.65,1,1,0,0,0,91,27.4);

	this.con2 = new lib.con2();
	this.con2.name = "con2";
	this.con2.setTransform(1185.15,390.2,1,1,0,0,0,115.6,27.4);

	this.con1 = new lib.con1();
	this.con1.name = "con1";
	this.con1.setTransform(1220.1,313.45,1,1,0,0,0,80.7,27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAAAg63IAAAIEAAAg13MAAABwv");
	this.shape.setTransform(1310,379.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.con1},{t:this.con2},{t:this.con3},{t:this.con5},{t:this.con6},{t:this.con7},{t:this.con8},{t:this.con4},{t:this.con9}]}).wait(1));

	// cupsuol
	this.text = new cjs.Text("אלטו מאג", "normal 700 40px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 54;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(567,-0.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("מאג", "normal 700 40px 'Assistant'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 54;
	this.text_1.lineWidth = 240;
	this.text_1.parent = this;
	this.text_1.setTransform(565.3,129.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("גראנד לונגו", "normal 700 40px 'Assistant'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 54;
	this.text_2.lineWidth = 240;
	this.text_2.parent = this;
	this.text_2.setTransform(565.3,368);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("דרבל אספרסו", "normal 700 40px 'Assistant'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 54;
	this.text_3.lineWidth = 240;
	this.text_3.parent = this;
	this.text_3.setTransform(565.3,535.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("אספרסו", "normal 700 40px 'Assistant'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 54;
	this.text_4.lineWidth = 240;
	this.text_4.parent = this;
	this.text_4.setTransform(565.3,689.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_4);
	}

	this.ES1 = new lib.volteso();
	this.ES1.name = "ES1";
	this.ES1.setTransform(632.7,767.7,0.7854,0.7986,0,0,0,96.9,55.1);

	this.ALTO1 = new lib.alto_dolche();
	this.ALTO1.name = "ALTO1";
	this.ALTO1.setTransform(638.3,88.6,0.7415,0.6861,0,0,0,100.2,61.3);

	this.ALTO2 = new lib.alto();
	this.ALTO2.name = "ALTO2";
	this.ALTO2.setTransform(416,46.65,0.388,0.3517);

	this.longo3 = new lib.arondio();
	this.longo3.name = "longo3";
	this.longo3.setTransform(282.4,475.4,0.388,0.3518,0,0,0,192.2,120);

	this.longo2 = new lib.fortado();
	this.longo2.name = "longo2";
	this.longo2.setTransform(422.2,475.4,0.388,0.3518,0,0,0,192.1,120);

	this.longo1 = new lib.decaff150();
	this.longo1.name = "longo1";
	this.longo1.setTransform(841.15,474.75,0.3879,0.357,0,0,0,191.9,120);

	this.duobel2 = new lib.chiaro();
	this.duobel2.name = "duobel2";
	this.duobel2.setTransform(418.55,626.55,0.3879,0.3498,0,0,0,192.5,120);

	this.duobel1 = new lib.scoro();
	this.duobel1.name = "duobel1";
	this.duobel1.setTransform(561.15,626.35,0.388,0.3499,0,0,0,192.3,119.9);

	this.BR4 = new lib.forte();
	this.BR4.name = "BR4";
	this.BR4.setTransform(908.55,274.8,0.3879,0.3497);

	this.BR1 = new lib.vanik();
	this.BR1.name = "BR1";
	this.BR1.setTransform(562.6,307.15,0.3963,0.3497,0,0,0,188,160.8);

	this.BR5 = new lib.nets();
	this.BR5.name = "BR5";
	this.BR5.setTransform(841.6,310.15,0.3963,0.3497,0,0,0,187.7,160.4);

	this.BR2 = new lib.carael();
	this.BR2.name = "BR2";
	this.BR2.setTransform(699.2,308.85,0.3963,0.3497,0,0,0,188.2,161);

	this.BR3 = new lib.leggero();
	this.BR3.name = "BR3";
	this.BR3.setTransform(703.75,626.45,0.3879,0.3497,0,0,0,192.1,120);

	this.MUG1 = new lib.intenso();
	this.MUG1.name = "MUG1";
	this.MUG1.setTransform(142,227.2,0.388,0.3517,0,0,0,192.3,119.7);

	this.MUG5 = new lib.elvizo();
	this.MUG5.name = "MUG5";
	this.MUG5.setTransform(703.6,225.3,0.388,0.3517,0,0,0,192.1,120);

	this.MUG3 = new lib.stormio();
	this.MUG3.name = "MUG3";
	this.MUG3.setTransform(278.25,226.8,0.388,0.3517,0,0,0,192,120);

	this.MUG4 = new lib.decaff230();
	this.MUG4.name = "MUG4";
	this.MUG4.setTransform(141.75,312.15,0.388,0.3517,0,0,0,191.6,120.2);

	this.MUG2 = new lib.aodiso();
	this.MUG2.name = "MUG2";
	this.MUG2.setTransform(421.95,225.8,0.388,0.3517,0,0,0,191.8,119.7);

	this.MUG8 = new lib.jorjono();
	this.MUG8.name = "MUG8";
	this.MUG8.setTransform(842.75,226.1,0.388,0.3517,0,0,0,192.1,119.7);

	this.MUG7 = new lib.sollu();
	this.MUG7.name = "MUG7";
	this.MUG7.setTransform(983.15,225.7,0.388,0.3517,0,0,0,192,120.2);

	this.MUG6 = new lib.melozio();
	this.MUG6.name = "MUG6";
	this.MUG6.setTransform(563,226.5,0.388,0.3517,0,0,0,192,120);

	this.ES4 = new lib.natol40();
	this.ES4.name = "ES4";
	this.ES4.setTransform(773.3,768,0.7854,0.7988,0,0,0,94.9,55.4);

	this.ES3 = new lib.altiso();
	this.ES3.name = "ES3";
	this.ES3.setTransform(491.25,768.2,0.7854,0.7988,0,0,0,94.9,55.4);

	this.ES2 = new lib.diavolito();
	this.ES2.name = "ES2";
	this.ES2.setTransform(349.05,767.85,0.7854,0.7988,0,0,0,94.8,55.4);

	this.MO1 = new lib.colombia();
	this.MO1.name = "MO1";
	this.MO1.setTransform(423.3,313.5,1.1283,1.0975,0,0,0,66,38.4);

	this.MO3 = new lib.costa();
	this.MO3.name = "MO3";
	this.MO3.setTransform(561.8,469.5,1.1524,1.0596,0,0,0,64.5,51.6);

	this.MO2 = new lib.mexico();
	this.MO2.name = "MO2";
	this.MO2.setTransform(282.15,314.9,1.1283,1.0975,0,0,0,66,38.3);

	this.MO4 = new lib.etyopiya();
	this.MO4.name = "MO4";
	this.MO4.setTransform(702.7,469.1,1.1522,1.0596,0,0,0,64.7,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MO4},{t:this.MO2},{t:this.MO3},{t:this.MO1},{t:this.ES2},{t:this.ES3},{t:this.ES4},{t:this.MUG6},{t:this.MUG7},{t:this.MUG8},{t:this.MUG2},{t:this.MUG4},{t:this.MUG3},{t:this.MUG5},{t:this.MUG1},{t:this.BR3},{t:this.BR2},{t:this.BR5},{t:this.BR1},{t:this.BR4},{t:this.duobel1},{t:this.duobel2},{t:this.longo1},{t:this.longo2},{t:this.longo3},{t:this.ALTO2},{t:this.ALTO1},{t:this.ES1},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// blackBG
	this.instance = new lib.blackBG("synched",0);
	this.instance.setTransform(826.3,413.2,0.9957,1.1147,0,0,0,828.6,367.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ECBegAnIAABPEiBdAAoIAAhP");
	this.shape_1.setTransform(822.7,729.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiCdhBnMEE7AAAMAAACDPMkE7AAAg");
	this.shape_2.setTransform(825,410);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EiCdBBoMAAAiDPMEE7AAAMAAACDPg");
	this.shape_3.setTransform(825,410);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(814,399,847,432);
// library properties:
lib.properties = {
	id: '1CAB44903FE81B43864D24471338971B',
	width: 1650,
	height: 820,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/VerTouch_atlas_1.png?1616671657758", id:"VerTouch_atlas_1"},
		{src:"images/VerTouch_atlas_2.png?1616671657758", id:"VerTouch_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1CAB44903FE81B43864D24471338971B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;