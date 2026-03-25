def max_end3(nums):
  a=nums[0]
  b=nums[-1]
  if a>b:
    nums[1]=a
    nums[2]=a
  else:
    nums[0]=b
    nums[1]=b
  return nums