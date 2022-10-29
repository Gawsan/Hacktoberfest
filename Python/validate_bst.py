class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root: TreeNode) -> bool:
    def validate(root, low, high):
        if not root:
            return True
        if (root.val <= low) or (root.val >= high):
            return False
        return validate(root.left, low, root.val) and validate(root.right, root.val, high)
    return validate(root, float('-inf'), float('inf'))

tree = TreeNode(2, left=TreeNode(1), right=TreeNode(3))
print(isValidBST(tree))