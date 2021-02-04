var swapPairs = function (head) {
    if (!head || !head.next) {
        return head || head.next;
    }
    const a = head;
    head.next = a;
    a.next = swapPairs(a.next.next);
    return head.next;
};