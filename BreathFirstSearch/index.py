from collections import deque

graph = {"you": ['alice', 'jane', 'josh'], "alice": ['john'], 'jane': ['monty'], 'josh': ['her'], 'her': [], 'john': [],
         'monty': []}


def person_is_seller(name):
    return name[-1] == 'm'


def breath_first_search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        print(f"visiting {person}")
        if not person in searched:
            if person_is_seller(person):
                print(f'{person} is a mango seller!')
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
                print(f"added {person} to search queue")
    return False


print(breath_first_search('you'))