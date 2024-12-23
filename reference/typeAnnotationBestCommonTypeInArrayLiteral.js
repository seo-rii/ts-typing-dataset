//// [tests/cases/compiler/typeAnnotationBestCommonTypeInArrayLiteral.ts] ////

//// [typeAnnotationBestCommonTypeInArrayLiteral.ts]
interface IMenuItem {
    id: string;
    type: string;
    link?: string;
    classes?: string;
    text?: string;
    icon?: string;
}
var menuData: IMenuItem[] = [
    {
        "id": "ourLogo",
        "type": "image",
        "link": "",
        "icon": "modules/menu/logo.svg"
    }, {
        "id": "productName",
        "type": "default",
        "link": "",
        "text": "Product Name"
    }
];


//// [typeAnnotationBestCommonTypeInArrayLiteral.js]
var menuData = [
    {
        "id": "ourLogo",
        "type": "image",
        "link": "",
        "icon": "modules/menu/logo.svg"
    }, {
        "id": "productName",
        "type": "default",
        "link": "",
        "text": "Product Name"
    }
];
