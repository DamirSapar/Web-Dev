def first_two(str):
  s=len(str)
  if s>2:
    return str[:2]
  elif s>0:
    return str[:]
  else:
    return ""