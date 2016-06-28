class ParticleTemplate
{
	public speedBaseX:number = 0;
	public speedRangeX:number = 0;
	public speedBaseY:number = 0;
	public speedRangeY:number = 0;
	
	public accelBaseX:number = 0;
	public accelRangeX:number = 0;
	public accelBaseY:number = 0;
	public accelRangeY:number = 0;

	public frictionBaseX:number = 0;
	public frictionRangeX:number = 0;
	public frictionBaseY:number = 0;
	public frictionRangeY:number = 0;

	public colorsFrom:Color[] = [Color.white];
	public colorsTo:Color[] = [Color.white];
	public colorEaser:(number)=>number = Ease.linear;

	public alphaFromBase:number = 1;
	public alphaFromRange:number = 0;
	public alphaToBase:number = 1;
	public alphaToRange:number = 0;
	public alphaEaser:(number)=>number = Ease.linear;

	public rotationFromBase:number = 0;
	public rotationFromRange:number = 0;
	public rotationToBase:number = 0;
	public rotationToRange:number = 0;
	public rotationEaser:(number)=>number = Ease.linear;

	public scaleFromBaseX:number = 1;
	public scaleFromRangeX:number = 0;
	public scaleToBaseX:number = 1;
	public scaleToRangeX:number = 0;
	public scaleXEaser:(number)=>number = Ease.linear;

	public scaleFromBaseY:number = 1;
	public scaleFromRangeY:number = 0;
	public scaleToBaseY:number = 1;
	public scaleToRangeY:number = 0;
	public scaleYEaser:(number)=>number = Ease.linear;

	public durationBase:number = 1;
	public durationRange:number = 1;

	public speedX(Base:number, Range?:number):ParticleTemplate
	{
		this.speedBaseX = Base;
		this.speedRangeX = Range || Base;
		return this;
	}

	public speedY(Base:number, Range?:number):ParticleTemplate
	{
		this.speedBaseY = Base;
		this.speedRangeY = Range || Base;
		return this;
	}

	public accelX(Base:number, Range?:number):ParticleTemplate
	{
		this.accelBaseX = Base;
		this.accelRangeX = Range || Base;
		return this;
	}

	public accelY(Base:number, Range?:number):ParticleTemplate
	{
		this.accelBaseY = Base;
		this.accelRangeY = Range || Base;
		return this;
	}

	public frictionX(Base:number, Range?:number):ParticleTemplate
	{
		this.frictionBaseX = Base;
		this.frictionRangeX = Range || Base;
		return this;
	}

	public frictionY(Base:number, Range?:number):ParticleTemplate
	{
		this.frictionBaseY = Base;
		this.frictionRangeY = Range || Base;
		return this;
	}

	public colors(from:Color[], to?:Color[]):ParticleTemplate
	{
		this.colorsFrom = from;
		this.colorsTo = to || from;
		return this;
	}

	public colorEase(easer:(number)=>number):ParticleTemplate
	{
		this.colorEaser = easer;
		return this;
	}

	public alpha(Base:number, Range?:number):ParticleTemplate
	{
		this.alphaFrom(Base, Range);
		this.alphaTo(Base, Range);
		return this;
	}

	public alphaFrom(Base:number, Range?:number):ParticleTemplate
	{
		this.alphaFromBase = Base;
		this.alphaFromRange = Range || Base;
		return this;
	}

	public alphaTo(Base:number, Range?:number):ParticleTemplate
	{
		this.alphaToBase = Base;
		this.alphaToRange = Range || Base;
		return this;
	}

	public alphaEase(easer:(number)=>number):ParticleTemplate
	{
		this.alphaEaser = easer;
		return this;
	}

	public rotation(Base:number, Range?:number):ParticleTemplate
	{
		this.rotationFrom(Base, Range);
		this.rotationTo(Base, Range);
		return this;
	}

	public rotationFrom(Base:number, Range?:number):ParticleTemplate
	{
		this.rotationFromBase = Base;
		this.rotationFromRange = Range || Base;
		return this;
	}

	public rotationTo(Base:number, Range?:number):ParticleTemplate
	{
		this.rotationToBase = Base;
		this.rotationToRange = Range || Base;
		return this;
	}

	public rotationEase(easer:(number)=>number):ParticleTemplate
	{
		this.rotationEaser = easer;
		return this;
	}

	public scale(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleFrom(Base, Range);
		this.scaleTo(Base, Range);
		return this;
	}

	public scaleFrom(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleFromX(Base, Range);
		this.scaleFromY(Base, Range);
		return this;
	}

	public scaleTo(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleToX(Base, Range);
		this.scaleToY(Base, Range);
		return this;
	}

	public scaleEase(easer:(number)=>number):ParticleTemplate
	{
		this.scaleXEaser = easer;
		this.scaleYEaser = easer;
		return this;
	}

	public scaleX(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleFromX(Base, Range);
		this.scaleToX(Base, Range);
		return this;
	}

	public scaleFromX(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleFromBaseX = Base;
		this.scaleFromRangeX = Range || Base;
		return this;
	}

	public scaleToX(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleToBaseX = Base;
		this.scaleToRangeX = Range || Base;
		return this;
	}

	public scaleY(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleFromY(Base, Range);
		this.scaleToY(Base, Range);
		return this;
	}

	public scaleXEase(easer:(number)=>number):ParticleTemplate
	{
		this.scaleXEaser = easer;
		return this;
	}

	public scaleFromY(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleFromBaseY = Base;
		this.scaleFromRangeY = Range || Base;
		return this;
	}

	public scaleToY(Base:number, Range?:number):ParticleTemplate
	{
		this.scaleToBaseY = Base;
		this.scaleToRangeY = Range || Base;
		return this;
	}

	public scaleYEase(easer:(number)=>number):ParticleTemplate
	{
		this.scaleYEaser = easer;
		return this;
	}

	public duration(Base:number, Range?:number):ParticleTemplate
	{
		this.durationBase = Base;
		this.durationRange = Range || Base;
		return this;
	}
}