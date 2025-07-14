# 이진 탐색 트리
import sys
sys.setrecursionlimit(100000)
preorder = list(map(int, sys.stdin.buffer.read().split()))
n = len(preorder)
idx = 0

def postorder(maxnum):
    global idx

    if idx == n or preorder[idx] > maxnum: 
        return
    root = preorder[idx]
    idx += 1
    postorder(root) # 루트보다 작은거
    postorder(maxnum) # 루트보다 큰거 (노드 아래에 있는거 중에서)
    print(root)


postorder(float("inf"))