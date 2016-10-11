/// <reference path="./animationTemplate.ts"/>

/**
 * Animation Set holds a list of Animation Templates, referenced by name
 */
class AnimationSet
{
	/**
	 * The animation set name
	 */
	public name:string;

	/**
	 * A list of all the animation template, by their name
	 */
	public animations:{[name:string]: AnimationTemplate} = {};

	/**
	 * First animation template
	 */
	public first:AnimationTemplate;
	
	constructor(name:string)
	{
		this.name = name;
	}
	
	/**
	 * Adds a new Animation Template to this set
	 */
	public add(name:string, speed:number, frames:Texture[], loops:boolean, position?:Vector, origin?:Vector):AnimationSet
	{
		let anim = new AnimationTemplate(name, speed, frames, loops, position, origin);
		
		this.animations[name] = anim;
		if (this.first == null)
			this.first = anim;

		return this;
	}
	
	/**
	 * Adds a new frame-based Animation Template to this set
	 */
	public addFrameAnimation(name:string, speed:number, tex:Texture, frameWidth:number, frameHeight:number, frames:number[], loops:boolean, position?:Vector, origin?:Vector):AnimationSet
	{
		let columns = Math.floor(tex.width / frameWidth);
		let texFrames:Texture[] = [];
		for (let i = 0; i < frames.length; i ++)
		{
			let index = frames[i]
			let tx = (index % columns) * frameWidth;
			let ty = Math.floor(index / columns) * frameWidth;
			texFrames.push(tex.getSubtexture(new Rectangle(tx, ty, frameWidth, frameHeight)));
		}
		let anim = new AnimationTemplate(name, speed, texFrames, loops, position, origin);

		this.animations[name] = anim;
		if (this.first == null)
			this.first = anim;

		return this;
	}

	/**
	 * Gets an animation template by its name
	 */
	public get(name:string):AnimationTemplate
	{
		return this.animations[name];
	}
	
	/**
	 * Checks if an animation template exists by the given name
	 */
	public has(name:string):boolean
	{
		return this.animations[name] != undefined;
	}
}