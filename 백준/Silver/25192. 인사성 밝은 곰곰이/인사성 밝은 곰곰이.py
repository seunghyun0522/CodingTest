

n = int(input())
chatList = set()
count = 0
for i in range(n):
    chat = input()
    if chat != "ENTER":
        chatList.add(chat)
    else:
        count += len(chatList)
        chatList = set()

count += len(chatList)

print(count)

