import { generate } from "generate-nice-eth-address";

function generateAddressDIY() {
    const postfix = prompt("Enter the postfix to generate the Ethereum address: ");
    if (!postfix) {
        throw new Error("Postfix is required to generate an address.");
    }
    let result = generate(postfix);
    return result;
}

export { generateAddressDIY };
