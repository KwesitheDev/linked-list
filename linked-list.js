class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

        prepend(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
        }
    
    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.nextNode;
            count++;
        }
        return current;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = "";
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
    

    removeAt(index) {
    if (index === 0) {
        // Case 1: Remove the first node
        this.head = this.head.nextNode;
        if (this.size === 1) {
            // If there's only one node, set tail to null
            this.tail = null;
        }
        this.size--;  // Decrease the size
    } else if (index === this.size - 1) {
        // Case 2: Remove the last node (use pop)
        this.pop();  // pop() already handles removing the last node
    } else if (index > 0 && index < this.size - 1) {
        // Case 3: Remove a node in the middle of the list
        let previousNode = this.head;
        let count = 0;

        // Traverse to the node before the one we want to remove (index - 1)
        while (count < index - 1) {
            previousNode = previousNode.nextNode;
            count++;
        }

        // Find the node to remove and the one after it
        let nodeToRemove = previousNode.nextNode;
        let nextNode = nodeToRemove.nextNode;

        // Skip over the node to be removed
        previousNode.nextNode = nextNode;

        // If removing affects the tail, update the tail
        if (nextNode === null) {
            this.tail = previousNode;
        }

        // Decrease the size
        this.size--;
    } else {
        // Invalid index, do nothing
        return;
    }
        
    insertAt(value, index) {
    if (index === 0) {
        // Case 1: Insert at the start of the list
        this.prepend(value);
    } else if (index === this.size) {
        // Case 2: Insert at the end of the list
        this.append(value);
    } else if (index > 0 && index < this.size) {
        // Case 3: Insert somewhere in the middle of the list
        let newNode = new Node(value);
        let previousNode = this.head;
        let currentNode = this.head;
        let count = 0;

        // Traverse the list to find the node before the insertion point (index - 1)
        while (count < index - 1) {
            previousNode = previousNode.nextNode;
            count++;
        }

        // Link the new node into the list
        currentNode = previousNode.nextNode;
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;

        // Increment the size of the list
        this.size++;
    } else {
        // Invalid index, do nothing
        return;
    }
}

}


}