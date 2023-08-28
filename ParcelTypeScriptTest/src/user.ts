class User {
    constructor(public name: string = "no name") { }
    greeting(): string {
        return `Hello ${this.name}!`;
    }
}

export default User;