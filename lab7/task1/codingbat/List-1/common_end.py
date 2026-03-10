def common_end(a, b):
  c=a[0]
  d=a[-1]
  e=b[0]
  f=b[-1]
  if c==e or d==f:
    return True
  else:
    return False