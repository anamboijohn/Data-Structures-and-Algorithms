class TrieNode:
    def __init__(self):
        self.children = {}
        self.count = 0
        self.end = False

class Trie:
    def _init_(self):
        self.root = TrieNode()
    
    def insert(self,word):
        node = self.root
        for c in word:
            node = node.children.setdefault(c, TrieNode())
            node.count += 1
        self.end = True
    
    def search(self, word):
        node = self.root
        count = 0
        for c in word:
            node = node.children.get(c)
            count += node.count
        return count


class Solution(object):
    def sumPrefixScores(self, words):
        """
        :type words: List[str]
        :rtype: List[int]
        """
        trie = Trie()
        for word in words:
            trie.insert(word)
        return [trie.search(word) for word in words]