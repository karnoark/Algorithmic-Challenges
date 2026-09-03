class MinStack {
    arr: number[]
    minArr: number[]
    // let min;
    constructor() {
        this.arr = []
        this.minArr = []
    }

    push(value: number): void {
        this.arr.push(value)
        if(this.minArr.length === 0 || this.getMin() >= value) this.minArr.push(value)
    }

    pop(): void {
        let x = this.arr.pop()
        if(x === this.getMin()) this.minArr.pop()

    }

    top(): number {
        return  this.arr.at(-1)
    }

    getMin(): number {
        return this.minArr[this.minArr.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */