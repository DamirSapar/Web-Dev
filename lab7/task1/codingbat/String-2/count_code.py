def count_code(str):
  c=0
  s=""
  for i in str:
    if s=="" and i=='c':
      s+='c'
    elif s=="c" and i=='o':
      s+='o'
    elif s=="co":
      s+=i
    elif len(s)==3 and i=='e':
      s=""
      c+=1
  return c