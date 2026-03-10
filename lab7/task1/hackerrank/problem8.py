from collections import Counter

def word_count():
    n = int(input())
    words = []
    
    for _ in range(n):
        words.append(input().strip())
    
    counts = Counter(words)
    
    print(len(counts))
    
    print(*(counts.values()))

if __name__ == '__main__':
    word_count()