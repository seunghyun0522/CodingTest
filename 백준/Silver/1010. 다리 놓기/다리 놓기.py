import sys

def cal(n, m):
    if n > m - n:
        n = m - n
    result = 1
    for i in range(n):
        result = result * (m - i) // (i + 1)
    return result

def main():
    input = sys.stdin.readline
    
    k = int(input())
    for _ in range(k):
        n, m = map(int, input().strip().split())
        print(int(cal(n, m)))
if __name__ == "__main__":
    main()