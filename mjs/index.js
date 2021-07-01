class user {
    name;
    slogan;
    mana;
    constructor(name, slogan, mana) {
        this.name = name;
        this.slogan = slogan;
        this.mana = mana;
    }
    get() {
        var text = `${this.mana},${this.name},${this.slogan} `;
        return text;
    }
}
class min extends user {
    _skill;
    constructor(name, slogan, mana, skill) {
        super(name, slogan, mana);
        this._skill = skill;
    }
    get() {
        var text = super.get();
        text += `,${this._skill}`;
        return text;
    }
    get skill() {
        return "aaaaaâ";
    }
    set skill(v) {
        this._skill = v;
    }
}
let test = new min("Hien", "aaaaâ", 10, "bốc phét");
// test.skill("hien xin choa");
// console.log(test._skill);
