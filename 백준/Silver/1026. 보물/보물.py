x= int(input())
a = [int(x) for x in input().split()]
b = [int(x) for x in input().split()]

# 5
# 1 1 1 6 0
# 2 7 8 3 1

a.sort()
b.sort(reverse=True)
result = 0
for i in range(len(a)):
    result += a[i] * b[i]

print(result)