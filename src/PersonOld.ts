class Person{
    public name: string;
    public age: number;
    public email: string;
    private password: string;

    constructor(name: string, age: number, email: string, password: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}