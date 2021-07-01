class user {
    name: string ;
    slogan: string ;
    mana: number;
    constructor(name: string, slogan: string, mana: number) {
        this.name = name;
        this.slogan = slogan;
        this.mana = mana;
    }

    get():string{
        var text:string = `${this.mana},${this.name},${this.slogan} `
        return text;
    }
}

class min extends user{
    private _skill:string;
    constructor(name: string, slogan: string, mana: number, skill:string) {
        super(name,slogan,mana);
        this._skill = skill;
    }

    get():string{
        var text = super.get();
        text +=`,${this._skill}`
        return text;
    }

    public get skill() : string{
        return "aaaaaâ";
    }

    public set skill( v : string){
        this._skill = v;
    }
}

let test = new min("Hien","aaaaâ",10,"bốc phét");
// test.skill("hien xin choa");
// console.log(test._skill);

