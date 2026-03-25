def count_hi(str):
  c=0
  s=""
  for i in str:
    if s=="" and i=='h':
      s+=i
    elif s=='h' and i=='i':
      s=""
      c+=1
  return c