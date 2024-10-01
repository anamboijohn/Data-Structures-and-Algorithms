class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = TrieNode();
    def insert(self, word):
        node = self.root
        for c in word:
            node = node.children.setdefault(c, TrieNode())
        node.end = True
    
    def search(self, word):
        node = self.root
        prefix_count = 0
        for c in word:
            if c not in node.children:
                break
            node = node.children[c]
            prefix_count += 1
        return prefix_count
    
class Solution(object):
    def longestCommonPrefix(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: int
        """
        trie = Trie()
        for n in arr1:
            trie.insert(str(n))
        return max(trie.search(str(n)) for n in arr2)
    
# def prefix_count(self, num1, num2):
#         num1_str = str(num1)
#         num2_str = str(num2)
#         count = 0
#         for i, n in enumerate(num1_str):
#             if i < len(num2_str) and n == num2_str[i]: count += 1
#             else: break
#         return count
#     def longestCommonPrefix(self, arr1, arr2):
#         """
#         :type arr1: List[int]
#         :type arr2: List[int]
#         :rtype: int
#         """
#         max_count = 0
#         for i, n1 in enumerate(arr1):
#             for j, n2 in enumerate(arr2):
#                 count = self.prefix_count(n1, n2)
#                 max_count = max(max_count, count)
#         return max_count