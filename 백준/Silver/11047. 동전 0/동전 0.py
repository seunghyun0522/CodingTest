from sys import stdin

coin = []
count = 0

# --입력 --#
N, M = map(int,stdin.readline().split())

for i in range(N): #N개만큼 동전의 가치 입력
    coin.append(int(stdin.readline()))

coin.sort(reverse=True) # 내림차순 정렬

#-- 수행 --#
for value in coin:
    count = count + (M//value) # 필요한 코인수 count
    M = M % value # 쓰고 남은 돈 
    if(M <=0):
        break

print(count)