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


(lib.xiu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D9282").s().p("Al4HgIBSvPIKfOOQi4BRkuAAQiYAAhzgQg");
	this.shape.setTransform(3.9,-25.7,0.518,0.518,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-53.5,39.1,53.6);


(lib.tui2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B3A1B").ss(4).p("Ag3iDQB/AKB+AdQD9A6gJBgQgKBml2AJQiJADiLgLQiCgLgogQQg/gYAMiJQADgrAKgyIAKgpIAcAXQAkAcAnAVQB9BDBxgV");
	this.shape.setTransform(10.3,-6.8,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B3A1B").s().p("AjaCdQiCgLgogQQg/gYAMiJQADgrAKgyIAKgpIAcAXQAkAcAnAVQB9BDBxgVIAUhcQB/AKB+AdQD9A6gJBgQgKBml2AJIg/ABQhrAAhqgJg");
	this.shape_1.setTransform(10.3,-6.5,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECCDAE").s().p("ABbHwQgjjqhFlaIiBpvQgBgGieg2Qidg2AAgBICboUQAhAHAxARQBkAhBWA0QEVCnA2EqQBFF0AVCFQAYCaAUDFQBQMriNG8IkKAYQBRj8hdpfg");
	this.shape_2.setTransform(-9.5,-58.3,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-111.7,60.3,113.7);


(lib.tui1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B3A1B").ss(4).p("AgpiBQB7AJB7AcQD2A5gJBgQgKBnl2AIQiJAEiLgMQiCgLgogPQg/gZAMiJQADgrAKgxIAKgpQAsAjBDAeQCFA9BxgU");
	this.shape.setTransform(9.5,-6.8,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B3A1B").s().p("AjaCdQiCgLgogQQg/gYAMiJQADgrAKgyIAKgpQAsAjBDAfQCFA9BxgVIAShOQB7AJB7AdQD2A5gJBgQgKBml2AJIg/ABQhrAAhqgJg");
	this.shape_1.setTransform(9.5,-6.5,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECCDAE").s().p("ABbHwQgjjphFlbIiBpvQgBgHieg1Qidg2AAgBICboVQAhAIAxARQBkAhBWAzQEVCoA2EpQBFF2AVCDQAYCbAUDFQBQMqiNG9IkKAYQBRj8hdpfg");
	this.shape_2.setTransform(-8.8,-62,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-115.4,64.3,131.1);


(lib.sofa01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0643A").s().p("A5lJ5QlnqDEFpuMAw8AAAQB4AABkBEQBkBEAtBvQBwESglEEQgiD3ipDtg");
	this.shape.setTransform(5.2,-110,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181818").s().p("Ai8BXIAAitIF6AAIAACtg");
	this.shape_1.setTransform(55.3,-3.4,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181818").s().p("AjEBXIAAitIGJAAIAACtg");
	this.shape_2.setTransform(-44,-3.4,0.394,0.394);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0B257").s().p("EgV9AyVMAAAgoBMgHRgypQgXigBKiPQBLiRCQhDQDGhbDvgZQDxgZDkAxQB3AZBTBeQBSBdAQB8MAHTA24IAAJAIcLAAIAAfBg");
	this.shape_3.setTransform(-4,-133.7,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-260.6,155.8,260.7);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(247,236,92,0)","rgba(247,236,92,0)"],[0,0.784,1],108.2,133.2,-57.9,-29.6).s().p("ATK5uIWobqI63XYMg4sAAbg");
	this.shape.setTransform(0,-64.9,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.749)","rgba(247,236,92,0)","rgba(247,236,92,0)"],[0,0.784,1],42.6,52.5,-22.8,-11.6).s().p("AHjqIII7K5IqmJNI2VALg");
	this.shape_1.setTransform(0,-64.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(247,236,92,0)","rgba(247,236,92,0)"],[0,0.784,1],42.6,52.5,-22.8,-11.6).s().p("AHjqIII7K5IqmJNI2VALg");
	this.shape_2.setTransform(0,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.4,-129.8,210.8,129.8);


(lib.ku1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86742C").s().p("AqkF9QikgEhyh3Qhyh4AEijIAAgIQAEilB4hyQB3hyClAEIa5AqIgUMjg");
	this.shape.setTransform(0,-16.6,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-33.3,83.9,33.3);


(lib.keybord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F9F8").s().p("AiFA9IjIgzQgJgCgDgDQgDgCAFgBIG6hCQALgCAYAHIDHAyQAKADADACQADADgFAAIm6BCIgGABQgMAAgRgFg");
	this.shape.setTransform(-19.2,-22.6,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F9F8").s().p("AALARIhWgXQgVgGALgCIAqgHQAMgBAVAGIBXAXQAJADADACQADADgFAAIgqAGIgGABQgLAAgRgFg");
	this.shape_1.setTransform(-25.8,-16.6,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F9F8").s().p("AgKAUIhUgXQgKgCgDgDQgDgCAFgBIBQgMQANgCAWAGIBVAXQAWAHgMABIhQANIgGAAQgMAAgRgFg");
	this.shape_2.setTransform(-21.6,-17.3,0.394,0.394);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgJgCgEgDQgDgCAFgBIAtgHQAMgBAXAGIBUAXQAKACADADQADACgFABIgsAHIgHAAQgMAAgRgFg");
	this.shape_3.setTransform(-17.5,-17.9,0.394,0.394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgWgGALgCIAsgHQANgCAXAHIBUAXQAWAGgLACIgtAHIgGAAQgMAAgRgFg");
	this.shape_4.setTransform(-14.1,-18.4,0.394,0.394);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgJgCgEgDQgDgCAFgBIAtgHQANgCAWAHIBUAXQAKACADADQADADgFAAIgsAHIgHAAQgMAAgRgFg");
	this.shape_5.setTransform(-10.8,-18.9,0.394,0.394);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAsgHQAOgCAWAHIBUAXQAJACAEADQADADgFAAIgtAHIgGAAQgLAAgSgFg");
	this.shape_6.setTransform(-7.4,-19.4,0.394,0.394);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F9F8").s().p("AAIARIhVgXQgJgCgDgDQgDgCAFgBIAsgHQANgBAXAGIBUAWQAVAHgLACIgsAHIgGAAQgMAAgRgFg");
	this.shape_7.setTransform(-4.1,-19.9,0.394,0.394);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAsgHQANgCAXAHIBUAXQAJACAEADQADACgFABIgtAHIgGAAQgMAAgRgFg");
	this.shape_8.setTransform(-0.7,-20.4,0.394,0.394);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgEgCAGgBIAsgHQANgBAXAGIBUAXQAWAGgMACIgsAHIgGAAQgLAAgSgFg");
	this.shape_9.setTransform(2.7,-20.9,0.394,0.394);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7F9F8").s().p("AgJAUIhUgXQgXgHAMgBIBQgNQAOgCAVAHIBUAXQAKACADADQAEADgGAAIhQAMIgHABQgMAAgQgFg");
	this.shape_10.setTransform(-18.9,-15,0.394,0.394);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7F9F8").s().p("AAIARIhUgWQgVgHAKgCIAtgHQANgCAWAHIBUAXQAKACADADQADADgFAAIgsAHIgHAAQgLAAgSgFg");
	this.shape_11.setTransform(-14.9,-15.7,0.394,0.394);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7F9F8").s().p("AAIARIhVgXQgJgCgDgDQgDgCAFgBIAsgHQALgCAZAHIBUAWQAVAHgLACIgsAHIgGAAQgMAAgRgFg");
	this.shape_12.setTransform(-11.5,-16.2,0.394,0.394);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAsgHQANgCAXAHIBUAXQAJACAEADQADACgFABIgtAHIgGAAQgMAAgRgFg");
	this.shape_13.setTransform(-8.1,-16.7,0.394,0.394);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgJgCgEgDQgDgCAFgBIAtgHQAMgCAXAHIBUAXQAKACADADQADACgFABIgtAHIgGAAQgLAAgSgFg");
	this.shape_14.setTransform(-4.8,-17.2,0.394,0.394);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgWgGAMgCIAsgHQANgCAWAHIBUAXQAWAGgLACIgtAHIgGAAQgMAAgRgFg");
	this.shape_15.setTransform(-1.4,-17.7,0.394,0.394);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgJgCgEgDQgDgCAFgBIAtgHQAMgCAXAHIBUAXQAKACADADQADADgFAAIgtAHIgGAAQgLAAgSgFg");
	this.shape_16.setTransform(1.9,-18.2,0.394,0.394);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7F9F8").s().p("AAIARIhUgWQgVgHALgCIAsgHQAOgCAVAHIBUAXQAKACADADQADADgFAAIgsAHIgHAAQgLAAgSgFg");
	this.shape_17.setTransform(5.3,-18.7,0.394,0.394);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAtgHQAMgCAXAHIBUAXQAKACADADQADACgFABIgtAHIgGAAQgLAAgSgFg");
	this.shape_18.setTransform(-10.4,-13.7,0.394,0.394);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgVgGALgCIAsgHQANgCAWAHIBUAXQAKACADADQADADgFAAIgsAHIgHAAQgMAAgRgFg");
	this.shape_19.setTransform(-7,-14.2,0.394,0.394);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAtgHQAMgCAXAHIBUAXQAKACADADQADADgFAAIgtAHIgGAAQgLAAgSgFg");
	this.shape_20.setTransform(-3.7,-14.7,0.394,0.394);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAtgGQANgDAWAHIBUAXQAJACAEADQADADgFAAIgtAHIgGAAQgMAAgRgFg");
	this.shape_21.setTransform(-0.3,-15.2,0.394,0.394);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgCQgDgDAFgBIAtgHQALgCAYAHIBUAXQAKADADACQADACgFABIgtAHIgEAAQgLAAgUgFg");
	this.shape_22.setTransform(3,-15.8,0.394,0.394);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAsgHQANgCAXAHIBUAXQAJACAEADQADACgFABIgtAHIgGAAQgMAAgRgFg");
	this.shape_23.setTransform(-6.7,-11.6,0.394,0.394);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7F9F8").s().p("AAJARIhVgXQgVgGALgCIAsgHQANgBAXAGIBUAXQAJACADADQADACgFABIgsAHIgHAAQgLAAgRgFg");
	this.shape_24.setTransform(-3.4,-12.2,0.394,0.394);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAsgHQANgCAXAHIBUAXQAJACAEADQADADgFAAIgtAHIgGAAQgMAAgRgFg");
	this.shape_25.setTransform(0,-12.7,0.394,0.394);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7F9F8").s().p("AAIARIhUgXQgKgCgDgDQgDgCAFgBIAtgHQANgCAWAHIBUAXQAKACADADQADADgFAAIgtAHIgGAAQgLAAgSgFg");
	this.shape_26.setTransform(3.3,-13.2,0.394,0.394);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7F9F8").s().p("AAMASIhYgYQgIgCgDgDQgDgCAEgBIAqgGQAMgCAVAGIBXAYQAJACADADQADACgFABIgpAGIgFAAQgLAAgRgEg");
	this.shape_27.setTransform(4.8,-10.8,0.394,0.394);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7F9F8").s().p("AAMARIhXgYQgJgCgDgDQgDgCAFgBIApgGQALgBAWAFIBXAYQAJADADACQADACgFABIgpAGIgGABQgKAAgRgFg");
	this.shape_28.setTransform(1.5,-10.3,0.394,0.394);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7F9F8").s().p("AADANIhAgRQgHgCgDgCQAAAAgBAAQAAgBAAAAQABAAAAgBQABAAABAAIAogGQAIgCATAFIBAARIAKAEQAAABABAAQAAABAAAAQgBAAAAABQgBAAgBAAIgoAGIgGAAQgIAAgNgEg");
	this.shape_29.setTransform(6.8,-8.7,0.394,0.394);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7F9F8").s().p("AACAOIg/gSQgIgCgCgCQgBAAAAAAQAAgBAAAAQAAAAABgBQABAAABAAIAogGQAKgBARAEIBAASQAIACACACQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgpAGIgEAAQgJAAgPgDg");
	this.shape_30.setTransform(3.8,-8.3,0.394,0.394);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7F9F8").s().p("AALARIhWgXQgJgCgDgDQgDgCAEgBIArgHQAMgBAVAGIBXAXQAJACADADQADADgFAAIgqAGIgHABQgLAAgQgFg");
	this.shape_31.setTransform(-29,-16.1,0.394,0.394);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7F9F8").s().p("AALARIhXgXQgJgDgDgCQgDgCAFgBIAqgHQAMgCAWAHIBWAXQAJACADADQAEACgFABIgrAGIgGABQgKAAgRgFg");
	this.shape_32.setTransform(-22.9,-14.4,0.394,0.394);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7F9F8").s().p("AghAXIhUgXQgJgCgEgCQgDgDAFgBIB+gTQAMgCAXAHIBUAWQAXAHgMACIh+ATIgFAAQgMAAgSgFg");
	this.shape_33.setTransform(-15.2,-13,0.394,0.394);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7F9F8").s().p("AgBASIhUgWQgKgDgDgCQgEgDAGgBIA/gJQAMgCAXAGIBUAXQAWAHgLABIg/AKIgHABQgKAAgSgGg");
	this.shape_34.setTransform(-10.4,-11.1,0.394,0.394);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7F9F8").s().p("AgcAWIhUgWQgKgDgDgCQgDgDAFgBIB0gRQAMgCAYAGIBUAXQAWAHgLABIh1ASIgGABQgLAAgSgGg");
	this.shape_35.setTransform(-3.3,-9.6,0.394,0.394);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7F9F8").s().p("AAAAOIhAgRQgHgCgDgCQgBAAAAgBQAAAAAAAAQAAgBABAAQABAAABgBIAugHQALgBAPAFIBBARQAHACADACQABABAAAAQAAABAAAAQAAAAgBABQgBAAgBAAIguAGIgFABQgJAAgNgEg");
	this.shape_36.setTransform(0.7,-7.8,0.394,0.394);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7F9F8").s().p("AALARIhXgYQgJgCgDgDQgDgCAFgBIAqgGQALgBAXAFIBWAYQAJACADADQAEACgFABIgrAGIgGABQgLAAgQgFg");
	this.shape_37.setTransform(-32.2,-15.6,0.394,0.394);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7F9F8").s().p("AALARIhWgYQgJgCgEgCQgDgCAGgBIApgHQALgBAXAFIBXAYQAIADADACQADACgEABIgrAGIgGABQgLAAgQgFg");
	this.shape_38.setTransform(-26.2,-13.9,0.394,0.394);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7F9F8").s().p("AALARIhWgXQgKgDgDgCQgDgCAFgBIArgHQAMgCAVAHIBXAXQAJADADACQADADgFAAIgqAGIgHABQgMAAgPgFg");
	this.shape_39.setTransform(-20.1,-12.2,0.394,0.394);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7F9F8").s().p("AAKARIhWgXQgJgDgDgCQgDgCAFgBIAqgHQAMgCAWAHIBWAXQAVAHgLABIgqAHIgGAAQgLAAgRgFg");
	this.shape_40.setTransform(-14,-10.5,0.394,0.394);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7F9F8").s().p("AALARIhXgXQgIgDgEgCQgCgCAEgBIAqgHQAPgBATAGIBXAXQAIADAEACQACADgEAAIgrAHIgGAAQgLAAgQgFg");
	this.shape_41.setTransform(-8,-8.8,0.394,0.394);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7F9F8").s().p("AAAAOIhAgRQgHgCgDgCQAAgBgBAAQAAAAAAgBQAAAAABAAQABAAABgBIAugHQAKgBARAFIBAARIAKAEQABAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIguAHIgGABQgJAAgMgEg");
	this.shape_42.setTransform(-2.5,-7.3,0.394,0.394);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A6A7AB").s().p("AjNFfQgTgJgLgLIzFl6QgqgQAAgQQAAgPArgHIZOkDQAqgHA9AGQA9AGArAQIRCGKQArAQAAAPQAAAQgrAHI40D/IgRABQgbAAgdgOg");
	this.shape_43.setTransform(0,-16.2,0.394,0.394);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#79888B").s().p("ApuiQQgSgGgJgMQgHgKgCgRIgJg4IUeFMIAZCfI0KmGg");
	this.shape_44.setTransform(-32.7,-9.7,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-30.6,118.2,30.7);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6543C").s().p("AhBCgQiIgNgoiaQgNgxgCg5IABgvQBnBCDWAdQBEAJBGAEIA5ADIgUAkQgbApghAjQhgBih2AAIgcgBg");
	this.shape.setTransform(9.3,-18.6,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBEC0").s().p("AKrCTQjLiwjpg2Qjog2kBBFQihAsibBYQhOAtguAkQgIAGgJgBQgKgBgGgHQgFgIABgJQABgKAHgGQAzgoBQguQCdhZCnguQDlg+DYAiQEdAtDvDPQAHAHABAJQAAAKgGAHQgGAHgKABIgBAAQgJAAgGgGg");
	this.shape_1.setTransform(3.8,-92.1,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBEC0").s().p("ArKCgQgKgBgGgIQgGgIABgKQACgJAHgGQA0gmBSguQChhYCrgyQDphFDcASQEiAYDzCsQAIAGABAJQACAKgGAHQgFAIgKACQgJABgIgFQjOiSjugkQjtgjkIBNQimAxifBXQhPAtgwAjQgGAFgHAAIgDAAg");
	this.shape_2.setTransform(4.8,-87.9,0.394,0.394);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABECpQgHAAgEgGQhmh6gpiUQAKgiALgbQAjCtBxCIQAFAFgBAHQgBAHgFAFQgEAEgGAAIgDAAg");
	this.shape_3.setTransform(-36,-61.9,0.394,0.394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABECfQgHAAgFgGQhjh3griUIAZgsQAlChBrCAQAEAFAAAHQgBAHgFAFQgFAEgGAAIgCAAg");
	this.shape_4.setTransform(-32.4,-70,0.394,0.394);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBEC0").s().p("AgpEuQgWgqAEgvIA3pAQBUD/gZENQgKBogaBkQgmgXgWgog");
	this.shape_5.setTransform(43.8,-53.5,0.394,0.394);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBEC0").s().p("AiUIcIh2gLQgIhvALhtQAYkDB5jfQB1jZC7iXQAuA0AWBBQAWBEgHBHIgxIIQgNCMhsBZQheBOh1AAQgSAAgSgCg");
	this.shape_6.setTransform(-31.2,-67.6,0.394,0.394);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6543C").s().p("ABTAbQgQgPgUgIQg/gYhbAtIgPgeQBsg3BPAjQAZAMATASIAOARIgdASg");
	this.shape_7.setTransform(18.1,-46.2,0.394,0.394);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6543C").s().p("AgQC3QhNgHgwg7Qgwg6AGhMQAIhMA7gwQA7gxBLAIQBLAHAxA7QAxA7gIBKQgHBMg6AxQg0AqhBAAIgRgBgAhehyQgwAngGA+QgGA9AoAwQAnAvA+AGQA9AGAvgnQAwgoAGg+QAGg8gngwQgogwg+gGIgOgBQg0AAgqAjg");
	this.shape_8.setTransform(29,-44.3,0.394,0.394);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6543C").s().p("AgRC3QhMgHgwg7Qgxg7AIhKQAHhMA7gxQA7gwBKAHQBMAHAxA7QAwA7gHBKQgHBMg7AxQgzAqhBAAIgSgBgAhehyQgwAngGA+QgGA9AoAvQAnAwA+AGQA8AGAwgoQAwgnAGg+QAGg8gogwQgngwg+gGIgPgBQg0AAgpAjg");
	this.shape_9.setTransform(7.1,-46.4,0.394,0.394);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BA754C").s().p("AA7A6IgFgCIiFhMICRgkQAFgBAEACQAEACABAFQABAFgCAEQgDAEgEABIhaAWIBUAwQAEADABAFQABAEgCAEQgDAGgGAAIgCAAg");
	this.shape_10.setTransform(37.7,-50.9,0.394,0.394);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA754C").s().p("AhhBAQgHAAgDgIQgBgEACgEQACgFAFgBICEgtIh6gmQgFgBgCgEQgCgEABgFQACgEAEgDQAEgCAFABIC+A7IjIBDIgEABIgBAAg");
	this.shape_11.setTransform(-11.1,-54.3,0.394,0.394);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BA754C").s().p("AikBfQgFgBgCgCQgDgDAAgFQgBgEAEgEQBziAB4ghQAmgKAjAAQASAAAMADQAEABADAEQACAEgBAFQgBAFgEACQgEACgFgBIgZgCQggAAgkAKQhxAghtB5QgEAFgEAAIgCgBg");
	this.shape_12.setTransform(-6.1,-27.4,0.394,0.394);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F20").s().p("AjfEkQgFgBgDgEQgDgEAAgEQABgFADgDQAEgDAFAAIGqApIkJpyQgCgEACgFQACgEAEgCQAEgCAFACQAEACACAEIERKEQADAGgEAFQgEAFgHAAg");
	this.shape_13.setTransform(18.6,-40.7,0.394,0.394);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221F20").s().p("AgNCTQgmgEgWgtQgYguAHg8QAFg9AfgoQAfgpAlAEQAmAEAWAtQAYAugHA7QgFA9gfApQgcAlghAAIgHAAg");
	this.shape_14.setTransform(-2.5,-54.5,0.394,0.394);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA754C").s().p("ABIB1QgEgBgDgDQgDgDAAgEQgCgpgSgtQglhZhRgYQgFgCgCgEQgCgEABgFQABgEAFgCQAEgDAEACQBcAbApBjQAUAxACAtQAAAFgDADQgDADgFABg");
	this.shape_15.setTransform(25.4,-24.3,0.394,0.394);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("AgNCTQgmgDgXgvQgXgtAGg8QAGg8AfgpQAfgoAlADQAmAEAXAtQAWAugFA8QgGA8gfApQgcAlgiAAIgGAAg");
	this.shape_16.setTransform(29.6,-51.4,0.394,0.394);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECCDAE").s().p("AAMTeQjggWjaiBQjRh9ijjIQikjKhSjsQhWj5AXjvQAXjzBtjVQBojPCqiWQCpiXDQhHQDYhKDhAVQDiAWDGBxQC+BtCKC0QCLC0BADeQBCDmgXDyQgYD5hYDfQhZDjiOCmQiUCti6BVQihBJiwAAQgqAAgrgEg");
	this.shape_17.setTransform(2.2,-49.2,0.394,0.394);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1AC8C").s().p("AgHBYQglgEgXgcQgXgcADgjQAEglAcgXQAcgXAjADQAlAEAXAcQAXAcgDAjQgEAlgcAXQgYAUgfAAIgIAAg");
	this.shape_18.setTransform(42.4,-33,0.394,0.394);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1AC8C").s().p("AgHBYQglgEgXgcQgXgcADgjQAEglAcgXQAcgXAjADQAlAEAXAcQAYAcgEAjQgEAlgcAXQgYAUgfAAIgIAAg");
	this.shape_19.setTransform(-42.3,-41,0.394,0.394);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECCDAE").s().p("AgSDKQhSgIg1hAQg1hBAIhTQAIhUBAg1QBAg2BRAHQBSAIA1BBQA1BBgIBTQgIBUhAA1Qg4AvhFAAIgUgBg");
	this.shape_20.setTransform(-42.4,-41.3,0.394,0.394);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECCDAE").s().p("AgSDLQhTgIg0hBQg0hBAHhTQAJhUA/g1QBAg2BRAIQBTAIA0BAQA1BBgJBTQgIBUg/A2Qg4AuhHAAIgSAAg");
	this.shape_21.setTransform(42.4,-33.3,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-98.5,100.6,98.5);


(lib.hand4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCDAE").s().p("AN3MPQhNgWg8ggQg9ghgSggIiagIQi+gLixgQQo1gzjghOQjhhNjbpYQhEi8g7jZIgui0IFrgtIAUCfQAgDBA8CkQDAILGSAtQEMAeDdAkQDWAmBzARIgBgIQAbhIA1hAQBqh+CGAtQCFAtANAtQAHAXgUANICtBrIABAwQgBA6gGA0QgWCohMAxQgqAbhEAAQhBAAhagZg");
	this.shape.setTransform(0,-31.9,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-63.7,99.1,63.7);


(lib.hand3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECCDAE").s().p("AOvJ5IgShBQgNgrgZgRQgigYhBAMQglAHggAtQgSAZgYAvQgSAegNgQQgQgTgWhkQp6B9mZibQlHh8iokpQh3jUgdkVQgIhXABhSIADhCIE/AaQg3FsDKDrQCiC6E+BgQDiBFEbAQQBYAFBTAAIBCgCQBggaBogQQDQgfAmA0QAvBAgbCKQgMA8gXAoQgZAqggADIgDAAQgZAAgNgcg");
	this.shape.setTransform(-36.4,-47.1,0.394,0.394,0,0,0,-92.5,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-52,85.6,52.1);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("EgtyAHCQo+hYk7hzQlGh2AAiBQAAiAFGh3QE7hyI+hYQS+i7a0AAQa1AAS+C7QI+BYE7ByQFFB3AACAQAACBlFB2Qk7Bzo+BYQy+C661AAQ60AAy+i6g");
	this.shape.setTransform(414.6,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,829.1,127.3), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F9F8").s().p("Athn+QAogdAlgGIYaj6QA1gJAZAmQAYAmgTA/ImSUcQgPAwgkArQgjAqgrAWg");
	this.shape.setTransform(86.6,79.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,173.2,159.6), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050102").s().p("AgWAjQgKgPAAgUQAAgTAKgOQAJgPANAAQAOAAAKAPQAJAOAAATQAAAUgJAPQgKAOgOAAQgNAAgJgOg");
	this.shape.setTransform(3.3,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,6.7,9.8), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050102").s().p("AgSApQgOgOgBgZIgBgCQAAgTAKgOQAJgOAOgBQAKAAAJAIQAPAOABAaQABATgJAOQgKAPgOABIgBAAQgKAAgJgIg");
	this.shape_1.setTransform(3.5,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,6.9,9.8), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgMAqQgrgCgUgSQgHgGADgMQADgMAIgDIgHgDQgDgCADgEQAUgWAqAAQAdAAAjARQAmATgJARQgFAJgOAIQgYAPglAAIgMgBg");
	mask.setTransform(8.1,4.3);

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBAF57").s().p("AgMAqQgrgCgUgSQgHgGADgMQADgMAIgDIgHgDQgDgCADgEQAUgWAqAAQAdAAAjARQAmATgJARQgFAJgOAIQgYAPglAAIgMgBg");
	this.shape.setTransform(8.1,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,16.3,8.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag7AcQgOgIgFgJQgKgRAngTQAjgRAcAAQArAAATAWQADAEgEACIgHADQAIADAEAMQAEANgHAFQgUASgsACIgNABQgjAAgYgPg");
	mask.setTransform(8.1,4.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup, null, null);


(lib.body2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BAQgbgWgDgiQgEgiAXgaQAWgbAigDQAigEAbAXQAaAWADAiQADAigWAaQgWAbgiADIgIABQgdAAgXgUg");
	this.shape.setTransform(1.3,-59.4,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BAQgbgWgDgjQgDghAWgbQAWgaAigDQAigEAbAXQAaAWADAiQAEAigXAaQgWAbgiADIgIABQgdAAgXgUg");
	this.shape_1.setTransform(-1.9,-79,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BAQgbgWgDgjQgDghAWgbQAWgaAjgDQAhgEAbAXQAaAWADAiQAEAigXAaQgWAbgiADIgIABQgdAAgXgUg");
	this.shape_2.setTransform(-1.5,-101.6,0.394,0.394);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BAQgbgWgDgiQgEgiAXgaQAWgbAigDQAigDAaAWQAbAWADAjQADAhgWAbQgWAagiADIgIABQgdAAgXgUg");
	this.shape_3.setTransform(6,-41.9,0.394,0.394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(2,1,1).p("ABbjyIALHlIjLjg");
	this.shape_4.setTransform(5.8,-123.4,0.394,0.394);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(2,1,1).p("ABJATIhaBmIg3jx");
	this.shape_5.setTransform(-13.9,-122.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECCDAE").s().p("AjcjEIG5goIhyHZg");
	this.shape_6.setTransform(-6.4,-132.1,0.394,0.394);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D9282").s().p("AroZQQiigrhD2UQgVm+gJoVIgFnAIIOllIKVA2IGsCSIAwFPQA7GVA2FUQCuRDBDA5QhEBikWCqQj+CclFCaQlGCbjkBJQiRAthFAAQgyAAgKgYg");
	this.shape_7.setTransform(-4.3,-74.5,0.394,0.394);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0A046").s().p("AqhErQiagPhjh4Qhih4APiZIAAgIQAPiaB4hjQB4hiCaAPIZMCdIhKLwg");
	this.shape_8.setTransform(4.2,-18,0.394,0.394);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D9282").s().p("AkImPQB0CLB/CLQD8EUAxgEIjXBrQjsByhsAcg");
	this.shape_9.setTransform(20.5,-121.9,0.394,0.394,0,0,0,-21.6,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-141.4,88.1,141.5);


(lib.sofa02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA983F").s().p("A2FZlMAAAgzJMAsLAAAMAAAAzJg");
	this.shape.setTransform(-57.9,-213.8,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#392518").s().p("A5lJ5QlnqDEFpuMAw8AAAQB3AABlBEQBkBEAtBvQBvESgkEEQgjD3ipDtg");
	this.shape_1.setTransform(40.1,-127.6,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1C1C").s().p("Ai9BXIAAitIF6AAIAACtg");
	this.shape_2.setTransform(90.2,-21,0.394,0.394);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1C1C").s().p("AjEBXIAAitIGJAAIAACtg");
	this.shape_3.setTransform(-9.2,-21,0.394,0.394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA983F").s().p("EgV9AyVMAAAgoBMgHRgypQgXigBKiPQBLiRCQhDQDHhbDugZQDygZDjAxQB3AZBTBfQBSBcAQB8MAHUA24IAAJAIcKAAIAAfBg");
	this.shape_4.setTransform(30.9,-151.4,0.394,0.394);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(2.7,-22.5,0.394,0.394,0,0,0,421.4,70);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.3,-278.3,326.7,278.3);


(lib.qq = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 隔离模式
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBAF57").s().p("AgGAjQgagBgbgQIgXgRIALAUQgGABgOgHQgQgIgBgHQgBgGAdgNQAjgOArgBQAtgBAlAPQAeANgBAHQAAAFgNAHQgOAJgKgBQAOgQAAgEQgIAIgQAJQgdASgiAAIgFAAg");
	this.shape.setTransform(3.7,-58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B5362A","#D6472D","#D6472D","#B3342A"],[0.055,0.431,0.718,0.984],-17.8,0,17.8,0).s().p("Ah0AqQg8gegBgjQgBgMAFgGIAEgCQgCgSAKgHIAHAOQAKAPAPANQAwAoBRAAQBRAAAzgpQAZgVAJgWIALAaQAHAdgWAXQgbAdgrARQgsARgzAAQg5AAg4gdg");
	this.shape_1.setTransform(3.3,-55.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A52E2B","#B6342B","#C53B2B","#CE412C","#D4442C","#D6452C","#D6462D"],[0,0.09,0.192,0.298,0.416,0.557,1],-3.6,0,3.7,0).s().p("AAAA8QgfgFgEgVQgDgSAIgiIAKgfQATgUAUAQQAKAIAGAMIACAlQAAAngDAJQgEAJgRAAIgNgBg");
	this.shape_2.setTransform(-5.6,-47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221916").s().p("AAHAIQAAgHgBgCQgCgDgDAAQgDAAgCADQgCABgBAIQgBAFgDAAQgDAAAAgFQAAgMAHgGQAFgFAEABQAJACADALQABAFAAAFQgBAGgDAAQgDAAgBgHg");
	this.shape_3.setTransform(7,-67.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#211816").s().p("AgIAPQgEgFgBgIQAAgHADgGQAEgGAFgBQAFAAAEAEQAFAFAAAIQABAHgEAGQgDAGgGABIgBAAQgEAAgEgEg");
	this.shape_4.setTransform(0,-67.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.2,0,0,3.9).p("AgcAAQAAgSAIgNQAIgNAMAAQAMAAAJANQAIAOAAARQAAATgIANQgJANgMAAQgMAAgIgNQgIgNAAgTg");
	this.shape_5.setTransform(7.6,-67.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAgQgJgNABgTQgBgSAJgNQAJgNALAAQAMAAAJANQAIAOAAARQAAATgIANQgJANgMAAQgLAAgJgNg");
	this.shape_6.setTransform(7.6,-67.5);

	this.instance = new lib.Path_1_0();
	this.instance.parent = this;
	this.instance.setTransform(7.5,-67.5,1,1,0,0,0,3.3,4.9);
	this.instance.alpha = 0.602;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.2,0,0,3.9).p("AgeABQAAgRAIgOQAJgNAMgBQAMAAAJAMQAKANAAATQABARgIAOQgJANgMABQgMABgJgNQgKgNgBgTg");
	this.shape_7.setTransform(-1.1,-67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAhQgKgNgBgTQAAgRAIgOQAJgNAMgBQAMAAAJAMQAKANAAATQABARgIAOQgJANgMABIgCAAQgKAAgJgMg");
	this.shape_8.setTransform(-1.1,-67.4);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-67.3,1,1,0,0,0,3.5,4.9);
	this.instance_1.alpha = 0.602;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#1B1F1D","#211F27"],[0,1],6.6,-9.9,0,6.6,-9.9,24.7).s().p("Ah0B2QgvglAAhBQAAhHAwgwQAvgwBEAAQBEAAAxAzQAxAzgCBBQgCBBgwAlQgtAihGAAQhHAAgsgig");
	this.shape_9.setTransform(3.5,-64.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#CDD7E2"],[0.698,0.949],-1.1,-3.7,0,-1.1,-3.7,17).s().p("AhqBlQgtgqAAg7QAAg7AtgpQAsgqA+gBQA/ABAtAqQAsApAAA7QAAA7gsAqQgtArg/gBQg+ABgsgrg");
	this.shape_10.setTransform(3.3,-46.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#23202D","#1A181C","#23202D"],[0,0.455,1],-2.8,-8.2,0,-2.8,-8.2,37.3).s().p("AAHBRQgMgMgLgYQgehBAWhCIAmA1QAiA/gXA1QgCAEgEAAQgEAAgIgGg");
	this.shape_11.setTransform(22.5,-49);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#23202D","#1A181C","#23202D"],[0,0.455,1],35.7,-8.4,0,35.7,-8.4,37.2).s().p("AgdBRQgUg3Amg8IAqgyQASBDgiA/QgNAXgNALQgHAFgFAAQgEAAgCgEg");
	this.shape_12.setTransform(-16.1,-48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#23202D","#1A181C","#23202D"],[0,0.455,1],16.7,-8.9,0,16.7,-8.9,36.7).s().p("AiBB2Qg2gxAAhFQAAhEA2gxQA2gxBLAAQBMAAA3AxQA2AxAABEQAABFg2AxQg3AxhMAAQhLAAg2gxg");
	this.shape_13.setTransform(3,-48.3);

	this.instance_2 = new lib.ClipGroup_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.4,-33.8,1,1,0,0,0,8.1,4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBAF57").s().p("AgOAuQgsgDgVgSQgIgHgBgMQgBgLAHgFQgGgEAJgKQASgWAuAAQAdAAAnATQArAUgJATIgYATQgbAQgkAAIgOgBg");
	this.shape_14.setTransform(-6.1,-33.6);

	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.8,-33.8,1,1,0,0,0,8.1,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBAF57").s().p("Ag+AfIgYgTQgJgTArgUQAngTAdAAQAuAAASAWQAIAKgFAEQAHAFgBALQgCAMgHAHQgUASgtADIgOABQgkAAgbgQg");
	this.shape_15.setTransform(12.5,-33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.instance_3},{t:this.shape_14},{t:this.instance_2},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221916").s().p("AmQHOQgJgDACgDIABgBQBOiZg1gRQgfgJgZgWQgYgVgOgeQgWgugChIQgBgqAHhPQALh/ACgTQALhTAWg6QARgrAmgbQAegUA0gPQA4gPBFgIQA0gGBLgDQDjgICiAPIABAAIABAAIABAAQAsAFAnASQAnAUASAgQAPAbAGAyQAHA3gDBTIgHCLIgCBlQgEA5gMAqQgZBUhaAWQg+APhOADQg1AChZgFQhbgFgwgEIhKgFQgpgCggAJQgwANgzA8IhQBjQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgIgBgABdnEQi/ADgfACQh+AJhaAkQhOAegaB0QgJAngFA8IgHBbQgQCNAMBDQAWB4BnAXQAIACAAADQAGAlgQAzIgJAXIASgWQAngwAegXQAegZAtgHQAggFAyAEIB4AIQBHAFAyACQBmADAugEQBagIAvglQAdgYAPgvQAKgfAFg0QAEgnABhCQABhPABgbQAIhYgBgvQgBhTgbguQgPgaglgQQgegNglgEQhggJhlAAIguABg");
	this.shape_16.setTransform(0,-46.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AlsF4QAUg9gHgZQg1gKghghQgYgYgKggQgVhMAFhhIARiwQAFg2AFgcQAIgrAPglQARgtAjgYQAcgTA3gPQBYgZCEgFQCXgCBJgDQAigBBTAFIBLAGQAfADAhANQBCAZANA0QAPBDgDBpIgHCvQAABygNA0QgZBghLAUQhWAWh1AAQghAAiqgKQgegBhEgHQg8gCgjAPQgpASgwA6QhHBVgHAHQARghAQgyg");
	this.shape_17.setTransform(0,-46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-92.7,100,92.7);


(lib.led = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(13,-41.2,0.394,0.394,0,0,0,93.9,86.5);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E8").s().p("AxYN3QgNgkAPgwIGS0dQATg+A0gyQAzgzA2gIIYaj7QAkgGAYARQAYARAFAhQgRgFgWADI4aD7Qg2AIgzAzQg0AygTA+ImSUcQgMAmAGAgQgigKgMgig");
	this.shape.setTransform(0,-38.6,0.394,0.394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DADADA").s().p("AxROFQgZgmATg+IGS0cQASg/A1gyQAzgzA1gIIYaj6QA2gJAZAmQAYAmgTA+ImSUdQgTA9gzAzQg0Ayg2AJI4aD7IgSABQgnAAgUgfg");
	this.shape_1.setTransform(0,-38.6,0.394,0.394);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#79888B").s().p("AtNB5IabkkIgdBPI50EHg");
	this.shape_2.setTransform(-8.7,-6.7,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-75.3,88.3,75.3);


(lib.hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.hand4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-42,-57.8,1,1,0,0,0,-42,-57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.7},3).to({rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-63.7,99.1,63.7);


(lib.hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.hand3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-37.2,-46,1,1,0,0,0,-37.2,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.7},4).to({rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-52,85.6,52.1);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 15
	this.instance = new lib.body2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-29.2,-161.1,1,1,0,0,0,0,-70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).wait(1));

	// 元件 13
	this.instance_1 = new lib.tui1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.3,-49.9,1,1,0,0,0,5.2,-49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.3,rotation:3.8,x:28.5,y:-54.6},4).to({regX:5.2,rotation:0,x:34.3,y:-49.9},3).wait(1));

	// 元件 16
	this.instance_2 = new lib.ku1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.1,-116.4,1,1,0,0,0,0,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0},0).wait(1));

	// 元件 14
	this.instance_3 = new lib.tui2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.4,-68.1,1,1,0,0,0,2.5,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:2,x:50.9,y:-71.1},3).to({rotation:0,x:51.4,y:-68.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.2,-231.7,154.8,247.4);


// stage content:
(lib.oldman02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_41 = function() {
		$(".page2").removeClass('active').addClass("out")
		$(".page3").addClass("active")
		setTimeout(function () {
          	canChoose = true;
        },4000)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// 元件 10
	this.instance = new lib.xiu("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(205.3,182.6,1.233,1.227,0,0,0,0.2,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

	// 元件 6
	this.instance_1 = new lib.sofa01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.8,245.9,1.317,1.317,0,0,0,0.1,-130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

	// 元件 5
	this.instance_2 = new lib.head("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(244.3,71.3,1.317,1.317,0,0,0,0.2,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({regY:-6.9,y:126.9},0).to({regY:-6.8,rotation:6},3).wait(41));

	// 元件 8
	this.instance_3 = new lib.hand1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(204.3,218,1.317,1.317,0,0,0,-38.1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

	// 元件 3
	this.instance_4 = new lib.led("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(368.7,254.4,1.317,1.317,0,0,0,0.2,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

	// 元件 2
	this.instance_5 = new lib.light("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(285.2,207.9,1.317,1.317,0,0,0,0.2,-64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65));

	// 元件 1
	this.instance_6 = new lib.keybord("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(322.2,286.2,1.317,1.317,0,0,0,0.1,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65));

	// 元件 4
	this.instance_7 = new lib.body("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(296.6,290.1,1.317,1.317,0,0,0,2.6,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// 元件 9
	this.instance_8 = new lib.hand2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(341.5,213.9,1.317,1.317,0,0,0,0.2,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// 元件 7
	this.instance_9 = new lib.sofa02("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(215.3,258.2,1.317,1.317,0,0,0,0.1,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// 图层 15
	this.instance_10 = new lib.qq("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(395,236.7,0.26,0.26,29.9,0,0,-29.9,-8.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).to({regX:-30.9,regY:-9.2,scaleX:1.32,scaleY:1.32,rotation:0,x:414.4,y:184.6},7,cjs.Ease.get(1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330,269.7,430.4,435.1);
// library properties:
lib.properties = {
	width: 660,
	height: 527,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(oldman02 = oldman02||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var oldman02, images, createjs, ss, AdobeAn;