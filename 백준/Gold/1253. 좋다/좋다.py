# 10
# 1 2 3 4 5 6 7 8 9 10
import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
arr.sort()

cnt = 0
for i in range(n):
    sum = arr[i]
    start = 0
    end = len(arr)-1
    while start < end:
        if arr[start] + arr[end] == sum:
            if start == i:
                start += 1
            elif end == i:
                end -= 1
            else:
                cnt += 1
                break
        elif arr[start] + arr[end] > sum:
            end -= 1
        elif arr[start] + arr[end] < sum:
            start += 1

print(cnt)