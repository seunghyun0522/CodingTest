from sys import stdin
import heapq

n = int(stdin.readline())
snows = list(map(int, stdin.readline().split()))
snows.sort()

# print(snows)
works = [-x for x in snows]
heapq.heapify(works)
# print(works)

minutes = 0

while works and minutes <= 1440:
   
    first = -heapq.heappop(works)

    if works:
        second = -heapq.heappop(works)
    else:
        second = 0

    if first > 0:
        first -= 1
    if second > 0:
        second -= 1

    if first > 0:
        heapq.heappush(works, -first)
    if second > 0:
        heapq.heappush(works, -second)
        
    # print(first)
    # print(second)
    minutes += 1
    

if minutes > 1440:
    print(-1)
else:
    print(minutes)
        