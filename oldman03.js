(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.tui2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCDAE").s().p("AhBSCQihnSAGtxQADnDAtnoIABgVIGJAgIgCAZIg/KuQgiF9gMD+QggKYBcEJg");
	this.shape.setTransform(0,-115.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-230.7,44.3,230.8);


(lib.tui1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCDAE").s().p("AjdjBQACm4AunzIACgVIGIAgIgCAZQhLM2gIHgQgKJ7BgEUIjjAlQjdp8AFrHg");
	this.shape.setTransform(0,-115.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-230.7,44.3,230.8);


(lib.shoe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B3A1B").ss(4).p("AAUhWIg4AMQhEAPg3ASQiyA6ANBHQAOBLEVgTQBmgHBmgSQBfgRAcgOQAtgWgShlIgbhhIgVASQgaAVgeARQheA2hVgH");
	this.shape.setTransform(0,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B3A1B").s().p("AlEBQQgNhHCyg6QA3gSBEgPIA4gLIASA4QBVAIBeg2QAegRAagWIAVgRIAbBhQASBkgtAWQgcAPhfAQQhmAThmAHQg3ADgsAAQi1AAgLg8g");
	this.shape_1.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-40.4,82.1,42.4);


(lib.shoe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B3A1B").ss(4).p("AAdhWIg5AMQhGAPg5ATQi2A7ANBHQAOBKEVgSQBmgHBlgSQBggRAcgOQAtgWgShlIgbhhIgTATQgYAXgbASQhYA6hVgH");
	this.shape.setTransform(0,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B3A1B").s().p("AlEBQQgNhHC2g7QA5gSBGgQIA5gLIAWBCQBVAIBYg6QAbgTAYgWIATgTIAbBhQASBkgtAWQgcAOhgARQhlAShmAHQg3AEgtAAQi0AAgLg8g");
	this.shape_1.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-31.8,82.8,45.9);


(lib.right_xiu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D9282").s().p("Ak4I6QhujSgNjXQgLi8BBipQA5iYBnhjQBihgBjgKQCfgRCnHMQBUDlA0DpIhHAmQhYAthbAmQkXByjKAAIgTgBg");
	this.shape.setTransform(0,-57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-114.1,87.5,114.1);


(lib.left_xiu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D9282").s().p("Ah3HiQhzgrhfgqQAWgGAmiZQAxjUAeh3QB3neBvgDQBJgBBJBoQBKBqAnClQArC2gRC8QgTDZhfC8QhlgGjlhXg");
	this.shape.setTransform(0,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-114.9,66,115);


(lib.ku = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#86742C").ss(4,1).p("AjBjPIAUBEQAbBQAlBCQB4DUC3gM");
	this.shape.setTransform(61.5,-121.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0A046").s().p("AGtN3QjLgIipgPQgDkRggkQQg9ohiLAAQiMAAgGIRQgEEJAZEJQmlAsiqgSQhVgJgBgRQgnkJAzrCQAQjdAYjuIAUjCIb6hjQBQCfAcMtQAOGXgDF3Qh1AbjyAAQhfAAhygEg");
	this.shape_1.setTransform(0,-89.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-178.2,199.6,178.2);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6543C").s().p("AjGAhQgfgmgXgwIgSgmQBbAHBwgFQDhgIBxg7IgEAxQgHA7gSAwQg5CdiOAAQiMAAhlh8g");
	this.shape.setTransform(-28,-48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBEC0").s().p("ALCC9QgtgrhMg2QiXhqijg9QkEhhj1AhQj1AhjkCiQgIAGgKgCQgKgBgFgIQgGgIABgKQACgKAIgGQEMi/EsgSQDigODmBXQCpBACaBsQBOA3AxAuQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgGgGg");
	this.shape_1.setTransform(2.4,-239);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBEC0").s().p("ALODJQgugphPg2QichqimhCQkKhqj4ANQj6ANjkCEQgIAFgKgCQgJgDgFgJQgFgIACgKQADgJAIgFQEMicEvAEQDlADDrBeQCsBECeBsQBQA3AyAtQAHAGABAKQAAAKgHAIQgHAIgKAAQgJAAgHgHg");
	this.shape_2.setTransform(-0.9,-228.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhCjQgFgGAAgGQAAgIAGgFQCCiAA1iyQAJAhAHAiQg6CVh0BzQgFAGgIAAQgIgBgFgFg");
	this.shape_3.setTransform(100.5,-152.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhgCZQgFgFAAgIQAAgHAFgGQB6h5A3ijQAOAdAHATQg6CUhzByQgGAFgHAAQgHAAgFgFg");
	this.shape_4.setTransform(93.3,-174.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBEC0").s().p("Ag4CiQAAkbBxj+IAAJaQAAAxgbApQgaAngrAUQgRhnAAhvg");
	this.shape_5.setTransform(-112.4,-150.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBEC0").s().p("ABpJAQiRAAhnhnQhnhnAAiSIAAofQAAhKAehEQAdhBA1gxQCyCuBkDsQBnDzAAEOQAAB0gTBwg");
	this.shape_6.setTransform(89.3,-169);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6543C").s().p("AgvACQgjALgRAWIgdgWQAXgcAqgOQBWgdBqBDIgTAeQhag4hDATg");
	this.shape_7.setTransform(-45.4,-125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6543C").s().p("AiHCHQg3g4AAhPQAAhOA3g4QA5g4BOAAQBPAAA4A4QA4A4AABOQAABPg4A4Qg4A4hPAAQhOAAg5g4gAhthtQgtAuAAA/QAABAAtAuQAuAuA/AAQBAAAAuguQAtguAAhAQAAg/gtguQgugthAAAQg/AAguAtg");
	this.shape_8.setTransform(-74.2,-122.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6543C").s().p("AiGCHQg4g4gBhPQABhOA4g4QA4g4BOAAQBPAAA5A4QA3A4AABOQAABPg3A4Qg5A4hPAAQhOAAg4g4gAhthtQguAuAAA/QAABAAuAuQAtAuBAAAQBBAAAtguQAugugBhAQABg/guguQgtgthBAAQg/AAguAtg");
	this.shape_9.setTransform(-16.1,-122.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BA754C").s().p("AhQA1QgCgEACgFQACgEAEgCIBcgqIhbggQgFgCgCgEQgCgFACgEQACgFAEgCQAEgCAFABICTA0IiSBCIgFABQgIAAgDgHg");
	this.shape_10.setTransform(-95.2,-142.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA754C").s().p("ABcBCIjIhaIDLgqQAFgBAEADQAEADABAFQABAFgDAEQgDAEgEABIiDAaICFA8QAFACABAFQACAEgCAFQgDAHgIAAg");
	this.shape_11.setTransform(33.3,-137.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BA754C").s().p("ACYBuQhliIhygtQg5gWgnAFQgFABgEgDQgDgDgBgFQgBgFADgEQADgEAFgBQAsgGA+AXQB5AvBqCPQADAEgBAFQAAAFgEADQgDACgEAAQgGAAgEgEg");
	this.shape_12.setTransform(13.7,-69.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F20").s().p("AjoFMQgGAAgFgGQgDgFADgHIFap/QADgEAEgBQAFgCAEADQAFACABAFQACAEgDAFIlQJtIG9AAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAg");
	this.shape_13.setTransform(-50.9,-111.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221F20").s().p("AhDBtQgcgtAAhAQAAg/AcgtQAdgtAmAAQAoAAAcAtQAcAtAAA/QAABAgcAtQgcAtgoAAQgmAAgdgtg");
	this.shape_14.setTransform(10.8,-141.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA754C").s().p("AhYByQgFgBgDgEQgCgEAAgFQAHguAZgwQA0hiBigUQAFgBAEADQAEACABAFQABAFgDAEQgCAFgFAAQhYASguBYQgXAsgGArQgCAKgKAAg");
	this.shape_15.setTransform(-69.7,-69.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("AhCBtQgcgtAAhAQAAg/AcgtQAcgtAmAAQAoAAAcAtQAcAtAAA/QAABAgcAtQgcAtgoAAQgmAAgcgtg");
	this.shape_16.setTransform(-74.2,-141.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECCDAE").s().p("Ao5SdQi5hqiIjCQiCi6hGjzQhFjwAAkDQAAj9BbjoQBYjfChitQCgisDRhfQDXhiDrAAQDsAADYBiQDQBfCgCsQChCtBYDfQBbDoAAD9QAAD6hxD5QhrDsi+DBQi8C/jlBtQjuBxjrAAQjpAAjEhxg");
	this.shape_17.setTransform(-2.1,-129.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1AC8C").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape_18.setTransform(-112.3,-96.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1AC8C").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape_19.setTransform(112,-96.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECCDAE").s().p("AiSCVQg8g9AAhYQAAhWA8g+QA9g+BVAAQBWAAA9A+QA8A9AABXQAABYg8A9Qg9A+hWAAQhVAAg9g+g");
	this.shape_20.setTransform(112.4,-96.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECCDAE").s().p("AiSCVQg8g9AAhYQAAhWA8g+QA9g+BVAAQBWAAA8A+QA9A+AABWQAABYg9A9Qg8A+hWAAQhVAAg9g+g");
	this.shape_21.setTransform(-112.3,-96.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-258.7,266.2,258.8);


(lib.hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCDAE").s().p("ABiSBQhEgHg8gOIAAjGIhIAAIheidICmh0QgPmigqmpQhVtUiIgqIEWhRIA0DFQA9D0AuDrQCSLxhBGFQBKCxATB6QAVCDgwApQgdAahOAAQgfAAgogFg");
	this.shape.setTransform(0,-115.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-231.5,61.9,231.5);


(lib.hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCDAE").s().p("AipR0QhAgJg1gSIgriUQgOAMgQgJQgegTgGhqQgGhqBzg0QAkgQArgJIAlgGIAGADQAhkLCEsZIB/rlIENByIl3bqQAsApAACLQAACRg4AwQgkAghMAAQgeAAglgFg");
	this.shape.setTransform(0,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-229,79.4,229);


(lib.gun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F7E73").s().p("ABsgHQg9g5jmAaQBCgQAagFQAzgKAoABQAqAAAmAQQAmAQAaAdQAfAiAJAqQgggpgsgjg");
	this.shape.setTransform(25.8,-335.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F7E73").s().p("Ag3gWQAGgXAVgNQAVgNAWAIQANAEANAMQAHAIANAQIglgIQgtgMgRAlQgNAbAGAuQgXguANgrg");
	this.shape_1.setTransform(-38.4,-345.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C5B4D").s().p("AkPCgQACgOgBgXIgBgmQAChyBkhDQBVg6B6gFQDEgJAmC4QgPAEgMgOQgHgGgKgUQgQgigagUQgygkhMAFQg8AEg2AbQg6AbgmAsQguA1gEBug");
	this.shape_2.setTransform(13.6,-317.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#886859").s().p("Aj8D5QgEiNgyhDQgHgJg4g+QgpgvgQggQgXgvANgvQAGgXAWgNQAWgOAXAIQAOAEANANQAIAIANARIASAXQBdBoC1geQAdgFA7gOQA/gQAdgFQA0gKAqAAQAqABAnAQQAmAQAbAeQAfAiAJAsQAFARgBAYQgBAcgEAPQgHAbgRAHIgHACQgPAEgMgOQgHgHgKgUQgQgigagUQgygjhMAFQg8AEg3AaQg6AbglAsQguA2gEBug");
	this.shape_3.setTransform(0.3,-326.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#283237").s().p("AgmCMIAAkYIA6AAQAIAAAFAHQAGAGAAAJIAAECg");
	this.shape_4.setTransform(-10.2,-14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#495A63").s().p("AhQCMIAAkCQAAgJAFgGQAGgGAHAAICPAAIAAEXg");
	this.shape_5.setTransform(-17.2,-14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#495A63").s().p("AgaV+MAAAgr7IA1AAMAAAAr7g");
	this.shape_6.setTransform(-11.4,-165.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#596D79").s().p("AhFV+MAAAgr7ICLAAMAAAAr7g");
	this.shape_7.setTransform(-15.7,-165.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-352.1,88.9,352.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(241,242,242,0.298)").s().p("AhHi0QgEgNAGgMQAHgNANgEIB7gsIgLIVg");
	this.shape.setTransform(7.4,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,14.8,53.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,4.8,4.8), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,4.8,4.8), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,6.1,6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,6.1,6), null);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8A+QgagaAAgkQAAgjAagZQAZgaAjAAQAkAAAaAaQAZAZAAAjQAAAkgZAaQgaAZgkAAQgjAAgZgZg");
	this.shape.setTransform(-26.1,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8A+QgagaAAgkQAAgjAagZQAZgaAjAAQAkAAAaAaQAZAZAAAjQAAAkgZAaQgaAZgkAAQgjAAgZgZg");
	this.shape_1.setTransform(-26.1,-93.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8A+QgagaAAgkQAAgjAagZQAZgaAjAAQAkAAAaAaQAZAZAAAjQAAAkgZAaQgaAZgkAAQgjAAgZgZg");
	this.shape_2.setTransform(-26.1,-147.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8A9QgagZAAgkQAAgjAagZQAZgaAjAAQAkAAAaAaQAZAZAAAjQAAAkgZAZQgaAagkAAQgjAAgZgag");
	this.shape_3.setTransform(-26.1,-206.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(3,1,1).p("Ahwj7IAjH3IC+j8");
	this.shape_4.setTransform(-51.1,-261);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(3,1,1).p("AitBOIEDD3IBYqJ");
	this.shape_5.setTransform(0.3,-264.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECCDAE").s().p("AjmjvIHNAAIkpHfg");
	this.shape_6.setTransform(-22.9,-286.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D9282").s().p("AvsYPMAB0grmIGtjAIKnh3QCPArCdBLQE6CVBCCcQBDCdAZT8QANJ+AAJfg");
	this.shape_7.setTransform(0,-155.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.4,-310.2,201,310.3);


(lib.weixin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#444343","#231D1E"],[0,1],0,1.6,0,-2).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape.setTransform(-15.3,-66.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#444343","#231D1E"],[0,1],0,1.6,0,-2).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_1.setTransform(-0.6,-66.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#444343","#231D1E"],[0,1],0,1.6,0,-2.2).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_2.setTransform(18.6,-51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#444343","#231D1E"],[0,1],0,1.6,0,-2.2).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_3.setTransform(6.7,-51.5);

	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,-65.9,1,1,0,0,0,3,3);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,-65.9,1,1,0,0,0,3,3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.6,-51,1,1,0,0,0,2.4,2.4);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.7,-51,1,1,0,0,0,2.4,2.4);
	this.instance_3.alpha = 0.5;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#AAABAB","#6B6B6B"],[0,1],0,-15.8,0,14.2).s().p("ABECEQggAMgkAAQhKAAg1gtQg1guAAg+QAAgfAOgdQAOgcAZgVQA2gtBJAAQBKAAA2AtQAZAVAOAcQAOAdAAAfQAAAjgSAgQgTAfggAWIAQAzIAAACIgBAAgABFCCIA4AeIgQgxIABgCQAggVASgfQASggAAgiQAAg+g0gtQg0gshKAAQgjAAgiAMQggALgYAVQg1AtAAA+QAAAdAOAdQAOAbAZAVQA0AsBJAAQAjAAAhgLIAAgBg");
	this.shape_4.setTransform(12.2,-45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#E2E3E3"],[0,1],-1.9,-7.3,0,-1.9,-7.3,21.6).s().p("ABECDQggALgkAAQhKAAg0gsQg1gtAAg+QAAg/A1gtQA1gtBJAAQBKAAA1AtQA1AtAAA/QAAAjgTAgQgSAfghAVIARA1g");
	this.shape_5.setTransform(12.2,-45.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#89944F","#3A6127"],[0.016,1],0,-19.8,0,21.9).s().p("AiYDEIAAgBIAVg/QgngZgWgmQgXgmAAgrQAAglARgiQAQghAegaQAfgZAmgOQAogPArAAQAsAAAoAPQAnAOAdAZQAeAZARAiQARAiAAAlQAAAlgRAiQgRAhgeAZQgdAagnANQgoAPgsAAQgnAAgngNIhJAngAiWiMQgdAZgRAhQgQAhAAAlQAAAqAWAnQAXAlAnAZIAAABIgUA8IBFglIACAAQAlANAoAAQArAAAogOQAmgOAegZQAegZAPghQARghAAgkQAAglgRghQgPghgegZQgegZgmgNQgogPgrAAQhXAAg/A1g");
	this.shape_6.setTransform(-7.9,-58.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#CCDA77","#669D48"],[0.133,1],-0.6,-7.2,0,-0.6,-7.2,36).s().p("AiBCEQgngZgXgmQgXgmAAgrQABhLA+g2QA/g1BYAAQBZAAA+A1QBAA2gBBLQABBLhAA1Qg+A1hZAAQgoAAgmgNIhJAng");
	this.shape_7.setTransform(-7.9,-58.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221916").s().p("AGFHOIhQhjQgzg8gwgNQgggJgpACIhKAFQgwAEhbAFQhZAFg1gCQhOgDg+gPQhagWgZhUQgMgqgDg5IgDhlIgHiLQgDhTAHg3QAGgyAPgbQASggAngUQAngSAsgFIABAAIABAAIABAAQCigPDjAIQBLADA0AGQBFAIA4APQA0APAeAUQAnAbAQArQAWA6ALBTQACATALB/QAHBPgBAqQgCBIgWAuQgOAegYAVQgZAWgfAJQg1ARBOCZIABABQACADgJADIgHABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgADHEUQAtAHAeAZQAeAXAnAwIASAXIgIgYQgRgzAGglQAAgDAIgCQBngXAWh4QAMhCgQiOQgGh+gPhAQgah0hOgeQhagkh+gJQgfgCi/gDQh+gDh1ALQglAEgeANQglAQgPAaQgbAugBBTQgBAvAIBYQABAbABBPQABBCAEAnQAFA0AKAfQAPAvAdAYQAvAlBaAIQAuAEBmgDQApgBDIgOIAmgCQAZAAATADg");
	this.shape_8.setTransform(0,-46.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AFAFvQgwg6gpgSQgjgPg8ACQhEAHgeABQiqAKghAAQh1AAhWgWQhLgUgZhgQgNg0AAhyIgHivQgDhpAPhDQANg0BCgZQAhgNAfgDQCJgMA3ACQBJADCXACQCEAFBYAZQA3APAcATQAjAYARAtQAPAlAIArQAFAcAFA2IARCwQAFBhgVBMQgKAggYAYQghAhg1AKQgHAZAUA9QAQAyARAhQgHgHhHhVg");
	this.shape_9.setTransform(0,-46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-92.7,100,92.7);


(lib.shouji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-39.4,1,1,0,0,0,7.4,26.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("Ag+FlQgFgDgCgGIi7pRQgCgGADgFQADgFAGgCIEqheQAFgCAGADQAFADABAFIC7JSQACAFgCAFQgDAFgGACIkqBeIgEABIgHgBg");
	this.shape.setTransform(0,-35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-71.7,51.5,71.7);


// stage content:
(lib.oldman03 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
        console.log("stop")
	}
	this.frame_94 = function() {
        console.log("end")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(35).call(this.frame_94).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0A047").s().p("AgpDPQg1gUg5gvIgugqQgDg/AThHQAkiPBqgoQApClBZA3QAvAeA8AFQg3C4h2AAQgeAAgkgNg");
	this.shape.setTransform(166.3,356.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59).to({_off:false},0).to({_off:true},7).wait(29));

	// head
	this.instance = new lib.head("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131,146.1,0.57,0.57,0,0,0,-5.8,-21.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(8).to({startPosition:0},0).to({rotation:-9,y:146.2},7).wait(21));

	// shoe2
	this.instance_1 = new lib.shoe2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.2,517.4,0.57,0.57,0,0,0,11.8,-8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(36));

	// shoe1
	this.instance_2 = new lib.shoe1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.4,516.1,0.57,0.57,0,0,0,12.9,-4.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(36));

	// right_xiu
	this.instance_3 = new lib.right_xiu("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(202.9,208,0.57,0.57,0,0,0,28.9,-44.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({regX:29.1,regY:-44.5,scaleY:0.72,rotation:-1,x:208.2,y:222.2},5).to({regX:29.2,regY:-44.4,scaleY:0.71,rotation:-4.7,x:208.4,y:216},2).to({regX:29.1,regY:-44.1,scaleY:0.75,rotation:5.3,x:202.4,y:224},5).wait(24));

	// hand2
	this.instance_4 = new lib.hand2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(199.6,218.8,0.57,0.57,0,0,0,-12.7,-224.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({regX:-12.6,regY:-224.5,rotation:24.2,x:208.5,y:238.7},5).to({regX:-12.2,regY:-224.1,scaleX:0.57,scaleY:0.57,rotation:17.9,x:207.8,y:224.8},2).to({regX:-12.4,regY:-224.7,scaleX:0.57,scaleY:0.57,rotation:69.9,x:198.1,y:240},5).wait(24));

	// 隔离模式
	this.instance_5 = new lib.shouji("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(162.4,352.7,0.427,0.427,-51.5,0,0,0.2,-35.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({regX:-0.1,regY:-35.1,scaleX:0.45,scaleY:0.45,rotation:-52.1,x:178.7,y:337.7},2).to({regY:-35,scaleX:0.48,scaleY:0.48,rotation:-43.1,x:133.9,y:325.4},2).to({regY:-35.1,scaleX:0.53,scaleY:0.53,rotation:-29.8,x:86.8,y:281.2},3).wait(24));

	// 隔离模式
	this.instance_6 = new lib.weixin("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(96.1,291.8,0.215,0.215,-5.5,0,0,38,-5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72).to({_off:false},0).to({regX:37.5,regY:-5.7,scaleX:0.69,scaleY:0.69,x:70.1,y:264.1},8,cjs.Ease.get(1)).wait(15));

	// left_xiu
	this.instance_7 = new lib.left_xiu("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(82.5,203.3,0.57,0.57,0,0,0,-11.1,-54.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).wait(36));

	// body
	this.instance_8 = new lib.body("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(131.8,184.4,0.57,0.57,0,0,0,-17.6,-250.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).wait(36));

	// hand1
	this.instance_9 = new lib.hand1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(82,242.2,0.57,0.57,0,0,0,11.8,-170.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).wait(36));

	// ku
	this.instance_10 = new lib.ku("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(132.1,342.3,0.57,0.57,0,0,0,-14.7,-127.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).wait(36));

	// tui2
	this.instance_11 = new lib.tui2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(165.8,406.5,0.57,0.57,0,0,0,-4.5,-185.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).wait(36));

	// tui1
	this.instance_12 = new lib.tui1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(98.6,408.6,0.57,0.57,0,0,0,-2.6,-181.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).wait(36));

	// gun
	this.instance_13 = new lib.gun("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(65.2,345.1,0.57,0.57,0,0,0,-14.4,-305);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).wait(36));

	// bone01
	this.instance_14 = new lib.shoe2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(169.2,517.2,0.57,0.57,0,0,0,11.9,-8);

	this.instance_15 = new lib.shoe1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(103.4,515.8,0.57,0.57,0,0,0,12.9,-4.8);

	this.instance_16 = new lib.right_xiu("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(202.9,207.7,0.57,0.57,0,0,0,29,-44.9);

	this.instance_17 = new lib.hand2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(199.5,218.6,0.57,0.57,0,0,0,-12.7,-224.2);

	this.instance_18 = new lib.left_xiu("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(82.2,203.2,0.57,0.57,0,0,0,-11.1,-53.9);

	this.instance_19 = new lib.body("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(131.6,184.2,0.57,0.57,0,0,0,-17.6,-250.7);

	this.instance_20 = new lib.hand1("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(82,242.1,0.57,0.57,0,0,0,11.8,-170.8);

	this.instance_21 = new lib.ku("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(132,342.1,0.57,0.57,0,0,0,-14.4,-127.5);

	this.instance_22 = new lib.tui2("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(165.6,406.4,0.57,0.57,0,0,0,-4.5,-185.2);

	this.instance_23 = new lib.tui1("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(98.4,408.4,0.57,0.57,0,0,0,-2.6,-181.2);

	this.instance_24 = new lib.gun("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(65,345,0.57,0.57,0,0,0,-14.3,-304.8);

	this.instance_25 = new lib.head("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(130.2,114.6,0.57,0.57,0,0,0,-6.7,-75.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0,x:65,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:0,x:98.4,y:408.4,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:0,x:165.6,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.5,x:132,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:0,x:82,y:242.1,regX:11.8}},{t:this.instance_19,p:{regY:-250.7,y:184.2}},{t:this.instance_18,p:{regX:-11.1,rotation:0,y:203.2,regY:-53.9,x:82.2}},{t:this.instance_17,p:{regY:-224.2,rotation:0,x:199.5,y:218.6,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:0,x:202.9,y:207.7}},{t:this.instance_15,p:{regX:12.9,rotation:0,x:103.4,y:515.8,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:0,x:169.2,y:517.2,regY:-8}}]}).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-2.4,x:66.5,y:345.1,regY:-304.8}},{t:this.instance_23,p:{regY:-181.3,rotation:1.2,x:98.5,y:408.7,regX:-2.6}},{t:this.instance_22,p:{regY:-185.1,rotation:-2.9,x:165.5,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.9,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-1,x:81.5,y:241.9,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:0.8,y:203,regY:-53.9,x:82.2}},{t:this.instance_17,p:{regY:-224.1,rotation:3.7,x:198.9,y:219.9,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:0.2,x:202.7,y:208.1}},{t:this.instance_15,p:{regX:12.8,rotation:0.4,x:100.9,y:516.2,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-2.2,x:174.5,y:516.9,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-4.8,x:67.8,y:345.1,regY:-304.7}},{t:this.instance_23,p:{regY:-181.2,rotation:2.5,x:98.6,y:408.9,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-5.7,x:165.2,y:406.4,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.8,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-2.1,x:80.8,y:241.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:1.5,y:203,regY:-53.8,x:82.1}},{t:this.instance_17,p:{regY:-224.2,rotation:7.4,x:198.3,y:221,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.4,x:202.5,y:208.3}},{t:this.instance_15,p:{regX:12.9,rotation:0.8,x:98.7,y:516.4,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-4.4,x:179.7,y:516.4,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-7.2,x:69.2,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.3,rotation:3.7,x:98.8,y:409,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:-8.6,x:165,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.6,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-3.1,x:80.2,y:241.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:2.3,y:202.9,regY:-53.8,x:82}},{t:this.instance_17,p:{regY:-224.1,rotation:11.2,x:197.9,y:222.4,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.6,x:202.4,y:208.6}},{t:this.instance_15,p:{regX:12.9,rotation:1.1,x:96.4,y:516.6,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-6.6,x:184.9,y:515.5,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-9.5,x:70.5,y:344.9,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:4.9,x:98.8,y:409.3,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:-11.4,x:164.8,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.5,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-4.2,x:79.7,y:241.1,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:3,y:202.6,regY:-53.9,x:81.9}},{t:this.instance_17,p:{regY:-224.1,rotation:14.9,x:197.3,y:223.5,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.7,x:202.2,y:208.8}},{t:this.instance_15,p:{regX:12.8,rotation:1.5,x:94,y:516.8,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-8.8,x:189.9,y:514.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-11.9,x:72,y:344.8,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:6.2,x:98.9,y:409.6,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:-14.3,x:164.5,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.4,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-5.2,x:79.1,y:240.9,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:3.8,y:202.6,regY:-53.8,x:81.8}},{t:this.instance_17,p:{regY:-224.1,rotation:18.6,x:196.7,y:224.7,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:0.9,x:201.9,y:209.1}},{t:this.instance_15,p:{regX:12.9,rotation:1.9,x:91.8,y:516.9,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-11,x:195.1,y:513.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-14.3,x:73.3,y:344.7,regY:-304.8}},{t:this.instance_23,p:{regY:-181.3,rotation:7.4,x:98.9,y:409.7,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:-17.2,x:164.4,y:406.5,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.3,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:-6.3,x:78.6,y:240.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:4.6,y:202.4,regY:-53.9,x:81.8}},{t:this.instance_17,p:{regY:-224.1,rotation:22.3,x:196.2,y:225.9,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:1.1,x:201.8,y:209.4}},{t:this.instance_15,p:{regX:12.9,rotation:2.3,x:89.5,y:516.9,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:-13.2,x:200,y:511.5,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-12.5,x:72.3,y:344.8,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:6.5,x:98.9,y:409.6,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-15,x:164.6,y:406.4,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.3,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:-5.5,x:79,y:240.7,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:4,y:202.6,regY:-53.8,x:81.8}},{t:this.instance_17,p:{regY:-224.1,rotation:19.5,x:196.7,y:225.1,regX:-12.6}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:1,x:201.9,y:209.2}},{t:this.instance_15,p:{regX:12.9,rotation:2,x:91.2,y:516.8,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-11.5,x:196.3,y:512.7,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-10.7,x:71.2,y:344.9,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:5.6,x:98.8,y:409.4,regX:-2.4}},{t:this.instance_22,p:{regY:-185.2,rotation:-12.9,x:164.6,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.4,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-4.7,x:79.3,y:241,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:3.4,y:202.8,regY:-53.7,x:81.9}},{t:this.instance_17,p:{regY:-224.1,rotation:16.7,x:196.9,y:224.1,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.8,x:202,y:209}},{t:this.instance_15,p:{regX:13,rotation:1.7,x:93,y:516.8,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:-9.9,x:192.5,y:513.8,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-8.9,x:70.2,y:344.9,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:4.6,x:98.7,y:409.2,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-10.7,x:164.8,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.5,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-3.9,x:79.8,y:241.2,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:2.8,y:202.8,regY:-53.8,x:82}},{t:this.instance_17,p:{regY:-224.1,rotation:14,x:197.3,y:223.2,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.7,x:202.1,y:208.8}},{t:this.instance_15,p:{regX:12.8,rotation:1.4,x:94.6,y:516.7,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:-8.2,x:188.7,y:514.7,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-7.2,x:69.1,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.3,rotation:3.7,x:98.7,y:409,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:-8.6,x:165,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.6,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-3.1,x:80.1,y:241.3,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:2.3,y:202.9,regY:-53.8,x:82}},{t:this.instance_17,p:{regY:-224.1,rotation:11.2,x:197.9,y:222.3,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.6,x:202.3,y:208.5}},{t:this.instance_15,p:{regX:12.9,rotation:1.1,x:96.3,y:516.6,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-6.6,x:184.8,y:515.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:-5.4,x:68.1,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:2.8,x:98.6,y:408.9,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:-6.4,x:165.1,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.7,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:-2.4,x:80.6,y:241.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:1.7,y:202.9,regY:-53.8,x:82.1}},{t:this.instance_17,p:{regY:-224.1,rotation:8.4,x:198.2,y:221.4,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.4,x:202.4,y:208.3}},{t:this.instance_15,p:{regX:12.9,rotation:0.8,x:98.1,y:516.5,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-4.9,x:180.9,y:516.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-3.6,x:67.1,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:1.9,x:98.6,y:408.8,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-4.3,x:165.3,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.8,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:-1.6,x:81,y:241.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:1.1,y:203.1,regY:-53.7,x:82.2}},{t:this.instance_17,p:{regY:-224.1,rotation:5.6,x:198.5,y:220.5,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.3,x:202.4,y:208.2}},{t:this.instance_15,p:{regX:13,rotation:0.6,x:99.9,y:516.2,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-3.3,x:177,y:516.6,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:-1.8,x:66.1,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:0.9,x:98.4,y:408.6,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:-2.1,x:165.4,y:406.3,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.9,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:-0.8,x:81.3,y:241.9,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:0.6,y:203.1,regY:-53.8,x:82.3}},{t:this.instance_17,p:{regY:-224.1,rotation:2.8,x:198.9,y:219.6,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.1,x:202.5,y:208}},{t:this.instance_15,p:{regX:12.8,rotation:0.3,x:101.5,y:516.1,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:-1.6,x:173,y:517,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0,x:65,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:0,x:98.4,y:408.4,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:0,x:165.6,y:406.3,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:132,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:0,x:81.8,y:242,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:0,y:203.1,regY:-53.9,x:82.4}},{t:this.instance_17,p:{regY:-224.1,rotation:0,x:199.4,y:218.7,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0,x:202.7,y:207.7}},{t:this.instance_15,p:{regX:12.9,rotation:0,x:103.3,y:515.8,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:0,x:169.1,y:517.2,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.1,x:62.4,y:344.4,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-1.7,x:99.1,y:408.7,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:1.1,x:165.7,y:406.2,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.9,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:1.1,x:81,y:241.8,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:0.9,y:203,regY:-53.8,x:82.2}},{t:this.instance_17,p:{regY:-224.1,rotation:-1.8,x:199.7,y:218.3,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:-0.9,x:202.8,y:207.3}},{t:this.instance_15,p:{regX:12.9,rotation:-1.1,x:107,y:515.8,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:0.8,x:166.9,y:517.2,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.3,x:59.8,y:343.7,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-3.4,x:99.5,y:408.9,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:2.3,x:165.8,y:406.1,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.9,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:2.1,x:80.2,y:241.5,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:1.7,y:202.6,regY:-53.8,x:82}},{t:this.instance_17,p:{regY:-224.1,rotation:-3.6,x:200.1,y:217.9,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-1.7,x:203,y:206.8}},{t:this.instance_15,p:{regX:12.9,rotation:-2.1,x:110.7,y:515.8,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:1.6,x:164.8,y:517.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.4,x:57.3,y:343.1,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-5.1,x:100.1,y:409.2,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:3.4,x:165.9,y:406,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.8,y:342.1}},{t:this.instance_20,p:{regY:-170.6,rotation:3.2,x:79.5,y:241.3,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:2.6,y:202.3,regY:-53.9,x:81.9}},{t:this.instance_17,p:{regY:-224.1,rotation:-5.4,x:200.5,y:217.6,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-2.6,x:203,y:206.3}},{t:this.instance_15,p:{regX:12.9,rotation:-3.2,x:114.3,y:515.7,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:2.4,x:162.8,y:517,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.6,x:54.7,y:342.2,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-6.9,x:100.6,y:409.3,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:4.6,x:166,y:405.9,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.7,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:4.3,x:78.7,y:241,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:3.4,y:202.2,regY:-53.7,x:81.8}},{t:this.instance_17,p:{regY:-224.1,rotation:-7.2,x:200.8,y:217.2,regX:-12.8}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-3.4,x:203.1,y:205.9}},{t:this.instance_15,p:{regX:13,rotation:-4.3,x:118.1,y:515.4,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:3.1,x:160.7,y:516.6,regY:-8.1}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.7,x:52.2,y:341.5,regY:-304.7}},{t:this.instance_23,p:{regY:-181.3,rotation:-8.6,x:101.2,y:409.6,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:5.7,x:166.1,y:405.8,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.6,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:5.4,x:78,y:240.7,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:4.3,y:201.8,regY:-53.8,x:81.6}},{t:this.instance_17,p:{regY:-224.1,rotation:-8.9,x:201.2,y:216.9,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-4.3,x:203.4,y:205.4}},{t:this.instance_15,p:{regX:12.8,rotation:-5.4,x:121.6,y:515,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:3.9,x:158.6,y:516.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.8,x:49.6,y:340.7,regY:-304.7}},{t:this.instance_23,p:{regY:-181.2,rotation:-10.3,x:101.7,y:409.8,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:6.9,x:166.3,y:405.7,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.5,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:6.4,x:77.3,y:240.3,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:5.1,y:201.5,regY:-53.8,x:81.5}},{t:this.instance_17,p:{regY:-224.2,rotation:-10.7,x:201.6,y:216.3,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-5.1,x:203.4,y:205}},{t:this.instance_15,p:{regX:12.9,rotation:-6.4,x:125.3,y:514.7,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:4.7,x:156.4,y:516.2,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:1,x:47.1,y:339.7,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-12,x:102.2,y:410.1,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:8,x:166.3,y:405.6,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.5,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:7.5,x:76.4,y:240,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:6,y:201.2,regY:-53.8,x:81.3}},{t:this.instance_17,p:{regY:-224.2,rotation:-12.5,x:202,y:216,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-6,x:203.7,y:204.5}},{t:this.instance_15,p:{regX:12.9,rotation:-7.5,x:128.9,y:514.1,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:5.5,x:154.3,y:515.9,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:1.1,x:44.6,y:338.8,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-13.7,x:102.7,y:410.3,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:9.1,x:166.4,y:405.5,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.4,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:8.6,x:75.7,y:239.7,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11.1,rotation:6.9,y:200.9,regY:-53.8,x:81.2}},{t:this.instance_17,p:{regY:-224.1,rotation:-14.3,x:202.4,y:215.7,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-6.9,x:203.6,y:204.2}},{t:this.instance_15,p:{regX:12.8,rotation:-8.6,x:132.5,y:513.5,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:6.3,x:152.2,y:515.5,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.2,rotation:1,x:47.5,y:339.9,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-11.8,x:102.2,y:410.1,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:7.8,x:166.3,y:405.6,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.5,y:342.1}},{t:this.instance_20,p:{regY:-170.8,rotation:7.3,x:76.5,y:240,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:5.9,y:201.3,regY:-53.8,x:81.4}},{t:this.instance_17,p:{regY:-224.1,rotation:-12.3,x:201.9,y:216.1,regX:-12.8}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-5.9,x:203.7,y:204.7}},{t:this.instance_15,p:{regX:12.9,rotation:-7.3,x:128.4,y:514.2,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:5.4,x:154.5,y:516,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.8,x:50.3,y:341,regY:-304.7}},{t:this.instance_23,p:{regY:-181.2,rotation:-9.8,x:101.6,y:409.7,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:6.5,x:166.2,y:405.7,regX:-4.4}},{t:this.instance_21,p:{regY:-127.4,x:131.6,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:6.1,x:77.3,y:240.5,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:4.9,y:201.6,regY:-53.8,x:81.5}},{t:this.instance_17,p:{regY:-224.1,rotation:-10.2,x:201.5,y:216.5,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-4.9,x:203.5,y:205.2}},{t:this.instance_15,p:{regX:12.8,rotation:-6.1,x:124.2,y:514.8,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:4.5,x:156.9,y:516.4,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.6,x:53.2,y:341.9,regY:-304.7}},{t:this.instance_23,p:{regY:-181.2,rotation:-7.8,x:100.9,y:409.4,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:5.2,x:166,y:405.9,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.7,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:4.9,x:78.1,y:240.9,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:3.9,y:201.9,regY:-53.9,x:81.6}},{t:this.instance_17,p:{regY:-224,rotation:-8.2,x:201.1,y:217,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-3.9,x:203.4,y:205.5}},{t:this.instance_15,p:{regX:12.9,rotation:-4.9,x:120.2,y:515.1,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:3.6,x:159.4,y:516.7,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.5,x:56.2,y:342.8,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-5.9,x:100.4,y:409.1,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:3.9,x:165.9,y:406,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.8,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:3.7,x:79,y:241.3,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:2.9,y:202.4,regY:-53.8,x:81.7}},{t:this.instance_17,p:{regY:-224.2,rotation:-6.1,x:200.8,y:217.2,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-2.9,x:203.3,y:206.1}},{t:this.instance_15,p:{regX:13,rotation:-3.7,x:116,y:515.6,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:2.7,x:161.7,y:516.9,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.3,x:59.1,y:343.6,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-3.9,x:99.8,y:408.8,regX:-2.5}},{t:this.instance_22,p:{regY:-185.1,rotation:2.6,x:165.7,y:406.2,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:131.9,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:2.4,x:79.8,y:241.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:1.9,y:202.7,regY:-53.8,x:81.9}},{t:this.instance_17,p:{regY:-224.1,rotation:-4.1,x:200.4,y:217.7,regX:-12.6}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:-1.9,x:203.3,y:206.6}},{t:this.instance_15,p:{regX:13,rotation:-2.4,x:111.8,y:515.7,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:1.8,x:164.2,y:517.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.6,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0.1,x:62.1,y:344.4,regY:-304.8}},{t:this.instance_23,p:{regY:-181.2,rotation:-1.9,x:99.2,y:408.6,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:1.3,x:165.6,y:406.3,regX:-4.5}},{t:this.instance_21,p:{regY:-127.4,x:132,y:342.1}},{t:this.instance_20,p:{regY:-170.7,rotation:1.2,x:80.7,y:242,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-11,rotation:1,y:203.1,regY:-53.8,x:82.1}},{t:this.instance_17,p:{regY:-224.2,rotation:-2,x:199.9,y:218,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-1,x:203,y:207}},{t:this.instance_15,p:{regX:12.9,rotation:-1.2,x:107.5,y:515.7,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:0.9,x:166.5,y:517.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-75.9,y:114.6}},{t:this.instance_24,p:{regX:-14.3,rotation:0,x:65,y:345,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:0,x:98.4,y:408.5,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:0,x:165.6,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:132,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:0,x:82.1,y:242,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:0,y:203.1,regY:-54,x:82.4}},{t:this.instance_17,p:{regY:-224.2,rotation:0,x:199.4,y:218.7,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:0,x:202.9,y:207.7}},{t:this.instance_15,p:{regX:12.9,rotation:0,x:103.4,y:515.9,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:0,x:169.3,y:517.2,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-2.4,x:66.5,y:345.1,regY:-304.8}},{t:this.instance_23,p:{regY:-181.1,rotation:1.2,x:98.4,y:408.7,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:-2.9,x:165.4,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.9,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-1,x:81.5,y:241.9,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:0.8,y:202.9,regY:-54.1,x:82.2}},{t:this.instance_17,p:{regY:-224.2,rotation:3.7,x:198.9,y:220,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:0.2,x:202.7,y:208.1}},{t:this.instance_15,p:{regX:12.8,rotation:0.4,x:101,y:516.2,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-2.2,x:174.5,y:516.9,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-4.8,x:67.9,y:345.1,regY:-304.8}},{t:this.instance_23,p:{regY:-181.1,rotation:2.5,x:98.7,y:409,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-5.7,x:165,y:406.4,regX:-4.7}},{t:this.instance_21,p:{regY:-127.7,x:131.7,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-2.1,x:80.8,y:241.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:1.5,y:202.8,regY:-54,x:82.1}},{t:this.instance_17,p:{regY:-224.2,rotation:7.4,x:198.3,y:221.1,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.4,x:202.4,y:208.3}},{t:this.instance_15,p:{regX:12.9,rotation:0.8,x:98.7,y:516.5,regY:-4.8}},{t:this.instance_14,p:{regX:11.8,rotation:-4.4,x:179.6,y:516.4,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-7.2,x:69.1,y:345,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:3.7,x:98.8,y:409.1,regX:-2.4}},{t:this.instance_22,p:{regY:-185.2,rotation:-8.6,x:164.9,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.6,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-3.1,x:80.2,y:241.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:2.3,y:202.7,regY:-54,x:82}},{t:this.instance_17,p:{regY:-224.3,rotation:11.2,x:197.9,y:222.3,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.6,x:202.3,y:208.6}},{t:this.instance_15,p:{regX:12.9,rotation:1.1,x:96.4,y:516.7,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-6.6,x:184.8,y:515.5,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-9.5,x:70.5,y:345,regY:-304.8}},{t:this.instance_23,p:{regY:-181,rotation:4.9,x:98.8,y:409.5,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-11.4,x:164.7,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.4,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-4.2,x:79.7,y:241.1,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:3,y:202.4,regY:-54.1,x:82}},{t:this.instance_17,p:{regY:-224.2,rotation:14.9,x:197.3,y:223.5,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.7,x:202.1,y:208.9}},{t:this.instance_15,p:{regX:12.8,rotation:1.5,x:94,y:516.8,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:-8.8,x:189.9,y:514.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-11.9,x:72,y:344.9,regY:-304.8}},{t:this.instance_23,p:{regY:-181.1,rotation:6.2,x:98.9,y:409.6,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-14.3,x:164.5,y:406.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.3,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-5.2,x:79.1,y:240.8,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:3.8,y:202.4,regY:-54,x:81.9}},{t:this.instance_17,p:{regY:-224.2,rotation:18.6,x:196.8,y:224.8,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:0.9,x:201.8,y:209.1}},{t:this.instance_15,p:{regX:12.9,rotation:1.9,x:91.8,y:516.9,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:-11,x:195,y:513,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-14.3,x:73.3,y:344.7,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:7.4,x:98.9,y:409.8,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-17.2,x:164.2,y:406.5,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.2,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:-6.3,x:78.6,y:240.5,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:4.6,y:202.2,regY:-54.1,x:81.9}},{t:this.instance_17,p:{regY:-224.2,rotation:22.3,x:196.2,y:226,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:1.1,x:201.7,y:209.3}},{t:this.instance_15,p:{regX:12.9,rotation:2.3,x:89.4,y:517,regY:-4.7}},{t:this.instance_14,p:{regX:11.8,rotation:-13.2,x:199.9,y:511.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-12.5,x:72.3,y:344.8,regY:-304.9}},{t:this.instance_23,p:{regY:-181,rotation:6.5,x:98.8,y:409.7,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-15,x:164.3,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.3,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:-5.5,x:79,y:240.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:4,y:202.4,regY:-54,x:81.9}},{t:this.instance_17,p:{regY:-224.2,rotation:19.5,x:196.6,y:225,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:1,x:201.8,y:209.3}},{t:this.instance_15,p:{regX:12.9,rotation:2,x:91.2,y:517,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:-11.5,x:196.2,y:512.7,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-10.7,x:71.3,y:344.9,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:5.6,x:98.8,y:409.5,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-12.9,x:164.5,y:406.4,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.4,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-4.7,x:79.4,y:241,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:3.4,y:202.4,regY:-54,x:82}},{t:this.instance_17,p:{regY:-224.2,rotation:16.7,x:197,y:224.1,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:0.8,x:201.9,y:209}},{t:this.instance_15,p:{regX:13,rotation:1.7,x:93,y:516.8,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:-9.9,x:192.5,y:513.8,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-8.9,x:70.2,y:344.9,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:4.6,x:98.8,y:409.3,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-10.7,x:164.7,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.5,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-3.9,x:79.8,y:241.1,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:2.8,y:202.5,regY:-54,x:82.1}},{t:this.instance_17,p:{regY:-224.2,rotation:14,x:197.4,y:223.2,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.7,x:202,y:208.8}},{t:this.instance_15,p:{regX:12.8,rotation:1.4,x:94.6,y:516.9,regY:-4.7}},{t:this.instance_14,p:{regX:11.8,rotation:-8.2,x:188.6,y:514.7,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-7.2,x:69.1,y:345,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:3.7,x:98.8,y:409.1,regX:-2.4}},{t:this.instance_22,p:{regY:-185.2,rotation:-8.6,x:164.9,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.6,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-3.1,x:80.2,y:241.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:2.3,y:202.7,regY:-54,x:82}},{t:this.instance_17,p:{regY:-224.3,rotation:11.2,x:197.9,y:222.3,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.6,x:202.3,y:208.5}},{t:this.instance_15,p:{regX:12.9,rotation:1.1,x:96.4,y:516.6,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:-6.6,x:184.8,y:515.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.3,rotation:-5.4,x:68.1,y:345,regY:-304.9}},{t:this.instance_23,p:{regY:-181,rotation:2.8,x:98.7,y:409,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-6.4,x:165,y:406.4,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.7,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:-2.4,x:80.6,y:241.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:1.7,y:202.7,regY:-54.1,x:82.1}},{t:this.instance_17,p:{regY:-224.2,rotation:8.4,x:198.2,y:221.4,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:0.4,x:202.4,y:208.3}},{t:this.instance_15,p:{regX:12.9,rotation:0.8,x:98.2,y:516.5,regY:-4.8}},{t:this.instance_14,p:{regX:11.8,rotation:-4.9,x:180.8,y:516.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-3.6,x:67.1,y:345,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:1.9,x:98.6,y:408.8,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:-4.3,x:165.2,y:406.4,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.8,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:-1.6,x:81.1,y:241.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:1.1,y:202.8,regY:-54,x:82.2}},{t:this.instance_17,p:{regY:-224.2,rotation:5.6,x:198.6,y:220.5,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.3,x:202.5,y:208.2}},{t:this.instance_15,p:{regX:13,rotation:0.6,x:99.9,y:516.3,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:-3.3,x:177,y:516.6,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:-1.8,x:66.1,y:345,regY:-304.9}},{t:this.instance_23,p:{regY:-181,rotation:0.9,x:98.4,y:408.7,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:-2.1,x:165.4,y:406.4,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.9,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:-0.8,x:81.4,y:241.9,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:0.6,y:203,regY:-54,x:82.2}},{t:this.instance_17,p:{regY:-224.2,rotation:2.8,x:198.9,y:219.6,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0.1,x:202.6,y:208}},{t:this.instance_15,p:{regX:12.8,rotation:0.3,x:101.5,y:516.2,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:-1.6,x:173.1,y:517,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.3,rotation:0,x:65,y:344.9,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:0,x:98.4,y:408.5,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:0,x:165.6,y:406.3,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:132,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:0,x:82,y:242,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:0,y:203,regY:-54,x:82.4}},{t:this.instance_17,p:{regY:-224.2,rotation:0,x:199.4,y:218.7,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0,x:202.9,y:207.7}},{t:this.instance_15,p:{regX:12.9,rotation:0,x:103.4,y:515.8,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:0,x:169.2,y:517.2,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.1,x:62.5,y:344.4,regY:-304.8}},{t:this.instance_23,p:{regY:-181.1,rotation:-1.7,x:99.1,y:408.7,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:1.1,x:165.6,y:406.2,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.9,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:1.1,x:81.1,y:241.8,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:0.9,y:202.7,regY:-54.1,x:82.2}},{t:this.instance_17,p:{regY:-224.2,rotation:-1.8,x:199.7,y:218.3,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:-0.9,x:202.9,y:207.3}},{t:this.instance_15,p:{regX:12.9,rotation:-1.1,x:107,y:515.9,regY:-4.8}},{t:this.instance_14,p:{regX:11.9,rotation:0.8,x:167,y:517.2,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.3,x:59.9,y:343.7,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:-3.4,x:99.6,y:409,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:2.3,x:165.7,y:406.2,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.9,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:2.1,x:80.3,y:241.5,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:1.7,y:202.4,regY:-54.1,x:82}},{t:this.instance_17,p:{regY:-224.2,rotation:-3.6,x:200.1,y:218,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-1.7,x:203.1,y:206.8}},{t:this.instance_15,p:{regX:12.9,rotation:-2.1,x:110.7,y:515.9,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:1.6,x:164.8,y:517,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.4,x:57.3,y:343,regY:-304.8}},{t:this.instance_23,p:{regY:-181,rotation:-5.1,x:100.2,y:409.3,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:3.4,x:165.8,y:406,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.8,y:342}},{t:this.instance_20,p:{regY:-170.6,rotation:3.2,x:79.6,y:241.3,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:2.6,y:202.2,regY:-54,x:82}},{t:this.instance_17,p:{regY:-224.2,rotation:-5.4,x:200.5,y:217.7,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-2.6,x:203.1,y:206.3}},{t:this.instance_15,p:{regX:12.9,rotation:-3.2,x:114.4,y:515.8,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:2.4,x:162.8,y:517,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.6,x:54.7,y:342.2,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:-6.9,x:100.7,y:409.4,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:4.6,x:165.9,y:405.9,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.7,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:4.3,x:78.7,y:240.9,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:3.4,y:201.9,regY:-54,x:81.8}},{t:this.instance_17,p:{regY:-224.2,rotation:-7.2,x:200.9,y:217.3,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-3.4,x:203.2,y:205.9}},{t:this.instance_15,p:{regX:12.9,rotation:-4.3,x:118.1,y:515.6,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:3.1,x:160.7,y:516.6,regY:-8.1}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.7,x:52.2,y:341.4,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:-8.6,x:101.2,y:409.7,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:5.7,x:166,y:405.8,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.6,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:5.4,x:78,y:240.6,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:4.3,y:201.6,regY:-54,x:81.7}},{t:this.instance_17,p:{regY:-224.2,rotation:-8.9,x:201.2,y:216.9,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-4.3,x:203.4,y:205.5}},{t:this.instance_15,p:{regX:12.8,rotation:-5.4,x:121.6,y:515.2,regY:-4.7}},{t:this.instance_14,p:{regX:11.8,rotation:3.9,x:158.4,y:516.4,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.8,x:49.7,y:340.7,regY:-304.8}},{t:this.instance_23,p:{regY:-181,rotation:-10.3,x:101.8,y:409.9,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:6.9,x:166.1,y:405.7,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.5,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:6.4,x:77.3,y:240.3,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:5.1,y:201.3,regY:-54,x:81.6}},{t:this.instance_17,p:{regY:-224.2,rotation:-10.7,x:201.6,y:216.5,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-5.1,x:203.4,y:205.1}},{t:this.instance_15,p:{regX:12.9,rotation:-6.4,x:125.3,y:514.9,regY:-4.7}},{t:this.instance_14,p:{regX:11.8,rotation:4.7,x:156.3,y:516.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:1,x:47.1,y:339.7,regY:-304.9}},{t:this.instance_23,p:{regY:-181,rotation:-12,x:102.2,y:410.2,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:8,x:166.2,y:405.6,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.5,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:7.5,x:76.4,y:239.9,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:6,y:201,regY:-54,x:81.5}},{t:this.instance_17,p:{regY:-224.2,rotation:-12.5,x:201.9,y:216.1,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-6,x:203.6,y:204.6}},{t:this.instance_15,p:{regX:12.9,rotation:-7.5,x:128.9,y:514.3,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:5.5,x:154.3,y:515.8,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:1.1,x:44.6,y:338.8,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:-13.7,x:102.9,y:410.4,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:9.1,x:166.3,y:405.5,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.4,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:8.6,x:75.6,y:239.6,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:6.9,y:200.7,regY:-54,x:81.3}},{t:this.instance_17,p:{regY:-224.2,rotation:-14.3,x:202.3,y:215.7,regX:-12.7}},{t:this.instance_16,p:{regX:28.9,regY:-44.9,rotation:-6.9,x:203.5,y:204.2}},{t:this.instance_15,p:{regX:12.8,rotation:-8.6,x:132.4,y:513.7,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:6.3,x:152.2,y:515.5,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:1,x:47.5,y:339.8,regY:-304.9}},{t:this.instance_23,p:{regY:-181,rotation:-11.8,x:102.2,y:410.1,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:7.8,x:166.2,y:405.6,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.5,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:7.3,x:76.6,y:239.9,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:5.9,y:200.9,regY:-54.1,x:81.5}},{t:this.instance_17,p:{regY:-224.2,rotation:-12.3,x:201.8,y:216.1,regX:-12.8}},{t:this.instance_16,p:{regX:29.1,regY:-44.9,rotation:-5.9,x:203.6,y:204.7}},{t:this.instance_15,p:{regX:12.9,rotation:-7.3,x:128.4,y:514.3,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:5.4,x:154.6,y:516,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.8,x:50.4,y:340.9,regY:-304.8}},{t:this.instance_23,p:{regY:-181,rotation:-9.8,x:101.5,y:409.9,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:6.5,x:166,y:405.7,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.6,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:6.1,x:77.5,y:240.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:4.9,y:201.3,regY:-54.1,x:81.6}},{t:this.instance_17,p:{regY:-224.2,rotation:-10.2,x:201.4,y:216.6,regX:-12.8}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-4.9,x:203.4,y:205.2}},{t:this.instance_15,p:{regX:12.8,rotation:-6.1,x:124.2,y:514.9,regY:-4.7}},{t:this.instance_14,p:{regX:11.8,rotation:4.5,x:156.9,y:516.3,regY:-7.9}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.6,x:53.3,y:341.8,regY:-304.9}},{t:this.instance_23,p:{regY:-181,rotation:-7.8,x:101,y:409.6,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:5.2,x:165.9,y:405.9,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.7,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:4.9,x:78.3,y:240.7,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:3.9,y:201.8,regY:-54,x:81.8}},{t:this.instance_17,p:{regY:-224.2,rotation:-8.2,x:201.1,y:217,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-3.9,x:203.3,y:205.7}},{t:this.instance_15,p:{regX:12.9,rotation:-4.9,x:120.1,y:515.4,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:3.6,x:159.4,y:516.5,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.5,x:56.3,y:342.7,regY:-304.8}},{t:this.instance_23,p:{regY:-181.1,rotation:-5.9,x:100.3,y:409.3,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:3.9,x:165.9,y:406,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.7,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:3.7,x:79.3,y:241.1,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:2.9,y:202.1,regY:-54,x:81.9}},{t:this.instance_17,p:{regY:-224.2,rotation:-6.1,x:200.6,y:217.4,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-2.9,x:203.2,y:206.2}},{t:this.instance_15,p:{regX:13,rotation:-3.7,x:116,y:515.8,regY:-4.6}},{t:this.instance_14,p:{regX:11.9,rotation:2.7,x:161.8,y:516.8,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.3,x:59.2,y:343.5,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:-3.9,x:99.8,y:409,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:2.6,x:165.8,y:406.1,regX:-4.6}},{t:this.instance_21,p:{regY:-127.7,x:131.8,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:2.4,x:80.1,y:241.4,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:2,y:202.4,regY:-54,x:82}},{t:this.instance_17,p:{regY:-224.2,rotation:-4.1,x:200.2,y:217.8,regX:-12.7}},{t:this.instance_16,p:{regX:29.1,regY:-44.8,rotation:-2,x:203.2,y:206.7}},{t:this.instance_15,p:{regX:13,rotation:-2.4,x:111.8,y:515.9,regY:-4.7}},{t:this.instance_14,p:{regX:12,rotation:1.8,x:164.3,y:517,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.2,rotation:0.2,x:62.1,y:344.3,regY:-304.8}},{t:this.instance_23,p:{regY:-181,rotation:-2,x:99.1,y:408.8,regX:-2.5}},{t:this.instance_22,p:{regY:-185.2,rotation:1.3,x:165.7,y:406.3,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:131.9,y:342}},{t:this.instance_20,p:{regY:-170.7,rotation:1.2,x:80.9,y:241.8,regX:11.7}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.9,rotation:1,y:202.7,regY:-54,x:82.1}},{t:this.instance_17,p:{regY:-224.2,rotation:-2,x:199.8,y:218.3,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.9,rotation:-1,x:203,y:207.1}},{t:this.instance_15,p:{regX:12.9,rotation:-1.2,x:107.6,y:515.9,regY:-4.7}},{t:this.instance_14,p:{regX:11.9,rotation:0.9,x:166.7,y:517.1,regY:-8}}]},1).to({state:[{t:this.instance_25,p:{regX:-6.7,regY:-76,y:114.5}},{t:this.instance_24,p:{regX:-14.3,rotation:0,x:65,y:344.9,regY:-304.9}},{t:this.instance_23,p:{regY:-181.1,rotation:0,x:98.4,y:408.5,regX:-2.6}},{t:this.instance_22,p:{regY:-185.2,rotation:0,x:165.6,y:406.3,regX:-4.5}},{t:this.instance_21,p:{regY:-127.7,x:132,y:342}},{t:this.instance_20,p:{regY:-170.8,rotation:0,x:82,y:242,regX:11.8}},{t:this.instance_19,p:{regY:-250.6,y:184.3}},{t:this.instance_18,p:{regX:-10.8,rotation:0,y:203,regY:-54,x:82.4}},{t:this.instance_17,p:{regY:-224.2,rotation:0,x:199.4,y:218.7,regX:-12.7}},{t:this.instance_16,p:{regX:29,regY:-44.8,rotation:0,x:202.9,y:207.7}},{t:this.instance_15,p:{regX:12.9,rotation:0,x:103.4,y:515.8,regY:-4.8}},{t:this.instance_14,p:{regX:12,rotation:0,x:169.2,y:517.2,regY:-8}}]},1).to({state:[]},1).wait(36));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(56,56,56,0.098)").s().p("AotBtQjoguAAg/QAAg/DogtQDogsFGAAQFGAADnAsQDoAtAAA/QAAA/joAuQjnAslGABQlGgBjogsg");
	this.shape_1.setTransform(127.3,514.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogtAAg/QAAg/DogtQDogsFGAAQFGAADnAsQDoAtAAA/QAAA/joAtQjnAtlGAAQlGAAjogtg");
	this.shape_2.setTransform(129,514.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogtAAg/QAAg/DogtQDngtFGAAQFHAADnAtQDoAtAAA/QAAA/joAtQjnAtlHAAQlGAAjngtg");
	this.shape_3.setTransform(130.8,514.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogsAAhAQAAg/DogtQDngsFGAAQFHAADnAsQDoAtAAA/QAABAjoAsQjnAtlHAAQlGAAjngtg");
	this.shape_4.setTransform(132.5,514.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogtAAg/QAAg/DogtQDngsFGAAQFHAADoAsQDnAtAAA/QAAA/jnAtQjoAtlHAAQlGAAjngtg");
	this.shape_5.setTransform(134.2,514.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogtAAg/QAAg/DogtQDngtFGAAQFHAADoAtQDnAtAAA/QAAA/jnAtQjoAulHgBQlGABjngug");
	this.shape_6.setTransform(136,514.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogsAAhAQAAg/DogtQDngsFGAAQFHAADoAsQDnAtAAA/QAABAjnAsQjoAtlHAAQlGAAjngtg");
	this.shape_7.setTransform(137.7,513.9);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(56,56,56,0.098)").s().p("AotBtQjogtAAhAQAAg/DogtQDngsFGAAQFHAADnAsQDoAtAAA/QAABAjoAtQjnAslHABQlGgBjngsg");
	this.shape_8.setTransform(133.8,514.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogtAAg/QAAg/DogtQDogsFGAAQFGAADoAsQDnAtAAA/QAAA/jnAtQjoAtlGAAQlGAAjogtg");
	this.shape_9.setTransform(131.2,514.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(56,56,56,0.098)").s().p("ApKBtQj0guAAg/QAAg/D0gtQDzgsFYAAQFXAADzAsQD0AtAAA/QAAA/j0AuQjzAslXABQlYgBjzgsg");
	this.shape_10.setTransform(127.4,514.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(56,56,56,0.098)").s().p("ApoBtQkAguAAg/QAAg/EAgtQEAgsFoAAQFpAAEAAsQEAAtAAA/QAAA/kAAuQkAAslpABQlogBkAgsg");
	this.shape_11.setTransform(127.5,514.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(56,56,56,0.098)").s().p("AqFBtQkMguAAg/QAAg/EMgtQEMgsF6AAQF5AAEMAsQEMAtAAA/QAAA/kMAuQkMAsl5ABQl6gBkMgsg");
	this.shape_12.setTransform(127.6,514.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(56,56,56,0.098)").s().p("AqiBtQkYguAAg/QAAg/EYgtQEYgsGLAAQGKAAEZAsQEYAtgBA/QABA/kYAuQkZAsmKABQmLgBkYgsg");
	this.shape_13.setTransform(127.7,514.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(56,56,56,0.098)").s().p("ArABtQkkguAAg/QAAg/EkgtQEkgsGcAAQGdAAEjAsQElAtAAA/QAAA/klAuQkjAsmdABQmcgBkkgsg");
	this.shape_14.setTransform(127.8,514.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(56,56,56,0.098)").s().p("AreBtQkvguAAg/QAAg/EvgtQExgsGtAAQGtAAExAsQEwAtAAA/QAAA/kwAuQkxAsmtABQmtgBkxgsg");
	this.shape_15.setTransform(127.9,514.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(56,56,56,0.098)").s().p("Ar7BtQk8guAAg/QAAg/E8gtQE9gsG+AAQG/AAE8AsQE9AtAAA/QAAA/k9AuQk8Asm/ABQm+gBk9gsg");
	this.shape_16.setTransform(127.9,514.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(56,56,56,0.098)").s().p("AsYBtQlIguAAg/QAAg/FIgtQFIgsHQAAQHQAAFIAsQFJAtAAA/QAAA/lJAuQlIAsnQABQnQgBlIgsg");
	this.shape_17.setTransform(128,514.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(56,56,56,0.098)").s().p("Ar3BtQk6guAAg/QAAg/E6gtQE7gsG8AAQG8AAE7AsQE7AtAAA/QAAA/k7AuQk7Asm8ABQm8gBk7gsg");
	this.shape_18.setTransform(127.9,514.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(56,56,56,0.098)").s().p("ArVBtQktguAAg/QAAg/EtgtQEtgsGoAAQGpAAEsAsQEtAtABA/QgBA/ktAuQksAsmpABQmogBktgsg");
	this.shape_19.setTransform(127.8,514.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(56,56,56,0.098)").s().p("Aq0BtQkeguAAg/QAAg/EegtQEggsGUAAQGWAAEeAsQEfAtAAA/QAAA/kfAuQkeAsmWABQmUgBkggsg");
	this.shape_20.setTransform(127.7,514.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(56,56,56,0.098)").s().p("AqSBtQkRguAAg/QAAg/ERgtQESgsGAAAQGCAAEQAsQESAtAAA/QAAA/kSAuQkQAsmCABQmAgBkSgsg");
	this.shape_21.setTransform(127.6,514.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(56,56,56,0.098)").s().p("ApwBtQkDguAAg/QAAg/EDgtQEDgsFtAAQFuAAEDAsQEDAtAAA/QAAA/kDAuQkDAsluABQltgBkDgsg");
	this.shape_22.setTransform(127.5,514.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(56,56,56,0.098)").s().p("ApOBtQj2guAAg/QAAg/D2gtQD1gsFaAAQFaAAD1AsQD1AtAAA/QAAA/j1AuQj1AslaABQlagBj1gsg");
	this.shape_23.setTransform(127.4,514.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(56,56,56,0.098)").s().p("AotBtQjoguAAg/QAAg+DoguQDngsFGAAQFHAADoAsQDnAuAAA+QAAA/jnAuQjoAslHABQlGgBjngsg");
	this.shape_24.setTransform(131.8,514.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogsAAhAQAAg/DogtQDogsFGAAQFGAADoAsQDnAtAAA/QAABAjnAsQjoAtlGAAQlGAAjogtg");
	this.shape_25.setTransform(130.3,514.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(56,56,56,0.098)").s().p("AotBtQjogtAAhAQAAg+DoguQDogsFGAAQFGAADoAsQDnAuAAA+QAABAjnAtQjoAslGABQlGgBjogsg");
	this.shape_26.setTransform(127.4,514.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(56,56,56,0.098)").s().p("AotBsQjogsAAhAQAAg/DogtQDogtFGAAQFGAADoAtQDnAtAAA/QAABAjnAsQjoAulGgBQlGABjogug");
	this.shape_27.setTransform(125.9,514.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(56,56,56,0.098)").s().p("ApKBsQj0gsAAhAQAAg/D0gtQD0gtFXAAQFXAAD0AtQDzAtAAA/QAABAjzAsQj0AulXgBQlXABj0gug");
	this.shape_28.setTransform(126,514.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(56,56,56,0.098)").s().p("ApoBsQkAgsAAhAQAAg/EAgtQEBgtFoAAQFoAAEAAtQEAAtAAA/QAABAkAAsQkAAulogBQloABkBgug");
	this.shape_29.setTransform(126.1,514.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(56,56,56,0.098)").s().p("AqFBsQkMgsAAhAQAAg/EMgtQENgtF5AAQF6AAEMAtQELAtAAA/QAABAkLAsQkMAul6gBQl5ABkNgug");
	this.shape_30.setTransform(126.2,514.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(56,56,56,0.098)").s().p("AqjBsQkXgsAAhAQAAg/EXgtQEZgtGKAAQGMAAEXAtQEYAtAAA/QAABAkYAsQkXAumMgBQmKABkZgug");
	this.shape_31.setTransform(126.3,514.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(56,56,56,0.098)").s().p("ArABsQkkgsAAhAQAAg/EkgtQEkgtGcAAQGdAAEjAtQElAtAAA/QAABAklAsQkjAumdgBQmcABkkgug");
	this.shape_32.setTransform(126.4,514.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(56,56,56,0.098)").s().p("AreBsQkvgsAAhAQAAg/EvgtQExgtGtAAQGuAAEwAtQEwAtAAA/QAABAkwAsQkwAumugBQmtABkxgug");
	this.shape_33.setTransform(126.5,514.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(56,56,56,0.098)").s().p("Ar7BsQk7gsAAhAQAAg/E7gtQE9gtG+AAQG/AAE8AtQE8AtABA/QgBBAk8AsQk8Aum/gBQm+ABk9gug");
	this.shape_34.setTransform(126.6,514.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(56,56,56,0.098)").s().p("AsYBsQlIgsAAhAQAAg/FIgtQFIgtHQAAQHQAAFIAtQFJAtAAA/QAABAlJAsQlIAunQgBQnQABlIgug");
	this.shape_35.setTransform(126.7,514.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(56,56,56,0.098)").s().p("AgGCZQmzAAk2gsIgIgBQiCgShMgWQhsgeAAgmQAAg+E4gtIARgCQE3gsGxABIACAAQG0gBE2AsIAMACQEzAsAHA+IAAABQgBAmhvAfQhLAVh+ASIgVADQk0AqmvAAIgHAAg");
	this.shape_36.setTransform(126.7,514.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(56,56,56,0.098)").s().p("AgECaQmhAAkqgsIgIgBQh8gUhIgVQhmgfAAglQAAg+EogtIAQgDQEpgrGgAAIACAAQGhAAEpArIAMACQEkAtAGA+IAAACQAAAlhpAeQhHAWh4ASIgUADQknAqmdABIgGAAg");
	this.shape_37.setTransform(126.8,514.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(56,56,56,0.098)").s().p("AgDCZQmPAAkcgsIgIgBQh2gThGgVQhggfAAglQAAg+EZgtIAQgCQEcgrGNgBIACAAQGPABEcArIAMACQEVAsAFA/IAAABQgBAlhiAeQhDAVhzASIgTADQkZArmLAAIgGAAg");
	this.shape_38.setTransform(126.9,514.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(56,56,56,0.098)").s().p("AgCCZQl9AAkPgtIgHgBQhxgShCgWQhbgfAAgkQAAg+EKgtIAPgCQEOgsF8AAIABAAQF9AAEPAsIALACQEIAsAEA+IAAACQgCAkhbAfQhAAUhsASIgSADQkNAsl5AAIgFAAg");
	this.shape_39.setTransform(127,514.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(56,56,56,0.098)").s().p("AgBCaQlrgBkBgsIgGgBQhtgTg+gXQhWgeAAgkQABg9D5gtIAPgCQEBgtFqABIABAAQFrgBECAtIAKACQD6AsADA+IAAACQgDAjhUAeQg9AVhlASIgRADQj/AsloABIgFAAg");
	this.shape_40.setTransform(127.1,514.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(56,56,56,0.098)").s().p("AAACZQlZABj1guIgFgBQhmgTg7gVQhQggAAgjQAAg9DrgtIANgDQD0grFYgBIABAAQFZABDzArIALACQDrAtACA+IAAADQgCAhhOAfQg4AUhgATIgRADQjyAslVAAIgFAAg");
	this.shape_41.setTransform(127.2,514.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(56,56,56,0.098)").s().p("AotBtQhlgUg4gXQhLgfAAgjQAAg/DogtQDogsFGAAQFGAADnAsQDoAtAAA/QAAAjhKAfQg5AXhlAUQjnAslGABQlGgBjogsg");
	this.shape_42.setTransform(127.3,514.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:127.3,y:514.7}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:134.2,y:514.2}}]},1).to({state:[{t:this.shape_6,p:{x:136}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5,p:{x:135.1,y:514.1}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_9,p:{x:131.2,y:514.4}}]},1).to({state:[{t:this.shape_9,p:{x:129.9,y:514.5}}]},1).to({state:[{t:this.shape_1,p:{x:128.6,y:514.6}}]},1).to({state:[{t:this.shape_1,p:{x:127.3,y:514.7}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_1,p:{x:127.3,y:514.7}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:134.2,y:514.2}}]},1).to({state:[{t:this.shape_6,p:{x:136}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6,p:{x:133.3}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:130.3,y:514.1}}]},1).to({state:[{t:this.shape_25,p:{x:128.8,y:514.2}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(6).to({_off:false},0).wait(1).to({x:136.4,y:514},0).to({_off:true},1).wait(27).to({_off:false,x:137.7,y:513.9},0).wait(1).to({x:136.2,y:514},0).wait(1).to({x:134.8},0).to({_off:true},1).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.8,275.4,176.6,519.7);
// library properties:
lib.properties = {
	width: 290,
	height: 530,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(oldman03 = oldman03||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var oldman03, images, createjs, ss, AdobeAn;