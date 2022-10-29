class MyQueue {
public:
    /** Initialize your data structure here. */
    MyQueue() {
    }

    /** Push element x to the back of queue. */
    void push(int x) {
        st.push(x);
    }

    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        if (rst.empty())
            transfer(rst, st);
        int val = rst.top();
        rst.pop();
        return val;
    }

    /** Get the front element. */
    int peek() {
        if (rst.empty())
            transfer(rst, st);
        return rst.top();
    }

    void transfer(stack<int> &s1, stack<int> &s2) {
        while (!s2.empty()) {
            s1.push(s2.top());
            s2.pop();
        }
    }

    /** Returns whether the queue is empty. */
    bool empty() {
        return st.empty() && rst.empty();
    }

    stack<int> st, rst;
};