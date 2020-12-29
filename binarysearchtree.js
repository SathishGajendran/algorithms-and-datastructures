class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (value === currentNode.value) {
                throw new Error('duplicate error');
            }

            if (value < currentNode.value) {
                let leftChild = currentNode.left;
                if (!leftChild) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }

            if (value > currentNode.value) {
                let rightChild = currentNode.right;
                if (!rightChild) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }

        return this;
    }

    search(value) {
        let targetNode;

        let currentNode = this.root;

        while (true) {
            if (!currentNode) {
                break;
            }

            if (value === currentNode.value) {
                targetNode = currentNode;
                break;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }

            if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }

        return targetNode;
    }
}

let bst = new BinarySearchTree();

bst.insert(50);
bst.insert(70);
bst.insert(20);
bst.insert(30);
bst.insert(60);
