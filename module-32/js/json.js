// JSON javaScript Object Notation
const shop = {
    name: 'shop',
    address: "ranbir road",
    expensive: false,
    product: ['mobile', 'laptop', 'smartWatch', 'calculator', 'desktop'],
    owner: {
        name: 'alia bhatt',
        profession: "actor",
        desgignation: "owner"
    }
}
// converted in JSON format with Stringify
const stringifyed = JSON.stringify(shop);
console.log("JSON Format", stringifyed);
// converted JSON format to JS object format
const converted = JSON.parse(stringifyed);
console.log("JS Object Format", converted);
console.log("JS Object Format", converted);
console.log("JS javascript objct notation Format", converted);
console.log("JS Object Format", converted);