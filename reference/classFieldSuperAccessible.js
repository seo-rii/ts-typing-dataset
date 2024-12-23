//// [tests/cases/compiler/classFieldSuperAccessible.ts] ////

//// [classFieldSuperAccessible.ts]
class A extends class Expr {} {
    static {
        console.log(super.name);
    }
}
class B extends Number {
    static {
        console.log(super.EPSILON);
    }
}
class C extends Array {
    foo() {
        console.log(super.length);
    }
}

class D {
    accessor b = () => {}
}
class E extends D {
    foo() {
        super.b()
    }
}


//// [classFieldSuperAccessible.js]
class A extends class Expr {
} {
    static {
        console.log(super.name);
    }
}
class B extends Number {
    static {
        console.log(super.EPSILON);
    }
}
class C extends Array {
    foo() {
        console.log(super.length);
    }
}
class D {
    accessor b = () => { };
}
class E extends D {
    foo() {
        super.b();
    }
}
