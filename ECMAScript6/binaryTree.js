/*https://juejin.im/post/59fa79575188257ad639e3fd*/
class BinaryTree {
    constructor(tree = []) {
        this.root = null;//树根
        this.Node = key => {
            //生成一个新的子树
            let _obj = Object.create(null, {});
            _obj.key = key;
            _obj.left = null;
            _obj.right = null;
            return _obj;
        };
        //初始化二叉树
        if (typeof tree === 'number') {
            this.insert(tree);
        } else if (Array.isArray(tree)) {
            this.bulkInsert(tree)
        } else {
            console.error('请输入Number类型或者Array类型的参数')
        }
    }
    insert(key) {
        //添加一个新子树
        let newNode = this.Node(key);
        let _insertNode = (node, newNode) => {
            //判断新二叉树的值和原有节点的值
            if (newNode.key < node.key) {
                if (node.left === null) {
                    //判断左节点是否为空
                    node.left = newNode;
                } else {
                    _insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    //判断右节点是否为空
                    node.right = newNode;
                } else {
                    _insertNode(node.right, newNode)
                }
            }
        };
        if (this.root === null) {
            //如果没有根节点，那么把传入的值当根节点
            this.root = newNode;
        } else {
            //如果有根节点，那么把传入的值插到二叉树上
            _insertNode(this.root, newNode);
        }
    }
    bulkInsert (nodes) {
        nodes.forEach(key => {
            //遍历数组，插入子树
            this.insert(key);
        })
    }
    showTree () {
        //返回二叉树对象
        return this.root;
    }
    //中序遍历，传入一个回调函数
    inOrderTraverse (fn) {
        let inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        };
        inOrderTraverseNode(this.root, fn)
    }
    //先序遍历，传入一个回调函数
    preOrderTraverse (fn) {
        let preOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        };
        preOrderTraverseNode(this.root, fn)
    }
    //后序遍历，传入一个回调函数
    postOrderTraverse (fn) {
        let postOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        };
        postOrderTraverseNode(this.root, fn)
    }
    //查找二叉树最小值
    min() {
        let node = this.root;
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
    }
    //查找二叉树最大值
    max() {
        let node = this.root;
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
    }
    //查找二叉树中节点是否存在
    search(key) {
        let searchNode = (node, key) => {
            if (node === null) {
                return false;
            }
            if (key < node.key) {
                return searchNode(node.left, key);
            } else if (key > node.key){
                return searchNode(node.right, key);
            } else {
                return true;
            }
        };
        return searchNode(this.root, key)
    }
    //删除二叉树结点
    /*remove(key) {
        let findMinNode = (node, key) => {
            let node = node || this.root;
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node;
            }
            return null;
        };
        let removeNode = (node, key) => {
            if (node === null) {
                return null
            }

            if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;
            } else if (key > node.key) {
                node.right = removeNode(node.right, key);
                return node;
            } else {
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                }

                if (node.left !== null && node.right !== null) {
                    let aux = findMinNode(node.right);
                    node.key = aux;
                    node.right = removeNode(node.right, aux.key);
                    return node;
                }
            }
        };
        this.root = removeNode(this.root, key)
    }*/
}

let nodes = [8,3,6,4,9,11,2,5,7];
let binaryTree = new BinaryTree(nodes);
console.log(binaryTree.showTree());
let arr1 = [];
binaryTree.inOrderTraverse(key => {
    arr1.push(key);//中序遍历[2, 3, 4, 5, 6, 7, 8, 9, 11]
});
console.log(arr1);
console.log(binaryTree.min(),binaryTree.max());
console.log(binaryTree.search(6),binaryTree.search(12));