/// <reference path="./../../component.ts"/>
abstract class Collider extends Component
{
	public tags:string[] = [];
	
	public tag(tag:string):void
	{
		this.tags.push(tag);
		if (this.entity != null && this.entity.scene != null)
			this.entity.scene._trackCollider(this, tag);
	}
	
	public untag(tag:string):void
	{
		let index = this.tags.indexOf(tag);
		if (index >= 0)
		{
			this.tags.splice(index, 1);
			if (this.entity != null && this.entity.scene != null)
				this.entity.scene._untrackCollider(this, tag);
		}
	}
	
	public check(tag:string, x?:number, y?:number):boolean
	{
		return this.collide(tag, x, y) != null;
	}
	
	public checks(tags:string[], x?:number, y?:number):boolean
	{
		for (let i = 0; i < tags.length; i ++)
			if (this.collide(tags[i], x, y) != null)
				return true;
		return false;
	}
	
	public collide(tag:string, x:number, y:number):Collider
	{
		var result:Collider = null;
		var against = this.entity.scene.allCollidersInTag(tag);
		
		this.x += x || 0;
		this.y += y || 0;
		for (let i = 0; i < against.length; i ++)
			if (Collider.overlap(this, against[i]))
			{
				result = against[i];
				break;
			}
		this.x -= x || 0;
		this.y -= y || 0;
		
		return result;	
	}
	
	public collideAll(tag:string, x?:number, y?:number):Collider[]
	{
		var list:Collider[] = [];
		var against = this.entity.scene.allCollidersInTag(tag);
		
		this.x += x || 0;
		this.y += y || 0;
		for (let i = 0; i < against.length; i ++)
			if (Collider.overlap(this, against[i]))
				list.push(against[i]);
		this.x -= x || 0;
		this.y -= y || 0;
		
		return list;
	}
	
	public static overlap(a:Collider, b:Collider):boolean
	{
		if (a instanceof Hitbox && b instanceof Hitbox)
		{
			return Collider.overlap_hitbox_hitbox(a as Hitbox, b as Hitbox);
		}
		
		return false;
	}
	
	public static overlap_hitbox_hitbox(a:Hitbox, b:Hitbox):boolean
	{
		return a.sceneRight >= b.sceneLeft && a.sceneBottom >= b.sceneTop && a.sceneLeft < b.sceneRight && a.sceneTop < b.sceneBottom;
	}
}