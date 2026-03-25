def centered_average(nums):
    total_sum = sum(nums)
    result_sum = total_sum - min(nums) - max(nums)
    
    return result_sum // (len(nums) - 2)