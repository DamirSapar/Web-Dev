def combo_string(a, b):
  c=len(a)
  d=len(b)
  if c<d:
    return a+b+a
  else:
    return b+a+b